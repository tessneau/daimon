class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :posts
  # has_many :posts

  def posts
    object.posts.map {|post| {
      id: post.id,
      title: post.title,
      content: post.content,
      branch_count: post.branches.length,
      is_branched_by: post.branches.map{|branch| branch.user_id},
      is_pinned_by: post.pins.map{|pin| pin.user_id},
      author: post.author
      }}
  end

end
