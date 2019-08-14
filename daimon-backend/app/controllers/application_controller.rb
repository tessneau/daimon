class ApplicationController < ActionController::API
  # before_action :authorized

  def encode_token(user)
    JWT.encode(user_payload(user), secret, 'HS256')
  end

  def user_payload(user)
    { user_id: user.id }
  end

  def secret
    Rails.application.credentials.jwt_secret
  end

  def token
    request.headers["Authorization"]
  end

  def decoded_token
    begin
    JWT.decode(token, secret, true, { algorithm: 'HS256' })
    rescue JWT::DecodeError
      nil
    end
  end

  def super_current_user
    user_id = decoded_token[0]["user_id"]
    User.find(user_id)
  end

  def logged_in?
    !!super_current_user
  end

  def authorized
    render json: { message: "Please log in" }, status: :unauthorized unless logged_in?
  end

end
