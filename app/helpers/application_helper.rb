module ApplicationHelper
  def markdown(text)
    renderer = Pygmentizer
    options = {
      filter_html: false,
      hard_wrap: true,
      autolink: true,
      no_intra_emphasis: true,
      fenced_code_blocks: true,
      lax_html_blocks: true,
      strikethrough: true,
      superscript: true,
      tables: true
    }
    Redcarpet::Markdown.new(renderer, options).render(text).html_safe
  end
end
