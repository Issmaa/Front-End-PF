import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./Modal.css";

export default function Example({ name, costo, excursiones, dia, hotel }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="button" onClick={handleShow}>
        Info
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <h3> Misiones{name}</h3>
        </Modal.Header>
        <Modal.Body>
          <div>
            <ul>
              <li>Dia {dia}</li>
              <li>Hotel{hotel}</li>
              <li>Excursiones{excursiones}</li>
              <li>Costo{costo}</li>
            </ul>
          </div>
        </Modal.Body>
        <Modal.Body>
          <div>{/* Comentario */}</div>
        </Modal.Body>
        <Modal.Footer>
          <button className="button" onClick={handleClose}>
            Cerrar
          </button>
          <button className="button" onClick={handleClose}>
            Comprar
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
