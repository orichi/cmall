class CreateProductContents < ActiveRecord::Migration
  def change
    create_table :product_contents do |t|
      t.text :content

      t.timestamps
    end
  end
end
