import React from "react";
import s from "./CardInformation.module.css";
import { Link } from "react-router-dom";

export default function CardInformation({ img, name, lore, cost }) {

  return (
    <div className={s.mainContainer}>
      <div className={s.container}>
        <div className={s.imgContainer}>
          <img src="https://bariloche.org/wp-content/uploads/2020/01/bariloche-barilocheorg-verano2021-fotofranciscoraggio-fotobarilocheorg-patagonia-argentina-lagonahuelhuapi-cartelbariloche.jpg" />
        </div>
        <div className={s.infoContainer}>
          <div className={s.loreContainer}>
          <h1>Bariloche</h1>
            <div className={s.lore}>
              <p>
                loremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdalorem
              </p>
            </div>
            <div className={s.elseContainer}>
              <div id={s.act} className={s.actContainer}>
                <h2>Actividades</h2>
                <p>● Correr</p>
                <p>● Montañismo</p>
                <p>● Rafting</p>
                <Link>Ver Todos las Actividades</Link>

              </div>
              <div id={s.hot} className={s.actContainer}>
                <h2>Hoteles</h2>
                <p>★ Hotel San Bernardo</p>
                <p>★ Hotel Hilton</p>
                <p>★ Hotel Don Patricio</p>
                <Link to='/hotels'>Ver Todos los Hoteles</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
