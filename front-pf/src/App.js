import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register"
import CreateCard from "./pages/CreateCard"
import Destinations from './pages/Destinations/Destinations';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/cards/create" element={<CreateCard />}/>
        <Route path="/destinations" element={<Destinations/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
