#!/usr/bin/env ruby
# frozen_string_literal: true

require 'yaml'
require 'fileutils'
require 'json'
require 'time'

# Read Jekyll config
config = YAML.load_file('_config.yml')
site_url = config['url']

sitemap_xml = %{<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
}

def parse_front_matter(content)
  if content.start_with?('---')
    parts = content.split('---', 3)
    YAML.safe_load(parts[1]) || {}
  else
    {}
  end
end

def get_modification_time(file_path)
  # Try git first
  begin
    output = `git log -1 --format=%ai #{file_path} 2>/dev/null`.strip
    Time.parse(output) if output.length > 0
  rescue
    nil
  end || File.mtime(file_path)
end

def build_url_entry(site_url, file_path, url, front_matter)
  entry = "  <url>\n"
  entry += "    <loc>#{site_url}#{url}</loc>\n"

  mtime = get_modification_time(file_path)
  entry += "    <lastmod>#{mtime.xmlschema}</lastmod>\n" if mtime

  if front_matter['lang_alternate']
    page_lang = front_matter['lang'] || 'en'
    alt_lang = page_lang == 'fr' ? 'en' : 'fr'
    entry += "    <xhtml:link rel=\"alternate\" hreflang=\"#{page_lang}\" href=\"#{site_url}#{url}\"/>\n"
    entry += "    <xhtml:link rel=\"alternate\" hreflang=\"#{alt_lang}\" href=\"#{site_url}#{front_matter['lang_alternate']}\"/>\n"
    entry += "    <xhtml:link rel=\"alternate\" hreflang=\"x-default\" href=\"#{site_url}/\"/>\n"
  end

  entry += "  </url>\n"
  entry
end

# Pages
Dir.glob('_pages/*.markdown').each do |file|
  content = File.read(file)
  front_matter = parse_front_matter(content)
  next if front_matter['sitemap'] == false || front_matter['published'] == false

  url = front_matter['permalink'] || "/#{File.basename(file, '.markdown')}/"
  sitemap_xml += build_url_entry(site_url, file, url, front_matter)
end

# Portfolio
Dir.glob('_portfolio/*.md').each do |file|
  content = File.read(file)
  front_matter = parse_front_matter(content)
  next if front_matter['published'] == false

  basename = File.basename(file, '.md')
  url = "/works/#{basename}/"
  sitemap_xml += build_url_entry(site_url, file, url, front_matter)
end

# Artworks
Dir.glob('_artworks/*.md').each do |file|
  content = File.read(file)
  front_matter = parse_front_matter(content)
  next if front_matter['published'] == false

  basename = File.basename(file, '.md')
  url = "/gallery/#{basename}/"
  sitemap_xml += build_url_entry(site_url, file, url, front_matter)
end

sitemap_xml += %{</urlset>
}

# Write to _site/sitemap.xml
dest_dir = '_site'
FileUtils.mkdir_p(dest_dir) unless Dir.exist?(dest_dir)
dest_file = File.join(dest_dir, 'sitemap.xml')
File.write(dest_file, sitemap_xml)

puts "✓ Generated #{dest_file} (#{sitemap_xml.bytesize} bytes)"
