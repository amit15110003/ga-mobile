import React, { Component } from "react";
export default class Card extends Component {
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
      <div class="th-trip-itinerary-info">
        <div class="th-trip-itinerary-head px-0">
          <h2 class="mb-0">
            <button
              class="btn th-trip-itinerary-link px-0 col-12"
              type="button"
              onClick={this.toggleShow}
            >
              <span class="float-left">{this.props.header}</span>{" "}
              <span class="float-right th-trip-itinerary-icon">
                {this.state.show ? (
                  <i class="fa fa-angle-down"></i>
                ) : (
                  <i class="fa fa-angle-up"></i>
                )}
              </span>
            </button>
          </h2>
        </div>
        <div class="show">
          {this.state.show ? (
            <div class="th-trip-itinerary-body px-0">{this.props.content}</div>
          ) : null}
        </div>
      </div>
    );
  }
}
