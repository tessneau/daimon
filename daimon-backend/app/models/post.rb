class Post < ApplicationRecord
  belongs_to :category

  belongs_to :author, class_name: 'User', foreign_key: :user_id

  has_many :pins, dependent: :destroy
  has_many :pinners, through: :pins, source: :user

  has_many :comments, dependent: :destroy
  has_many :commenters, through: :comments, source: :user

  has_many :branches, dependent: :destroy
  has_many :branchers, through: :branches, source: :user

  validates :title, presence: true 
  validates :content, presence: true
end
