import React from "react";
import Homepage from "../../Pages/Homepage/Homepage";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Heroside from "../../Components/Heroside/Heroside";
import { useState } from "react";
import "./Home.css";

const Home = () => {
  const [fontSize, setFontSize] = useState("");
  const [fontType, setFontType] = useState("");

  const handleSize = (e) => {
    const getValue = e.target.value;
    setFontSize(getValue);
  };

  const handleFonts = (getFont) => {
    setFontType(getFont);
  };
  return (
    <section>
      <div className="container">
        <Row>
          <Col lg={3} className="drop-area">
            <Heroside
              fontSize={fontSize}
              fontType={fontType}
              handleSize={handleSize}
              handleFonts={handleFonts}
            />
          </Col>
          <Col lg={9} className="text-area">
            <Homepage fontSize={fontSize} fontType={fontType} />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Home;
