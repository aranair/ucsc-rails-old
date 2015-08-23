var PostsBox = React.createClass({
  getInitialState: function() {
    return { data: [] };
  },
  render: function() {
    return (
      <PostsList data={this.state.data} />
    );
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      data: "tag="+this.props.react_params,
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log(data);
        this.setState({ data: data.posts });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
})

var PostsList = React.createClass({
  render: function() {
    var postsList = this.props.data.map(function(a) {
      return <Post path={a.path} title={a.title} time={a.created_at} />;
    });
    return (
      <ul className="posts-list">
        {postsList}
      </ul>
    );
  }
});

var Post = React.createClass({
  render: function() {
    return (
      <li className="post-list-item">
        <a href={this.props.path} className="post-link">
          <p className="post-title">{this.props.title}</p>
          <p className="post-time muted">{this.props.time}</p>
        </a>
    </li>
    );
  }
});
