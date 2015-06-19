###
# Directories
###

set :css_dir, 'assets/css'
set :js_dir, 'assets/js'
set :images_dir, 'assets/img'
set :fonts_dir, 'assets/fonts'
set :relative_links, true



###
# Development-specific configuration
###

configure :development do
  # Compass
  compass_config do |config|
    config.sass_options = { :debug => true, :debug_info => true, :line_comments => true }
  end
end



###
# Build-specific configuration
###

configure :build do
  # Compass
  compass_config do |config|
    config.output_style = :compressed
    config.sass_options = { :debug => false, :debug_info => false, :line_comments => false }
  end

  activate :minify_javascript
  activate :relative_assets

  ignore '/helpers/*'
  ignore '/*.md'

  # You can auto ignore files using the prefix "_".
  ignore '/assets/js/ui/*'
  ignore '/assets/css/lib/*'
  ignore '/assets/css/ui/*'
end



###
# Helpers
###

require 'source/helpers/application_helper'
helpers ApplicationHelper