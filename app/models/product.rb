class Product < ActiveRecord::Base
  attr_accessible :product_content_id, :max_price, :min_price, :price, :title,:brand_id,:category_id,:product_content, :image_id, :image
  belongs_to  :product_content
  belongs_to  :image


  def product_content=(content)
    self.content_id = ProductContent.create({:content=>content}).id
  end

  def image=(file)
      image_temp = Image.create(:data => file)
      self.image_id = image_temp.id
  end
  
  def product_content
    content = ProductContent.find_by_id(self.content_id)
    content ? content.content : nil
  end
end
