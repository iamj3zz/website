require 'html-proofer'

desc 'Build the site'
task :build do
  puts "Building Jekyll site..."
  sh 'bundle exec jekyll build'
end

desc 'Test the built site with html-proofer'
task :test => :build do
  puts "Testing with html-proofer..."

  options = {
    # Check internal links and images
    :checks => ['Links', 'Images', 'Scripts'],

    # Allow hash hrefs (for anchor links)
    :allow_hash_href => true,

    # Ignore external links (faster, can be enabled if needed)
    :disable_external => true,

    # Ignore specific URLs if needed (add patterns here)
    :ignore_urls => [
      /localhost/,
      /127\.0\.0\.1/
    ],

    # Ignore empty alt tags (can be set to false for stricter accessibility)
    :ignore_missing_alt => true,

    # Allow missing href (for JavaScript-based navigation)
    :allow_missing_href => false,

    # Check for valid HTML
    :check_html => true,

    # Enforce HTTPS (can be disabled if needed)
    :enforce_https => false,

    # Swap URLs (useful for testing with different domains)
    :swap_urls => {
      %r{https://www\.j3zz\.com} => ''
    },

    # Log level
    :log_level => :info
  }

  begin
    HTMLProofer.check_directory("./_site", options).run
    puts "✓ All tests passed!"
  rescue => e
    puts "✗ Tests failed: #{e.message}"
    exit 1
  end
end

desc 'Test including external links (slower)'
task :test_external => :build do
  puts "Testing with html-proofer (including external links)..."

  options = {
    :checks => ['Links', 'Images', 'Scripts'],
    :allow_hash_href => true,
    :disable_external => false, # Check external links
    :ignore_urls => [
      /localhost/,
      /127\.0\.0\.1/
    ],
    :ignore_missing_alt => true,
    :check_html => true,
    :enforce_https => false,
    :swap_urls => {
      %r{https://www\.j3zz\.com} => ''
    },
    :log_level => :info,
    # Cache external links for 24 hours to speed up repeated runs
    :cache => {
      :timeframe => {
        :external => '24h'
      }
    }
  }

  begin
    HTMLProofer.check_directory("./_site", options).run
    puts "✓ All tests passed (including external links)!"
  rescue => e
    puts "✗ Tests failed: #{e.message}"
    exit 1
  end
end

desc 'Clean the _site directory'
task :clean do
  puts "Cleaning _site directory..."
  sh 'rm -rf _site'
end

# Default task
task :default => :test
