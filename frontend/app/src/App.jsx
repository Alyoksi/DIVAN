import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TitlePage from './Pages/Title/TitlePage';
import LoginPage from './Pages/Login/LoginPage';
import RegisterPage from './Pages/Register/RegisterPage';
import KanbanPage from './Pages/Kanban/KanbanPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TitlePage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/kanban' element={<KanbanPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;