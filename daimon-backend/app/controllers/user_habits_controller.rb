class UserHabitsController < ApplicationController

  def index
    user_habits = UserHabit.all
    render json: user_habits
  end

  def show
    user_habit = UserHabit.find(params[:id])
    render json: user_habit
  end

  def destroy
    user_habit = UserHabit.find(params[:id])
    if user_habit && user_habit.user_id === super_current_user.id
      user_habit.destroy
    else
      render json: { message: "can't find that habit" }, status: :unauthorized
    end
  end

  def progress
    user_habit = UserHabit.find(params[:id])
    habit = user_habit.habit
    if user_habit && user_habit.user === super_current_user
      if user_habit.progress_count < habit.maxFrequency
        user_habit.update(progress_count: user_habit.progress_count+1)
        render json: user_habit
      elsif user_habit.progress_count === habit.maxFrequency
        render json: { message: "habit progress maxed out" }, status: :unauthorized
      else
        render json: { message: "progress error" }, status: :unauthorized
      end
    else
      render json: { message: "can't find that userhabit" }, status: :unauthorized
    end
  end

end
