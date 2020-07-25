import React from "react";
import Main from "./Main/Main";
import Tour from "./TourHighlight/Tour";
import Trip from "./Trip/Trip";
import Package from "./PackageType/Package";
import Transport from "../DetailPage/Transportation/Transport";
import What from "./WhatPage/What";
import TourPolicy from "./TourPolicy/TourPolicy";
import Footer from "./Sticky/Footer";

export default function Details() {
  return (
    <div>
      <Main />
      <Tour />
      <Trip />
      <Package />
      <Transport />
      <What />
      <TourPolicy />
      <Footer />
    </div>
  );
}
