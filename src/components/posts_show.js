import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link, browserHistory } from 'react-router';

class PostsShow extends Component {
  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }
  handleDelete() {
    this.props.deletePost(this.props.post.id)
      .then(() => {
        browserHistory.push('/');
      });
  }
  render() {
    const {post} = this.props;
    if (!post) {
      return <div>Loading.....</div>
    }
    return (
      <div>
        <Link to="/">Back to index</Link>
        <h3>{post.title}</h3>
        <h6>{post.categories}</h6>
        <p>{post.content}</p>
        <button
          onClick={this.handleDelete.bind(this)}
          className="btn btn-danger">
          Delete Post
        </button>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return { post: state.posts.post };
}
export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);
