import React from "react";
import Card from "./Card";
import Data from "./Data";

const Grid = Data.map((item, index) => {
  return (
    <Card
      tag1={item.tag1}
      tag2={item.tag2}
      tag3={item.tag3}
      src={item.src}
      header={item.header}
      day={item.day}
      place={item.place}
      city1={item.city1}
      city2={item.city2}
      city3={item.city3}
      span={item.span}
      facility={item.facility}
      oldPrice={item.oldPrice}
      newPrice={item.newPrice}
      span2={item.span2}
      saveMsg={item.saveMsg}
    />
  );
});

export default function Packages() {
  return (
    <div>
      <div class="container py-4">
        <div class="row">
          <div class="col-6 pt-2">
            <div class="row">
              <div class="col-12">
                <h4 class="th-cat-title text-truncate">41 Packages</h4>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="row">
              <div class="col-12 text-right">
                <a class="th-btn-price-sort-l text-center p-2" href=" ">
                  <i class="fa fa-arrow-up pr-1 th-arrow"></i>Price
                </a>
                <a class="th-btn-price-sort-r text-center p-2" href=" ">
                  <i class="fa fa-arrow-down pr-1 th-arrow"></i>Price
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {Grid}
    </div>
  );
}
