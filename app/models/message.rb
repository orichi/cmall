class Message < ActiveRecord::Base
  attr_accessible :category, :content_id, :title, :content

  def content=(content)
    self.content_id = ProductContent.create({:content=>content}).id
  end

  def content
    content = ProductContent.find_by_id(self.content_id)
    content ? content.content : nil
  end
end
