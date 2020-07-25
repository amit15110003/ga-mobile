import React from "react";

export default function Card(props) {
  return (
    <div class="th-card">
      <div class="th-card-body-bestseller">
        <div
          class="th-card-img"
          style={{
            backgroundImage:
              "url('https://us.123rf.com/450wm/detech/detech1807/detech180700008/104235577-yellow-gradient-background-design.jpg?ver=6')"
          }}
        >
          <div class="row py-2 px-3">
            <div class="th-card-bestseller">{props.tag}</div>
            <div class="col-12 py-2">
              <span class="th-card-a">{props.heading}</span>
              <br />
              <span class="th-card-price">{props.price}</span>
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
