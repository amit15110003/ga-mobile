import React, { Component } from "react";
import { connect } from "react-redux";
import { history } from "../../../index";
import { Link } from "react-router-dom";
import Logo from "../../../Assets/Images/Navbar/logo.svg";
import Home from "../../Home/Index";
const mapStateToProps = ({ user, dispatch }) => ({
  dispatch,
  user,
});

class Login extends Component {
  state = {
    values: {
      username: "",
      password: "",
    },
  };

  handleInputChange = (e) => {
    // console.log(this.state.values);
    this.setState({
      values: { ...this.state.values, [e.target.name]: e.target.value },
    });
  };

  onFinish = (e) => {
    e.preventDefault();
    console.log(this.props);
    const { dispatch } = this.props;
    console.log(this.state.values);
    dispatch({
      type: "user/LOGIN",
      payload: this.state.values,
    });
  };

  render() {
    if (this.props?.user?.authorized) {
      return <Home />;
    }
    return (
      <React.Fragment>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="mx-auto p-3 w-100">
            <div className="text-center pb-2">
              <img id="logo" src={Logo} style={{ height: "50px" }} />
            </div>
            <h3>Sign In</h3>
            <div className="th-service-subtitle pb-3">
              Don't have an account?{" "}
              <span>
                <a href="/">Create a free account</a>
              </span>
            </div>

            <form onSubmit={this.onFinish}>
              <div className="row "></div>
              <div className="row">
                <div className=" form-group col ">
                  <label htmlFor="username">Email</label>
                  <input
                    name="username"
                    className="form-control th-14 "
                    placeholder="Username"
                    id="username"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                  ></input>
                </div>
              </div>
              <div className="row">
                <div className=" form-group col th-footer-input ">
                  <label htmlFor="username">Password</label>
                  <input
                    name="password"
                    type="password"
                    className="form-control th-14"
                    placeholder="Password."
                    value={this.state.password}
                    onChange={this.handleInputChange}
                  ></input>
                </div>
              </div>

              <button
                className="btn th-btn my-3 th-18 w-100 text-white"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(Login);
