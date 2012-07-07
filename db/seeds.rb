#encoding: utf-8
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Category.delete_all
category1  = Category.create({:name=>"实验常用设备",:category_id=>0})
category2  = Category.create({:name=>"生命科学仪器",:category_id=>0})
category3  = Category.create({:name=>"农林环境食品",:category_id=>0})
category4  = Category.create({:name=>"水质电化学仪",:category_id=>0})
category5  = Category.create({:name=>"物性测量仪器",:category_id=>0})
category6  = Category.create({:name=>"试剂",:category_id=>0})
category7  = Category.create({:name=>"抗体",:category_id=>0})
category8  = Category.create({:name=>"耗材",:category_id=>0})
category9  = Category.create({:name=>"技术服务",:category_id=>0})
#category1  = Category.create({:name=>"耗材",:category_id=>0})
Category.create({:name=>"实验常用设备-1",:category_id=>category1.id})
Category.create({:name=>"实验常用设备-2",:category_id=>category1.id})
Category.create({:name=>"生命科学仪器-1",:category_id=>category2.id})
Category.create({:name=>"生命科学仪器-2",:category_id=>category2.id})
Category.create({:name=>"农林环境食品-1",:category_id=>category3.id})
Category.create({:name=>"农林环境食品-2",:category_id=>category3.id})
Category.create({:name=>"水质电化学仪-1",:category_id=>category4.id})
Category.create({:name=>"水质电化学仪-2",:category_id=>category4.id})
Category.create({:name=>"物性测量仪器-1",:category_id=>category5.id})
Category.create({:name=>"物性测量仪器-2",:category_id=>category5.id})
Category.create({:name=>"试剂-1",:category_id=>category6.id})
Category.create({:name=>"试剂-2",:category_id=>category6.id})
Category.create({:name=>"抗体-1",:category_id=>category7.id})
Category.create({:name=>"抗体-2",:category_id=>category7.id})
Category.create({:name=>"耗材-1",:category_id=>category8.id})
Category.create({:name=>"耗材-2",:category_id=>category8.id})
Category.create({:name=>"技术服务-1",:category_id=>category9.id})
Category.create({:name=>"技术服务-2",:category_id=>category9.id})
Brand.delete_all
Brand.create({:name=>'品牌1', :content=>'content'})
Brand.create({:name=>'品牌2', :content=>'content'})
Brand.create({:name=>'品牌3', :content=>'content'})
Brand.create({:name=>'品牌4', :content=>'content'})