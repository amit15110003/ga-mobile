import React from "react";
export default function Card(props) {
  return (
    <div class="container pt-3">
      <div class="row">
        <div class="th-card-type-4">
          <div class="th-lp-card1-ribbon">{props.tag1}</div>
          <div class="th-lp-card-ribbon">{props.tag2}</div>
          <div class="th-lp-package-ribbon">
            <span class="th-card-i px-1">i</span>
            {props.tag3}
          </div>
          <div
            class="th-card-data-img"
            style={{
              backgroundImage:
                "url('https://d3vov59dtog46z.cloudfront.net/wp-content/uploads/2017/11/23090116/Brazil-banner-1-1568x641.jpg')"
            }}
          ></div>
          <div class="th-card-data p-2">
            <span class="th-card-title">{props.header}</span>
            <span class="th-card-sub-title">
              {props.day} &bull; {props.place}
            </span>
            <span class="th-card-sub-title-1 pt-2">
              {props.city1} &bull; {props.city2} &bull; {props.city3}&bull;
              <span class="th-card-extra-sub-title">{props.span}</span>
            </span>
            <span class="th-card-sub-title">{props.facility}</span>
            <span class="th-card-price-strike pt-3">{props.oldPrice}</span>
            <div class="row">
              <div class="col-6">
                <span class="th-card-price">
                  {props.newPrice} <span class="th-card-pp">{props.span2}</span>
                </span>
              </div>
              <div class="col-6 text-right">
                <span class="th-card-price-saved">{props.saveMsg}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
