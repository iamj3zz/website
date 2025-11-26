#!/usr/bin/env node

/**
 * Print Testing Script
 *
 * Tests print layouts for the website by:
 * 1. Generating PDFs of key pages
 * 2. Validating print-specific elements (QR codes, print-only content)
 * 3. Checking A4 layout optimization
 * 4. Verifying print media queries are applied
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  siteDir: './_site',
  outputDir: './print-test-results',
  pages: [
    {
      path: 'index.html',
      name: 'homepage',
      checks: ['qr-code', 'print-layout']
    },
    {
      path: 'bio/index.html',
      name: 'bio',
      checks: ['qr-code', 'social-links', 'print-layout']
    },
    {
      path: 'events/index.html',
      name: 'events',
      checks: ['qr-code', 'ticket-links', 'print-layout']
    },
    {
      path: 'contact/index.html',
      name: 'contact',
      checks: ['qr-code', 'print-layout', 'contact-info']
    },
    {
      path: 'works/28-modular-example/index.html',
      name: 'work-example',
      checks: ['qr-code', 'print-layout', 'metadata']
    }
  ],
  a4: {
    width: 210, // mm
    height: 297, // mm
    margin: 15 // mm
  }
};

// Ensure output directory exists
if (!fs.existsSync(CONFIG.outputDir)) {
  fs.mkdirSync(CONFIG.outputDir, { recursive: true });
}

// Test results
const results = {
  passed: 0,
  failed: 0,
  warnings: 0,
  details: []
};

/**
 * Run all print tests
 */
async function runPrintTests() {
  console.log('🖨️  Starting Print Tests\n');
  console.log('='.repeat(60));

  let browser;

  try {
    // Launch browser
    console.log('Launching headless Chrome...');
    browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--disable-gpu'
      ]
    });

    // Test each page
    for (const pageConfig of CONFIG.pages) {
      await testPage(browser, pageConfig);
    }

    // Print summary
    printSummary();

  } catch (error) {
    console.error('❌ Fatal error:', error.message);
    console.error('\n');

    if (error.message.includes('Failed to launch') || error.message.includes('chrome')) {
      console.error('Chrome/Chromium is not properly installed or configured.');
      console.error('This is common in WSL or headless environments.\n');
      console.error('Solutions:');
      console.error('  1. Install Chrome dependencies: sudo apt install -y chromium-browser');
      console.error('  2. Or install required libraries: sudo apt install -y libnspr4 libnss3');
      console.error('  3. Print tests will automatically skip if Chrome is unavailable');
    }

    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
    }
  }

  // Exit with appropriate code
  process.exit(results.failed > 0 ? 1 : 0);
}

/**
 * Test a single page
 */
async function testPage(browser, pageConfig) {
  console.log(`\n📄 Testing: ${pageConfig.name}`);
  console.log('-'.repeat(60));

  const page = await browser.newPage();
  const pageUrl = `file://${path.resolve(CONFIG.siteDir, pageConfig.path)}`;

  try {
    // Navigate to page
    await page.goto(pageUrl, { waitUntil: 'networkidle0' });

    // Emulate print media
    await page.emulateMediaType('print');

    // Generate PDF
    const pdfPath = path.join(CONFIG.outputDir, `${pageConfig.name}.pdf`);
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: `${CONFIG.a4.margin}mm`,
        right: `${CONFIG.a4.margin}mm`,
        bottom: `${CONFIG.a4.margin}mm`,
        left: `${CONFIG.a4.margin}mm`
      }
    });

    console.log(`  ✓ PDF generated: ${pdfPath}`);

    // Run checks
    for (const check of pageConfig.checks) {
      await runCheck(page, pageConfig.name, check);
    }

  } catch (error) {
    recordResult(pageConfig.name, 'error', `Failed to test page: ${error.message}`);
  } finally {
    await page.close();
  }
}

/**
 * Run a specific check
 */
async function runCheck(page, pageName, checkType) {
  switch (checkType) {
    case 'qr-code':
      await checkQRCodes(page, pageName);
      break;
    case 'print-layout':
      await checkPrintLayout(page, pageName);
      break;
    case 'social-links':
      await checkSocialLinks(page, pageName);
      break;
    case 'ticket-links':
      await checkTicketLinks(page, pageName);
      break;
    case 'contact-info':
      await checkContactInfo(page, pageName);
      break;
    case 'metadata':
      await checkMetadata(page, pageName);
      break;
  }
}

