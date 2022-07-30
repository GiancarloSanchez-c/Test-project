import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllUsers } from "../redux/actions";
import Header from "./Header";
import Paginations from "./Paginations";
import Search from "./Search";
import ColaboradorCard from "./ColaboradorCard";

const Colaboradores = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const divisionsPerUser = 10;
  const [, setName] = useState("");
  const [, setEmail] = useState("");
  const [, setAge] = useState("");

  const allUsers = useSelector((state) => state.users);

  const indexOfLastUsers = currentPage * divisionsPerUser;
  const indexOfFirstUsers = indexOfLastUsers - divisionsPerUser;
  const currentUsers = allUsers?.slice(indexOfFirstUsers, indexOfLastUsers);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const pagination = (page) => {
    setCurrentPage(page);
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
                onClick={(e) => e.preventDefault()}
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
            {currentUsers?.map((user) => (
              <ColaboradorCard
                key={user._id}
                id={user._id}
                username={user.username}
                email={user.email}
                age={user.age}
                roles={user.roles}
              />
            ))}

            <Paginations
              quantityPerPage={divisionsPerUser}
              pagination={pagination}
              all={allUsers?.length}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Colaboradores;
