class HabitsController < ApplicationController

  def index
    habits = Habit.all
    render json: habits
  end

  def create
    habit = Habit.create(habit_params)
    if habit.valid?
      render json: habit
    else
      render json: { errors: habit.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    habit = Habit.find(params[:id])
    render json: habit
  end


  private

  def habit_params
    params.require(:habit).permit(:name, :positive, :maxFrequency, :firstDay)
  end

end
