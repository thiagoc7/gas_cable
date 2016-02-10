class CreateStations < ActiveRecord::Migration[5.0]
  def change
    create_table :stations do |t|
      t.text :name
      t.string :strong_days
      t.string :weak_days

      t.timestamps
    end
  end
end
