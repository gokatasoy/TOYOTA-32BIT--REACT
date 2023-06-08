import './App.css';
import StartPage from "./pages/StartPage/StartPage"
import TerminalList from './pages/TerminalList/TerminalList';
import TerminalLogin from './pages/TerminalLogin/TerminalLogin';
import DefectPage from './pages/DefectPage/DefectPage';
import DefectList from "./pages/DefectList/DefectList"
import BigFont from "./pages/BigFont/BigFont"
import { Routes, Route} from 'react-router-dom';
import { KeyboardProvider } from './context/KeyboardContext';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <KeyboardProvider>
        <div className="App">
          <Routes>
            <Route path='/' element={<StartPage/>} />
            <Route path='/terminal-list' element={<TerminalList/>} />
            <Route path='/terminal-login' element={<TerminalLogin/>} />
            <Route path='/defect-page' element={<DefectPage/>} />
            <Route path='/big-font' element={<BigFont/>} />
            <Route path='/defect-list' element={<DefectList/>} />
          </Routes>
        </div>
      </KeyboardProvider>
    </I18nextProvider>
  );
}

export default App;
