import "./App.css";
import Header from "./Components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Registration from "./Components/Registration/Registration";
import Login from "./Components/Login/Login";
import { Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Header />
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/home" element={<Home></Home>} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <section className="switch">
          <label className="switch-label">
            {theme === "light" ? "Light Mode" : "Dark Mode"}
          </label>
          <ReactSwitch
            className="ps-3"
            onChange={toggleTheme}
            checked={theme === "dark"}
          />
        </section>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
