import React, { useEffect, useState } from "react";
import "../assets/scss/Search.scss";
import { GrAdd } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { findDivision } from "../redux/actions";
import { NavLink } from "react-router-dom";

const Search = () => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findDivision(name));
  }, [dispatch, name]);

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    if (!name) {
      e.preventDefault();
      return alert("Please enter name");
    }
    e.preventDefault();
    dispatch(findDivision(name));
    setName("");
  };

  return (
    <>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={handleInputChange}
          placeholder="Search..."
          type="search"
          className="search-input"
        />
        <NavLink to="/createDivision">
          <GrAdd className="icon-add" />
        </NavLink>
      </form>
    </>
  );
};

export default Search;
