module Api
  module V1
    class CommentsController < ApplicationController

      def index
        comments = Comment.all
        render json: comments.to_json
      end

      def create
        comment = Comment.create(comment_params)
        if comment.valid?
          render json: comment.to_json
        else
          render json: { errors: comment.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def show
        comment = Comment.find(params[:id])
        render json: comment.to_json
      end

      def update
        comment = Comment.update(params[:content])
        if comment.valid?
          render json: comment.to_json
        else
          render json: { errors: comment.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def destroy
        #code
      end


      private

      def comment_params
        params.require(:comment).permit(:content, :post_id, :user_id)
      end

    end
  end
end
