# encoding: utf-8

module ApplicationHelper

  # =============================================
  # analytics_code
  # Print the stardard Google Analytics code.
  # Manu Morante @unavezfui
  # Last update: 06/08/2013
  # Example: <%= analytics_code 'UA-XXXXXXXX-X' %>
  # =============================================
  def analytics_code code, domain
    out = "<!-- Google Analytics -->
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', '#{code}', '#{domain}');
  ga('send', 'pageview');

</script>
<!-- End Google Analytics -->"
    out.html_safe
  end

  # =============================================
  # google_font
  # Print the script to import a Google Font
  # Manu Morante @unavezfui
  # Last update: 17/10/2014
  # =============================================
  def google_font(families, type='')

    case type

      # JS
      when 'js'
        out = "<script>WebFontConfig = {google: { families: [ '#{families}' ] }};
          (function () {
            var wf = document.createElement('script');
            wf.src = ('https:' == document.location.protocol ? 'https' : 'http')
            + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
            wf.type = 'text/javascript';
            wf.async = 'true';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(wf, s);
          })();
        </script>"

      # CSS
      else
        out = "<link href='//fonts.googleapis.com/css?family=#{families}' rel='stylesheet' type='text/css'>"

    end

    out.html_safe
  end


end