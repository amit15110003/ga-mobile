/** @format */

import React from "react";
import Card from "./Card";
import Data from "./Data";
import axios from "axios";
import { Skeleton } from "antd";
import { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import moment from "moment";
import { FilterFilled } from "@ant-design/icons";
import Filters from "./Filters";

const mapStateToProps = ({ user, settings, dispatch }) => ({
  dispatch,
  settings,
  user,
});

const PackageList = (props) => {
  const urlParams = new URLSearchParams(window.location.search);
  const [packageList, setPackageList] = useState([]);
  const [packageLoading, setPackageLoading] = useState(false);
  const [packageCategoryList, setPackageCategoryList] = useState([]);
  const [sortBy, setSortBy] = useState("deals");
  const [travelDate, setTravelDate] = useState(
    props.settings.date
      ? moment(props.settings.date).format("YYYY-MM-DD")
      : moment().format("YYYY-MM-DD")
  );
  const [payload, setPayload] = useState({});
  const [showFilters, setShowFilters] = useState(false);
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);

  const fakeData = [1, 2, 3];
  const Grid = packageList?.map((item, index) => {
    return (
      <Card
        offer={item.offer}
        category={item.package_category__package_category_name}
        package_tag={item?.package_tag}
        package_img={item.package_img}
        package_name={item.package_name}
        duration={item.duration}
        pickup_location__city_name={item.pickup_location__city_name}
        city_cover={item.city_cover}
        package_amenities={item.package_amenities}
        price_tag={item.price_tag}
        total_price={item.total_price}
        span2={item.span2}
        saveMsg={item.saveMsg}
      />
    );
  });

  const fetchPackageList = (params = {}) => {
    let formData = new FormData();
    Object.keys(params).map((key) => {
      formData.append(key, params[key]);
    });
    setPackageLoading(true);
    axios
      .post(`/client-package/listview`, formData, {
        headers: {
          Authorization: "",
        },
      })
      .then((res) => {
        setPackageList(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setPackageLoading(false);
      });
  };
  const fetchPackageCategoryList = (params) => {
    axios
      .get(`/client-package/packagecategory`, {
        headers: {
          Authorization: "",
        },
        params: { ...params },
      })
      .then((res) => {
        if (res.status === 200) {
          setPackageCategoryList(res?.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const fetchStateList = (params) => {
    axios
      .get(`/client-destination/state`, {
        headers: {
          Authorization: "",
        },
        params: { ...params },
      })
      .then((res) => setStateList(res?.data))
      .catch((err) => {
        console.log(err);
      });
  };
  const fetchCityList = (params) => {
    axios
      .get(`/client-destination/city`, {
        headers: {
          Authorization: "",
        },
        params: { ...params },
      })
      .then((res) => {
        setCityList(res?.data?.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleFilter = (filterData) => {
    let obj = {};
    if (filterData?.selectedState) {
      obj["drop_state"] = filterData?.selectedState;
    }
    if (filterData?.selectedCity) {
      obj["drop_location"] = filterData?.selectedCity;
    }
    if (filterData?.selectedCategory) {
      obj["package_category"] = filterData?.selectedCategory;
    }
    if (filterData?.duration.length > 0) {
      obj["duration__gte"] = filterData?.duration[0];
      obj["duration__lte"] = filterData?.duration[1];
    }
    if (filterData?.price.length > 0) {
      obj["price_gte"] = filterData?.price[0];
      obj["price_lte"] = filterData?.price[1];
    }
    setPayload({ ...payload, ...obj });
  };
  const handleShowFilters = () => {
    setShowFilters(true);
  };
  const closeFilterDrawer = () => {
    setShowFilters(false);
  };

  useEffect(() => {
    if (Object.keys(payload).length > 0) {
      fetchPackageList(payload);
    }
  }, [payload]);
  useEffect(() => {
    fetchPackageCategoryList();
    fetchStateList({ status: true });
    let obj = { date: travelDate, is_customized: false, sort_by: sortBy };

    // obj.slug_city =
    if (urlParams.has("city")) {
      obj["drop_location"] = urlParams.get("city");
      fetchCityList({ state: urlParams.get("state") });
    }
    if (urlParams.has("state")) {
      obj["drop_state"] = urlParams.get("state");
    }
    if (urlParams.has("country")) {
      obj["slug_country"] = props?.match?.params.slug;
    }
    if (urlParams.has("category")) {
      obj["package_category"] = urlParams.get("category");
    }
    setPayload(obj);
  }, [window.location.href]);

  return (
    <div>
      <div class="container th-detail-header-fixed">
        <div class="row p-2 th-listpage-nav">
          <p
            class="th-detail-head my-auto text-capitalize"
            style={{ fontSize: 19 }}
          >
            <a href="/">
              {" "}
              <i class="fa fa-arrow-left p-1 th-arrow"></i>
            </a>
            {props?.match?.params.slug ? props?.match?.params.slug : "All"}
            &nbsp; Packages
          </p>
        </div>
      </div>
      {/* <div class="container mt-5 pt-4">
        <div class="row pt-2">
          <h4 class="th-cat-title col-12 text-truncate">
            10 Honeymoon Destinations
          </h4>
        </div>
      </div> */}

      {packageLoading ? (
        <div className="col-12 mt-5">
          <Skeleton style={{ opacity: ".6" }}></Skeleton>
        </div>
      ) : (
        <div class="container pt-3 mt-5">
          <div class="row">
            <div class="col-6 pt-2">
              <div class="row">
                <div class="col-12">
                  <h4 class="th-cat-title text-truncate">
                    {packageList.length} Packages
                  </h4>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="row">
                <div class="col-12 text-right">
                  <a class="th-btn-price-sort-l text-center p-2" href=" ">
                    <i class="fa fa-arrow-up pr-1 th-arrow"></i>Price
                  </a>
                  <a class="th-btn-price-sort-r text-center p-2" href=" ">
                    <i class="fa fa-arrow-down pr-1 th-arrow"></i>Price
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {packageLoading ? (
        fakeData.map((item, index) => (
          <div className="col-12">
            <Skeleton
              // className="th-card-data-img"
              style={{ opacity: ".6" }}
            ></Skeleton>
          </div>
        ))
      ) : (
        // <div class="th-inline-card">
        <div class="">{Grid}</div>
        // </div>
      )}
      {/* {showFilters ? ( */}
      <div>
        <Filters
          closeFilterDrawer={closeFilterDrawer}
          showFilters={showFilters}
          stateList={stateList}
          packageCategoryList={packageCategoryList}
          cityList={cityList}
          handleFilter={handleFilter}
        />
      </div>
      {/* ) : ( */}
      <div class="th-filter-btn py-1 px-2" id="th-filter-btn">
        <div className="th-pointer pr-2" onClick={handleShowFilters}>
          <FilterFilled className="mr-1" /> Filters
        </div>
      </div>
      {/* )} */}
    </div>
  );
};
export default withRouter(connect(mapStateToProps)(PackageList));
