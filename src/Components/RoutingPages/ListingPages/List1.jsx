import React from "react";
import Destination from "../../Home/CardGrid/Destination";
import Packages from "./Packages";

export default function ListingPage1() {
  return (
    <div>
      <div class="container th-detail-header-fixed">
        <div class="row p-2 th-listpage-nav">
          <p class="th-detail-head my-auto" style={{ fontSize: 19 }}>
            <a href="index.html">
              {" "}
              <i class="fa fa-arrow-left p-1 th-arrow"></i>
            </a>
            Hooneymoon Packages
          </p>
        </div>
      </div>
      <div class="container mt-5 pt-4">
        <div class="row pt-2">
          <h4 class="th-cat-title col-12 text-truncate">
            10 Honeymoon Destinations
          </h4>
        </div>
        <Destination id="listing" />
      </div>
      <div class="container-fluid th-bg-grey">
        <div class="row p-2 "></div>
      </div>
      <Packages />
    </div>
  );
}
