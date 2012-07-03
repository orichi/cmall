require 'spec_helper'

describe ImagesController do

  describe "GET 'upload,image_list'" do
    it "returns http success" do
      get 'upload,image_list'
      response.should be_success
    end
  end

end
