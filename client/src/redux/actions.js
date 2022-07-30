import axios from 'axios';


export const getAllUsers = () => {
  return async (dispatch) => {
    const response = await axios.get('http://localhost:3001/api/users');
    dispatch({
      type: 'GET_ALL_USERS',
      payload: response.data
    });
  }
}
export const getUser = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`http://localhost:3001/api/users/${id}`);
    dispatch({
      type: 'GET_USER',
      payload: response.data
    });
  }
}

export const deleteUser = (id) => {
  return async (dispatch) => {
    const response = await axios.delete(`http://localhost:3001/api/users/${id}`);
    dispatch({
      type: 'DELETE_USER',
      payload: response.data
    });
  }
}

export const updateUser = (id ) => {
  return async (dispatch) => {
    const response = await axios.put(`http://localhost:3001/api/users/${id}`);
    dispatch({
      type: 'UPDATE_USER',
      payload: response.data
    });
  }
}

export const getAllDivisions = () => {
  return async (dispatch) => {
    const response = await axios.get('http://localhost:3001/api/divisions');
    dispatch({
      type: 'GET_DIVISIONS',
      payload: response.data
    });
  }
}

export const getAllSubDivisions = () => {
  return async (dispatch) => {
    const response = await axios.get('http://localhost:3001/api/divisions/allSubdivisions');
    dispatch({
      type: 'GET_SUB_DIVISIONS',
      payload: response.data
    });
  }
}

export const findDivision = (name) => {
  return async (dispatch) => {
   try {
    const response = await axios.get(`http://localhost:3001/api/divisions/find?name=${name}`);
    dispatch({
      type: 'FIND_DIVISION',
      payload: response.data
    });
   } catch (error) {
    return error
   }
  }
}

export const register = () => {
  return async (dispatch) => {
    const response = await axios.post('http://localhost:3001/api/auth/register');
    
    dispatch({
      type: 'REGISTER',
      payload: response.data
    });
  }
}

export const login = () => {
  return async (dispatch) => {
    const response = await axios.post('http://localhost:3001/api/auth/login');
    
    dispatch({
      type: 'LOGIN',
      payload: response.data
    });
  }
}


export const getRoles = () => {
  return async (dispatch) => {
    const response = await axios.get('http://localhost:3001/api/rol');
    dispatch({
      type: 'GET_ROLES',
      payload: response.data
    });
  }
}

export const createDivision = (create) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:3001/api/divisions/create', create);
      console.log(response)
      dispatch({
        type: 'CREATE_DIVISION',
        payload: response
      });
    } catch (error) {
        console.log(error)
    }
  }
}

export const createSubDivision = (create) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:3001/api/divisions/createSubdivisions', create);
      console.log(response)
      dispatch({
        type: 'CREATE_SUB_DIVISION',
        payload: response
      });
    } catch (error) {
        console.log(error)
    }
  }
}

export const filterNivel = (payload) => {
  return {
    type: 'FILTER_NIVEL',
    payload
  }
}

export const filterColabadoradores = (payload) => {
  return {
    type: 'FILTER_COLABORADORES',
    payload
  }
}

export const filterDivision = (payload) => {
  return {
    type: 'FILTER_DIVISION',
    payload
  }
}

export const filterDivisionSuperior = (payload) => {
  return {
    type: 'FILTER_DIVISION_SUPERIOR',
    payload
  }
}


export const filterEmbajadores = (payload) => {
  return {
    type: 'FILTER_EMBAJADORES',
    payload
  }
}