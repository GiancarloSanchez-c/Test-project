import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createSubDivision} from '../redux/actions'
const CreateSubDivision = () => {

  const [input, setInput] = useState({
    name: "",
  })

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createSubDivision());
    setInput({
      name: "",
    });
    navigate("/");
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="login-container">
      <div className="screen">
        <div className="screen__content">
          <form className="login" onSubmit={handleSubmit}>
            <h2 style={{ color: "#5D54A4" }}>Create SubDivision</h2>
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input
                type="text"
                className="login__input"
                placeholder="Nombre Sub Division"
                autoComplete="off"
                name="name"
                value={input.name}
                onChange={handleChange}
              />
            </div>
            <button className="button login__submit">
              <span className="button__text">Create</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  )
}

export default CreateSubDivision