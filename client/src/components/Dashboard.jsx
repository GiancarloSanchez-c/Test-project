import React, { Fragment, useEffect, useState } from "react";
import Header from "./Header";
import "../assets/scss/Dashboard.scss";
import { NavLink } from "react-router-dom";
import Search from "./Search";
import { getAllDivisions, getAllUsers } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Paginations from "./Paginations";
import { AiFillDelete } from "react-icons/ai";
import { TiArrowSyncOutline } from "react-icons/ti";
import { FcAddRow } from "react-icons/fc";
import {
  filterNivel,
  filterColabadoradores,
  filterDivision,
  filterDivisionSuperior,
  filterEmbajadores,
} from "../redux/actions";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const divisionsPerPage = 10;
  const [, setDivision] = useState("");
  const [, setDivisionSuperior] = useState("");
  const [, setOrderScore] = useState("");
  const [, setOrderColaborador] = useState("");
  const [, setAmbassadors] = useState("");

  const allDivisions = useSelector((state) => state.divisions);

  const indexOfLastDivisions = currentPage * divisionsPerPage;
  const indexOfFirstDivisions = indexOfLastDivisions - divisionsPerPage;
  const currentDivisions = allDivisions?.slice(
    indexOfFirstDivisions,
    indexOfLastDivisions
  );

  useEffect(() => {
    dispatch(getAllDivisions());
    dispatch(getAllUsers());
  }, [dispatch]);

  const pagination = (page) => {
    setCurrentPage(page);
  };

  const handleFilterNivel = (e) => {
    e.preventDefault();
    dispatch(filterNivel(e.target.value));
    setCurrentPage(1);
    setOrderScore(e.target.value);
  };

  const handleFilterColaborador = (e) => {
    e.preventDefault();
    dispatch(filterColabadoradores(e.target.value));
    setCurrentPage(1);
    setOrderColaborador(e.target.value);
  };

  const handleFilterDivision = (e) => {
    e.preventDefault();
    dispatch(filterDivision(e.target.value));
    setCurrentPage(1);
    setDivision(e.target.value);
  };

  const handleFilterDivisionSuperior = (e) => {
    e.preventDefault();
    dispatch(filterDivisionSuperior(e.target.value));
    setCurrentPage(1);
    setDivisionSuperior(e.target.value);
  };

  const handleFilterAmbassadors = (e) => {
    e.preventDefault();
    dispatch(filterEmbajadores(e.target.value));
    setCurrentPage(1);
    setAmbassadors(e.target.value);
  };

  const handleResetDivisions = (e) => {
    e.preventDefault();
    dispatch(getAllDivisions());
  };

  return (
    <>
      <Header />
      <div className="content">
        <div className="container">
          <h2>Organización</h2>
          <ul className="content-ul">
            <li>
              <button
                style={{ background: "transparent", border: "none" }}
                onClick={handleResetDivisions}
              >
                <NavLink to="/">Divisiones</NavLink>
              </button>
            </li>
            <li>
              <button style={{ background: "transparent", border: "none" }}>
                <NavLink to="/colaboradores">Colaboradores</NavLink>
              </button>
            </li>
          </ul>

          <div className="table-responsive">
            <Search />

            <div className="filter-select">
              <select className="selected" onChange={handleFilterDivision}>
                <option>Division </option>
                <option value="asc">A-Z</option>
                <option value="dsc">Z-A</option>
              </select>

              <select
                className="selected"
                onChange={handleFilterDivisionSuperior}
              >
                <option>Division Superior </option>
                <option value="asc">A-Z</option>
                <option value="dsc">Z-A</option>
              </select>

              <select className="selected" onChange={handleFilterColaborador}>
                <option>Colaboradores</option>
                <option value="lowColaborador">Low Colaborador</option>
                <option value="highColaborador">Higher Colaborador</option>
              </select>

              <select className="selected" onChange={handleFilterNivel}>
                <option>Nivel </option>
                <option value="lowNivel">Low Nivel</option>
                <option value="highNivel">Higher Nivel</option>
              </select>

              <select className="selected" onChange={handleFilterAmbassadors}>
                <option>Embajadores </option>
                <option value="asc">A-Z</option>
                <option value="dsc">Z-A</option>
              </select>
            </div>

            <table className="table table-striped custom-table">
              <thead>
                <tr>
                  <th scope="col">Division</th>
                  <th scope="col">Division Superior</th>
                  <th scope="col">Colaboradores</th>
                  <th scope="col">Nivel</th>
                  <th scope="col">Subdivisiones</th>
                  <th scope="col">Embajadores</th>
                  <th scope="col">Delete</th>
                  <th scope="col">Update</th>
                </tr>
              </thead>
              <tbody>
                {currentDivisions?.map((division, index) => (
                  <tr key={index}>
                    <td>
                      <a href="/">{division.name}</a>
                    </td>
                    <td>{division.higher}</td>
                    <td>{division.collaborators} </td>
                    <td>{division.level}</td>
                    <td>
                      {division.subDivisions?.map((subDivision, index) => (
                        < Fragment key={index}>
                          <span>{subDivision.name}</span>
                          <NavLink to="/createSubdivision">
                            <FcAddRow />
                          </NavLink>
                        </Fragment>
                      ))}
                    </td>
                    <td>
                      {division.ambassadors.map((ambassador, index) => (
                        <span key={index}>{ambassador.name}</span>
                      ))}
                    </td>
                    <td>
                      <AiFillDelete style={{ marginLeft: "100px" }} />{" "}
                    </td>
                    <td>
                      <TiArrowSyncOutline style={{ marginLeft: "100px" }} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Paginations
              quantityPerPage={divisionsPerPage}
              pagination={pagination}
              all={allDivisions?.length}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
