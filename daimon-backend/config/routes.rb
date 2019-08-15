Rails.application.routes.draw do

  post '/login', to: 'auth#create'
  post '/signup', to: 'users#create'
  get '/profile', to: 'users#profile'
  get '/categories/:category_id/posts', to:'posts#category_posts'
  get '/users/:user_id/pinned_posts', to:'posts#pinned_posts_index'
  post '/posts/:id/pins', to: 'posts#pin'
  # post '/users/:user_id/pinned_posts', to:'posts#pin'
  # get '/users/:user_id/posts', to:'posts#user_posts'
  resources :habit_categories
  resources :comments
  resources :pins
  resources :user_habits
  resources :categories
  resources :posts do
    member do
      post :branch
      # post :pins
    end
  end
  resources :habits
  resources :users

  get '/*a', to: 'application#not_found'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
