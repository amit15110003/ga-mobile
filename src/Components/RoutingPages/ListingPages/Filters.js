/** @format */

import React, { useState, useEffect } from "react";
import { Drawer, Select, Slider } from "antd";

const { Option } = Select;
const Filters = (props) => {
  console.log("FilterProps", props);
  const [selectedState, setSelectedState] = useState("");
  const [duration, setDuration] = useState([0, 20]);
  const [price, setPrice] = useState([5000, 90000]);

  const stateOptions = props?.stateList?.map((item) => {
    return (
      <Option value={item.id} key={item.id}>
        {item.state_name}
      </Option>
    );
  });

  const categoryOptions = props?.packageCategoryList?.map((item) => {
    return (
      <Option value={item.id} key={item.id}>
        {item.package_category_name}
      </Option>
    );
  });

  const handleDuration = (value) => {
    setDuration([value[0], value[1]]);
  };
  const handlePrice = (value) => {
    setPrice([value[0], value[1]]);
  };
  return (
    <div>
      <Drawer
        title={<span className="th-filter-title th-lato th-bold">Filters</span>}
        placement={"bottom"}
        closable={null}
        onClose={props?.closeFilterDrawer}
        open={props?.showFilters}
        key={"filter-drawer"}
        className="th-filter-drawer"
        height={"90vh"}
      >
        <div className="row">
          <div className="col-12 th-filter-select">
            <div className="pb-2 th-filter-title th-bold">Destination</div>
            <Select
              className="w-100"
              placeholder="Destination"
              showSearch
              getPopupContainer={(trigger) => trigger.parentNode}
              optionLabelProp="children"
              bordered={true}
              filterOption={(input, options) => {
                return (
                  options.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
                );
              }}
              onChange={(e, value) => {
                setSelectedState(value?.id);
              }}
            >
              {stateOptions}
            </Select>
          </div>
          <div className="col-12 mt-4 th-filter-select">
            <div className="pb-2 th-filter-title th-bold">City</div>
            <div>
              <Select
                className="w-100"
                placeholder="City"
                showSearch
                getPopupContainer={(trigger) => trigger.parentNode}
                optionLabelProp="children"
                bordered={true}
                filterOption={(input, options) => {
                  return (
                    options.value.toLowerCase().indexOf(input.toLowerCase()) >=
                    0
                  );
                }}
                onChange={(e, value) => {
                  setSelectedState(value?.id);
                }}
              >
                {stateOptions}
              </Select>
            </div>
          </div>
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
            <div className="pb-2 th-filter-title th-bold">Category</div>
            <div>
              <Select
                className="w-100"
                placeholder="City"
                showSearch
                getPopupContainer={(trigger) => trigger.parentNode}
                optionLabelProp="children"
                bordered={true}
                filterOption={(input, options) => {
                  return (
                    options.value.toLowerCase().indexOf(input.toLowerCase()) >=
                    0
                  );
                }}
                onChange={(e, value) => {
                  setSelectedState(value?.id);
                }}
              >
                {categoryOptions}
              </Select>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Filters;
