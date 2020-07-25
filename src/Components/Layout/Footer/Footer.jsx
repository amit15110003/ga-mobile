import React, { Component } from "react";
import SendQuery from "../../../Assets/Images/SendQuery/google-forms.svg";
import CallUs from "../../../Assets/Images/SendQuery/phone-call.svg";
import Cross from "../../../Assets/Images/SendQuery/cross-out-mark.svg";
import CallCenter from "../../../Assets/Images/SendQuery/call-center.svg";
class Footer extends Component {
  state = {
    show: false,
  };

  toggleShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div>
        <div class="footer th-footer">
          <div class="container-fluid th-bg-grey">
            <div class="row pt-4">
              <div class="col-6">
                <p class="th-footer-head pl-5">COMPANY</p>
                <ul class="pl-5 th-footer-link">
                  <li>
                    <a href=" ">About Us</a>
                  </li>
                  <li>
                    <a href=" ">Contact Us</a>
                  </li>
                  <li>
                    <a href=" ">Privacy Policy</a>
                  </li>
                  <li>
                    <a href=" ">Blog</a>
                  </li>
                </ul>
              </div>
              <div class="col-6">
                <p class="th-footer-head pl-5">PACKAGES</p>
                <ul class="pl-5 th-footer-link">
                  <li>
                    <a href=" ">Holiday</a>
                  </li>
                  <li>
                    <a href=" ">Honeymoon</a>
                  </li>
                  <li>
                    <a href=" ">Contact Us</a>
                  </li>
                  <li>
                    <a href=" ">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-12 text-center pb-5 pt-2 th-copyright">
              <a href=" ">Glacial Holidays @ 2019. All right reserved</a>
            </div>
          </div>
          <div class="container text-center">
            <div class="th-enq-pop" id="th-enq-pop">
              {/* toggle */}
              {this.state.show ? (
                <div class="px-2">
                  <div class="col-12 py-1 th-enq-pop-extend">
                    <div class="row  h-100">
                      <div class="col-5 text-left">
                        <a href=" ">
                          <img src={SendQuery} class="img-fluid m-2" alt=" " />
                          Send Query
                        </a>
                      </div>
                      <div class="col-5 text-left">
                        <a href=" ">
                          <img src={CallUs} class="img-fluid m-2" alt=" " />{" "}
                          Call Us
                        </a>
                      </div>
                      <div class="col-2 text-right my-auto">
                        <button
                          type="button"
                          class="m-0 pop-btn-close"
                          onClick={this.toggleShow}
                        >
                          <img
                            src={Cross}
                            class="img-fluid m-2 cross-out-mark"
                            alt=" "
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
              {/* toggle */}
              {this.state.show ? (
                <div id="th-enq-pop-btn" onClick={this.toggleShow}></div>
              ) : (
                <div
                  class="th-enq-pop-btn p-1"
                  id="th-enq-pop-btn"
                  onClick={this.toggleShow}
                >
                  <button type="button" class="m-0" id="pop-btn">
                    {!this.state.show ? (
                      <img src={CallCenter} class="img-fluid m-2" alt=" " />
                    ) : null}
                  </button>
                </div>
              )}

              {/*  */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
