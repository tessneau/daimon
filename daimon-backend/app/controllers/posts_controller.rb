class PostsController < ApplicationController
  # skip_before_action :authorized, only: [:index, :show]
  before_action :find_post, only: [:show, :branch, :pin]

  def index
    posts = Post.all
    render json: posts
  end

  def show
    render json: @post
  end

  def category_posts
    category = Category.find(params[:category_id])
    posts = category.posts
    render json: posts
  end

  def pinned_posts_index
    posts = super_current_user.pinned_posts
    render json: posts
  end

  def branch
    branch = Branch.new(user: super_current_user, post: @post)
    if branch.save
      render json: @post
    else
      branch = Branch.find_by(user: super_current_user, post: @post)
      if branch
        branch.destroy
        render json: @post
      else
        render json: { errors: branch.errors.full_messages }, stats: :unauthorized
      end
    end
  end

  def pin
    new_pin = Pin.new(user: super_current_user, post: @post)
    if new_pin.save
      render json: @post
    else
      pin = Pin.find_by(user: super_current_user, post: @post)
      if pin
        pin.destroy
      else
        render json: { errors: pin.errors.full_messages }, stats: :unauthorized
      end
    end
  end

  private

  def post_params
    params.permit(:title, :content)
  end

  def find_post
    @post = Post.find(params[:id])
  end

end
