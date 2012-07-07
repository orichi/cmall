class Admin::ImagesController < AdminController
  def upload
    @image = Image.new(:data => params[:imgFile])
    if @image.save
      render :text => {"error" => 0, "url" => @image.data.url(:medium)}.to_json
    else
      render  :text => {"error" => 1}
    end
  end
  def image_list
    @images = Image.find(:all)
    @json = []
    for image in @images
      temp = %Q{{  "filesize":#{image.data.size},
                 "filename":"#{image.data_file_name}",
                 "dir_path":"#{image.data.url(:thumb)}",
                 "datetime":"#{image.created_at}"}}
      @json << temp
    end
    render :text => ("{\"file_list\":[" << @json.join(",") << "]}")
  end
end
