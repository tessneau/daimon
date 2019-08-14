class HabitSerializer < ActiveModel::Serializer
  attributes :id, :name, :positive, :maxFrequency, :firstDay
end
