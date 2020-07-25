import React, { Component } from "react";
import Hamburger from "../../../Assets/Images/Navbar/hamburger.svg";
import Logo from "../../../Assets/Images/Navbar/logo.svg";
import Sidebar from "../Sidebar/Sidebar";

class Navbar extends Component {
  state = {
    show: false
  };

  toggleShow = () => {
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    return (
      <nav class="navbar navbar-light th-navbar">
        <div class="container-fluid px-0">
          <a id="popup" href=" ">
            <img id="logo" src={Logo} alt=" " />
          </a>
          <button type="button" id="sidebarCollapse" class="pr-0">
            <img
              src={Hamburger}
              height="21px"
              width="21px"
              alt=" "
              onClick={this.toggleShow}
            />
          </button>
        </div>
        {this.state.show ? (
          <div onClick={this.toggleShow}>
            <Sidebar />
          </div>
        ) : null}
      </nav>
    );
  }
}

export default Navbar;
