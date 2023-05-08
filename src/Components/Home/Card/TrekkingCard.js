/** @format */

import React from "react";
export default function TrekkingCard(props) {
  return (
    <div class="th-card">
      <div class="th-card-type-3">
        {props.price?.offer > 0 ? (
          <div class="th-card-ribbon">{props?.price?.offer} % off</div>
        ) : null}

        <div
          class="th-card-data-img"
          style={{
            backgroundImage: `url(${props?.img})`,
          }}
        ></div>

        <div class="th-card-data p-2">
          <span class="th-card-title text-truncate">{props.title}</span>
          <span class="th-card-sub-title">{props.duration} Days</span>
          <span className=" th-dif-level-bar px-0 my-auto">
            <div
              className={`th-dif-level-${
                props.level === "hard" ? "difficult" : "easy"
              } px-3`}
            >
              {props.level === "hard" ? "Difficult" : props.level}
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}
