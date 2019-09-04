class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :branch_count, :is_pinned_by, :is_branched_by, :author, :category

  def branch_count
    object.branches.length
  end

  def is_branched_by
    object.branches.map { |branch| branch.user_id }
  end

  def is_pinned_by
    object.pins.map {|pin| pin.user_id}
  end

  def author
    object.author
  end

  def category
    object.category
  end

end
