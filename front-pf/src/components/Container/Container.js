import React from "react";
import CardContainer from "../CardContainer/CardContainer";
// import Comments from "../Comments/Comments";
import { Link } from "react-router-dom";
import s from "./Container.module.css";
import SideBar from "../SideBar/SideBar";

export default function Container() {
  return (
    <div className={s.container}>
      <SideBar />
      <div className={s.mainContainer}>
        <div className={s.imgContainer}>
            <h2 className="text-zinc-100">Vive experiencias inolvidables.</h2>
            <h2 className="text-zinc-100 text-xl"> No pienses más! tomate esas vacaciones</h2>
        </div>
        <CardContainer />
        <div className={s.btnAndComment}>
          <Link to="/cards/create">
            <button>Create Card</button>
          </Link>
        </div>
      </div>
      <SideBar />
    </div>
  );
}
