class CreateTanks < ActiveRecord::Migration[5.0]
  def change
    create_table :tanks do |t|
      t.text :gasoline
      t.references :station, foreign_key: true
      t.integer :capacity
      t.integer :min
      t.integer :max
      t.text :number

      t.timestamps
    end
  end
end
