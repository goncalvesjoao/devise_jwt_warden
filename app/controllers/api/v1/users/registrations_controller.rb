module Api
  module V1
    module Users
      class RegistrationsController < Devise::RegistrationsController
        respond_to :json

        protected

        def respond_with(*)
          status = @user.errors.empty? ? :ok : :unprocessable_entity

          render action_name, status: status
        end
      end

    end
  end
end
