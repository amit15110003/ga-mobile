/** @format */

import React from "react";
import Card from "./Card";
import Data from "./Data";
import axios from "axios";
import { Skeleton } from "antd";
import { useState, useEffect } from "react";

export default function Packages() {
  const [packageList, setPackageList] = useState([]);
  const [packageLoading, setPackageLoading] = useState(false);
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

  useEffect(() => {
    fetchPackageList({
      date: "2023-05-09",
      is_customized: false,
      sort_by: "deals",
    });
  }, []);
  return (
    <div>
      <div class="container py-4">
        <div class="row">
          <div class="col-6 pt-2">
            <div class="row">
              <div class="col-12">
                <h4 class="th-cat-title text-truncate">41 Packages</h4>
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
    </div>
  );
}
