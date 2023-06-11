/** @format */

import React, { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import BestSeller from "./CardGrid/BestSeller";
import Option from "./Option/Option";
import Destination from "./CardGrid/Destination";
import CustomPackage from "./CustomPackage/CustomPackage";
import Activity from "./CardGrid/Activity";
import Promotion from "./Promotion/Promotion";
import Template from "./CardGrid/Template";
import Caraosel from "./Carousel/Carousel";
import WhyUs from "./WhyUs/WhyUs";
import Navbar from "../Layout/Navbar/Navbar";
import Footer from "../Layout/Footer/Footer";
import Trekking from "./Trekking/Trekking";
import ExclusiveDeals from "./CardGrid/ExclusiveDeals";

export default function Index() {
  return (
    <div>
      <Navbar />
      {/* <Option /> */}
      <SearchBar />
      <BestSeller />
      <ExclusiveDeals />
      <Destination />
      <CustomPackage />
      {/* <Activity /> */}
      {/* <Template id="holiday" /> */}
      <Promotion />
      {/* <Template id="honeymoon" /> */}
      {/* <Caraosel /> */}
      {/* <Template id="luxuryHoneymoon" /> */}
      {/* <Template id="trekking" /> */}
      <Trekking />
      <WhyUs />
      <Footer />
    </div>
  );
}
