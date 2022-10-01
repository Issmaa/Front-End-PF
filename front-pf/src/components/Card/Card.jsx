import "./CardCss.css";
import Modal from "../Modal/Modal";

function Card({ name, cost, lore }) {
  return (
    <div className="container-all">
      <div className="container-card">
        <img variant="top" src="holder.js/100px160" />
        <h1>7 lagos {name}</h1>
        <p>Lorem ipsum dolor sitng elit.{lore} </p>
        <div>
          <h2 className="h2cost">$ 1212121 {cost}</h2>
          <Modal />
        </div>
      </div>
      {/* <div className="container-card">
        <img variant="top" src="holder.js/100px160" />
        <h1>Cataras {name}</h1>
        <p>Lorem ipsum dolor sit amet.{lore} </p>
        <div>
          <h2 className="h2cost">$ 500000{cost}</h2>
        </div>
        <Modal />
      </div>
      <div className="container-card">
        <img variant="top" src="holder.js/100px160" />
        <h1>Misiones {name}</h1>
        <p>Lorem ipsum dolor adipisicing elit. {lore} </p>
        <div>
          <h2 className="h2cost">$ 455555{cost}</h2>
          <Modal />
        </div>
      </div> */}
    </div>
  );
}

export default Card;
