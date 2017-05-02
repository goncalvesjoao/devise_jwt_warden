class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.text :body
      t.integer :post_id
      t.boolean :approved, default: false

      t.timestamps
    end
  end
end
