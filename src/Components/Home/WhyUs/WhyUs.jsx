/** @format */

import React, { useState, useEffect } from "react";
import One from "../../../Assets/Images/WhyUs/1.svg";
import Two from "../../../Assets/Images/WhyUs/2.svg";
import Three from "../../../Assets/Images/WhyUs/3.svg";
import Four from "../../../Assets/Images/WhyUs/4.svg";
import Five from "../../../Assets/Images/WhyUs/5.svg";
import axios from "axios";
import { Skeleton } from "antd";

export default function WhyUs() {
  const [whyUsList, setWhyUsList] = useState([]);
  const [whyUsLoading, setWhyUsLoading] = useState(false);
  const fakeData = [1, 2, 3];
  const fetchWhyusList = (params = {}) => {
    setWhyUsLoading(true);
    axios
      .get(`/client-web-master-apiv1/whybookus`, {
        headers: {
          Authorization: "",
        },
        params: { ...params },
      })
      .then((res) => {
        setWhyUsList(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setWhyUsLoading(false);
      });
  };

  useEffect(() => {
    fetchWhyusList();
  }, []);
  return (
    <div class="th-service container py-4 px-3">
      <h6 class="th-service-head text-center">Why Book with us</h6>
      <p class="th-service-subhead text-center">
        Most trusted and largest Travel Mraketplace
      </p>
      {whyUsLoading
        ? fakeData.map((item, index) => (
            <div className="col-12">
              <Skeleton
                // className="th-card-data-img"
                style={{ opacity: ".6" }}
              ></Skeleton>
            </div>
          ))
        : whyUsList.map((item, index) => {
            return (
              <div class="row py-2 align-items-center">
                <div class="col-3 text-center">
                  <img src={item?.logo} alt="" />
                </div>
                <div class="col-9">
                  <span class="th-service-title">{item?.title}</span>
                  <br />
                  <span class="th-service-subtitle">{item?.content}</span>
                </div>
              </div>
            );
          })}
    </div>
  );
}
