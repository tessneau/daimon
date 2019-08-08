class Category < ApplicationRecord
  has_many :habit_categories
  has_many :habits, through: :habit_categories

  has_many :posts
  # has_many :users, through: :posts

  validates :name, presence: true

end
