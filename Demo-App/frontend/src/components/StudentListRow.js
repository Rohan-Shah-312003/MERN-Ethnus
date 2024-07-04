import Axios from "axios";
import React from "react";

export default function StudentListRow(props) {
  const { _id, name, email, regNo } = props.obj;

  const handleClick = () => {
    Axios.delete("http://127.0.0.1:4000/routes/delete-student/" + _id)
      .then((res) => {
        if (res.status) {
          alert("Record Deleted");
          window.location.reload();
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{regNo}</td>
      <td className="d-flex justify-content-center">
        <button className="btn btn-success fas fa-edit fa-2x">Edit</button>
        <button
          onClick={handleClick}
          className="btn btn-danger fas fa-trash fa-2x">
          Delete
        </button>
      </td>
    </tr>
  );
}
