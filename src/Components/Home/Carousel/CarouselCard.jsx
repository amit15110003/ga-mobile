import React from "react";

export default function Card(props) {
  return (
    <div class="col-12">
      <div
        class="th-card-promotion2"
        style={{
          backgroundImage:
            "url('https://us.123rf.com/450wm/detech/detech1807/detech180700008/104235577-yellow-gradient-background-design.jpg?ver=6')"
        }}
      >
        <div class="col-12 py-2 th-card-promotion-grad">
          <div class="th-card-promotion2-ribbon">{props.title}</div>
          <div class="row h-100">
            <div class="col-7 my-auto">
              <span class="th-card-promotion2-title">{props.content}</span>
            </div>
            <div class="col-5">
              <span class="th-card-promotion2-justin ">{props.tag}</span>
              <span class="th-card-promotion2-price ">{props.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
