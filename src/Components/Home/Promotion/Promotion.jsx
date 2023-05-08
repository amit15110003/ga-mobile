/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Skeleton } from "antd";

export default function Promotion() {
  const [promotionDetails, setPromotionDetails] = useState([]);
  const [promotionLoading, setPromotionLoading] = useState(false);
  const fetchPromotionDetails = (params = {}) => {
    setPromotionLoading(true);
    axios
      .get(`/client-web-master-apiv1/offerslider2`, {
        headers: {
          Authorization: "",
        },
        params: { ...params },
      })
      .then((res) => {
        setPromotionDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setPromotionLoading(false);
      });
  };

  useEffect(() => {
    fetchPromotionDetails();
  }, []);
  return (
    <div>
      <div class="container">
        <div class="row py-3">
          <div class="col-12 ">
            <div class=" th-card-promotion " style={{}}>
              {promotionLoading ? (
                <div className="col-12">
                  <Skeleton
                    // className="th-card-data-img"
                    style={{ opacity: ".6" }}
                  ></Skeleton>
                </div>
              ) : (
                promotionDetails?.map((item, i) => (
                  <div class="col-12 py-2">
                    <div class="my-auto">
                      <span class="th-card-promotion-title">
                        {item?.headline}
                      </span>
                      <span class="th-card-promotion-subtitle">
                        {item?.sub_headline}
                      </span>
                      <a href=" " class="btn th-btn my-2">
                        {item?.button_title}
                      </a>
                      <span class="pl-3 text-white">{item?.offer}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
