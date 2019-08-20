class UserHabitSerializer < ActiveModel::Serializer
  attributes :id, :progress_count, :habit

  def habit
    object.habit
  end
end
