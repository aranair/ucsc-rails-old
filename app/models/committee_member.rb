class CommitteeMember
  attr_accessor :name, :intro, :position, :image_link

  def initialize(name, intro, position)
    @name = name
    @intro = intro
    @position = position
    @image_link = name.downcase.gsub(/[^0-9a-z]/i, '')
  end

  def self.get_all_members
    YAML.load_file('config/users.yml').map do |name, details|
      new(name, details['intro'], details['position'])
    end
  end
end
