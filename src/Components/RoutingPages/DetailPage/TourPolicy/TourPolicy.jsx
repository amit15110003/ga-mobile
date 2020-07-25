import React from "react";
import Card from "./Card";
import Data from "./PolicyData";
export default function Trip() {
  const grid = Data.map((item, index) => {
    return <Card header={item.header} content={item.content} />;
  });
  return (
    <div>
      <div class="container">
        <div class="row pt-3">
          <div class="col-12">
            <span class="th-detailpage-head">Tour Plolicy and Terms</span>
          </div>
        </div>
        <div class="accordion" id="accordionExample">
          {grid}
        </div>
      </div>
    </div>
  );
}
