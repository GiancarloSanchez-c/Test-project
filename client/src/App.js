import { Route, Routes, useNavigate } from 'react-router-dom';
import { Dashboard, Register,Login ,CreateDivision,Colaboradores,CreateSubDivision} from './components'


function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/colaboradores' element={<Colaboradores />} />
          <Route path='/createDivision' element={<CreateDivision />} />
          <Route path='/createSubdivision' element={<CreateSubDivision />} />
        </Routes>

      </div>
    </>
  );
}

export default App;
