class HabitSerializer < ActiveModel::Serializer
  attributes :id, :name, :type, :maxFrequency, :firstDay
end
