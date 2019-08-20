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

  def user_habits
    user = User.find(params[:user_id])
    render json: user.user_habits
  end

  def progress
    habit = Habit.find(params[:id])
    if habit
      user_habit = UserHabit.find_by(user: super_current_user, habit: habit)
      if user_habit && user_habit.progress_count < habit.maxFrequency
        user_habit.update(progress_count: user_habit.progress_count+1)
        render json: user_habit
      else
        render json: { message: "can't find that userhabit" }, status: :unauthorized
      end
    else
      render json: { message: "can't find that habit" }, status: :unauthorized
    end
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
