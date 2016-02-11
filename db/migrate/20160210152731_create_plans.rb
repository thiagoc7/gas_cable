class CreatePlans < ActiveRecord::Migration[5.0]
  def change
    create_table :plans do |t|
      t.date :date
      t.references :tank, foreign_key: true
      t.integer :initial_volume, default: 0
      t.integer :buy_volume, default: 0
      t.integer :sell_volume, default: 0
      t.integer :final_volume

      t.timestamps
    end
  end
end
