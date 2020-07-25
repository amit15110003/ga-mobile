import React from "react";
import Card from "../Card/Card2";
import Data from "../Data/DestinationData";

function Destination(props) {
  const Grid = Data.map((item, index) => {
    return (
      <Card
        tag={item.tag}
        img={item.src}
        header={item.header}
        content={item.content}
        price={item.price}
        span={item.span}
        id="destination"
      />
    );
  });
  return (
    <div>
      {props.id === "listing" ? (
        <div
          class="container pt-3 pb-1"
          style={{
            padding: "0 5px 0.25rem 5px ",
            paddingTop: 0 + "!important",
          }}
        >
          <div class="row py-2" style={{ paddingTop: 0 }}>
            <div class="th-inline-card" style={{ padding: "0 5px 0px 0px " }}>
              {Grid}
            </div>
          </div>
        </div>
      ) : (
        <div class="container pt-3 pb-1">
          <div class="row">
            <h4 class="th-cat-title col-8 text-truncate">
              popular destination
            </h4>
            <h4 class="th-cat-view-all col-4 text-right">view all</h4>
          </div>

          <div class="row py-2">
            <div class="th-inline-card">{Grid}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Destination;
