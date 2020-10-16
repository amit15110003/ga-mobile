import React, { Component } from "react";
import { connect } from "react-redux";
import { history } from "../../../index";
import { Link } from "react-router-dom";
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
    history.push("/");
  };

  render() {
    console.log(this.props.user);
    return (
      <form onSubmit={this.onFinish}>
        <div className="row "></div>
        <div className="row">
          <div className=" form-group col ">
            <input
              name="username"
              className="form-control th-14 "
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleInputChange}
            ></input>
          </div>
        </div>
        <div className="row">
          <div className=" form-group col th-footer-input ">
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

        <button className="btn th-btn-gradient my-3 th-18" type="submit">
          Login
        </button>
      </form>
    );
  }
}

export default connect(mapStateToProps)(Login);
