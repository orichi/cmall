class ZhaopinsController < ApplicationController
		def index
		@messages = Message.all(:conditions=>["category = 'qiyezhaopin'"])
	end
	def show
		@message = Message.find_by_id(params[:id])
	end
end
