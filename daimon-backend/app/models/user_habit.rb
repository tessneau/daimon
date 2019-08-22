class UserHabit < ApplicationRecord
  belongs_to :user
  belongs_to :habit

  after_initialize :default_info

  def default_info
    self.progress_count ||=0
  end
end
