class Post < ApplicationRecord
  belongs_to :category
  
  belongs_to :author, class_name: 'User', foreign_key: :user_id

  has_many :pins, dependent: :destroy
  has_many :pinners, through: :pins, source: :user

  has_many :comments, dependent: :destroy
  has_many :commenters, through: :comments, source: :user
end
