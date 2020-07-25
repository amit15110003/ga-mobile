import React from "react";
import Card from "../../Cards/DetailCard";
import Data from "./Data";
import Counter from "./Counter";

export default function Main() {
  const grid = Data.map((item, index) => {
    return (
      <Card
        title1={item.title1}
        title2={item.title2}
        src={item.src}
        header={item.header}
        tag1={item.tag1}
        tag2={item.tag2}
        item1={item.item1}
        item2={item.item2}
        item3={item.item3}
        item4={item.item4}
        oldPrice={item.oldPrice}
        span1={item.span1}
        price={item.price}
        span2={item.span2}
        saveMsg={item.saveMsg}
      />
    );
  });
  return (
    <div>
      <div class="container th-detail-header-fixed">
        <div class="row p-2 th-listpage-nav">
          <p class="th-detail-head my-auto">
            <a href="index.html">
              {" "}
              <i class="fa fa-arrow-left p-1 th-arrow"></i>
            </a>
            Land of lama - Spiti Valley Volvo
          </p>
        </div>
      </div>
      <div class="container mt-5">
        {grid}
        <Counter />
      </div>
      <div class="container-fluid th-bg-grey mt-2">
        <div class="row p-2"></div>
      </div>
    </div>
  );
}
