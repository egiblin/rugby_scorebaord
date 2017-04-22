Rails.application.routes.draw do

  root "fixtures#index"

  resources :fixtures

end
