/** @format */

import React from "react";
import TrekkingCard from "../Card/TrekkingCard";
import Data from "../Data/DestinationData";
import axios from "axios";
import { Skeleton } from "antd";
import { useState, useEffect } from "react";

function Trekking(props) {
  const [trekkingList, setTrekkingList] = useState([]);
  const [trekkingLoading, setTrekkingLoading] = useState(false);
  const fakeData = [1, 2, 3];
  const Grid = trekkingList?.map((item, index) => {
    return (
      <TrekkingCard
        price={item.trek_price}
        img={item.trek_img}
        title={item.trek__trek_name}
        packageCount={item.additional_info?.count}
        duration={item.trek__duration}
        level={item.trek__difficulty_type}
        // span={item.span}
        id="destination"
      />
    );
  });

  const fetchTrekkingList = (params = {}) => {
    setTrekkingLoading(true);
    axios
      .get(`/client-web-master-apiv1/popular_trekking_slider`, {
        headers: {
          Authorization: "",
        },
        params: { ...params },
      })
      .then((res) => {
        setTrekkingList(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setTrekkingLoading(false);
      });
  };

  useEffect(() => {
    fetchTrekkingList({ status: true });
  }, []);
  return (
    <div>
      <div class="container pt-3 pb-1">
        <div class="row">
          <h4 class="th-cat-title col-8 text-truncate">popular Trekking</h4>
          <h4 class="th-cat-view-all col-4 text-right">view all</h4>
        </div>

        <div class="row py-2">
          {trekkingLoading ? (
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

export default Trekking;
