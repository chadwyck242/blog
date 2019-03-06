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
    // the JavaScript built-in find function used here
    // can accept functions as well, return item is found (T / F)
    const user = this.props.users.find(user => user.id === this.props.userId);

    if (!user) {
      return null;
    }

    return <div>User Header</div>;
  }
}

const mapStateToProps = state => {
  return { users: state.users };
};

export default connect(
  null,
  { fetchUser }
)(UserHeader);
