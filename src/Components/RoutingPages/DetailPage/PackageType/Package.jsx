import React from "react";
import Card from "./Card";

const Data = {
  price: "₹15,999",
  oldPrice: "₹20,999",
  tag: "25% off"
};

export default function Package() {
  return (
    <div>
      <div class="container">
        <div class="row pt-3">
          <div class="col-12">
            <span class="th-detailpage-head">Package type- Hotel Include</span>
          </div>
        </div>
        <div class="row">
          <span class="th-detail-card-places col-12">3 options available</span>
        </div>
        <div class="accordion" id="budget-plans">
          <Card
            header="Budget"
            price={Data.price}
            oldPrice={Data.oldPrice}
            tag={Data.tag}
          />

          <Card
            header="Standard"
            price={Data.price}
            oldPrice={Data.oldPrice}
            tag={Data.tag}
          />

          <Card
            header="Deluxe"
            price={Data.price}
            oldPrice={Data.oldPrice}
            tag={Data.tag}
          />
        </div>
      </div>
      <div class="container-fluid th-bg-grey mt-2">
        <div class="row p-2"></div>
      </div>
    </div>
  );
}
