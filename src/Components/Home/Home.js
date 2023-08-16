import Homepage from "../../Pages/Homepage/Homepage";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Heroside from "../../Components/Heroside/Heroside";
import { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Profile from "../Profile/Profile";

const Home = () => {
  const navigate = useNavigate();
  const [fontSize, setFontSize] = useState("");
  const [fontType, setFontType] = useState("");
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const accessToken = `Token ${localStorage.getItem("getToken")}`;
    axios
      .get("https://auth.privateyebd.com/api/v1/profile/", {
        headers: { Authorization: accessToken },
      })
      .then(
        (res) => {
          console.log(res);
          setProfile(res);
        },
        (error) => {
          console.log(error.response.data);
        }
      );
  }, []);

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
        <div className="user-profile pt-4">
          {profile.data ? (
            <div>
              <h2>User Profile</h2>
              <Profile />
              <p>
                Name: {profile.data.first_name} {profile.data.last_name}
              </p>
              <p>Email: {profile.data.email}</p>
              <p>Mobile: {profile.data.mobile}</p>
              <p>Bio: {profile.data.bio}</p>
            </div>
          ) : (
            <p>Loading user profile...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
