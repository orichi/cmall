class Image < ActiveRecord::Base
  # attr_accessible :title, :body
  attr_accessible :data
  has_attached_file :data,
    :styles=>{:medium=>"500x500>",:thumb=>"100x100>"},
    :whiny => false
end
