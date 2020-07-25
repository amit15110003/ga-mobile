import React from "react";
import Card from "./Card";
import Data from "./TripData";

const grid = Data.map((item, index) => {
  return <Card header={item.header} content={item.content} />;
});

export default function Trip() {
  return (
    <div>
      <div class="container">
        <div class="row pt-3">
          <div class="col-12">
            <span class="th-detailpage-head">Trip Itinerary</span>
          </div>
        </div>
        <div class="accordion" id="accordionExample">
          {grid}
        </div>
      </div>
      <div class="container-fluid th-bg-grey mt-2">
        <div class="row p-2"></div>
      </div>
    </div>
  );
}
