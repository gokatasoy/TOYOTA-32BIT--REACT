import './terminalList.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

function TerminalList() {
    const { t } = useTranslation();

    const [veri, setVeri] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        axios.get("./terminals.json")
            .then(res => setVeri(res.data))
            .catch(error => {
                console.log(error);
                setVeri("An error occurred while fetching data");
            });
    }, []);

    const handleTerminalClick = () => {
        navigate('/terminal-login');
    }

    const handleBackClick = () => {
        navigate("/")
    }

    return (
        <div className="terminal-list-grid">
            <div className='terminal-list-header-container'>
                <div className='container'>
                    <div className='main-header-h1'>{t("common.All Terminals")}</div>
                    <button onClick={handleBackClick}>Back</button>
                </div>
                <div className='container'>
                    <div className='section-header-h2'>{t("common.Department Basis")}</div>
                    <div className='filter-header-h2'>{t("common.Filter Basis")}</div>
                </div>
            </div>

            {veri.map(({ depName, shopCode, filterBaseds }) => (
                <div key={depName}>
                    <ul>
                        <div className='container'>
                            <div className='section-side'>
                                <h2 className='shop-code-title' >({shopCode})</h2>
                                <h2 >{depName}</h2>
                            </div>
                            {filterBaseds.map(({ filterCode, linkCount }) => (
                                <li className='filter-side parent-box' key={filterCode} onClick={handleTerminalClick}>
                                    {filterCode}
                                    <div className='child-box'>{linkCount}</div>
                                </li>
                            ))}
                        </div>
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default TerminalList;

