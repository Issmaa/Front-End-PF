import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import CaruselPropaganda from "../Propaganda/Propaganda";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="container-izq-footer">
        <div className="container-footer-info">
          <ul className="ul-footer">
            <li>
              <li>
                <img src="/images/logo1.png" alt="logo" className="w-20 h-20" />
              </li>
              <h3>Travelop</h3>
              Empresa de viaje
            </li>
          </ul>
        </div>
        <div className="container-footer-info">
          <ul className="ul-footer">
            <li>
              <h3>Redes</h3>
              <InstagramIcon fontSize="large" />
              <FacebookIcon fontSize="large" />
              <TwitterIcon fontSize="large" />
            </li>
            <li>
              <h3>Contacto</h3>
              <EmailIcon fontSize="large" />
              <CallIcon fontSize="large" />
            </li>
          </ul>
        </div>
        <div className="container-footer-carrusel">
          <CaruselPropaganda />
        </div>
        <div className="container-footer-info">
          <h1>Travelopppppp</h1>
        </div>
      </div>
    </div>
  );
}
