/** @format */

import React, { Component, Fragment } from "react";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Spin } from "antd";

const mapStateToProps = ({ dispatch, user }) => ({
  dispatch,
  user,
});
class ScrollToTopRoute extends Component {
  componentDidUpdate(prevProps) {
    document.body.scrollTo({ top: 0 });
  }

  render() {
    const { user } = this.props;
    const { component: Component, ...rest } = this.props;
    const isUserAuthorized = user.authorized;
    const isUserLoading = user.loading;
    const BootstrappedLayout = () => {
      // show loader when user in check authorization process, not authorized yet and not on login pages
      if (isUserLoading && !isUserAuthorized) {
        return (
          <div className="py-5 my-5 text-center">
            <Spin />
          </div>
        );
      } else {
        return <Route {...rest} render={(props) => <Component {...props} />} />;
      }
    };
    return <Fragment>{BootstrappedLayout()}</Fragment>;
  }
}

export default withRouter(connect(mapStateToProps)(ScrollToTopRoute));
