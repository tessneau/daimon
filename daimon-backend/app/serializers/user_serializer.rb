class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :avatar_img
  has_many :posts
  has_many :habits
  has_many :pinned_posts
  has_many :branched_posts
end
