class HabitCategorySerializer < ActiveModel::Serializer
  attributes :id
  has_one :habit
  has_one :category
end
