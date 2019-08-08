class HabitCategory < ApplicationRecord
  belongs_to :habit
  belongs_to :category
end
