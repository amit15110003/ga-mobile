/** @format */

import React from "react";
export default function CustomPackageCard(props) {
  return (
    <div class="th-card">
      <div class="th-card-type-3">
        <div class="th-card-ribbon">{props.offer}% off</div>

        <div
          class="th-card-data-img"
          style={{
            backgroundImage: `url(${props?.img})`,
          }}
        ></div>

        <div class="th-card-data p-2">
          <span class="th-card-title text-truncate">{props.description}</span>
          <span class="th-card-sub-title">
            {props.duration} Nights / {props.duration + 1} Days
            <span class=""> &bull; Ex {props.pickupLocation}</span>
          </span>
          <span class="th-card-sub-title-1">
            {props?.city_cover?.map((venue, index) => (
              <span>
                {venue}
                {index < props?.city_cover.length - 1 ? (
                  <span>&bull;</span>
                ) : null}
              </span>
            ))}
          </span>
          <div class="row pt-1">
            <div class="col-4">
              <span class="th-card-sub-title">Just in</span>
              <span class="th-card-price-strike">{props.offerPrice}</span>
            </div>
            <div class="col-8 text-right">
              <span class="th-card-price-saved">
                saved {props.totalPrice - props.offerPrice}
              </span>
              <span class="th-card-price">
                {props.totalPrice}
                <span class="th-card-pp"> per {props.type}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
