/** @format */

import React from "react";
import axios from "axios";
import { Skeleton } from "antd";
import { useState, useEffect } from "react";

export default function Option() {
  const [cateloryList, setCategoryList] = useState([]);
  const [cateloryLoading, setCategoryLoading] = useState(false);
  const fakeData = [1, 2, 3, 4];

  const fetchCategoryList = (params = {}) => {
    setCategoryLoading(true);
    axios
      .get(`/client-package/packagecategory`, {
        headers: {
          Authorization: "",
        },
        params: { ...params },
      })
      .then((res) => {
        setCategoryList(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setCategoryLoading(false);
      });
  };

  useEffect(() => {
    fetchCategoryList();
  }, []);
  return (
    <div class="container-fluid pt-3 px-0">
      <div class=" row th-row text-center flex-wrap">
        {cateloryLoading
          ? fakeData.map((item, index) => (
              <div className="col-3">
                <Skeleton
                  // className="th-card-data-img"
                  style={{ opacity: ".6" }}
                ></Skeleton>
              </div>
            ))
          : cateloryList?.map((item) => (
              <div class=" col-2 p-1">
                <a href=" " class="th-cat-link">
                  <img src={item?.photo_desktop} alt=" " class="fluid-image" />
                  <p class="th-cat-name text-capitalize">
                    {item?.package_category_name}
                  </p>
                </a>
              </div>
            ))}

        {/* <div class=" col-2 p-0">
          <a href=" " class="th-cat-link">
            <img src={a} alt=" " class="fluid-image" />
            <p class="th-cat-name">Holidays</p>
          </a>
        </div>
        <div class=" col-2 p-0">
          <a href=" " class="th-cat-link">
            <img src={b} alt=" " class="fluid-image" />
            <p class="th-cat-name">Honeymoon</p>
          </a>
        </div>
        <div class=" col-2 p-0">
          <a href="lpnight.html" class="th-cat-link">
            <img src={c} alt=" " class="fluid-image" />
            <p class="th-cat-name">Group Tour</p>
          </a>
        </div>
        <div class=" col-2 p-0">
          <a href=" " class="th-cat-link">
            <img src={d} alt=" " class="fluid-image" />
            <p class="th-cat-name">Family Package</p>
          </a>
        </div>
        <div class=" col-2 p-0">
          <a href=" " class="th-cat-link">
            <img src={e} alt=" " class="fluid-image" />
            <p class="th-cat-name">Weekends</p>
          </a>
        </div>
      </div>
      <div class="row th-row d-flex justify-content-center text-center">
        <div class="col-2 p-0 ">
          <a href=" " class="th-cat-link">
            <img src={a1} alt=" " class="fluid-image" />
            <p class="th-cat-name">Heritage</p>
          </a>
        </div>
        <div class="col-2 p-0">
          <a href=" " class="th-cat-link">
            <img src={b1} alt=" " class="fluid-image" />
            <p class="th-cat-name">Beach</p>
          </a>
        </div>
        <div class="col-2 p-0">
          <a href=" " class="th-cat-link">
            <img src={c1} alt=" " class="fluid-image" />
            <p class="th-cat-name">Motorcycle Rent</p>
          </a>
        </div>
        <div class="col-2 p-0">
          <a href=" " class="th-cat-link">
            <img src={d1} alt=" " class="fluid-image" />
            <p class="th-cat-name">Adventure</p>
          </a>
        </div>
        <div class="col-2 p-0">
          <a href=" " class="th-cat-link">
            <img src={e1} alt=" " class="fluid-image" />
            <p class="th-cat-name">More Tour Theme</p>
          </a>
        </div> */}
      </div>
    </div>
  );
}
