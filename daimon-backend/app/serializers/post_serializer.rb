class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :upvotes
  has_one :category
end
