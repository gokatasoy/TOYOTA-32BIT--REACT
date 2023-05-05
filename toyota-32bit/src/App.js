import './App.css';
import TerminalList from './pages/TerminalList/TerminalList';
import TerminalLogin from './pages/TerminalLogin/TerminalLogin';
import DefectPage from './pages/DefectPage/DefectPage';
import DefectList from "./pages/DefectList/DefectList"
import BigFont from "./pages/BigFont/BigFont"
import { Routes, Route} from 'react-router-dom';
import DefectEntryPopup from './components/defect-entry-popup/DefectEntryPopup';

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path='/' element={<TerminalList/>} />
        <Route path='/terminal-login' element={<TerminalLogin/>} />
        <Route path='/defect-page' element={<DefectPage/>} />
        <Route path='/big-font' element={<BigFont/>} />
        <Route path='/defect-list' element={<DefectList/>} />
      </Routes> */}
      <DefectEntryPopup/>
    </div>
  );
}

export default App;
