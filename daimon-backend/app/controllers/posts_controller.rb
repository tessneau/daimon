class PostsController < ApplicationController
  # skip_before_action :authorized, only: [:index, :show]
  before_action :find_post, only: [:show, :branch, :pin]

  def index
    category = Category.find(params[:category_id])
    posts = category.posts
    render json: posts
  end

  def show
    post = Post.first
    render json: post
  end

  def branch
    branch = Branch.new(user: super_current_user, post: @post)
    # if vote.save
    #   render json: @problem, include: "**"
    # else
    #   down_vote = DownVote.find_by(user: current_user, problem: @problem)
    #   down_vote.destroy if down_vote
    #   vote = UpVote.new(user: current_user, problem: @problem)
    #   if vote.save
    #     render json: @problem, include: "**"
    #   else
    #     render json: { errors: vote.errors.full_messages }, stats: :unauthorized
    #   end
    # end
  end

  def pin
    new_pin = Pin.new(user: super_current_user, post: @post)
    if new_pin.save
      render json: @post, include: "**"
    else
     render json: { errors: pin.errors.full_messages }, stats: :unauthorized
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
