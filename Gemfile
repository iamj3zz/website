source "https://rubygems.org"
# Deploy runs `bundle exec jekyll build` in a custom GitHub Actions workflow
# (.github/workflows/jekyll.yml), not GitHub's native Pages builder, so this
# site is not bound to the `github-pages` gem's legacy Jekyll 3.x pin — it
# also drags in ~40 unused theme/metadata gems. Pin Jekyll directly instead.
gem "jekyll", "~> 4.4"

# If you have any plugins, put them here!
# (kept in sync with the `plugins:` list in _config.yml)
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-last-modified-at"
  gem "jekyll-seo-tag"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

# Testing
group :test do
  gem "html-proofer", "~> 5.0"
  gem "rake"
end
