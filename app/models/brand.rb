class Brand < ActiveRecord::Base
  attr_accessible :content, :image_id, :name, :image
  belongs_to :image

  def image=(file)
    self.image_id = Image.create({:data=>file})
  end
end
