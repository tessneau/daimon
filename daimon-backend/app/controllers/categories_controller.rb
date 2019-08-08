class CategoriesController < ApplicationController

  def index
    categories = Category.all
    render json: categories
  end

  def create
    category = Category.create(category_params)
    if category.valid?
      render json: category
    else
      render json: { errors: category.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    category = Category.find(params[:id])
    render json: category
  end


  private

  def category_params
    params.require(:category).permit(:name, :description)
  end

end
