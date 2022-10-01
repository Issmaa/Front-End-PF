import CardUser from "../../components/CardUser/CardUser";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./PageUser.css";

export default function PageUser() {
  return (
    <div className="container-all-user">
      <NavBar />
      <CardUser />
      <Footer />
    </div>
  );
}
