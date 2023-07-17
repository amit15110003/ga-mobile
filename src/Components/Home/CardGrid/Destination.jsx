/** @format */

import React from "react";
import PopularDestinationCard from "../Card/PopularDestinationCard";
import Data from "../Data/DestinationData";
import axios from "axios";
import { Skeleton } from "antd";
import { useState, useEffect } from "react";

function Destination(props) {
  const [popularDestinationList, setPopularDestinationList] = useState([]);
  const [popularDestinationLoading, setPopularDestinationLoading] =
    useState(false);
  const fakeData = [1, 2, 3];
  const Grid = popularDestinationList?.map((item, index) => {
    return (
      <PopularDestinationCard
        tag={item.dest_ribbon}
        img={item.dest_img}
        header={item.dest_descr}
        packageCount={item.additional_info?.count}
        // packageCount={item.price}
        // span={item.span}
        packageDetails={item}
        id="destination"
      />
    );
  });

  const fetchPopularDestinationList = (params = {}) => {
    setPopularDestinationLoading(true);
    axios
      .get(`/client-web-master-apiv1/destinationslider`, {
        headers: {
          Authorization: "",
        },
        params: { ...params },
      })
      .then((res) => {
        let destinations = res.data.filter(
          (item) => item?.des_type !== "country"
        );
        setPopularDestinationList(destinations);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setPopularDestinationLoading(false);
      });
  };

  useEffect(() => {
    fetchPopularDestinationList({ status: true });
  }, []);
  return (
    <div>
      <div class="container pt-3 pb-1">
        <div class="row">
          <h4 class="th-cat-title col-8 text-truncate">popular destination</h4>
          <a href="/packages" class="col-4">
            <h4 class="th-cat-view-all w-100 text-right">view all</h4>
          </a>
        </div>

        <div class="row py-2">
          {popularDestinationLoading ? (
            fakeData.map((item, index) => (
              <div className="col-4">
                <Skeleton
                  // className="th-card-data-img"
                  style={{ opacity: ".6" }}
                ></Skeleton>
              </div>
            ))
          ) : (
            <div class="th-inline-card">{Grid}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Destination;
