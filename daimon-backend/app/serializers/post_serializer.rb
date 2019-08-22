class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :branch_count, :is_pinned_by, :is_branched_by
  has_one :author

  def branch_count
    object.branches.length
  end

  def is_branched_by
    object.branchers.map { |brancher| brancher.id }
  end

  def is_pinned_by
    object.pinners.map {|pinner| pinner.id}
  end

end
