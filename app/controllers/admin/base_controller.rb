module Admin
  class BaseController < ApplicationController
    layout 'admin'

    before_action :authenticate_user!

    before_action :verify_user_privileges!, if: :user_signed_in?

    private

    def verify_user_privileges!
      return if current_user.admin?

      redirect_to root_path, alert: 'You are not an admin'
    end
  end
end
