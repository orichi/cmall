class Category < ActiveRecord::Base
  attr_accessible :category_id, :name
  has_many :child_categories, :class_name =>"Category", :foreign_key=>"category_id"
  belongs_to :sub_category, :class_name=>"Category", :foreign_key=>"category_id"

  def root_node?
    self.category_id == 0
  end
end
