class HuiyihuizhansController < ApplicationController
	def index
		@messages = Message.all(:conditions=>["category = 'huiyihuizhan'"])
	end
	def show
		@message = Message.find_by_id(params[:id])
	end
end
