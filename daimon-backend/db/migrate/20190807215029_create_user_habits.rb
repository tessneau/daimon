class CreateUserHabits < ActiveRecord::Migration[5.2]
  def change
    create_table :user_habits do |t|
      t.integer :progress_count
      t.references :user, foreign_key: true
      t.references :habit, foreign_key: true

      t.timestamps
    end
  end
end
