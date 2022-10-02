import React from "react";
import { Carousel } from "react-bootstrap";
import Cards from "../Card/Card";
import Card2 from "../Card2/Card2";

function Carrusel() {
  return (
  <div className="container-all-carousel">
    <Carousel>
      <Carousel.Item>
        <Cards />
      </Carousel.Item>
      <Carousel.Item>
        <Card2 />
      </Carousel.Item>
      <Carousel.Item>
        <Cards />
      </Carousel.Item>
    </Carousel>
    </div>

  )
}
export default Carrusel;
