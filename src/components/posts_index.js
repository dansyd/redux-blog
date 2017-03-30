import React, { Component } from 'react';

class PostIndex extends Component {
  componentWillMount() {
    console.log('Call the action here');
  }
  render() {
    return (
      <div>List of blog posts</div>
    );
  }
}

export default PostIndex;
