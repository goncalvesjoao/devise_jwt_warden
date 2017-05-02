module Api
  module V1
    class CommentsController < V1::BaseController
      def create
        @comment = Comment.new(comment_params)

        if @comment.save
          render :show, status: :created, location: @comment
        else
          render json: @comment.errors, status: :unprocessable_entity
        end
      end

      private

      def comment_params
        params.require(:comment).permit(:body, :post_id)
      end
    end
  end
end
