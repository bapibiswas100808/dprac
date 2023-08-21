import axios from "axios";
import React, { useEffect, useState } from "react";
import "./DashBoard.css";
import { Link, NavLink, useNavigate } from "react-router-dom";

const DashBoard = () => {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("https://auth.privateyebd.com/api/v2/qrcodes/").then((res) => {
      setColumns(Object.keys(res.data[0]));
      setRecords(res.data);
    });
  }, [columns]);
  const handleDelete = async (id) => {
    const conf = window.confirm("Do You Want to Delete?");
    if (conf) {
      await axios
        .delete(`https://auth.privateyebd.com/api/v2/qrcodes/${id}/`)
        .then((res) => {
          alert("Record has been deleted!");
          navigate("/dash");
        })
        .catch((error) => {
          console.groupCollapsed(error);
        });
    }
  };
  const handleView = async (id) => {
    const accessToken = `Token ${localStorage.getItem("getToken")}`;
    console.log(accessToken);
    try {
      await axios
        .patch(
          `https://auth.privateyebd.com/api/v2/qrcodes/${id}/`,

          {
            headers: {
              Authorization: accessToken,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          const screenWidth =
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth;
          const popupWidth = screenWidth >= 768 ? 600 : 300;
          const popupHeight = 600;
          const popupWindow = window.open(
            "",
            "_blank",
            `width=${popupWidth},height=${popupHeight}`
          );
          popupWindow.document.write(`
            <h2>QR Code Details</h2>
            <p><strong>Title:</strong> ${response.data.title}</p>
            <p><strong>QR Text:</strong> ${response.data.qr_text}</p>
            <p><strong>QR Code Image:</strong></p>
            <img className="qr-image-view w-100" src="${response.data.qr_code}" alt="QR Code">
          `);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="dash-area">
      <div className="container pt-5">
        <NavLink to="/add">
          <button className="dash-button px-3 py-2 rounded mb-3">
            Add New Member
          </button>
        </NavLink>
        <table className="table pb-3 mb-0 w-100">
          <thead>
            <tr>
              {columns.map((c, i) => (
                <th key={i}>{c}</th>
              ))}
              <th style={{ paddingLeft: "12.5%" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {records.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.title}</td>
                <td>{d.qr_text}</td>
                <td>
                  <img
                    style={{ height: "30px" }}
                    className="qr-image"
                    src={d.qr_code}
                    alt=""
                  />
                </td>
                <td className="text-end">
                  <button
                    onClick={() => handleView(d.id)}
                    className=" btn-success px-2 rounded view-button"
                    style={{ border: "1px solid #828080", fontSize: "15px" }}
                  >
                    View
                  </button>
                  <Link
                    to={`/update/${d.id}`}
                    className=" btn-success ms-2 px-2 rounded update-button bg-transparent"
                    style={{
                      border: "1px solid #828080",
                      fontSize: "15px",
                    }}
                  >
                    Update
                  </Link>
                  <button
                    onClick={(e) => handleDelete(d.id)}
                    className="bg-danger rounded ms-2 px-2 delete-button"
                    style={{ border: "none", padding: "4px", color: "white" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DashBoard;
