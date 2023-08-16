import React, { useState } from "react";
import axios from "axios";
import "./Profile.css";

const Profile = () => {
  const [image, setImage] = useState("");
  const handleChange = (e) => {
    const upImage = e.target.files[0];
    console.log(upImage);
    setImage(upImage);
  };
  const handleImage = () => {
    const imageApi = "https://auth.privateyebd.com/api/v1/documents/upload/";

    const formData = new FormData();
    formData.append("document", image);
    formData.append("doc_type", 0);
    axios
      .post(imageApi, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        alert("success");
      })
      .catch((error) => {
        console.log(error.response);
        alert("failed");
      });
  };
  return (
    <section className="profile-area">
      <div>
        <h3>Upload Your Photo</h3>
        <div className="upload-image">
          <input
            className="mb-3"
            type="file"
            name="file"
            onChange={handleChange}
          />
          <button
            className="p-2 custom-hover ms-3 rounded"
            onClick={handleImage}
          >
            Upload Image
          </button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
