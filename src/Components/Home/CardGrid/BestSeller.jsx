/** @format */

import React from "react";
import Card from "../Card/Card";
import axios from "axios";
import { Skeleton } from "antd";
import { useState, useEffect } from "react";
import Data from "../Data/BestSellerData";

export default function BestSeller() {
  const [bestSellerList, setBestSellerList] = useState([]);
  const [bestSellerLoading, setBestSellerLoading] = useState(false);
  const fakeData = [1, 2, 3];
  const grid = bestSellerList?.map((item, index) => {
    return (
      <Card
        tag={item?.offer_badge}
        heading={"Just In"}
        price={item?.offer_price}
        content={item?.title}
        bg_img={item?.product_image}
      />
    );
  });

  const fetchBestSellerList = (params = {}) => {
    setBestSellerLoading(true);
    axios
      .get(`/client-web-master-apiv1/offerslider`, {
        headers: {
          Authorization: "",
        },
        params: { ...params },
      })
      .then((res) => {
        setBestSellerList(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setBestSellerLoading(false);
      });
  };

  useEffect(() => {
    fetchBestSellerList();
  }, []);

  return (
    <div>
      <div class="container">
        <div class="row py-2">
          {bestSellerLoading ? (
            fakeData.map((item, index) => (
              <div className="col-4">
                <Skeleton
                  // className="th-card-data-img"
                  style={{ opacity: ".6" }}
                ></Skeleton>
              </div>
            ))
          ) : (
            <div class="th-inline-card">
              <div class="wraper">{grid}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
