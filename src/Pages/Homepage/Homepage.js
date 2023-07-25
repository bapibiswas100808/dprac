import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import { Form, TextArea } from "semantic-ui-react";
import "./Homepage.css";

const Homepage = () => {
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
    <section className="home-area">
      <div className="container">
        <Row>
          <Col lg={3} className="drop-area pt-2">
            <div className="lang-drop pb-2">
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  Select Fonts
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleFonts("open Sans")}>
                    Open Sans
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleFonts("poppins")}>
                    Poppins
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleFonts("roboto")}>
                    Roboto
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="font-drop">
              <Form>
                <TextArea
                  onChange={(e) => handleSize(e)}
                  rows={1}
                  placeholder="Font Size"
                />
              </Form>
            </div>
          </Col>
          <Col lg={9} className="text-area">
            <div className="text">
              <h1
                style={{ fontFamily: `${fontType}`, fontSize: `${fontSize}px` }}
              >
                This is Heading
              </h1>
              <p
                style={{ fontFamily: `${fontType}`, fontSize: `${fontSize}px` }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Homepage;
