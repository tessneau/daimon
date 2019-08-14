class AuthController < ApplicationController
  # skip_before_action :authorized, only: :create

  def create
    user = User.find_by(username: params[:username])
    is_authenticated = user.authenticate(params[:password]) if user

    if is_authenticated
      render json: { user: UserSerializer.new(user), jwt: encode_token(user) }, status: :accepted
    else
      render json: { error: " r u real " }, status: :unprocessable_entity
    end
  end

end
