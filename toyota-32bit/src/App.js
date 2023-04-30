import './App.css';
import TerminalList from './pages/TerminalList/TerminalList';
import TerminalLogin from './pages/TerminalLogin/TerminalLogin';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import ErrorList from "./pages/ErrorList/ErrorList"
import { Routes, Route, Link, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<TerminalList/>} />
        <Route path='/terminalLogin' element={<TerminalLogin/>} />
        <Route path='/errorPage' element={<ErrorPage/>} />
        <Route path='/errorList' element={<ErrorList/>} />
      </Routes>

      {/* <TerminalList/>
      <TerminalLogin/>
      <ErrorPage/>
      <ErrorList/> */}
    </div>
  );
}

export default App;
