/** @format */

import React from "react";
import CustomPackageCard from "../Card/CustomPackageCard";
import moment from "moment";
import axios from "axios";
import { Skeleton } from "antd";
import { useState, useEffect } from "react";

function CustomPackage(props) {
  const [customPackageList, setCustomPackageList] = useState([]);
  const [customPackageLoading, setCustomPackageLoading] = useState(false);
  const fakeData = [1, 2, 3];
  const Grid = customPackageList?.map((item, index) => {
    return (
      <CustomPackageCard
        tag={item.dest_ribbon}
        img={item.dest_img}
        header={item.dest_descr}
        packageCount={item.additional_info?.count}
        // packageCount={item.price}
        // span={item.span}
        id="destination"
      />
    );
  });

  const fetchCustomPackageList = (params = {}) => {
    setCustomPackageLoading(true);
    axios
      .get(`/client-web-master-apiv1/custompackageslider`, {
        headers: {
          Authorization: "",
        },
        params: { ...params },
      })
      .then((res) => {
        setCustomPackageList(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setCustomPackageLoading(false);
      });
  };

  useEffect(() => {
    fetchCustomPackageList({ date: moment().format("YYYY-MM-DD") });
  }, []);
  return (
    <div>
      <div className="container pt-3 pb-1">
        <div className="col-12 px-0 py-2">
          {customPackageLoading
            ? fakeData.map((item, index) => (
                <div className="col-4">
                  <Skeleton
                    // className="th-card-data-img"
                    style={{ opacity: ".6" }}
                  ></Skeleton>
                </div>
              ))
            : customPackageList
                ?.filter((item) => item?.slider_package.length > 0)
                .map((item, index) => {
                  return (
                    <>
                      <div className="row pt-3">
                        <h4 className="th-cat-title col-9 text-truncate">
                          {item?.package_slider_name}
                        </h4>
                        <h4 className="th-cat-view-all col-3 text-right">
                          view all
                        </h4>
                      </div>

                      <div className="th-inline-card">
                        {item?.slider_package?.map((each, index) => {
                          return (
                            <CustomPackageCard
                              offer={each?.offer}
                              img={each?.package_img}
                              description={each?.package__package_name}
                              offerPrice={each?.offer_price}
                              totalPrice={each?.total_price}
                              duration={each?.package__duration}
                              city_cover={each?.city_cover}
                              pickupLocation={
                                each?.package__pickup_location__city_name
                              }
                              type={each?.package__price_tag}
                              packageCount={each?.additional_info?.count}
                              id="destination"
                            />
                          );
                        })}
                      </div>
                    </>
                  );
                })}
        </div>
      </div>
    </div>
  );
}

export default CustomPackage;
