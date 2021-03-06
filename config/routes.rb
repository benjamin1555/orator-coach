Rails.application.routes.draw do
  get 'ressources/index'
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/dashboard", to: "pages#dashboard"
  get "/stats", to: "pages#stats"
  # get "/library", to: "pages#library"

  get "/library", to: "ressources#index"

  resources :recordings, only: [ :new, :create, :show, :update ]
  resources :observers, only: [ :new, :create, :update ] do
      member do
        get '/final_review', to: "observers#final_review"
      end
    resources :reviews, only: [ :new, :create ] do
    end
  end
end
