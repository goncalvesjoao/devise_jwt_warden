module ApplicationHelper
  def context_params
    freed_params = params.permit!.to_h

    { q: freed_params[:q] }
  end

  def li_link(caption, url, options = {})
    active_link = _active_link(url, options)

    content_tag(:li, _li_options(options, active_link)) do
      link_to(url, _link_options(options, active_link)) do
        concat caption
        concat content_tag(:span, '(current)', class: 'sr-only') if active_link
      end
    end
  end

  def offcanvas_toggle_button(caption)
    content_tag(:button, class: 'btn btn-warning', data: { toggle: 'offcanvas' }) do
      concat caption
      concat fa_icon('angle-double-right', text: '', class: 'ml-1', data: { id: 'right_arrow' })
      concat fa_icon('angle-double-left', text: '', class: 'ml-1 d-none', data: { id: 'left_arrow' })
    end
  end

  protected

  def _active_link(url, options)
    if options[:action].blank?
      return options[:controller] == controller_name
    end

    options[:controller] == controller_name && options[:action] == action_name
  end

  def _li_options(full_options, active_link)
    {
      class: "nav-item #{active_link ? 'active' : ''}"
    }.merge(full_options[:li_options] || {})
  end

  def _link_options(full_options, _active_link)
    full_options.merge({
      class: "nav-link #{full_options[:class]}"
    })
  end
end
