import React from "react";
import { Carousel } from "react-bootstrap";
import Cards from "../Card/Card";
import "./Carrusel.css";

function Carrusel() {
  return (
    <div className="container-all-carousel">
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
    </div>
  );
}

export default Carrusel;
