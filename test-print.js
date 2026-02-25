#!/usr/bin/env node

/**
 * Print Testing Script
 *
 * Tests print layouts for the website by:
 * 1. Starting HTTP server to serve _site/ (JS must run properly, not under file://)
 * 2. Waiting for QR code generation via deferred scripts
 * 3. Emulating print media
 * 4. Generating PDFs with real CSS print styles
 * 5. Validating page-specific print CSS rules from _sass/_print.scss
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const http = require('http');

// Configuration
const CONFIG = {
  siteDir: './_site',
  outputDir: './print-test-results',
  serverPort: 4321,
  baseUrl: 'http://localhost:4321',
  pages: [
    {
      path: 'index.html',
      name: 'homepage',
      checks: ['qr-code', 'print-layout']
    },
    {
      path: 'bio/index.html',
      name: 'bio',
      checks: ['qr-code', 'print-layout']
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
      path: 'works/1900-01-01-modular-example/index.html',
      name: 'work-example',
      checks: ['qr-code', 'print-layout']
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
 * MIME type map for HTTP server
 */
const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

/**
 * Start HTTP server for _site/
 */
function startServer(siteDir, port) {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      // Parse URL and handle trailing slash
      let filePath = path.join(siteDir, req.url === '/' ? 'index.html' : req.url);

      // If path has no extension, treat as directory and add index.html
      if (!path.extname(filePath)) {
        filePath = path.join(filePath, 'index.html');
      }

      // Read and serve file
      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(404);
          res.end('Not found');
          return;
        }

        const ext = path.extname(filePath).toLowerCase();
        const mimeType = MIME_TYPES[ext] || 'application/octet-stream';
        res.writeHead(200, { 'Content-Type': mimeType });
        res.end(data);
      });
    });

    server.listen(port, '127.0.0.1', () => {
      resolve(server);
    });

    server.on('error', reject);
  });
}

/**
 * Run all print tests
 */
