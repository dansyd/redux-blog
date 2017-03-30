import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class PostsNew extends Component {
  render() {

    // function passed as props from reduxForm
    const { handleSubmit } = this.props; // same as handleSubmit = this.props.handleSubmit;

    return(
      <form onSubmit={handleSubmit}>
        <h3>Create A New Post</h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-contorl"/>
        </div>
        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-contorl"/>
        </div>
        <div className="form-group">
          <label>Title</label>
          <textarea className="form-contorl"/>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'category', 'content']
})(PostsNew);
