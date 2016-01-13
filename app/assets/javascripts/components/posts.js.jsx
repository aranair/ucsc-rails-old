var PostsBox = React.createClass({
  getInitialState: function() {
    return {data: []};
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
      return <Post path={a.path} title={a.title} time={a.created_at} synopsis={a.synopsis}/>;
    });
    return (
      <div className="posts">
        {postsList}
      </div>
    );
  }
});

var Post = React.createClass({
  render: function() {
    return (
      <div className="posts--post-summary">
        <h2 className="post-summary--post-title">
          <a href={this.props.path} className="post-summary--post-link">
            {this.props.title}
          </a>
          <p className="post-summary--post-time muted">{this.props.time}</p>
        </h2>
        <p className="post-summary--post-synopsis">{this.props.synopsis}</p>
      </div>
    );
  }
});
