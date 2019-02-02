Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    root to: 'home#index'
    
    get '/about',   to: 'home#index'
    get '/myskills',   to: 'home#index'
    get '/works', to: 'home#index'
end
