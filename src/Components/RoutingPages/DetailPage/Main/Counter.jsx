import React, { Component } from "react";
import Calender from "../../../Calender/Calender";

class Counter extends Component {
  state = {
    childCount: 0,
    adultCount: 0,
    show: false,
    showCalender: false,
  };

  childIncrement = () => {
    this.setState({
      childCount: this.state.childCount + 1,
    });
  };

  childDecrement = () => {
    if (this.state.childCount === 0) {
      this.setState({
        childCount: 0,
      });
    } else {
      this.setState({
        childCount: this.state.childCount - 1,
      });
    }
  };

  adultIncrement = () => {
    this.setState({
      adultCount: this.state.adultCount + 1,
    });
  };

  adultDecrement = () => {
    if (this.state.adultCount === 0) {
      this.setState({
        adultCount: 0,
      });
    } else {
      this.setState({
        adultCount: this.state.adultCount - 1,
      });
    }
  };

  toggleShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  toggleCalender = () => {
    this.setState({
      showCalender: !this.state.showCalender,
    });
  };

  render() {
    return (
      <div>
        <div class="col-12 th-detail-travel-selector pt-1 pb-2">
          <div class="row">
            <div class="col-7">
              <span class="info">Travel Duration</span>
            </div>
            <div class="col-5">
              <span class="info">No. of Travellers</span>
            </div>
          </div>
          <div class="row py-2" onClick={this.toggleCalender}>
            <div class="col-7">
              <div className="col-xs-10 ">
                {/* {this.state.showCalender ? : null}   */}
                <Calender />
              </div>
            </div>
            <div class="col-5" onClick={this.toggleShow}>
              <span class="info-detail" id="traveller-select">
                {this.state.adultCount} Adults, {this.state.childCount} Child
              </span>
            </div>
          </div>
          {/* toggle */}
          {this.state.show ? (
            <div class="row text-center th-travel-bar">
              <div class="col-12">
                <div class="row">
                  <div class="col-2"></div>
                  <div class="col-5 text-left">
                    <span class="th-travel-bar-subhead">Adults (12 Yrs)</span>
                    <div class="input-group plus-minus-input">
                      <div class="input-group-button">
                        <button
                          type="button"
                          class="button hollow circle"
                          data-quantity="minus"
                          data-field="adult"
                          onClick={this.adultDecrement}
                        >
                          <i class="fa fa-minus" aria-hidden="true"></i>
                        </button>
                      </div>
                      <input
                        class="input-group-field"
                        type="number"
                        name="adult"
                        value={this.state.adultCount}
                      />
                      <div class="input-group-button">
                        <button
                          type="button"
                          class="button hollow circle"
                          data-quantity="plus"
                          data-field="adult"
                          onClick={this.adultIncrement}
                        >
                          <i class="fa fa-plus" aria-hidden="true"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="col-5 text-left">
                    <span class="th-travel-bar-subhead">Child (12 Yrs)</span>
                    <div class="input-group plus-minus-input">
                      <div class="input-group-button">
                        <button
                          type="button"
                          class="button hollow circle"
                          data-quantity="minus"
                          data-field="child"
                          onClick={this.childDecrement}
                        >
                          <i class="fa fa-minus" aria-hidden="true"></i>
                        </button>
                      </div>
                      <input
                        class="input-group-field"
                        type="number"
                        name="child"
                        value={this.state.childCount}
                      />
                      <div class="input-group-button">
                        <button
                          type="button"
                          class="button hollow circle"
                          data-quantity="plus"
                          data-field="child"
                          onClick={this.childIncrement}
                        >
                          <i class="fa fa-plus" aria-hidden="true"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          {/* toggle end */}
        </div>
      </div>
    );
  }
}

export default Counter;
