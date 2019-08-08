module Api
  module V1
    class HabitsController < ApplicationController

      def index
        habits = Habit.all
        render json: habits.to_json
      end

      def create
        habit = Habit.create(habit_params)
        if habit.valid?
          render json: habit.to_json
        else
          render json: { errors: habit.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def show
        habit = Habit.find(params[:id])
        render json: habit.to_json
      end


      private

      def habit_params
        params.require(:habit).permit(:name, :positive, :maxFrequency, :firstDay)
      end

    end
  end
end
