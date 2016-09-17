class CreateBills < ActiveRecord::Migration[5.0]
  def change
    create_table :bills do |t|
      t.string :name, null: false
      t.string :category
      t.date :due_date
      t.string :due_range
      t.string :amount, null: false

      t.timestamps
    end
  end
end
