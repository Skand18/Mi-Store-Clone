import React from "react";
import { Carousel } from "react-bootstrap";
import "../styles/banner.css";

const Banner = ({ banner }) => {
  return (
    <Carousel fade>
      {banner.end.map((item, index) => (
        <Carousel.Item
          key={item.image}
          id="banner"
          interval={50000}
          keyboard={true}
        >
          <img
            className="d-block w-100 overlay"
            src={item.image}
            alt={`${index} banner`}
            id="bannerimage"
          />

          <Carousel.Caption>
            <h3>{item.name}</h3>
            <p className="x">{item.description}</p>
            <p className="x">{item.source}</p>
            <u className="y">Read More</u>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Banner;
