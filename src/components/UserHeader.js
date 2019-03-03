import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

// UserHeader class based component, displayed in PostList component
// Display the user information in a blog post
class UserHeader extends React.Component {
  // ensures that a user is fetched upon loading of component
  componentDidMount() {
      // call the fetchUser action creator to get a blog user
      // function is called with the userId props from PostList
      this.props.fetchUser(this.props.userId);
  }

  render() {
    return <div>User Header</div>;
  }
}

export default connect(
  null,
  { fetchUser }
)(UserHeader);