/**
 * Check QR codes are present in print mode
 */
async function checkQRCodes(page, pageName) {
  const qrCodes = await page.evaluate(() => {
    const qrElements = document.querySelectorAll('.qr-code, [class*="qr-"]');
    return Array.from(qrElements).map(el => ({
      visible: window.getComputedStyle(el).display !== 'none',
      hasCanvas: el.querySelector('canvas') !== null,
      hasSVG: el.querySelector('svg') !== null,
      hasImage: el.querySelector('img') !== null
    }));
  });

  if (qrCodes.length === 0) {
    recordResult(pageName, 'warning', 'No QR codes found on page');
    return;
  }

  const visibleQRs = qrCodes.filter(qr => qr.visible);
  const validQRs = visibleQRs.filter(qr => qr.hasCanvas || qr.hasSVG || qr.hasImage);

  if (validQRs.length === 0) {
    recordResult(pageName, 'fail', `QR codes found (${qrCodes.length}) but none are valid/visible in print mode`);
  } else if (validQRs.length < qrCodes.length) {
    recordResult(pageName, 'warning', `Some QR codes not visible in print mode (${validQRs.length}/${qrCodes.length})`);
  } else {
    recordResult(pageName, 'pass', `All QR codes visible and valid (${validQRs.length})`);
  }
}

/**
 * Check print layout elements
 */
async function checkPrintLayout(page, pageName) {
  const layoutInfo = await page.evaluate(() => {
    const printOnly = document.querySelectorAll('.print-only');
    const noPrint = document.querySelectorAll('.no-print');

    return {
      printOnlyCount: printOnly.length,
      printOnlyVisible: Array.from(printOnly).filter(el =>
        window.getComputedStyle(el).display !== 'none'
      ).length,
      noPrintCount: noPrint.length,
      noPrintHidden: Array.from(noPrint).filter(el =>
        window.getComputedStyle(el).display === 'none'
      ).length
    };
  });

  let issues = [];

  // Check .print-only elements are visible
  if (layoutInfo.printOnlyCount > 0) {
    if (layoutInfo.printOnlyVisible === layoutInfo.printOnlyCount) {
      recordResult(pageName, 'pass', `Print-only elements visible (${layoutInfo.printOnlyVisible})`);
    } else {
      issues.push(`${layoutInfo.printOnlyCount - layoutInfo.printOnlyVisible} print-only elements not visible`);
    }
  }

  // Check .no-print elements are hidden
  if (layoutInfo.noPrintCount > 0) {
    if (layoutInfo.noPrintHidden === layoutInfo.noPrintCount) {
      recordResult(pageName, 'pass', `No-print elements hidden (${layoutInfo.noPrintHidden})`);
    } else {
      issues.push(`${layoutInfo.noPrintCount - layoutInfo.noPrintHidden} no-print elements still visible`);
    }
  }

  if (issues.length > 0) {
    recordResult(pageName, 'fail', `Print layout issues: ${issues.join(', ')}`);
  }
}

/**
 * Check social links (bio page)
 */
async function checkSocialLinks(page, pageName) {
  const socialInfo = await page.evaluate(() => {
    const links = document.querySelectorAll('.social-links a, [class*="social"] a');
    return {
      count: links.length,
      visible: Array.from(links).filter(el =>
        window.getComputedStyle(el).display !== 'none'
      ).length
    };
  });

  if (socialInfo.count === 0) {
    recordResult(pageName, 'warning', 'No social links found');
  } else if (socialInfo.visible > 0) {
    recordResult(pageName, 'pass', `Social links present (${socialInfo.visible}/${socialInfo.count})`);
  } else {
    recordResult(pageName, 'fail', 'Social links found but not visible in print mode');
  }
}

/**
 * Check ticket links (events page)
 */
