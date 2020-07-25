import React from "react";

export default function Footer() {
  return (
    <div>
      <div class="container th-detail-footer-fixed">
        <div class="row h-100">
          <div class="col-7 my-2">
            <span class="th-footer-pack-cost">Total package cost</span>
            <span class="th-footer-package-price">₹15,999</span>
            <span class="th-footer-pack-cost-strike">₹20,999</span>
            <span class="th-off-price px-1">25% OFF</span>
          </div>
          <div class="col-5 my-auto text-right pl-0">
            <a class="th-detail-btn btn" href=" ">
              Enquire Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
