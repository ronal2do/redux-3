import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';

class PostShow extends Component {
    static contextTypes = {
      router: PropTypes.object
    }

    componentWillMount() {
      this.props.fetchPost(this.props.params.id);
    }

    onDeleteClick() {
      this.props.deletePost(this.props.params.id)
        .then(() => {
          this.context.router.push("/");
        });
    }

    render() {
      const { post } = this.props;
      // const post = this.props.post;
      if (!this.props.post) {
        return <div>is loading...</div>;
      }

      return (

        <div>
            <Link to="/">Back</Link>
            <button
              onClick={this.onDeleteClick.bind(this)}
              className="btn btn-danger pull-right">Delete Post</button>
            <h2>{post.title}</h2>
            <h4>Categories: {post.categories}</h4>
            <p>{post.content}</p>
        </div>
      );
    }
}

function mapStateToProps(state) {
  return { post: state.posts.post }
}

export default connect(mapStateToProps, {
  fetchPost,
  deletePost
})(PostShow);
