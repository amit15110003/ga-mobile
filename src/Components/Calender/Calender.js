import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class MyCalendar extends Component {
  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        withPortal
        // monthsShown={3}
        dateFormat="dd MMM yyyy"
        className="th-calender-border th-grey-2 th-bold"
      />
    );
  }
}
export default MyCalendar;
