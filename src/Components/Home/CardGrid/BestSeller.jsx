import React from "react";
import Card from "../Card/Card";

import Data from "../Data/BestSellerData";
export default function BestSeller() {
  const grid = Data.map((item, index) => {
    return (
      <Card
        tag={item.tag}
        heading={item.heading}
        price={item.price}
        content={item.content}
      />
    );
  });

  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="th-inline-card">
            <div class="wraper">{grid}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
