import "./App.css";
import Header from "./Components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Registration from "./Components/Registration/Registration";
import Login from "./Components/Login/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
