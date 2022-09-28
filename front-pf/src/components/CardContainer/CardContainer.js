import React from "react";
import s from "./CardContainer.module.css";
import SearchBar from "../SearchBar/SearchBar";
import Cards from "../Cards/Cards";

export default function CardContainer() {
  return (
    <div className={s.container}>
      <SearchBar />
      <Cards />
    </div>
  );
}