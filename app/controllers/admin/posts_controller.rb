module Admin
  class PostsController < BaseController
    before_action :set_post, only: [:show, :edit, :update, :destroy]

    def index
      @q = Post.ransack({ s: 'id desc' }.merge(index_params[:q] || {}))

      @posts = @q.result(distinct: true).page(index_params[:page])
    end

    def show
    end

    def new
      @post = Post.new
    end

    def edit
    end

    def create
      @post = Post.new(post_params)

      if @post.save
        redirect_to admin_posts_path, notice: 'Post was successfully created.'
      else
        render :new
      end
    end

    def update
      if @post.update(post_params)
        redirect_to admin_posts_path, notice: 'Post was successfully updated.'
      else
        render :edit
      end
    end

    def destroy
      @post.destroy

      redirect_to admin_posts_path, notice: 'Post was successfully destroyed.'
    end

    private

    def set_post
      @post = Post.find(params[:id])
    end

    def post_params
      params.require(:post).permit(:title, :body, :state)
    end

    def index_params
      params.permit!.to_h.slice(:q, :page)
    end
  end
end
