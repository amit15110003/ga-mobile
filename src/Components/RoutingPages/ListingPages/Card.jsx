/** @format */

import React from "react";
export default function Card(props) {
  return (
    <div class="container pt-3">
      <div class="row">
        <div class="th-card-type-4">
          <div class="th-lp-card1-ribbon">
            {props.offer > 0 ? `${props?.offer}% OFF` : null}
          </div>
          <div class="th-lp-card-ribbon">{props.category}</div>
          <div class="th-lp-package-ribbon">
            {/* <span class="th-card-i px-1">i</span>             */}
            {props.package_tag?.map((eachTag) => (
              <span className="tag th-lato th-12 mr-1">{eachTag.tag_name}</span>
            ))}
          </div>
          <div
            class="th-card-data-img"
            style={{
              backgroundImage: `url(${props?.package_img})`,
            }}
          ></div>
          <div class="th-card-data p-2">
            <span class="th-card-title">{props.package_name}</span>
            <span class="th-card-sub-title">
              {props.duration} Nights / {props.duration + 1} Days &bull; Ex -{" "}
              {props.pickup_location__city_name}
            </span>
            <span class="th-card-sub-title-1 py-1">
              {props.city_cover
                ?.slice(0, 3)
                .map(
                  (eachCity) =>
                    " • " + `${eachCity.city__city_name} (${eachCity.day}N)`
                )}

              <span class="th-card-extra-sub-title">
                {props.city_cover.length > 3
                  ? ` + ${props.city_cover.length - 3}`
                  : null}
              </span>
            </span>
            <span class="th-card-sub-title">
              {props.package_amenities?.map((item) => (
                <span className="mr-2">
                  {item?.package_amenities_image && (
                    <img
                      src={item?.package_amenities_image}
                      style={{
                        height: 15,
                        width: 15,
                        objectFit: "cover",
                        verticalAlign: "top",
                      }}
                    />
                  )}
                  <span className="px-1">{item?.package_amenities_name}</span>
                </span>
              ))}
            </span>
            <span class="th-card-price-strike pt-3">
              {props?.offer > 0 ? `₹ ${Math.round(props.total_price)}` : null}
            </span>
            <div class="row">
              <div class="col-6">
                <span class="th-card-price">
                  {props.offer > 0
                    ? `₹ ${Math.round(
                        props.total_price -
                          (props?.total_price * props?.offer) / 100
                      )}`
                    : `₹ ${props.total_price}`}
                  <span class="th-card-pp"> per {props.price_tag}</span>
                </span>
              </div>
              <div class="col-6 text-right">
                <span class="th-card-price-saved">
                  {props?.offer > 0
                    ? `saved ₹ ${Math.round(
                        (props?.total_price * props?.offer) / 100
                      )}`
                    : null}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
