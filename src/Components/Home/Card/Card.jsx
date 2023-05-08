/** @format */

import React from "react";

export default function Card(props) {
  return (
    <div class="th-card">
      <div class="th-card-body-bestseller">
        <div
          class="th-card-img"
          style={{
            backgroundImage: `url(${props?.bg_img})`,
            backgroundBlendMode: "multiply",
            backgroundColor: "#8a9bad",
          }}
        >
          <div class="row py-2 px-3">
            <div class="th-card-bestseller">{props.tag}</div>
            <div class="col-12 py-2">
              <span class="th-card-a">{props.heading}</span>
              <br />
              <span class="th-card-price">₹ {Math.round(props.price)}</span>
              <div class="row pt-3">
                <p class="col-9 th-card-offer">{props.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
