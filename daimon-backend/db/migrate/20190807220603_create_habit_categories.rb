class CreateHabitCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :habit_categories do |t|
      t.references :habit, foreign_key: true
      t.references :category, foreign_key: true

      t.timestamps
    end
  end
end
