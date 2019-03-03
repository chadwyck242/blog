import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

// UserHeader class based component, displayed in PostList component
// Display the user information in a blog post
class UserHeader extends React.Component {
  render() {
    return <div>User Header</div>;
  }
}

export default connect(null, { fetchUser })(UserHeader);
