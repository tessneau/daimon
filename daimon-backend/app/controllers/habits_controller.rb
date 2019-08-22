class HabitsController < ApplicationController

  def index
    habits = Habit.all
    render json: habits
  end

  def create
    habit = Habit.new(habit_params)
    habit.firstDay = Faker::Time.backward(days: 5, period: :all, format: :default)
    if habit.save
      user_habit = UserHabit.create(habit: habit, user: super_current_user)
      if user_habit.valid?
        render json: user_habit
      else
        render json: { message: "can't create that userhabit" }, status: :unauthorized
      end
    else
      render json: { message: "can't create that habit" }, status: :unauthorized
    end
  end

  def show
    habit = Habit.find(params[:id])
    render json: habit
  end

  # def user_habits
  #   user = User.find(params[:user_id])
  #   render json: user.user_habits
  # end


  private

  def habit_params
    params.require(:habit).permit(:name, :positive, :maxFrequency, :firstDay)
  end

end
