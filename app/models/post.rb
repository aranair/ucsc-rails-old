class Post < ActiveRecord::Base
  # commented out due to chartkick + Postgresql error
  # default_scope :order=>'created_at DESC'
  has_many :taggings
  has_many :tags, through: :taggings

  def to_param
    "#{id} #{title}".parameterize
  end

  def self.tagged_with(name)
    Tag.find_by_name!(name).articles
  end

  def self.tag_counts
    Tag.select("tags.id, tags.name, count(taggings.tag_id) as count").
      joins(:taggings).group("taggings.tag_id, tags.id, tags.name")
  end

  def tag_list
    tags.map(&:name).join(", ")
  end

  def tag_list=(names)
    self.tags = names.split(",").map do |n|
      Tag.where(name: n.strip).first_or_create!
    end
  end
end
