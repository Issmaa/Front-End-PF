import Container from "../components/Container/Container";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import style from './Home.module.css';

export default function Home() {
  return (
    <div className={style.globalContainer}>
      <NavBar />
      <Container />
      <Footer />
    </div>
  );
}
