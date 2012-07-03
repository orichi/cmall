class ProductContent < ActiveRecord::Base
  attr_accessible :content, :product_id
  has_one :product, :dependent=>:destroy
end
