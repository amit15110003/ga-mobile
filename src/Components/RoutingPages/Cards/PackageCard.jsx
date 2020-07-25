import React from "react";
import Hooneymoon from "../../../Assets/Images/honeymoon.jpg";
import info from "../../../Assets/Images/info-bg.svg";

export default function Card(props) {
  return (
    <div>
      <div
        id="budgetcol-1"
        class="collapse  show col-12 pb-2 th-detail-line"
        aria-labelledby="headingOne"
        data-parent="#budget-plans"
      >
        <div class="th-trip-itinerary-body px-0">
          <div class="row">
            <div class="th-detail-budget p-2 mt-2 col-12">
              <div class="row">
                <div class="col-4">
                  <div
                    class="th-detail-budget-img"
                    style={{ backgroundImage: `url(${Hooneymoon})` }}
                  ></div>
                </div>
                <div class="col-8 my-auto">
                  <div class="row">
                    <span class="th-budget-head col-10 px-0 text-left">
                      {props.header}
                    </span>
                    <img src={info} class="th-budget-i" alt=" " />
                  </div>
                  <div class="row">
                    <span class="th-detail-card-places col-12 px-0">
                      {props.city} &bull; {props.dine}
                    </span>
                    <span class="th-detail-card-places col-12 px-0">
                      {props.day} &bull; {props.duration}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
