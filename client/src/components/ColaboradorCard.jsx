import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUser, updateUser, getAllUsers } from "../redux/actions";
import { AiFillDelete } from "react-icons/ai";
import { TiArrowSyncOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const ColabaradorCard = ({ username, email, id, age, roles }) => {
  const [colaborador, setColaborador] = useState({
    username,
    email,
    age,
    roles,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteColaborador = (e) => {
    if (window.confirm("Are you sure to delete this user??")) {
      dispatch(deleteUser(id));
      navigate("/colaboradores");
    } else {
      e.preventDefault();
    }
  };

 
  return (
    <>
      <table className="table table-striped custom-table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
            <th scope="col">Rol</th>
            <th scope="col">Delete</th>
            <th scope="col">Update</th>
          </tr>
        </thead>
        <tbody>
          <tr key={id}>
            <td>
              <a href="/">{username}</a>
            </td>
            <td>{email}</td>
            <td>{age} </td>
            <td>
              {roles?.map((role, index) => (
                <span key={index}>{role.name}</span>
              ))}
            </td>
            <td>
              {
                <button
                  style={{
                    color: "gray",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => deleteColaborador(id)}
                >
                  <AiFillDelete />
                </button>
              }
            </td>
            <td>
              {
                colaborador.id ? (
                  <button style={{
                    color: "gray",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                  }} 
                
                  >
                    <TiArrowSyncOutline />
                  </button>
                ):(
                  <></>
                )
              }
              </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ColabaradorCard;
