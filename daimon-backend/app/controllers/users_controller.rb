class UsersController < ApplicationController

  def index
    users = User.all
    render json: users
  end

  def create
    user = User.create(user_params)
    if user.valid?
      render json: user
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def profile
    # render json: User.first
    render json: super_current_user.to_json
  end

  def delete
    #fill in
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :avatar_img)
  end

end
