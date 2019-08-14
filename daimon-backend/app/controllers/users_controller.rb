class UsersController < ApplicationController
  # skip_before_action :authorized, only: :create

  def index
    users = User.all
    render json: users
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  def create
    user = User.create(user_params)
    if user.valid?
      render json: {user: user, jwt: encode_token(user)}, status: :accepted
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def profile
    # byebug
    render json: {user: UserSerializer.new(super_current_user)}
  end

  def delete
    #fill in
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :avatar_img)
  end

end
