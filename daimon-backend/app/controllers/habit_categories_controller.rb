class HabitCategoriesController < ApplicationController

  def index
    habit_categories = HabitCategory.all
    render json: habit_categories
  end

  def create
    habit_category = HabitCategory.create(habit_category_params)
    if habit_category.valid?
      render json: habit_category
    else
      render json: { errors: habit_category.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    habit_category = HabitCategory.find(params[:id])
    render json: habit_category
  end


  private

  def habit_category_params
    params.require(:habit_category).permit(:habit_id, :category_id)
  end

end
