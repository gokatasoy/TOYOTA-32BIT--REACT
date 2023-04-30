import './App.css';
import TerminalList from './pages/TerminalList/TerminalList';
import TerminalLogin from './pages/TerminalLogin/TerminalLogin';
import DefectPage from './pages/DefectPage/DefectPage';
import DefectList from "./pages/DefectList/DefectList"
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<TerminalList/>} />
        <Route path='/terminal-login' element={<TerminalLogin/>} />
        <Route path='/defect-page' element={<DefectPage/>} />
        <Route path='/defect-list' element={<DefectList/>} />
      </Routes>
    </div>
  );
}

export default App;
