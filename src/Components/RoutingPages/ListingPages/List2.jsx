import React from "react";
import Packages from "./Packages";
export default function List2() {
  return (
    <div>
      <div class="container th-listpage-navspace">
        <div class="row p-2 th-listpage-nav">
          <p class="th-listpage-head my-auto">
            <a href="index.html">
              {" "}
              <i class="fa fa-arrow-left p-1 th-arrow"></i>
            </a>{" "}
            Honeymoon Packages
          </p>
        </div>
        <div class="row pb-2 th-list-filter">
          <div class="th-inline-card">
            <div class="th-card">
              <a href=" " class="th-btn-place text-center p-2 px-3 mx-2">
                Goa
              </a>
            </div>
            <div class="th-card">
              <a href=" " class="th-btn-place text-center p-2 px-3 mx-2">
                Manali
              </a>
            </div>
            <div class="th-card">
              <a href=" " class="th-btn-place text-center p-2 px-3 mx-2">
                Shimla
              </a>
            </div>
            <div class="th-card">
              <a href=" " class="th-btn-place text-center p-2 px-3 mx-2">
                Nepal
              </a>
            </div>
            <div class="th-card">
              <a href=" " class="th-btn-place text-center p-2 px-3 mx-2">
                Delhi
              </a>
            </div>
            <div class="th-card">
              <a href=" " class="th-btn-place text-center p-2 px-3 mx-2">
                Nainital
              </a>
            </div>
            `
          </div>
        </div>
      </div>
      <div class="container-fluid th-bg-grey">
        <div class="row p-2 "></div>
      </div>
      <Packages />
    </div>
  );
}
