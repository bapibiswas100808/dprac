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
        .delete("https://auth.privateyebd.com/api/v2/qrcodes/" + id)
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
      const response = await axios.patch(
        `https://auth.privateyebd.com/api/v2/qrcodes/${id}/`,

        {
          headers: {
            Authorization: accessToken,
          },
        }
      );
      console.log(response);
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
                    className=" btn-success px-2 rounded"
                    style={{ border: "1px solid #828080", fontSize: "15px" }}
                  >
                    View
                  </button>
                  <Link
                    to={`/update/${d.id}`}
                    className=" btn-success ms-2 px-2 rounded"
                    style={{ border: "1px solid #828080", fontSize: "15px" }}
                  >
                    Update
                  </Link>
                  <button
                    onClick={(e) => handleDelete(d.id)}
                    className="bg-danger rounded ms-2 px-2"
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
