/** @format */

import React from "react";

export default function Card(props) {
  console.log("rohan", props?.packageDetails);
  return (
    <a
      href={
        props?.packageDetails?.state?.slug
          ? `/packages/${props?.packageDetails?.state?.slug}?state=${props?.packageDetails?.state?.id}`
          : `/packages/${props?.packageDetails?.city?.slug}?state=${props?.packageDetails?.city_state}&city=${props?.packageDetails?.city?.id}`
      }
    >
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
    </a>
  );
}
