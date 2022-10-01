import React from "react";
import s from "./CardInformation.module.css";
import EachCard from "./EachCard";

export default function CardInformation({ img, name, lore, cost }) {
  return (
    <div className={s.container}>
      <div className={s.imgContainer}>
        <img src="https://bariloche.org/wp-content/uploads/2020/01/bariloche-barilocheorg-verano2021-fotofranciscoraggio-fotobarilocheorg-patagonia-argentina-lagonahuelhuapi-cartelbariloche.jpg" />
      </div>
      <div className={s.infoContainer}>
        <h1>Bariloche</h1>
        <div className={s.loreContainer}>
          <div className={s.lore}>
            <p>
              loremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdalorem
            </p>
          </div>
          <div className={s.elseContainer}>
            <div className={s.actContainer}>
                <h2>Actividades</h2>
                <p>Correr</p>
                <p>Montañismo</p>
                <p>Rafting</p>
            </div>
            <div className={s.actContainer}>
                <h2>Hoteles</h2>
                <p>Hotel Hilton</p>
                <p>Hotel Hilton</p>
                <p>Hotel Hilton</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
