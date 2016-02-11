Rails.application.routes.draw do
  resources :plans
  resources :plans, only: [:index, :update]
  root to: 'tasks#index'
  mount ActionCable.server => '/cable'
end
