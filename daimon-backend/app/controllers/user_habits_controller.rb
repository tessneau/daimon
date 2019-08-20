class UserHabitsController < ApplicationController

  def index
    user_habits = UserHabit.all
    render json: user_habits
  end

end
