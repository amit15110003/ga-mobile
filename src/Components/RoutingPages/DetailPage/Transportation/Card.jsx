import React from "react";
import Car from "../../../../Assets/Images/car.svg";

export default function Card(props) {
  return (
    <div class="row p-3">
      <div class="col-12 th-detail-budget">
        <span class="th-transport-time col-12 px-0 ">
          {props.date} &bull; {props.day}
        </span>
        <div class="row p-2">
          <div class="col-12 th-detail-line"></div>
          <div class="col-3 pt-2">
            <div
              class="th-transport-img"
              style={{ backgroundImage: `url(${Car})` }}
            ></div>
          </div>
          <div class="col-9 my-auto pt-1">
            <div class="row">
              <span class="th-transport-type col-12 px-0">
                {props.car} &bull; {props.type}
              </span>
              <span class="th-budget-head col-10 px-0 text-left">
                {props.title}
              </span>
            </div>
            <div class="row mt-2">
              <div class="col-5 px-0">
                <span class="th-transport-type ">{props.price}</span>
              </div>
              <div class="col-7">
                <div class="col-12 px-0">
                  <label class="th-checkbox1">
                    <span class="th-transport-included">{props.msg}</span>
                    {props.msg === "included" ? (
                      <input type="checkbox" checked />
                    ) : null}
                    <input type="checkbox" />
                    <span class="checkmark1 checked"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
