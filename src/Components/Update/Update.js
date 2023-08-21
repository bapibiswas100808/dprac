import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Update.css";

const Update = () => {
  const { id } = useParams();
  const [data, setData] = useState({
    title: "",
    qr_text: "",
  });
  console.log(data);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://auth.privateyebd.com/api/v2/qrcodes/" + id)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  const handleUpdate = (event) => {
    event.preventDefault();
    const accessToken = `Token ${localStorage.getItem("getToken")}`;
    axios
      .put("https://auth.privateyebd.com/api/v2/qrcodes/" + id, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: accessToken,
        },
      })
      .then((res) => {
        console.log(res);
        navigate("/dash");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  return (
    <section className="update-area">
      <div className="container">
        <h2>Update Info</h2>
        <form className="d-flex flex-column" onSubmit={handleUpdate}>
          <input
            className="p-2 mb-2 rounded"
            type="text"
            placeholder="Update Title here"
            value={data.title}
            name="titleInput"
            onChange={(e) =>
              setData((prevData) => ({ ...prevData, title: e.target.value }))
            }
          />
          <input
            className="p-2 mb-2 rounded"
            type="text"
            placeholder="Update qr text here"
            value={data.qr_text}
            name="qrInput"
            onChange={(e) =>
              setData((prevData) => ({ ...prevData, qr_text: e.target.value }))
            }
          />
          <button className="btn" type="submit">
            Update
          </button>
        </form>
      </div>
    </section>
  );
};

export default Update;
