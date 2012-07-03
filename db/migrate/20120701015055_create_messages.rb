class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.string :title
      t.string :category
      t.integer :content_id

      t.timestamps
    end
  end
end
