class Habit < ApplicationRecord
  has_many :user_habits
  has_many :users, through: :user_habits

  has_many :habit_categories
  has_many :categories, through: :habit_categories

  validates :name, presence: true

end
