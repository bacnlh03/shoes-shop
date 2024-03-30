import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

import thumbnail from '../../assets/thumbnail.jpg';

const BannerComponent = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item interval={2000}>
        <img src={thumbnail} alt="Banner" width="90%" />
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <img src={thumbnail} alt="Banner" width="90%" />
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <img src={thumbnail} alt="Banner" width="90%" />
      </Carousel.Item>
    </Carousel>
  );
};

export default BannerComponent;