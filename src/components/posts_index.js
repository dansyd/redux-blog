import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  render() {
    return (
      <div>List of blog posts</div>
    );
  }
}

// function mapDispatchToProps = (dispatch) => {
//   return bindActionCreators ({ fetchPosts }, dispatch);
// }
// export default connect(null, mapDispatchToProps)(PostIndex);

// SHORTCUT

export default connect(null, { fetchPosts: fetchPosts })(PostIndex);
