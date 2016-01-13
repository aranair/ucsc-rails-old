json.posts @posts do |post|
  json.title post.title
  json.created_at post.created_at.in_time_zone('Singapore').strftime("%d %b %Y")
  json.path post_path(post)
  json.url post_url(post, format: :json)
  json.synopsis post.content && post.content.truncate(350)
end
