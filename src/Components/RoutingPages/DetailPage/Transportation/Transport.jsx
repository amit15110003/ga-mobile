import React from "react";
import Card from "./Card";
import Data from "./TransportData";

export default function Transport() {
  const Grid1 = Data.card1.array.map((item, index) => {
    return (
      <Card
        date={item.date}
        day={item.day}
        src={item.src}
        title={item.title}
        car={item.car}
        type={item.type}
        price={item.price}
        msg={item.msg}
      />
    );
  });
  const Grid2 = Data.card2.array.map((item, index) => {
    return (
      <Card
        date={item.date}
        day={item.day}
        src={item.src}
        title={item.title}
        car={item.car}
        type={item.type}
        price={item.price}
        msg={item.msg}
      />
    );
  });
  const Grid3 = Data.card3.array.map((item, index) => {
    return (
      <Card
        date={item.date}
        day={item.day}
        src={item.src}
        title={item.title}
        car={item.car}
        type={item.type}
        price={item.price}
        msg={item.msg}
      />
    );
  });
  return (
    <div>
      <div class="container">
        <div class="row pt-3">
          <div class="col-12">
            <span class="th-detailpage-head">Transportation</span>
          </div>
        </div>
        <div>
          <div class="row">
            <span class="th-transport-places col-12 pt-1">
              {Data.card1.header}
            </span>
          </div>
          {Grid1}
          <div class="col-12 th-detail-line"></div>
          <div class="row">
            <span class="th-transport-places col-12 pt-1">
              {Data.card2.header}
            </span>
          </div>
          {Grid2}
          <div class="col-12 th-detail-line"></div>
          <div class="row">
            <span class="th-transport-places col-12 pt-1">
              {Data.card3.header}
            </span>
          </div>
          {Grid3}
          <div class="col-12 th-detail-line"></div>
        </div>
      </div>
      <div class="col-12 th-detail-line"></div>
      <div class="container-fluid th-bg-grey mt-2">
        <div class="row p-2"></div>
      </div>
    </div>
  );
}
