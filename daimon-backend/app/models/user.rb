class User < ApplicationRecord
  has_secure_password
  has_many :user_habits, dependent: :destroy
  has_many :habits, through: :user_habits

  has_many :posts, dependent: :destroy

  has_many :pins, dependent: :destroy
  has_many :pinned_posts, through: :pins, source: :post

  has_many :comments,dependent: :destroy
  has_many :commented_posts, through: :comments, source: :post

  has_many :branches, dependent: :destroy
  has_many :branched_posts, through: :branches, source: :post

  validates :username, :password, presence:true
  validates :username, uniqueness: true
end