async function runPrintTests() {
  console.log('🖨️  Starting Print Tests\n');
  console.log('='.repeat(60));

  let browser;
  let server;

  try {
    // Start HTTP server
    console.log('Starting HTTP server at http://localhost:4321...');
    server = await startServer(CONFIG.siteDir, CONFIG.serverPort);
    console.log('✓ HTTP server started\n');

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
    if (server) {
      server.close();
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
  // Use HTTP so deferred JS scripts (QR generators) run properly
  const pageUrl = `${CONFIG.baseUrl}/${pageConfig.path}`;

  try {
    // Navigate to page, wait for network to settle so deferred scripts run
    await page.goto(pageUrl, { waitUntil: 'networkidle0' });

    // Wait up to 5s for QR canvases to be generated by deferred JS scripts
    try {
      await page.waitForFunction(() => document.querySelector('canvas') !== null, { timeout: 5000 });
    } catch (e) {
      // No QR canvases on this page — that's fine
    }

    // Emulate print media AFTER JS has run
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
    case 'ticket-links':
      await checkTicketLinks(page, pageName);
      break;
    case 'contact-info':
      await checkContactInfo(page, pageName);
      break;
  }
}

/**
 * Check QR codes are present in print mode.
 * Uses actual class names from _print.scss / QR generation scripts.
 */
async function checkQRCodes(page, pageName) {
  const qrCodes = await page.evaluate(() => {
    // Exact class names used in _print.scss and QR generation scripts
    const qrElements = document.querySelectorAll(
      '.page-title-qr-code, .works-qr-code, .bio-link-qr, ' +
      '.event-ticket-qr, .social-print-qr, .gallery-image-qr'
    );
    return Array.from(qrElements).map(el => ({
      className: el.className,
      visible: window.getComputedStyle(el).display !== 'none',
      hasCanvas: el.querySelector('canvas') !== null,
      hasSVG: el.querySelector('svg') !== null,
      hasImage: el.querySelector('img') !== null
    }));
  });

  if (qrCodes.length === 0) {
    recordResult(pageName, 'warning', 'No QR code containers found on page');
    return;
  }

  const visibleQRs = qrCodes.filter(qr => qr.visible);
  const validQRs = visibleQRs.filter(qr => qr.hasCanvas || qr.hasSVG || qr.hasImage);

  if (validQRs.length === 0) {
    recordResult(pageName, 'fail', `QR containers found (${qrCodes.length}) but none rendered a QR image/canvas in print mode`);
  } else if (validQRs.length < qrCodes.length) {
    recordResult(pageName, 'warning', `Some QR codes not rendered (${validQRs.length}/${qrCodes.length})`);
  } else {
    recordResult(pageName, 'pass', `All QR codes rendered and visible (${validQRs.length})`);
  }
}

/**
 * Check print layout — tests page-specific CSS rules from _print.scss.
 *
 * All pages:   .main-nav, .site-footer hidden
 * homepage:    .portfolio-grid hidden, .works-list-print visible
 * events:      .events-table-row present, .event-venue-address visible
 * bio:         .bio-links visible as grid
 * contact:     .contact-social-print-list visible, .contact-social-icons hidden
 * work-example: .work-detail present
 */
async function checkPrintLayout(page, pageName) {
  const layoutInfo = await page.evaluate((name) => {
    const isHidden = el => el && window.getComputedStyle(el).display === 'none';
    const isVisible = el => el && window.getComputedStyle(el).display !== 'none';

    const info = {
      // All pages: nav and footer should be hidden in print
      navHidden: isHidden(document.querySelector('.main-nav')),
      footerHidden: isHidden(document.querySelector('.site-footer'))
    };

    if (name === 'homepage') {
      info.portfolioGridHidden = isHidden(document.querySelector('.portfolio-grid'));
      info.filterContainerHidden = isHidden(document.querySelector('.filter-container'));
      const worksListPrint = document.querySelector('.works-list-print');
      info.worksListPrintPresent = !!worksListPrint;
      info.worksListPrintVisible = isVisible(worksListPrint);
    }

    if (name === 'events') {
      const tableRows = document.querySelectorAll('.events-table-row');
      info.tableRowCount = tableRows.length;
      // .events-table-row must have display: grid in print
      info.firstRowIsGrid = tableRows.length > 0 &&
        window.getComputedStyle(tableRows[0]).display === 'grid';
      const venueAddr = document.querySelector('.event-venue-address');
      info.venueAddressPresent = !!venueAddr;
      // event-desc-short and event-desc-toggle should be hidden
      const descShort = document.querySelector('.event-desc-short');
      const descToggle = document.querySelector('.event-desc-toggle');
      info.descShortHidden = isHidden(descShort);
      info.descToggleHidden = isHidden(descToggle);
    }

    if (name === 'bio') {
      const bioLinks = document.querySelector('.bio-links');
      info.bioLinksPresent = !!bioLinks;
      info.bioLinksVisible = isVisible(bioLinks);
      // .bio-links should be grid in print
      info.bioLinksIsGrid = bioLinks ?
        window.getComputedStyle(bioLinks).display === 'grid' : false;
    }

    if (name === 'contact') {
      const socialPrintList = document.querySelector('.contact-social-print-list');
      const socialIcons = document.querySelector('.contact-social-icons');
      info.socialPrintListPresent = !!socialPrintList;
      info.socialPrintListVisible = isVisible(socialPrintList);
      info.socialIconsHidden = isHidden(socialIcons);
      const newsletterForm = document.querySelector('.contact-newsletter-form');
      info.newsletterFormHidden = isHidden(newsletterForm);
    }

    if (name === 'work-example') {
      const workDetail = document.querySelector('.work-detail');
      info.workDetailPresent = !!workDetail;
      info.workDetailVisible = isVisible(workDetail);
    }

    return info;
  }, pageName);

  const issues = [];

  // All pages: nav + footer hidden
  if (!layoutInfo.navHidden) {
    issues.push('.main-nav should be hidden in print');
  }
  if (!layoutInfo.footerHidden) {
    issues.push('.site-footer should be hidden in print');
  }

  // Homepage checks
  if (pageName === 'homepage') {
    if (!layoutInfo.portfolioGridHidden) {
      issues.push('.portfolio-grid should be hidden in print');
    }
    if (!layoutInfo.filterContainerHidden) {
      issues.push('.filter-container should be hidden in print');
    }
    if (!layoutInfo.worksListPrintPresent) {
      issues.push('.works-list-print not found on page');
    } else if (!layoutInfo.worksListPrintVisible) {
      issues.push('.works-list-print should be visible in print');
    }
  }

  // Events checks
  if (pageName === 'events') {
    if (layoutInfo.tableRowCount === 0) {
      issues.push('.events-table-row not found on page');
    } else if (!layoutInfo.firstRowIsGrid) {
      issues.push('.events-table-row should have display:grid in print');
    }
    if (layoutInfo.venueAddressPresent !== undefined && !layoutInfo.venueAddressPresent) {
      issues.push('.event-venue-address not found on page');
    }
    if (layoutInfo.descShortHidden === false) {
      issues.push('.event-desc-short should be hidden in print');
    }
    if (layoutInfo.descToggleHidden === false) {
      issues.push('.event-desc-toggle should be hidden in print');
    }
  }

  // Bio checks
  if (pageName === 'bio') {
    if (!layoutInfo.bioLinksPresent) {
      issues.push('.bio-links not found on page');
    } else if (!layoutInfo.bioLinksIsGrid) {
      issues.push('.bio-links should have display:grid in print');
    }
  }

  // Contact checks
  if (pageName === 'contact') {
    if (!layoutInfo.socialPrintListPresent) {
      issues.push('.contact-social-print-list not found on page');
    } else if (!layoutInfo.socialPrintListVisible) {
      issues.push('.contact-social-print-list should be visible in print');
    }
    if (!layoutInfo.socialIconsHidden) {
      issues.push('.contact-social-icons should be hidden in print');
    }
    if (!layoutInfo.newsletterFormHidden) {
      issues.push('.contact-newsletter-form should be hidden in print');
    }
  }

  // Work page checks
  if (pageName === 'work-example') {
    if (!layoutInfo.workDetailPresent) {
      issues.push('.work-detail not found on page');
    } else if (!layoutInfo.workDetailVisible) {
      issues.push('.work-detail should be visible in print');
    }
  }

  if (issues.length > 0) {
    recordResult(pageName, 'fail', `Print layout issues: ${issues.join('; ')}`);
  } else {
    recordResult(pageName, 'pass', 'Print layout CSS rules applied correctly');
  }
}

/**
 * Check ticket links (events page)
 */
async function checkTicketLinks(page, pageName) {
  const ticketInfo = await page.evaluate(() => {
    const qrCodes = document.querySelectorAll('.event-ticket-qr');
    const textLinks = document.querySelectorAll('.event-ticket-link');

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
    const formWrapper = document.querySelector('.contact-newsletter-form');

    return {
      hasEmail: !!email,
      emailVisible: email ? window.getComputedStyle(email).display !== 'none' : false,
      hasForm: !!formWrapper,
      formHidden: formWrapper ? window.getComputedStyle(formWrapper).display === 'none' : false
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