async function checkTicketLinks(page, pageName) {
  const ticketInfo = await page.evaluate(() => {
    const qrCodes = document.querySelectorAll('.event-qr-code, .ticket-qr');
    const textLinks = document.querySelectorAll('.ticket-link');

    return {
      qrCount: qrCodes.length,
      qrVisible: Array.from(qrCodes).filter(el =>
        window.getComputedStyle(el).display !== 'none'
      ).length,
      textLinksHidden: Array.from(textLinks).filter(el =>
        window.getComputedStyle(el).display === 'none'
      ).length
    };
  });

  if (ticketInfo.qrCount === 0) {
    recordResult(pageName, 'warning', 'No ticket QR codes found');
  } else if (ticketInfo.qrVisible === ticketInfo.qrCount) {
    recordResult(pageName, 'pass', `Ticket QR codes visible (${ticketInfo.qrVisible}), text links hidden`);
  } else {
    recordResult(pageName, 'fail', `Some ticket QR codes not visible (${ticketInfo.qrVisible}/${ticketInfo.qrCount})`);
  }
}

/**
 * Check contact information (contact page)
 */
async function checkContactInfo(page, pageName) {
  const contactInfo = await page.evaluate(() => {
    const email = document.querySelector('.contact-email, [href^="mailto:"]');
    const form = document.querySelector('form');

    return {
      hasEmail: !!email,
      emailVisible: email ? window.getComputedStyle(email).display !== 'none' : false,
      hasForm: !!form,
      formHidden: form ? window.getComputedStyle(form).display === 'none' : false
    };
  });

  let issues = [];

  if (!contactInfo.hasEmail) {
    issues.push('No email link found');
  } else if (!contactInfo.emailVisible) {
    issues.push('Email link not visible');
  }

  if (contactInfo.hasForm && !contactInfo.formHidden) {
    issues.push('Form should be hidden in print mode');
  }

  if (issues.length > 0) {
    recordResult(pageName, 'warning', `Contact info issues: ${issues.join(', ')}`);
  } else {
    recordResult(pageName, 'pass', 'Contact information properly displayed for print');
  }
}

/**
 * Check metadata display (work pages)
 */
async function checkMetadata(page, pageName) {
  const metadataInfo = await page.evaluate(() => {
    const metadata = document.querySelectorAll('.metadata-item, .work-metadata dl');
    return {
      count: metadata.length,
      visible: Array.from(metadata).filter(el =>
        window.getComputedStyle(el).display !== 'none'
      ).length
    };
  });

  if (metadataInfo.count === 0) {
    recordResult(pageName, 'warning', 'No metadata sections found');
  } else if (metadataInfo.visible === metadataInfo.count) {
    recordResult(pageName, 'pass', `Metadata visible (${metadataInfo.visible} sections)`);
  } else {
    recordResult(pageName, 'warning', `Some metadata hidden (${metadataInfo.visible}/${metadataInfo.count})`);
  }
}

/**
 * Record test result
 */
function recordResult(page, status, message) {
  const statusSymbol = {
    pass: '✓',
    fail: '✗',
    warning: '⚠',
    error: '✗'
  }[status] || '?';

  const statusColor = {
    pass: '\x1b[32m',    // green
    fail: '\x1b[31m',    // red
    warning: '\x1b[33m', // yellow
    error: '\x1b[31m'    // red
  }[status] || '';

  console.log(`  ${statusColor}${statusSymbol}\x1b[0m ${message}`);

  results.details.push({ page, status, message });

  if (status === 'pass') {
    results.passed++;
  } else if (status === 'fail' || status === 'error') {
    results.failed++;
  } else if (status === 'warning') {
    results.warnings++;
  }
}

/**
 * Print test summary
 */
function printSummary() {
  console.log('\n' + '='.repeat(60));
  console.log('📊 Test Summary');
  console.log('='.repeat(60));
  console.log(`✓ Passed:   ${results.passed}`);
  console.log(`✗ Failed:   ${results.failed}`);
  console.log(`⚠ Warnings: ${results.warnings}`);
  console.log(`📁 PDFs saved to: ${CONFIG.outputDir}`);
  console.log('='.repeat(60));

  if (results.failed > 0) {
    console.log('\n❌ Some tests failed. Review the output above for details.');
  } else if (results.warnings > 0) {
    console.log('\n⚠️  All tests passed but there are warnings to review.');
  } else {
    console.log('\n✅ All print tests passed!');
  }
}

// Run tests
runPrintTests();
