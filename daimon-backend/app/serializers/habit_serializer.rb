class HabitSerializer < ActiveModel::Serializer
  attributes :id, :name, :positive, :maxFrequency, :firstDay
  has_many :user_habits


end
