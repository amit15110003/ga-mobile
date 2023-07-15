/** @format */

import React, { useState, useEffect, useRef } from "react";
import { Button, Drawer, Select, Slider, Form } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import axios from "axios";

const urlParams = new URLSearchParams(window.location.search);
const { Option } = Select;
const Filters = (props) => {
  const formRef = useRef();
  const [selectedState, setSelectedState] = useState();
  const [selectedCity, setSelectedCity] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const [cityList, setCityList] = useState(props?.cityList);
  const [duration, setDuration] = useState([0, 20]);
  const [price, setPrice] = useState([5000, 90000]);

  const stateOptions = props?.stateList?.map((item) => {
    return (
      <Option value={item?.id} key={item?.id}>
        {item?.state_name}
      </Option>
    );
  });
  const cityOptions = cityList?.map((item) => {
    return (
      <Option value={item?.id} key={item?.id}>
        {item?.city_name}
      </Option>
    );
  });

  const categoryOptions = props?.packageCategoryList?.map((item) => {
    return (
      <Option value={item?.id} key={item?.id}>
        {item?.package_category_name}
      </Option>
    );
  });

  const handleDuration = (value) => {
    setDuration([value[0], value[1]]);
  };
  const handlePrice = (value) => {
    setPrice([value[0], value[1]]);
  };
  const handleStateChange = (each) => {
    setSelectedCity();
    setCityList([]);
    if (each) {
      setSelectedState(each?.value);
      console.log("oooooo", each);
      fetchCityList({ state: each.value });
    } else {
      setSelectedState();
    }
  };
  useEffect(() => {
    if (props.showFilters) {
      if (urlParams.has("state")) {
        // setSelectedState(urlParams.get("state"));
        formRef.current.setFieldsValue({
          state: props?.stateList?.filter(
            (el) => el?.id == urlParams.get("state")
          )[0]?.state_name,
        });
        // fetchCityList({ state: urlParams.get("state") });
      }
      if (urlParams.has("city")) {
        setSelectedCity(urlParams.get("city"));
        formRef.current.setFieldsValue({
          city: props?.cityList?.filter(
            (el) => el?.id == urlParams.get("city")
          )[0]?.city_name,
        });
      }
      if (urlParams.has("category")) {
        setSelectedState(urlParams.get("state"));
        formRef.current.setFieldsValue({
          category: props?.packageCategoryList?.filter(
            (el) => el?.id == urlParams.get("category")
          )[0]?.package_category_name,
        });
      }
    }
  }, [props.showFilters]);
  const fetchCityList = (params) => {
    axios
      .get(`/client-destination/city`, {
        headers: {
          Authorization: "",
        },
        params: { ...params },
      })
      .then((res) => {
        // if (res?.data?.status_code == 200) {
        setCityList(res?.data?.results);
        if (urlParams.has("city")) {
          formRef.current.setFieldsValue({
            city: res?.data?.results?.filter(
              (el) => el?.id == urlParams.get("city")
            )[0]?.city_name,
          });
          // }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Drawer
        title={<span className="th-filter-title th-lato th-bold">Filters</span>}
        placement={"bottom"}
        // closable={null}
        onClose={props?.closeFilterDrawer}
        open={props?.showFilters}
        key={"filter-drawer"}
        className="th-filter-drawer"
        height={"90vh"}
        footer={
          <div className="d-flex justify-content-center">
            <button
              className="th-btn btn text-white w-75"
              onClick={() => {
                props.handleFilter({
                  selectedState,
                  selectedCity,
                  price,
                  duration,
                  selectedCategory,
                });
                props.closeFilterDrawer();
              }}
            >
              Filter
            </button>
          </div>
        }
      >
        <Form ref={formRef} layout={"vertical"}>
          <div className="row">
            <div className="col-12 th-filter-select">
              <Form.Item name="state" label="State">
                {/* <div className="pb-2 th-filter-title th-bold">State</div> */}
                <Select
                  className="w-100"
                  placeholder="State"
                  showSearch
                  getPopupContainer={(trigger) => trigger.parentNode}
                  optionLabelProp="children"
                  bordered={true}
                  filterOption={(input, options) => {
                    return (
                      options.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    );
                  }}
                  onChange={(e, value) => {
                    handleStateChange(value);
                  }}
                >
                  {stateOptions}
                </Select>
              </Form.Item>
            </div>
            {selectedState && (
              <div className="col-12 mt-4 th-filter-select">
                <Form.Item name="city" label="City">
                  <Select
                    className="w-100"
                    placeholder="City"
                    showSearch
                    getPopupContainer={(trigger) => trigger.parentNode}
                    optionLabelProp="children"
                    bordered={true}
                    filterOption={(input, options) => {
                      return (
                        options.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      );
                    }}
                    onChange={(e) => {
                      setSelectedCity(e);
                    }}
                  >
                    {cityOptions}
                  </Select>
                </Form.Item>
              </div>
            )}
            <div className="col-12 mt-4">
              <div className="pb-2 th-filter-title th-bold">Price</div>
              <div>
                <Slider
                  tipFormatter={null}
                  min={5000}
                  max={100000}
                  step={1000}
                  onChange={handlePrice}
                  defaultValue={price}
                  range={{
                    draggableTrack: true,
                  }}
                />
                <div class="row ">
                  <span className="col-6 th-lato th-12">
                    <label className="th-lato th-12 th-light-grey">
                      ₹ {price[0]}
                    </label>
                  </span>

                  <span className="col-6 th-lato th-12 th-light-grey text-right">
                    <label className="th-lato th-12 th-light-grey">
                      ₹ {price[1]}
                    </label>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 mt-4">
              <div className="pb-1 th-filter-title th-bold">Duration</div>
              <div>
                <Slider
                  tipFormatter={null}
                  min={0}
                  max={20}
                  step={1}
                  onChange={handleDuration}
                  defaultValue={duration}
                  range={{
                    draggableTrack: true,
                  }}
                />
                <div class="row ">
                  <span className="col-6 th-lato th-12">
                    <label className="th-lato th-12 th-light-grey">
                      {duration[0]} days
                    </label>
                  </span>

                  <span className="col-6 th-lato th-12 th-light-grey text-right">
                    <label className="th-lato th-12 th-light-grey">
                      {duration[1]} days
                    </label>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 mt-4 th-filter-select">
              <Form.Item name="category" label="Category">
                <Select
                  className="w-100"
                  placeholder="Category"
                  showSearch
                  getPopupContainer={(trigger) => trigger.parentNode}
                  optionLabelProp="children"
                  bordered={true}
                  filterOption={(input, options) => {
                    return (
                      options.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    );
                  }}
                  onChange={(e) => {
                    setSelectedCategory(e);
                  }}
                >
                  {categoryOptions}
                </Select>
              </Form.Item>
            </div>
          </div>
        </Form>
      </Drawer>
    </div>
  );
};

export default Filters;
