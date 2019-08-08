class CreateHabits < ActiveRecord::Migration[5.2]
  def change
    create_table :habits do |t|
      t.string :name
      t.boolean :positive
      t.integer :maxFrequency
      t.datetime :firstDay

      t.timestamps
    end
  end
end
