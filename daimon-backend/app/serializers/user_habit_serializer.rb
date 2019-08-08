class UserHabitSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :habit
end
