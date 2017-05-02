Rails.application.routes.draw do
  # API
  namespace :api, defaults: { format: 'json' } do
    namespace :v1 do
      resources :comments, only: [:create]
      resources :posts, only: [:index, :show, :create, :update, :destroy]

      devise_scope :user do
        post '/users', to: 'users/registrations#create'
        post '/users/sign_in', to: 'users/sessions#create'
      end
    end
  end

  # ADMIN
  namespace :admin do
    resources :posts
    resources :comments

    get 'settings', to: 'home#settings'
    get 'profile', to: 'home#profile'
    get '/', to: 'home#index'
  end

  # WEB APP
  namespace :web_app do
    get '/', to: 'home#index'

    get '*path', to: 'home#index', constrains: ->(request) do
      !request.xhr? && request.format.html?
    end
  end

  # OTHER ROUTES
  devise_for :users

  match '/404', to: 'errors#not_found', via: :all
  match '/422', to: 'errors#unprocessable_entity.html', via: :all
  match '/500', to: 'errors#internal_server_error', via: :all

  root to: 'home#index'
end
