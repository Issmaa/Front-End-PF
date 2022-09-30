import NavBar from "../../components/NavBar/NavBar";
import CardExcursion from "../../components/CardExc/CardExc";
import BodyExcursiones from "../../components/BodyExc/BodyExc";
import Footer from "../../components/Footer/Footer";

export default function Excursiones() {
  return (
    <div>
      <NavBar />
      <BodyExcursiones />
      <CardExcursion />
      <Footer />
    </div>
  );
}
