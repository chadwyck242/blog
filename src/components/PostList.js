import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    console.log(this.props.posts);
    return <div>PostList</div>;
  }
}

// mapStateToProps called with state object from Redux store
const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
