/** @format */

import React from "react";
import ExclusiveDealsCard from "../Card/ExclusiveDealsCard";
import axios from "axios";
import { Skeleton } from "antd";
import { useState, useEffect } from "react";

const ExclusiveDeals = () => {
  const [exclusiveDealsList, setExclusiveDealsList] = useState([]);
  const [exclusiveDealsLoading, setExclusiveDealsLoading] = useState(false);
  const fakeData = [1, 2, 3];
  const Grid = exclusiveDealsList?.map((item, index) => {
    return (
      <ExclusiveDealsCard
        offer_image={item.offer_image}
        url={item.url}
        price={item.price}
        title={item.title}
        badge={item.badge}
        badge_offer={item.badge_offer}
        id="deals"
      />
    );
  });

  const fetchExclusiveDealsList = (params = {}) => {
    setExclusiveDealsLoading(true);
    axios
      .get(`/client-web-master-apiv1/offerslidertop`, {
        headers: {
          Authorization: "",
        },
        params: { ...params },
      })
      .then((res) => {
        setExclusiveDealsList(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setExclusiveDealsLoading(false);
      });
  };

  useEffect(() => {
    fetchExclusiveDealsList({ status: true });
  }, []);
  return (
    <>
      {exclusiveDealsList?.length > 0 && (
        <div>
          <div class="container pt-3 pb-1">
            <div class="row">
              <h4 class="th-cat-title col-8 text-truncate">Exclusive Deals</h4>
            </div>

            <div class="row py-2">
              {exclusiveDealsLoading ? (
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
      )}
    </>
  );
};

export default ExclusiveDeals;
