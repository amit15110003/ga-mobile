import React, { Component } from "react";
import { connect } from "react-redux";
import Logo from "../../../Assets/Images/Navbar/logo.svg";
const mapStateToProps = ({ user, dispatch }) => ({
  dispatch,
  user,
});

class Sidebar extends Component {
  onLogOut = () => {
    this.props.dispatch({
      type: "user/LOGOUT",
    });
  };
  render() {
    return (
      <div class="sidebar" id="sidebar">
        <div class="sidebar-menu">
          <div class="container-fluid px-3 py-3">
            <a href=" " class="">
              <img id="logo" src={Logo} alt="" />
            </a>
            <a href="" class="btn th-sidebar-btn-pay float-right mt-1 th-btn-1">
              PAY NOW
            </a>
          </div>
          <div class="th-sidebar-border"></div>
          {!this.props?.user?.authorized && (
            <div class="d-block px-3 py-4">
              <a href="/login" class="btn th-sidebar-btn-1 mr-1 th-btn-1">
                LOGIN
              </a>
              <a href="" class="btn th-sidebar-btn float-right th-btn-1">
                CREATE PROFILE
              </a>
            </div>
          )}

          <div class="th-sidebar-border"></div>
          <ul class="list-unstyled components px-3">
            <li>
              <a href="">
                Home <i class="fa fa-angle-right mr-2 float-right"></i>
              </a>
            </li>
          </ul>
          <div class="th-sidebar-border"></div>
          <ul class="list-unstyled components px-3">
            <li>
              <a href="">
                Tour Packages<i class="fa fa-angle-right mr-2 float-right"></i>
              </a>
            </li>
            <li>
              <a href="">
                Honeymoon Packages
                <i class="fa fa-angle-right mr-2 float-right"></i>
              </a>
            </li>
            <li>
              <a href="">
                Family Packages
                <i class="fa fa-angle-right mr-2 float-right"></i>
              </a>
            </li>
            <li>
              <a href="">
                Indian Destinations
                <i class="fa fa-angle-right mr-2 float-right"></i>
              </a>
            </li>
            <li>
              <a href="">
                Weekend Getaways
                <i class="fa fa-angle-right mr-2 float-right"></i>
              </a>
            </li>
            <li>
              <a href="">
                Destination Guide
                <i class="fa fa-angle-right mr-2 float-right"></i>
              </a>
            </li>
            <li>
              <a href="">
                Sesonal Packages
                <i class="fa fa-angle-right mr-2 float-right"></i>
              </a>
            </li>
            <li>
              <a href="index4.html">Offers</a>
              <div class="th-sidebar-box"></div>
            </li>
          </ul>
          <div class="th-sidebar-box-1">
            <p class="font16 text-center pb-0 mb-0">
              Send us your tour plan and get it coustomized by our experts
            </p>
            <center>
              <a
                class="btn2 color th-sidebar-btn text-center btn th-btn-1"
                href=""
              >
                Send Enquiry
              </a>
            </center>
          </div>
          {this.props?.user?.authorized && (
            <ul class="list-unstyled components px-3">
              <li class="my-3" onClick={this.onLogOut}>
                <div className="th-sidebar-btn-logout d-flex justify-content-center align-items-center">
                  Logout{" "}
                  <i
                    className="fa fa-sign-out "
                    style={{
                      color: "#f84b0f",
                      marginTop: "-7px",
                    }}
                  />
                </div>
              </li>
            </ul>
          )}
          <div class="py-2 my-5"></div>
        </div>
        <div id="sidebar-dismiss"></div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Sidebar);
