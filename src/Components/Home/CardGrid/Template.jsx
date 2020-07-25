import React from "react";
import Card from "../Card/Card3";
import Data from "../Data/TemplateAllData";

export default function Template(props) {
  const Grid = Data.array.map((item, indes) => {
    return (
      <Card
        tag={item.tag}
        image={item.src}
        header={item.header}
        title1={item.title1}
        title2={item.title2}
        venue1={item.venue1}
        venue2={item.venue2}
        venue3={item.venue3}
        span1={item.span1}
        oldPrice={item.oldPrice}
        saveMsg={item.saveMsg}
        price={item.price}
        span2={item.span2}
        id={props.id}
      />
    );
  });
  return (
    <div class="container pt-4 pb-1">
      <div class="row">
        {props.id === "holiday" ? (
          <h4 class="th-cat-title col-8 text-truncate">{Data.holidayTitle}</h4>
        ) : null}
        {props.id === "honeymoon" ? (
          <h4 class="th-cat-title col-8 text-truncate">
            {Data.honeymoonTitle}
          </h4>
        ) : null}
        {props.id === "luxuryHoneymoon" ? (
          <h4 class="th-cat-title col-8 text-truncate">{Data.luxuryTitle}</h4>
        ) : null}
        {props.id === "trekking" ? (
          <h4 class="th-cat-title col-8 text-truncate">{Data.trekkingTitle}</h4>
        ) : null}
        <h4 class="th-cat-view-all col-4 text-right">{Data.viewall}</h4>
      </div>
      <div class="row py-2">
        <div class="th-inline-card">{Grid}</div>
      </div>
    </div>
  );
}
