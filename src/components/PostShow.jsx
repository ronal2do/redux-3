import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';

class PostShow extends Component {
    componentWillMount() {
      this.props.fetchPost(this.props.params.id);
    }
    render() {
      const post = this.props.post;

      if (!this.props.post) {
        return <div>is loading...</div>;
      }

      return (

        <div>
          post {this.props.params.id}
        <h3>{post.title}</h3>
        </div>
      );
    }
}
function mapStateToProps(state) {
  return { post: state.posts.post }
}

export default connect(mapStateToProps, { fetchPost })(PostShow);
