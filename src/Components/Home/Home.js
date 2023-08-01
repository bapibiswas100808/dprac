import Homepage from "../../Pages/Homepage/Homepage";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Heroside from "../../Components/Heroside/Heroside";
import { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [fontSize, setFontSize] = useState("");
  const [fontType, setFontType] = useState("");

  const handleSize = (e) => {
    const getValue = e.target.value;
    setFontSize(getValue);
  };

  const handleFonts = (getFont) => {
    setFontType(getFont);
  };
  const handleLogOut = () => {
    localStorage.removeItem("getToken");
    navigate("/login");
  };
  return (
    <section>
      <div className="container home-area">
        <Row>
          <Col lg={3} className="drop-area">
            <Heroside
              fontSize={fontSize}
              fontType={fontType}
              handleSize={handleSize}
              handleFonts={handleFonts}
            />
            <div>
              <button
                onClick={() => {
                  handleLogOut();
                }}
                type="submit"
                className="mt-3  btn"
              >
                Log Out
              </button>
            </div>
          </Col>
          <Col lg={9} className="text-area pt-4">
            <Homepage fontSize={fontSize} fontType={fontType} />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Home;
