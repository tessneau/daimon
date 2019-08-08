Rails.application.routes.draw do

  resources :branches
  namespace :api do
    namespace :v1 do
      resources :habit_categories
      resources :comments
      resources :pins
      resources :user_habits
      resources :posts
      resources :categories
      resources :habits
      resources :users
    end
  end
    # get '/*a', to: 'application#not_found'
    
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
