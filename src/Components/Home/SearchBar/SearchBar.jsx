/** @format */

import React, { Component } from "react";
import axios from "axios";
import { Select } from "antd";

const { Option } = Select;
class SearchBar extends Component {
  state = {
    // searchDate: moment().format("D MMM, yyyy"),
    isDestiDropOpen: false,
    isDateOpen: false,
    allDestinationList: [],
    search: "",
    citySelected: "",
  };

  componentDidMount() {
    this.fetchAllDestinationList({ status: true });
  }
  fetchAllDestinationList = (params = {}) => {
    axios
      .get(`/client-destination/all-destination`, {
        headers: {
          Authorization: "",
        },
        params: { ...params },
      })
      .then((res) =>
        this.setState({
          allDestinationList: res.data,
          // citySelected: data.data.results[0],
        })
      )
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const destinationOptions = this.state.allDestinationList?.map((item) => {
      return (
        <Option key={item?.id} value={item?.name}>
          <div className="py-1">
            <div className="" style={{ fontWeight: 700 }}>
              {item?.name}
            </div>
            <div>
              {item?.type == "state"
                ? item?.country_name
                : item?.type == "city"
                ? item?.state_name
                : null}
            </div>
          </div>
        </Option>
      );
    });
    return (
      <div class="container">
        <div class="col-12 p-1 my-2 th-searchbar My-2">
          <div class="row px-3">
            <div class="col-9 p-0 ">
              <Select
                className="w-100 th-br-6 th-select"
                placeholder="Destination, budget, Duration, Theme.."
                showSearch
                status="error"
                dropdownMatchSelectWidth={false}
                getPopupContainer={(trigger) => trigger.parentNode}
                optionLabelProp="label"
                bordered={false}
              >
                {destinationOptions}
              </Select>
            </div>
            <div class="col-3 p-0">
              <button class="btn th-searchbar-btn col-12" type="submit">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
