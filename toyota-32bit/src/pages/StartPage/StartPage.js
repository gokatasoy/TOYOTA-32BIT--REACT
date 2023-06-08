import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./startPage.css"

const StartPage = () => {
    let navigate = useNavigate();
    
    const handleTerminalNavigate = () => {
        navigate("/terminal-list")
    }

    return (
        <div className='start-page-grid'>
            {/* HEADER GRID */}
            <div className='header-grid'>
                <div className='header'>
                    <h1>Complete Vehicle Quality</h1>
                </div>
                <div className='section'>
                    <h4>YARDIM</h4>
                    <h4>DESTEK</h4>
                </div>
            </div>

            {/* INTERNAL LINKS GRID */}
            <div className='internal-links-grid'>
                {/* <div className='container-grid'> */}
                <div className='container'>Administration</div>
                <div className='container' onClick={handleTerminalNavigate}>Terminaller</div>
                <div className='container'>Ekranlar</div>
                {/* </div> */}
            </div>

            {/* EXTERNAL LINKS GRID */}
            <div className='external-links-grid'>
                <div className='header'>
                    <h4>Harici Linkler</h4>
                </div>
                <div className='container-grid'>
                    <div className='col-3'>
                        <div className='container'>IMEI Pokayoke System</div>
                        <div className='container'>QATorque</div>
                        <div className='container'>Part  Traceability</div>
                        <div className='container'>Offline Management</div>
                    </div>
                    <div className='col-3'>
                        <div className='container'>MAB</div>
                        <div className='container'>ECI System</div>
                        <div className='container'>Chemical Traceability System</div>
                        <div className='container'>Pokayoke Feedback System</div>
                        <div className='container'>TMMY Name Label Camera Inspection System</div>
                    </div>
                    <div className='col-3'>
                        <div className='container'>Henkaten</div>
                        <div className='container'>e-Spec System</div>
                        <div className='container'>QA Office Screens</div>
                        <div className='container'>Inspection Vehicle Location System   </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartPage
