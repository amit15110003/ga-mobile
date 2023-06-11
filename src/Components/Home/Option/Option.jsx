/** @format */

import React from "react";
import axios from "axios";
import { Skeleton } from "antd";
import { useState, useEffect } from "react";

export default function Option(props) {
  const [cateloryList, setCategoryList] = useState([]);
  const [cateloryLoading, setCategoryLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState({});
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
        if (res?.data.length > 0) {
          setCategoryList(res.data);
          setSelectedCategory(res.data[0]);
        }
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

  useEffect(() => {
    if (Object.keys(selectedCategory).length > 0) {
      props.handleCategoryChange(selectedCategory);
    }
  }, [selectedCategory]);

  return (
    <div class="container-fluid pt-3 px-2">
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
              <div
                class="col p-1"
                onClick={() => {
                  setSelectedCategory(item);
                }}
              >
                <img src={item?.photo_desktop} alt=" " class="fluid-image" />
                <p
                  class="th-cat-name text-capitalize"
                  style={{
                    borderBottom:
                      selectedCategory.id == item?.id
                        ? "2px solid #f84b0f "
                        : null,
                  }}
                >
                  {item?.package_category_name}
                </p>
              </div>
            ))}
      </div>
    </div>
  );
}
