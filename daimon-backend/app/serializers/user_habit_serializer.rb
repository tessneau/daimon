class UserHabitSerializer < ActiveModel::Serializer
  attributes :id, :progress_count, :habit, :user_id

  def habit
    object.habit
  end
end
