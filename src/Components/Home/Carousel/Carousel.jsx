import React from "react";
import Card from "./CarouselCard";
import Data from "./Data";
import Slider from "react-slick";
import "../../../Assets/css/slick.css";
import "../../../Assets/css/slick-theme.css";

const Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  const Slik = Data.map((item, index) => {
    return (
      <Card
        src={item.src}
        title={item.title}
        content={item.content}
        tag={item.tag}
        price={item.price}
      />
    );
  });
  return (
    <div class="container">
      <Slider {...Settings} class="row pt-3 ">
        {Slik}
      </Slider>
    </div>
  );
}
