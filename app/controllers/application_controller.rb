class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session,
                       unless: -> { request.env['REQUEST_PATH'] =~ /^\/api/ }
end
