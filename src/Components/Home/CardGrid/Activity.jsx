/** @format */

import React from "react";
import Card from "../Card/PopularDestinationCard";
import Data from "../Data/ActivityData";

export default function Activity() {
  const Grid = Data.map((item, index) => {
    return (
      <Card
        tag1={item.tag1}
        tag2={item.tag2}
        image={item.src}
        header={item.header}
        content={item.content}
        price={item.price}
        span={item.span}
        id="activity"
      />
    );
  });
  return (
    <div class="container th-bg-grey pt-4 pb-1 th-container">
      <div class="row p-2 ">
        <div class="col-12 text-center">
          <h4 class="th-activity-title">popular activities and experiences</h4>
          <p class="th-activity-subtitle">
            9 Unique activities to complete it in a day’s trip
          </p>
        </div>
      </div>
      <div class="row ">
        <div class="th-inline-card">{Grid}</div>
      </div>
    </div>
  );
}
