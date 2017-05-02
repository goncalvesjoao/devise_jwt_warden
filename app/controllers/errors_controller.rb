class ErrorsController < ApplicationController
  layout 'errors'

  def not_found
    return unless request.env['REQUEST_PATH'] =~ /^\/api/

    render \
      json: {
        data: nil,
        code: 501,
        status: 'not_implemented',
        message:  'The route you tried to access is not implemented'
      },
      status: :not_implemented
  end

  def internal_server_error
    return unless request.env['REQUEST_PATH'] =~ /^\/api/

    render \
      json: {
        data: nil,
        code: 500,
        status: 'internal_server_error',
        message:  'Upss! Something went wrong.'
      },
      status: :internal_server_error
  end

  def unprocessable_entity; end
end
