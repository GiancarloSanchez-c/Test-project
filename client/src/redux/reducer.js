
const initialState = {
  users: [],
  user: [],
  divisions: [],
  allDivisions: [],
  subDivisions: [],
  roles: [],
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_USERS':
      return {
        ...state,
        users: action.payload,
      }
    case 'GET_USER':
      return {
        ...state,
        user: action.payload,
      }
    case "GET_DIVISIONS":
      return {
        ...state,
        divisions: action.payload,
        allDivisions: action.payload,
      }
    case "CREATE_SUB_DIVISION":
      return {
        ...state,
        subDivisions: [...state.subDivisions, action.payload],
      }
    case "GET_SUB_DIVISIONS":
      return {
        ...state,
        subDivisions: action.payload,
      }
    case "FIND_DIVISION":
      return {
        ...state,
        divisions: action.payload,
      }
    case "CREATE_DIVISION":
      return {
        ...state,
      }
    case "GET_ROLES":
      return {
        ...state,
        roles: action.payload,
      }

    case "FILTER_NIVEL":
      const orderNivel = action.payload === "lowNivel"
        ? state.divisions.sort((a, b) => {
          if (a.level > b.level) return 1;
          if (b.level > a.level) return -1;
          return 0;
        })
        : state.divisions.sort((a, b) => {
          if (a.level > b.level) return -1;
          if (b.level > a.level) return 1;
          return 0;
        })
      return {
        ...state,
        divisions: orderNivel,
      }
    case "FILTER_COLABORADORES":
      const orderColaboradores = action.payload === "lowColaborador"
        ? state.divisions.sort((a, b) => {
          if (a.collaborators > b.collaborators) return 1;
          if (b.collaborators > a.collaborators) return -1;
          return 0;
        })
        : state.divisions.sort((a, b) => {
          if (a.collaborators > b.collaborators) return -1;
          if (b.collaborators > a.collaborators) return 1;
          return 0;
        })
      return {
        ...state,
        divisions: orderColaboradores,
      }

    case "FILTER_DIVISION":
      const allNames = state.allDivisions;
      const sortedDivision = action.payload === "asc"
        ? allNames.sort((a, b) => {
          if (a.name > b.name) return 1;
          if (b.name > a.name) return -1;
          return 0;
        })
        : allNames.sort((a, b) => {
          if (a.name > b.name) return -1;
          if (b.name > a.name) return 1;
          return 0;
        })
      return {
        ...state,
        divisions: sortedDivision,
      }

    case "FILTER_DIVISION_SUPERIOR":
      const allNamesSuperior = state.allDivisions;
      const sortedDivisionSuperior = action.payload === "asc"
        ? allNamesSuperior.sort((a, b) => {
          if (a.higher > b.higher) return 1;
          if (b.higher > a.higher) return -1;
          return 0;
        })
        : allNamesSuperior.sort((a, b) => {
          if (a.higher > b.higher) return -1;
          if (b.higher > a.higher) return 1;
          return 0;
        })
      return {
        ...state,
        divisions: sortedDivisionSuperior,
      }
      case "FILTER_EMBAJADORES":
        const allNameEmbassador = state.allDivisions;
        const sortedEmbassador = action.payload === "asc"
        ? allNameEmbassador.sort((a, b) => {
          if (a.ambassadors[0].username > b.ambassadors[0].username) return 1;
          if (b.ambassadors[0].username > a.ambassadors[0].username) return -1;
          return 0;
        })
        : allNameEmbassador.sort((a, b) => {
          if (a.ambassadors[0].username > b.ambassadors[0].username) return -1;
          if (b.ambassadors[0].username > a.ambassadors[0].username) return 1;
          return 0;
        })
        return {
          ...state,
          divisions: sortedEmbassador,
        }
    default:
      return state;
  }
}

export default rootReducer;