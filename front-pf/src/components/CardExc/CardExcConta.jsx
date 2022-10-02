import "./CardExc.css";
export default function CardExcContainer({
  name,
  info,
  dificultad,
  img,
  fechaI,
  fechaF,
}) {
  return (
    <div className="container-general">
      <div className="container-exc-der">
        <div className="container-text">
          <div className="tittle-exc">
            <h1>Montañismo {name}</h1>
          </div>
          <div className="DesciptionExc">
            <h5>{info}</h5>
            <p>Fecha de inicio: {fechaI}</p>
            <p>Fecha de inicio: {fechaF}</p>
            <p>Dificultad: {dificultad}</p>
          </div>
        </div>
        <img className="imgExc" src={img} alt="" />
      </div>
    </div>
  );
}
