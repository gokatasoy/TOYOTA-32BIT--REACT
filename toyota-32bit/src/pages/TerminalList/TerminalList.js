import './terminalList.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';

function TerminalList() {
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

    return (
    <div className="terminal-list">
        <div className='allTerminals'>TÜM TERMİNALLER</div>
        <div className='container'>
            <div className='sectionTitle'>BÖLÜM BAZINDA</div>
            <div className='filterTitle'>FİLTRE BAZINDA</div>
        </div>
        
        {veri.map(({ depName,shopCode, filterBaseds }) => (
        <div key={depName}>
            <ul>
                <div className='container'>
                    <div className='sectionSide'>
                        <h2 className='shopCodeTitle' >({shopCode})</h2>  
                        <h2 >{depName}</h2>  
                </div>
                    {filterBaseds.map(({ filterCode, linkCount }) => (
                    <li className='filterSide parent-box' key={filterCode} onClick={handleTerminalClick}>
                        {filterCode}
                        <div className='child-box'>{linkCount   }</div>
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

