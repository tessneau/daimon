Rails.application.routes.draw do

  post '/login', to: 'auth#create'
  post '/signup', to: 'users#create'
  get '/profile', to: 'users#profile'
  resources :branches
  resources :habit_categories
  resources :comments
  resources :pins
  resources :user_habits
  resources :posts
  resources :categories
  resources :habits
  resources :users
  get '/*a', to: 'application#not_found'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
