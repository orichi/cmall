class XiangmuzhaoshangsController < ApplicationController
	def index
		@messages = Message.all(:conditions=>["category = 'xiangmuzhaoshang'"])
	end
	def show
		@message = Message.find_by_id(params[:id])
	end
end
