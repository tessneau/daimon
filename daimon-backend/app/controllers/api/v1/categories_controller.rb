module Api
  module V1
    class CategoriesController < ApplicationController

      def index
        categories = Category.all
        render json: categories.to_json
      end

      def create
        category = Category.create(category_params)
        if category.valid?
          render json: category.to_json
        else
          render json: { errors: category.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def show
        category = Category.find(params[:id])
        render json: category.to_json
      end


      private

      def category_params
        params.require(:category).permit(:name, :description)
      end

    end
  end
end
