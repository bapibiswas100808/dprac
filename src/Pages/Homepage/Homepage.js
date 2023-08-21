import React, { useState, useEffect } from "react";
import "./Homepage.css";
import axios from "axios";
import { Form } from "semantic-ui-react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const Homepage = ({ fontSize, fontType }) => {
  const [profile, setProfile] = useState("");
  const imageID = localStorage.getItem("imageId");
  const accessToken = `Token ${localStorage.getItem("getToken")}`;
  useEffect(() => {
    const accessToken = `Token ${localStorage.getItem("getToken")}`;
    axios
      .get("https://auth.privateyebd.com/api/v1/profile/", {
        headers: { Authorization: accessToken },
      })
      .then(
        (res) => {
          setProfile(res);
        },
        (error) => {
          console.log(error);
        }
      );
  }, [profile]);
  if (!profile) {
    return null;
  }
  const handleProfileZone = (event) => {
    event.preventDefault();
    const form = event.target;
    const first_name = form.fnameInput.value;
    const last_name = form.lnameInput.value;
    const bio = form.bioInput.value;
    const image = imageID;
    const bioApi = "https://auth.privateyebd.com/api/v1/profile/";
    const bioForm = {
      first_name,
      last_name,
      image,
      bio,
    };
    axios
      .post(bioApi, bioForm, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((res) => {
        console.log(res.data);
        localStorage.removeItem("imageId");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section>
      <div className="container">
        <div className="text">
          <h1 style={{ fontFamily: `${fontType}`, fontSize: `${fontSize}px` }}>
            This is Heading
          </h1>
          <p style={{ fontFamily: `${fontType}`, fontSize: `${fontSize}px` }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </div>
        <Row>
          <Col lg={6}>
            <div className="profile-zone mt-4 ">
              <Form onSubmit={handleProfileZone}>
                <input
                  className="p-2 mb-2"
                  type="text"
                  placeholder="Write your First Name"
                  defaultValue={profile.data.first_name}
                  name="fnameInput"
                />
                <input
                  className="p-2 mb-2"
                  type="text"
                  placeholder="Write your Last Name"
                  name="lnameInput"
                  defaultValue={profile.data.last_name}
                />
                <textarea
                  className="p-2"
                  placeholder="Write something about yourself . . ."
                  name="bioInput"
                />
                <h3>
                  Image:
                  {imageID
                    ? "Upload Successful!"
                    : "Please Upload Your Picture!"}
                </h3>
                <button className="btn" type="submit">
                  Submit
                </button>
              </Form>
            </div>
          </Col>
          <Col lg={6}>
            <div>
              <div className="user-profile mt-2">
                <h2>User Image</h2>
                <img className="w-100" src={profile.data.image_url} alt="" />
                {/* <p>
                  Name: {profile.data.first_name} {profile.data.last_name}
                </p>
                <p>Email: {profile.data.email}</p>
                <p>Mobile: {profile.data.mobile}</p>
                <p>Bio: {profile.data.bio}</p> */}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Homepage;
