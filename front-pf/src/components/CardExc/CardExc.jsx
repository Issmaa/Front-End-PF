import "./CardExc.css";
export default function CardExcursion({
  name,
  info,
  dificultad,
  img,
  DiaI,
  DiaF,
}) {
  return (
    <div className="container-general">
      <div className="container-exc-der">
        <div className="container-text">
          <div className="tittle-exc">
            <h1>Montañismo {name}</h1>
          </div>
          <div className="DesciptionExc">
            <h5>
              {info}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur earum error blanditiis, nesciunt ullam iste vitae
              eligendi delectus eius commodi pariatur cum? Omnis accusamus
              cumque in? Enim quo vero quod?
            </h5>
            <p>Fecha de inicio: {DiaI}</p>
            <p>Fecha de inicio: {DiaF}</p>
            <p>Dificultad: {dificultad}</p>
          </div>
        </div>
        <img
          className="imgExc"
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/montana-1554997095.jpg?crop=1.00xw:0.754xh;0,0.166xh&resize=1200:*" /*{img}*/
          alt=""
        />
      </div>
      <div className="container-exc-izq">
        <div className="container-text">
          <div className="tittle-exc">
            <h1>Rafting {name}</h1>
          </div>
          <div className="DesciptionExc">
            <h5>
              {info}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur earum error blanditiis, nesciunt ullam iste vitae
              eligendi delectus eius commodi pariatur cum? Omnis accusamus
              cumque in? Enim quo vero quod?
            </h5>

            <p>Fecha de inicio: {DiaI}</p>
            <p>Fecha de inicio: {DiaF}</p>
            <p>Dificultad: {dificultad}</p>
          </div>
        </div>
        <img
          className="imgExc"
          src="https://barilocheturismo.gob.ar/images/aventura/rafting/rafting_03.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
