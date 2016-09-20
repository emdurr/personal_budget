# == Route Map
#
#    Prefix Verb   URI Pattern                 Controller#Action
#      root GET    /                           home#index
# api_bills GET    /api/bills(.:format)        api/bills#index
#           POST   /api/bills(.:format)        api/bills#create
#  api_bill GET    /api/bills/:id(.:format)    api/bills#show
#           PATCH  /api/bills/:id(.:format)    api/bills#update
#           PUT    /api/bills/:id(.:format)    api/bills#update
#           DELETE /api/bills/:id(.:format)    api/bills#destroy
#           GET    /*unmatched_route(.:format) home#index
#

Rails.application.routes.draw do
	root 'home#index'

	namespace :api do
		resources :bills, except: [:new, :edit]
	end

	get '*unmatched_route', to: 'home#index'
end
