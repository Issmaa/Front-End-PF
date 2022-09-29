import React from "react";
import { Carousel } from "react-bootstrap";
import Cards from "../Card/Card";

function Carrusel() {
  return (
    <Carousel>
      <Carousel.Item>
        <Cards />
      </Carousel.Item>
      <Carousel.Item>
        <Cards />
      </Carousel.Item>
      <Carousel.Item>
        <Cards />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;
