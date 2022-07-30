import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllDivisions,
  createDivision,
  getAllUsers,
  getAllSubDivisions,
} from "../redux/actions";
import { useNavigate } from "react-router-dom";
import '../assets/scss/Create.scss'

const CreateDivisions = () => {
  const [input, setInput] = useState({
    name: "",
    higher: "",
    collaborators: "",
    level: "",
    subDivisions: [],
    ambassadors: [],
  });
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users  = useSelector((state) => state.users);
  const subDivisions  = useSelector((state) => state.subDivisions);

  useEffect(() => {
    document.title = "Create a new Division";
    dispatch(getAllDivisions());
    dispatch(getAllUsers());
    dispatch(getAllSubDivisions());
  }, [dispatch]);

  const validateName = /^[a-zA-Z\s]+$/;

  const validations = (input) => {
    const errors = {};
    if (!input.name.length) {
      errors.name = "Division is required";
    }
    if (!validateName.test(input.name)) {
      errors.name = "Division must be letters only";
    }
    if (!input.higher.length) {
      errors.higher = "Higher is required";
    }
    if (!input.collaborators.length) {
      errors.collaborators = "Collaborators is required";
    }
    if (!input.level.length) {
      errors.level = "Level is required";
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
    // Si la casilla de verificación está marcada, agregamos el valor de la identificación en el array
    if (e.target.checked && !input.ambassadors.includes(e.target.value)) {
      setInput({
        ...input,
        ambassadors: [...input.ambassadors, e.target.value],
      });
    }

    // Si la casilla de verificación no está marcada, eliminamos el valor de la identificación del array
    else if (!e.target.checked) {
      setInput({
        ...input,
        ambassadors: input.ambassadors.filter(
          (ambassador) => ambassador !== e.target.value
        ),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Si no hay errores, enviamos el formulario
    if (Object.keys(errors).length === 0 && input.ambassadors.length > 0) {
      // despachamos la acción de crear receta
      dispatch(createDivision(input));
      // alerta de que la receta fue creada
      alert("Cool, Division created");
      // reseteamos el formulario
      setInput({
        name: "",
        higher: "",
        collaborators: "",
        level: "",
        subDivisions: [],
        ambassadors: [],
      });
      // redireccionamos a la pantalla de listado de recetas
      navigate("/");
    } else {
      // si hay errores, los mostramos en pantalla
      alert("Please fix errors before submitting");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form">
          <h1 className="title-form">Create a new Division</h1>
        </div>
        <div className="form-group">
          <label className="label-form" htmlFor="name"> Division: </label>
          <input
            className="input-form"
            type="text"
            name="name"
            value={input.name}
            autoComplete="off"
            placeholder="Title or Name for the Division"
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label className="label-form" htmlFor="higher">
            Division Superior:
          </label>
          <input
            className="input-form"
            type="text"
            name="higher"
            value={input.higher}
            autoComplete="off"
            placeholder="Enter a higher"
            onChange={handleChange}
          />
          {errors.higher && <p className="error">{errors.higher}</p>}
        </div>
        <div className="form-group">
          <label className="label-form" htmlFor="collaborators">
            Collaborators
          </label>
          <input
            className="input-form"
            type="number"
            name="collaborators"
            value={input.collaborators}
            autoComplete="off"
            placeholder="Enter a Level - Min 0"
            onChange={handleChange}
          />
          <span>{input.collaborators}</span>
        </div>
        <div className="form-group">
          <label className="label-form" htmlFor="level">
            Level:
          </label>
          <input
            className="input-form"
            type="number"
            name="level"
            value={input.level}
            autoComplete="off"
            placeholder="Enter a Level - Min 0"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="label-form">Subdivisiones: </label> <br />
          {subDivisions.map((d,index) => (
            <label className="label-form " htmlFor={d.name} key={index}>
              <input
                type="checkbox"
                name="subDivisions"
                value={d.name}
                onChange={handleCheck}
              />
              {d.name}{" "}
            </label>
          ))}
        </div>
        <div className="form-group">
          <label className="label-form">Embajadores: </label> <br />
          {users.map((d,index) => (
            <label className="label-form " htmlFor={d.username} key={index}>
              <input
                type="checkbox"
                name="ambassadors"
                value={d.username}
                onChange={handleCheck}
              />
              {d.username}{" "}
            </label>
          ))}
        </div>
        <div className="btn-container">
          {errors.name ||
          errors.higher ||
          errors.collaborators ||
          errors.level 
           ? (
            <button className="btn-submit" type="submit" disabled>
              Crear Division
            </button>
          ) : (
            <button className="btn-submit" type="submit">
              Crear Division
            </button>
          )}
          <button className="btn-cancel" onClick={() => navigate("/")}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateDivisions;
