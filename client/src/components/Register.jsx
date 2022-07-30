import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { register, getRoles, getAllUsers } from "../redux/actions";

const Register = () => {
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    age: "",
    roles: [],
  });
  const dispatch = useDispatch();
  const roles = useSelector((state) => state.roles);

  useEffect(() => {
    document.title = "REGISTER";
    dispatch(getAllUsers());
    dispatch(getRoles());
  }, [dispatch]);

  const validateName = /^[a-zA-Z\s]+$/;
  const validateImage = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;

  const validations = (input) => {
    const errors = {};
    if (!input.name.length) {
      errors.name = "Name is required";
    }
    if (!validateName.test(input.name)) {
      errors.name = "Name must be letters only";
    }
    if (input.image && !validateImage.test(input.image)) {
      errors.image = "Image must be a valid URL";
    }
    if (!input.email.length) {
      errors.email = "Email is required";
    }
    if (!input.password.length) {
      errors.password = "Password is required";
    }
    if (input.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    if (!input.age.length) {
      errors.age = "Age is required";
    }
    if (input.age < 18) {
      errors.age = "Age must be at least 18";
    }
    if (!input.roles.length) {
      errors.roles = "Roles is required";
    }

    return errors;
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validations({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleCheck = (e) => {
    if (e.target.checked && !input.roles.includes(e.target.value)) {
      setInput({
        ...input,
        roles: [...input.roles, e.target.value],
      });
    } else if (!e.target.checked) {
      setInput({
        ...input,
        roles: input.roles.filter((role) => role !== e.target.value),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Si no hay errores, enviamos el formulario
    if (Object.keys(errors).length === 0 && input.roles.length > 0) {
      // despachamos la acción de crear receta
      dispatch(register(input));
      // alerta de que la receta fue creada
      alert("Cool, User created");
      // reseteamos el formulario
      setInput({
        username: "",
        email: "",
        password: "",
        age: "",
        roles: [],
      });
      // redireccionamos a la pantalla de listado de recetas
      Navigate("/home");
    } else {
      // si hay errores, los mostramos en pantalla
      alert("Please fix errors before submitting");
    }
  };

  console.log(roles.rol)

  return(
    <div className="container">
      <form onSubmit={handleSubmit} className="form-container"  >
        <div className="form">
          <h1 className="title-form">Create a new User</h1>
        </div>
        <div className="form-group">
          <label className="label-form" htmlFor="image">Image:</label>
          <input className="input-form" type="url" name="image" value={input.image} autoComplete="off" placeholder=" URL Image (Optional)..." onChange={handleChange} />
          {errors.image && <p className="error">{errors.image}</p>}
        </div>
        <div className="form-group">
          <label className="label-form" htmlFor="name">Name:</label>
          <input className="input-form" type="text" name="name" value={input.name} autoComplete="off" placeholder="Title or Name for the recipe" onChange={handleChange} />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        
        <div className="form-group">
          <label className="label-form" htmlFor="name">Email:</label>
          <input className="input-form" type="email" name="name" value={input.name} autoComplete="off" placeholder="Title or Name for the recipe" onChange={handleChange} />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="roles-group">
          <label className="label-form">Roles: </label> <br />
          {
            roles.rol && roles.rol.map((d,index) => (
              <label className="label-form " htmlFor={d.name} key={index}>
                <input type="checkbox" name="diets" value={d.name} onChange={handleCheck} />
                {d.name} {" "}
              </label>
            ))
          }
        </div>
        <div className="btn-container">
          {
            errors.name || errors.summary || errors.healthScore || errors.instructions || errors.image ? (
              <button className="btn-submit" type="submit" disabled>Create User</button>
            ) : (
              <button className="btn-submit" type="submit">Create User</button>
            )
          }
          <button className='btn-cancel' onClick={() => Navigate('/home')}>Cancel</button>
        </div>

      </form>
    </div>
  )
};

export default Register;
