Rails.application.routes.draw do
  root to: 'plans#index'
  resources :plans, only: [:index, :update]
  mount ActionCable.server => '/cable'
end
