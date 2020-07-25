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
              backgroundImage:
                "url('https://www.poyry.com/sites/default/files/styles/article_project/public/zurich_switzerland_0.jpg?itok=4aGSJg72')"
            }}
          ></div>
          <div class="th-card-data p-2">
            <span class="th-card-title text-truncate">{props.header} </span>
            <span class="th-card-sub-title text-truncate">{props.content}</span>
            <span class="th-card-price">{props.price}</span>
            <span class="th-card-pp text-truncate">{props.span}</span>
          </div>
        </div>
      ) : null}
      {props.id === "activity" ? (
        <div class="th-card-type-2">
          <div
            class="th-card-data-img"
            style={{
              backgroundImage:
                "url('https://q-cf.bstatic.com/images/hotel/max1024x768/205/205524293.jpg')"
            }}
          >
            <div class="th-card-ribbon1">{props.tag1}</div>
            <div class="th-card-ribbon2">{props.tag2}</div>
          </div>
          <div class="th-card-data p-2">
            <span class="th-card-title text-truncate">{props.header} </span>
            <span class="th-card-sub-title text-truncate">{props.content}</span>
            <span class="th-card-price">{props.price}</span>
            <span class="th-card-pp text-trucated">{props.span}</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
