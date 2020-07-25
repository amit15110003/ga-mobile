import React from "react";

export default function Card(props) {
  return (
    <div class="row">
      <div class="th-card-type-5">
        <div
          class="th-card-data-img"
          style={{
            backgroundImage:
              'url(" https://london.ac.uk/sites/default/files/styles/max_1300x1300/public/2018-10/london-aerial-cityscape-river-thames_1.jpg?itok=6LenFxuz")'
          }}
        >
          <span class="th-card1-ribbon">{props.title1} </span>
          <span class="th-card2-ribbon">{props.title2} </span>
        </div>
      </div>
      <div class="th-card-type-5 col-12 pt-2">
        <div class="th-card-data">
          <span class="th-card-title">{props.header}</span>
          <span class="th-card-sub-title py-2">
            {props.tag1} &bull; {props.tag2}
          </span>
          <div class="row px-2">
            <span class="th-card-sub-title px-2">
              <i class="fa fa-plane pr-1"></i>
              {props.item1}
            </span>
            <span class="th-card-sub-title px-2">
              <i class="fa fa-cutlery pr-1"></i>
              {props.item2}
            </span>
            <span class="th-card-sub-title px-2">
              <i class="fa fa-car pr-1"></i>
              {props.item3}
            </span>
            <span class="th-card-sub-title px-2">
              <i class="fa fa-image pr-1"></i>
              {props.item4}
            </span>
          </div>
          <div class="row pt-3">
            <div class="col-12">
              <span class="th-card-price-strike">{props.oldPrice}</span>
              <span class="th-off-price px-1">{props.span1}</span>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <span class="th-card-price">
                {props.price}
                <span class="th-card-pp">{props.span2}</span>
              </span>
            </div>
            <div class="col-6 text-right">
              <span class="th-card-price-saved">{props.saveMsg}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
