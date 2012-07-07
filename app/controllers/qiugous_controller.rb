class QiugousController < ApplicationController
		def index
		@messages = Message.all(:conditions=>["category = 'qiugou'"])
	end
	def show
		@message = Message.find_by_id(params[:id])
	end
end
