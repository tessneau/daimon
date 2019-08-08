module Api
  module V1
    class UsersController < ApplicationController

      def index
        users = User.all
        render json: users.to_json
      end

      def create
        user = User.create(user_params)
        if user.valid?
          render json: user.to_json
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
      end

      # def profile
      #   render json: super_current_user.to_json
      # end

      def delete
        #fill in
      end

      private

      def user_params
        params.require(:user).permit(:username, :password, :avatar_img)
      end

    end
  end
end
