/** @format */

import React from "react";

export default function Card(props) {
  return (
    <div class="th-card">
      {props.id === "destination" ? (
        <div class="th-card-type-1">
          <div class="th-card-ribbon">{props.tag}</div>
          <div
            class="th-card-data-img"
            style={{
              backgroundImage: `url(${props?.img})`,
              position: "relative",
            }}
          ></div>
          <div class="th-card-data p-2 th-destination-info-card">
            <span class="th-card-title text-truncate">{props.header} </span>
            <span class="th-card-price">{props.packageCount}+ packages</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
