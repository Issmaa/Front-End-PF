import React from "react";
import s from "./CardContainer.module.css";
import SearchBar from "../SearchBar/SearchBar";
import Carrusel from "../Carrusel/Carrusel";

export default function CardContainer() {
  return (
    <div className={s.container}>
      <SearchBar />
      <Carrusel />
    </div>
  );
}
