import "./App.css";
import Header from "./Components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Registration from "./Components/Registration/Registration";
import Login from "./Components/Login/Login";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Verification from "./Components/Verification/Verification";
import Forget from "./Components/Forget/Forget";
import Reset from "./Components/Reset/Reset";
import PrivateRoute from "./Components/Auth/PrivateRoute";
import { ThemeContext } from "./Components/ThemeContext/ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`App ${theme}`}>
        <Header />
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<Home></Home>} />
          </Route>
          <Route path="/" element={<Registration />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/reset" element={<Reset />} />
        </Routes>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
