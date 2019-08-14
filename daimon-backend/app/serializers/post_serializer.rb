class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :branch_count
  has_one :author
  has_one :category

  def branch_count
    object.branches.length
  end

end
