import React, { useState } from "react";
import axios from "axios";
import "./Profile.css";

const Profile = () => {
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);
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
    const accessToken = `Token ${localStorage.getItem("getToken")}`;
    setUploading(true);
    axios
      .post(imageApi, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: accessToken,
        },
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("imageId", res.data.id);
        alert("success");
        setUploading(false);
      })
      .catch((error) => {
        console.log(error.response);
        alert("failed");
        setUploading(false);
      });
  };
  return (
    <section className="profile-area">
      <div>
        <h3>Upload Your Photo</h3>
        <div className="upload-image">
          <input
            className="mb-3 bg-transparent"
            type="file"
            name="file"
            onChange={handleChange}
          />
          <button
            className="px-3 py-2 custom-hover mb-3 rounded"
            onClick={handleImage}
            disabled={uploading}
          >
            {uploading ? "Uploading..." : "Upload Image"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
