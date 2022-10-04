import React from "react";
import s from "./PackCreate.module.css";
import { useState } from "react";

export default function PackCreate() {
  const [actividades] = useState([
    { name: "Montañismo" },
    { name: "Senderismo" },
    { name: "Rafting" },
  ]);

  const [comida] = useState([
    { name: "Desayuno" },
    { name: "Almuerzo" },
    { name: "Cena" },
  ]);

  const [checkboxStates] = useState({
    actividades: {
      Montañismo: false,
      Senderismo: false,
      Rafting: false,
    },
    comida: {
      Desayuno: false,
      Almuerzo: false,
      Cena: false,
    },
  });

  const [input, setInput] = useState({
    pais: "",
    destino: "",
    hotel: "",
    actividades: [],
    comida: [],
    integrantes: "",
    semanas: "",
  });

  // Guarda en el input los generos y plataformas
  const handleButtonClick = (e) => {
    console.log(checkboxStates.actividades.Montañismo)
    checkboxStates[e.target.name][e.target.value] =
      !checkboxStates[e.target.name][e.target.value];
    if (checkboxStates[e.target.name][e.target.value]) {
      input[e.target.name].push(e.target.value);
    } else {
      input[e.target.name] = input[e.target.name].filter(
        (el) => el !== e.target.value
      );
    }
  };

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={s.mainContainer}>
      <div className={s.container}>
        <div className={s.packContainer}>
          <div className={s.pack}>
            <div className={s.paisDestino}>
              <h1>{input.pais ? input.pais : "Pais..."}</h1>
              <h2>{input.destino ? input.destino : "Destino..."}</h2>
            </div>
            <div className={s.hotel}>
              <p>Hotel: </p>
              <p>{input.hotel ? input.hotel : "Hotel..."}</p>
            </div>
            <div className={s.check}>
              <div className={s.acts}>
                <p>Actividades :</p>
                <div>
                  <h2
                    className={
                      checkboxStates.actividades.Montañismo ? s.show : s.hide
                    }
                  >
                    test
                  </h2>
                </div>
              </div>
              <div className={s.acts}>
                <p>Comidas Incluidas:</p>
                <div className={s.actividades}>
                  <div className={s.actividades}>
                    <div className={s.checkbox}>
                      <input type="checkbox" />
                      <label>Desayuno</label>
                    </div>
                    <div className={s.checkbox}>
                      <input type="checkbox" />
                      <label>Almuerzo</label>
                    </div>
                    <div className={s.checkbox}>
                      <input type="checkbox" />
                      <label>Cena</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={s.tiempo}>
              <p>Integrantes :</p>
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
            </div>
            <div className={s.tiempo}>
              <p>Semanas</p>
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <h3>Precio</h3>
          </div>
        </div>
        <div className={s.formContainer}>
          <form className={s.form}>
            <div className={s.select}>
              <label>Elige un Pais :</label>
              <select
                onChange={handleInputChange}
                name="pais"
                defaultValue="default"
              >
                <option value="default" disabled>
                  Pais...
                </option>
                <option>Argentina</option>
                <option>Cuba</option>
                <option>Venezuela</option>
              </select>
            </div>
            <div className={s.select}>
              <label>Elige un Destino :</label>
              <select
                onChange={handleInputChange}
                name="destino"
                defaultValue="default"
              >
                <option value="default" disabled>
                  Destino...
                </option>
                <option>Buenos Aires</option>
                <option>Cordoba</option>
                <option>Mendoza</option>
              </select>
            </div>
            <div className={s.select}>
              <label>Elige un Hotel :</label>
              <select
                onChange={handleInputChange}
                name="hotel"
                defaultValue="default"
              >
                <option value="default" disabled>
                  Hotel...
                </option>
                <option>Hotel San Bernardo</option>
                <option>Hotel Hilton</option>
                <option>Hotel Don Patricio</option>
              </select>
            </div>
            <div className={s.select}>
              <label>Elige tus Actividades :</label>
              <div className={s.actividades}>
                {actividades.map((act, index) => {
                  return (
                    <div key={index} className={s.checkbox}>
                      <input
                        type="checkbox"
                        value={act.name}
                        name="actividades"
                        onChange={handleButtonClick}
                      />
                      <label>{act.name}</label>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={s.select}>
              <label>Elige tus Comidas Incluidas :</label>
              <div className={s.actividades}>
                {comida.map((com, index) => {
                  return (
                    <div key={index} className={s.checkbox}>
                      <input
                        type="checkbox"
                        value={com.name}
                        name="comida"
                        onChange={handleButtonClick}
                      />
                      <label>{com.name}</label>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={s.select}>
              <label>Elige Cantidad de Integrantes :</label>
              <select
                onChange={handleInputChange}
                name="integrantes"
                defaultValue="default"
              >
                <option value="default" disabled>
                  Integrantes...
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
            </div>
            <div className={s.select}>
              <label>Elige Cantidad de Semanas :</label>
              <select
                onChange={handleInputChange}
                name="semanas"
                defaultValue="default"
              >
                <option value="default" disabled>
                  Semanas...
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          </form>
          <button onClick={() => console.log(input)}>ASHEEE</button>
        </div>
      </div>
    </div>
  );
}
