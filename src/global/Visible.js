import React, { Fragment } from "react";
import { connect } from "react-redux";
const mapStateToProps = ({ dispatch, user }) => ({
  dispatch,
  user,
});
class Visibility extends React.Component {
  render() {
    const {
      user: { role },
    } = this.props; // current user role
    const { children, roles = [] } = this.props;
    const authorized = roles.includes(role.name);
    const AuthorizedChildren = () => {
      // if user not equal needed role and if component is a page - make redirect to needed route
      // if user not authorized return null to component
      if (!authorized) {
        return null;
      }
      // if access is successful render children
      return <Fragment>{children}</Fragment>;
    };
    return AuthorizedChildren();
  }
}

export default connect(mapStateToProps)(Visibility);
