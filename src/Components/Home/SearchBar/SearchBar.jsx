/** @format */

import React, { Component } from "react";
import axios from "axios";
import { Select } from "antd";
import CategoryOption from "../../Home/Option/Option";
const { Option } = Select;
class SearchBar extends Component {
  state = {
    // searchDate: moment().format("D MMM, yyyy"),
    isDestiDropOpen: false,
    isDateOpen: false,
    allDestinationList: [],
    search: "",
    selectedDestination: "",
    selectedCategory: {},
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
  handleCategoryChange = (value) => {
    this.setState({
      selectedCategory: value,
    });
  };
  render() {
    const { selectedDestination, selectedCategory } = this.state;
    const destinationOptions = this.state.allDestinationList?.map((item) => {
      return (
        <Option key={item?.id} value={item?.name} destination={item}>
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
      <>
        <CategoryOption handleCategoryChange={this.handleCategoryChange} />
        <div class="container">
          <div class="col-12 p-1 my-2 th-searchbar My-2">
            <div class="row px-3">
              <div
                class="col-9 p-0 "
                onMouseLeave={() => {
                  this.setState({
                    isDestiDropOpen: false,
                  });
                }}
              >
                <Select
                  className="w-100 th-br-6 th-select"
                  placeholder="Destination, budget, Duration, Theme.."
                  showSearch
                  status="error"
                  dropdownMatchSelectWidth={false}
                  getPopupContainer={(trigger) => trigger.parentNode}
                  optionLabelProp="label"
                  bordered={false}
                  filterOption={(input, options) => {
                    return (
                      options.value
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    );
                  }}
                  onChange={(e, value) => {
                    this.setState({
                      selectedDestination: value?.destination,
                    });
                  }}
                >
                  {destinationOptions}
                </Select>
              </div>
              <div class="col-3 p-0">
                <a
                  href={
                    selectedDestination == ""
                      ? `/packages`
                      : selectedDestination?.type === "state"
                      ? `/packages/${selectedDestination?.slug}?state=${selectedDestination?.id}&category=${selectedCategory?.id}`
                      : selectedDestination?.type === "city"
                      ? `/packages/${selectedDestination?.slug}?state=${selectedDestination?.state_id}&city=${selectedDestination?.id}&category=${selectedCategory?.id}`
                      : `/packages/${selectedDestination?.slug}?country=${selectedDestination?.id}&category=${selectedCategory?.id}`
                  }
                >
                  <button class="btn th-searchbar-btn col-12" type="submit">
                    Search
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SearchBar;
