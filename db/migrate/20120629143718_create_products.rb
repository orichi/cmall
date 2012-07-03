class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string  :title
      t.string  :brand_id
      t.string  :category_id
      t.integer :price
      t.integer :min_price
      t.integer :max_price
      t.integer :content_id

      t.timestamps
    end
  end
end
