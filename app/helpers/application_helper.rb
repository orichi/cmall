#encoding: utf-8
module ApplicationHelper

  def category_message(key)
    hash = {:xiangmuzhaoshang=>"项目招商", :huiyihuizhan=>"会议会展", :qiugou=>"最新求购", :qiyezhaopin=>"企业招聘"}
    hash.keys.include?(key.to_sym) ? hash[key.to_sym] : nil
  end

  
end
