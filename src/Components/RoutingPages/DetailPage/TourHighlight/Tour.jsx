import React from "react";
import Data from "./TourData";

export default function Tour() {
  return (
    <div>
      <div class="container">
        <div class="row pt-3">
          <div class="col-12">
            <span class="th-detailpage-head">{Data.header}</span>
          </div>
        </div>
        <div class="row">
          <span class="th-detail-card-places col-12 pt-2">
            {Data.city1} &bull;{Data.city2} &bull; {Data.city3} &bull;
            {Data.city4}&bull;{Data.city5} &bull;
          </span>
        </div>
        <div class="row py-3">
          <span class="th-detail-card-places col-12">
            <span class="th-dot-green pr-2">&bull;</span>
            {Data.point1}
          </span>
          <span class="th-detail-card-places col-12">
            <span class="th-dot-green pr-2">&bull;</span>
            {Data.point2}
          </span>
          <span class="th-detail-card-places col-12">
            <span class="th-dot-green pr-2">&bull;</span>
            {Data.point3}
          </span>
        </div>
        <div class="row">
          <span class="th-detail-card-content col-12">{Data.content}</span>
          <a href=" " class="th-detail-view-more col-12 py-2">
            {Data.label}{" "}
            <i class="th-detail-view-more-arrow fa fa-angle-down pl-2"></i>
          </a>
        </div>
      </div>
      <div class="container-fluid th-bg-grey mt-2">
        <div class="row p-2"></div>
      </div>
    </div>
  );
}
