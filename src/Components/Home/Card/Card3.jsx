import React from "react";
export default function Card(props) {
  return (
    <div class="th-card">
      <div class="th-card-type-3">
        <div class="th-card-ribbon">{props.tag}</div>
        {/* holdiay */}
        {props.id === "holiday" ? (
          <div
            class="th-card-data-img"
            style={{
              backgroundImage:
                "url('https://cdn1.goibibo.com/t_tg_fs/himachal-pradesh-shimla-147617008042-orijgp.jpg')"
            }}
          ></div>
        ) : null}

        {/* honeymoon */}
        {props.id === "honeymoon" ? (
          <div
            class="th-card-data-img"
            style={{
              backgroundImage:
                "url('https://www.telegraph.co.uk/content/dam/Travel/hotels/europe/france/paris/paris-cityscape-overview-guide.jpg')"
            }}
          ></div>
        ) : null}

        {/* luxury */}
        {props.id === "luxuryHoneymoon" ? (
          <div
            class="th-card-data-img"
            style={{
              backgroundImage:
                "url('https://www.australia.com/content/australia/en/places/sydney-and-surrounds/guide-to-sydney/_jcr_content/mainParsys/imagewithcaption_cop_698473482/LargeImageTile/largeImageSrc.adapt.740.medium.jpg')"
            }}
          ></div>
        ) : null}

        {/* trekking */}
        {props.id === "trekking" ? (
          <div
            class="th-card-data-img"
            style={{
              backgroundImage:
                "url('https://rideyourtrip.com/wp-content/uploads/2019/05/Himalayas_cnt_18nov09_iStock_b_1.jpg')"
            }}
          ></div>
        ) : null}

        <div class="th-card-data p-2">
          <span class="th-card-title">{props.header}</span>
          <span class="th-card-sub-title">
            {props.title1} &bull; {props.title2}
          </span>
          <span class="th-card-sub-title-1">
            {props.venue1} &bull; {props.venue2} &bull; {props.venue3} &bull;
            <span class="th-card-extra-sub-title">{props.span1}</span>
          </span>
          <div class="row pt-1">
            <div class="col-4">
              <span class="th-card-sub-title">Just in</span>
              <span class="th-card-price-strike">{props.oldPrice}</span>
            </div>
            <div class="col-8 text-right">
              <span class="th-card-price-saved">{props.saveMsg}</span>
              <span class="th-card-price">
                {props.price}
                <span class="th-card-pp">{props.span2}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
