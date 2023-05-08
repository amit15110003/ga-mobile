/** @format */

import React from "react";
export default function ExclusiveDealsCard(props) {
  return (
    <div class="">
      <div class="th-card-type-3">
        <div class="th-card-ribbon">{props?.badge_offer}</div>

        <div
          class="th-card-data-img"
          style={{
            backgroundImage: `url(${props?.offer_image})`,
          }}
        ></div>

        <div class="th-card-data p-2">
          <span class="th-card-title text-truncate th-lato">{props.title}</span>
          <span class="d-flex">
            <span class="th-card-orange-ribbon">{props.badge}% off</span>
            <span class="th-card-price-strike pl-3">{props.price}</span>
          </span>
          <span class="th-card-price">
            {Math.round(props.price - (props.price * props.badge) / 100)}
            <span class="th-card-pp"> per person</span>
          </span>
        </div>
      </div>
    </div>
  );
}
