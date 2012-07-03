module ProductsHelper
  def get_category_select
    Category.where(:category_id =>0).inject({}) do |y,item|
      y[item.name] = item.child_categories.map{|x| [x.name, x.id.to_s]}
      y
    end
    
  end
end
