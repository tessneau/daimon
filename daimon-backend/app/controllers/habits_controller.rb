class HabitsController < ApplicationController

  def index
    habits = Habit.all
    render json: habits
  end

  def create
    habit = Habit.new(habit_params)
    habit.firstDay = Faker::Time.backward(days: 5, period: :all, format: :default)
    if habit.save
      UserHabit.create(habit: habit, user: super_current_user)
      render json: habit
    else
      render json: { errors: habit.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    habit = Habit.find(params[:id])
    render json: habit
  end

  def destroy
    habit = Habit.find(params[:id])
    if habit
      userhabit = UserHabit.find_by(habit: habit, user: super_current_user)
      userhabit.destroy
    else
      render json: { message: "can't find that habit" }, status: :unauthorized
    end
  end


  private

  def habit_params
    params.require(:habit).permit(:name, :positive, :maxFrequency, :firstDay)
  end

end
