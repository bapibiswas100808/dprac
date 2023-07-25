import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Form, TextArea } from "semantic-ui-react";

const Heroside = ({ fontSize, fontType, handleSize, handleFonts }) => {
  return (
    <div>
      <div className="lang-drop pb-2">
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">Select Fonts</Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              value={fontType}
              onClick={() => handleFonts("open Sans")}
            >
              Open Sans
            </Dropdown.Item>
            <Dropdown.Item
              value={fontType}
              onClick={() => handleFonts("poppins")}
            >
              Poppins
            </Dropdown.Item>
            <Dropdown.Item
              value={fontType}
              onClick={() => handleFonts("roboto")}
            >
              Roboto
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="font-drop">
        <Form>
          <TextArea
            value={fontSize}
            onChange={(e) => handleSize(e)}
            rows={1}
            placeholder="Font Size"
          />
        </Form>
      </div>
    </div>
  );
};

export default Heroside;
