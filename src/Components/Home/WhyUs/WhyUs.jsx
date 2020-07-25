import React from "react";
import One from "../../../Assets/Images/WhyUs/1.svg";
import Two from "../../../Assets/Images/WhyUs/2.svg";
import Three from "../../../Assets/Images/WhyUs/3.svg";
import Four from "../../../Assets/Images/WhyUs/4.svg";
import Five from "../../../Assets/Images/WhyUs/5.svg";

export default function WhyUs() {
  return (
    <div class="th-service container py-4 px-3">
      <h6 class="th-service-head text-center">Why Book with us</h6>
      <p class="th-service-subhead text-center">
        Most trusted and largest Travel Mraketplace
      </p>
      <div class="row py-2">
        <div class="col-2 text-center pt-2">
          <img src={One} alt="" />
        </div>
        <div class="col-10">
          <span class="th-service-title">24 x 7 Online Support</span>
          <br />
          <span class="th-service-subtitle">
            Filling up your tiny preferences form
          </span>
        </div>
      </div>
      <div class="row py-2">
        <div class="col-2 text-center pt-2">
          <img src={Two} alt="" />
        </div>
        <div class="col-10">
          <span class="th-service-title">15+ Years of Travel Experience</span>
          <br />
          <span class="th-service-subtitle">
            Filling up your tiny preferences form
          </span>
        </div>
      </div>
      <div class="row py-2">
        <div class="col-2 text-center pt-2">
          <img src={Three} alt="" />
        </div>
        <div class="col-10">
          <span class="th-service-title">135+ team Staff & Ground experts</span>
          <br />
          <span class="th-service-subtitle">
            Filling up your tiny preferences form
          </span>
        </div>
      </div>
      <div class="row py-2">
        <div class="col-2 text-center pt-2">
          <img src={Four} alt="" />
        </div>
        <div class="col-10">
          <span class="th-service-title">13+ Lakhs Happy Customers</span>
          <br />
          <span class="th-service-subtitle">Popular Holiday Destinations</span>
        </div>
      </div>
      <div class="row py-2">
        <div class="col-2 text-center pt-2">
          <img src={Five} alt="" />
        </div>
        <div class="col-10">
          <span class="th-service-title">250+ Hotspot Destinations</span>
          <br />
          <span class="th-service-subtitle">Popular Holiday Destinations</span>
        </div>
      </div>
    </div>
  );
}
