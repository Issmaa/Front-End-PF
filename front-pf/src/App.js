import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register"
import AboutUs from './pages/AboutUs/AboutUs.jsx';
import Excursiones from "./pages/Excursiones/Excursiones";
import "bootstrap/dist/css/bootstrap.min.css"
import Paquetes from './pages/Paquetes/Paquetes';
import PageUser from "./pages/PageUser/PageUser";
import InfoCard from "./pages/InfoCard/InfoCard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/paquetes" element={<Paquetes/>} />
        <Route path="/aboutus" element={<AboutUs />}/>
        <Route path="/excursiones" element={<Excursiones/>}/>
        <Route path="/detail/:id" element={<InfoCard/>}/>
        <Route path="/user" element={<PageUser />} />
      </Routes>
    </div>
  );
}

export default App;
