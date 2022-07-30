import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../assets/scss/Header.scss";
import { FaCrown } from "react-icons/fa";
import { motion } from "framer-motion";
import { getAllUsers, login } from "../redux/actions";

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const id = useParams();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);


  return (
    <>
      <header className="header-container">
        <div
          onMouseEnter={() => setIsMenu(true)}
          onMouseLeave={() => setIsMenu(false)}
          className="header_user"
        >
          <div className="header_data_user">
            <div className="header_data_user_name">
              
            </div>
          </div>

          {isMenu && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="menu_motion"
            >
              <p className="menu_description">Profile</p>
              <p className="menu_description">Sign Out</p>
            </motion.div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
