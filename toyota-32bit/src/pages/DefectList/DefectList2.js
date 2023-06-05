import './defectList.css';
import { useState, useEffect } from "react";
import axios from "axios";
import NrReason from "../../components/nr-reason/NrReason"
import BottomGrid from "../../components/bottom-grid/BottomGrid"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-regular-svg-icons';
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [veri, setVeri] = useState([]);

    const handleSave = () => {
        toast.success('Kaydedildi!', {
            position: toast.POSITION.TOP_CENTER,
            className: 'toastMessage',
            autoClose: 1000,
            hideProgressBar: true,
        });
    }

    useEffect(() => {
        axios
            .get("./HataListesi.json")
            .then((res) => setVeri(res.data))
            .catch((error) => {
                console.log(error);
                setVeri("An error occurred while fetching data");
            });
    }, []);

    return (
        <div className="App">
            <table>
                <thead className='tableHead'>
                    <tr>
                        <th>Bildiren</th>
                        <th>Body</th>
                        <th>Assy</th>
                        <th>Vin No </th>
                        <th>Renk</th>
                        <th>Mdl</th>
                        <th>Sicil</th>
                        <th>Parça</th>
                        <th>Spot</th>
                        <th>Gun</th>
                        <th>ArcGun</th>
                        <th>Hata</th>
                        <th>Rank</th>
                        <th>Saat</th>
                        <th>Hata Türü</th>
                        <th>Hata Sor</th>
                        <th>Alt Sorumlu</th>
                        <th>NR REASON</th>
                        <th>Kaydet</th>
                        <th>Düzenle / Sil</th>
                    </tr>
                </thead>
                <tbody className='tableBody'>
                    {veri.map(({ data }) =>
                        data.map(({ defectList }) =>
                            defectList.map(({ depCode, bodyNo, assyNo, vinNo, colorExtCode, modelCode, localId, partName, formattedDefectHour, defectCode, defrespName }) =>
                                <tr>
                                    <td>{depCode}</td>
                                    <td>{bodyNo}</td>
                                    <td>{assyNo}</td>
                                    <td>{vinNo}</td>
                                    <td>{colorExtCode}</td>
                                    <td>{modelCode}</td>
                                    <td>{localId}</td>
                                    <td className='partName'>{partName}</td>
                                    <td>{ }</td>
                                    <td>{ }</td>
                                    <td>{ }</td>
                                    <td>{ }</td>
                                    <td>{ }</td>
                                    <td>{formattedDefectHour}</td>
                                    <td>{defectCode}</td>
                                    <td>{defrespName}</td>
                                    <td>{ }</td>
                                    <td>
                                        <NrReason />
                                    </td>
                                    <td>
                                        <FontAwesomeIcon className='saveIcon' icon={faSave} onClick={handleSave} />
                                    </td>
                                    <td>
                                        <FontAwesomeIcon className='editIcon' icon={faPen} />
                                        <FontAwesomeIcon className='deleteIcon' icon={faTrash} />
                                    </td>
                                </tr>
                            )
                        )
                    )}
                </tbody>
            </table>
            <ToastContainer />
            <div className='bottom-grid'>
                <BottomGrid />
            </div>
        </div>
    );
}

export default App;

import './defectList.css';
import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import NrReason from '../../components/nr-reason/NrReason';
import BottomGrid from "../../components/bottom-grid/BottomGrid"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DefectList = () => {
    const [veri, setVeri] = useState([]);

    const handleSave = () => {
        toast.success('Kaydedildi!', {
            position: toast.POSITION.TOP_CENTER,
            className: 'toastMessage',
            autoClose: 1000,
            hideProgressBar: true,
        });
    };

    useEffect(() => {
        axios
            .get('./HataListesi.json')
            .then((res) => setVeri(res.data))
            .catch((error) => {
                console.log(error);
                setVeri("An error occurred while fetching data");
            });
    }, []);

    const columns = [
        { field: 'depCode', headerName: 'Bildiren', width: 100 },
        { field: 'bodyNo', headerName: 'Body', width: 100 },
        { field: 'assyNo', headerName: 'Assy', width: 100 },
        { field: 'vinNo', headerName: 'Vin No', width: 100 },
        { field: 'colorExtCode', headerName: 'Renk', width: 100 },
        { field: 'modelCode', headerName: 'Mdl', width: 100 },
        { field: 'localId', headerName: 'Sicil', width: 100 },
        { field: 'partName', headerName: 'Parça', width: 270, cellClassName: 'partName' },
        { field: 'spot', headerName: 'Spot', width: 100 },
        { field: 'gun', headerName: 'Gun', width: 100 },
        { field: 'arcgun', headerName: 'ArcGun', width: 100 },
        { field: 'hata', headerName: 'Hata', width: 100 },
        { field: 'rank', headerName: 'Rank', width: 100 },
        { field: 'formattedDefectHour', headerName: 'Saat', width: 100 },
        { field: 'defectCode', headerName: 'Hata Türü', width: 100 },
        { field: 'defrespName', headerName: 'Hata Sor', width: 100 },
        { field: '', headerName: 'Alt Sorumlu', width: 100 },
        { field: 'nrReason', headerName: 'NR REASON', width: 130, renderCell: () => <NrReason /> },
        {
            field: 'kaydet', headerName: 'Kaydet', width: 100, renderCell: () => (
                <FontAwesomeIcon
                    className="saveIcon"
                    icon={faSave}
                    onClick={handleSave}
                />
            )
        },
        {
            field: 'duzenlesil', headerName: 'Düzenle / Sil', width: 100, renderCell: () => (
                <div>
                    <FontAwesomeIcon className="editIcon" icon={faPen} />
                    <FontAwesomeIcon className="deleteIcon" icon={faTrash} />
                </div>
            )
        },
    ];

    const rows = veri.flatMap(({ data }) =>
        data.flatMap(({ defectList }) =>
            defectList.map(
                ({
                    depCode,
                    bodyNo,
                    assyNo,
                    vinNo,
                    colorExtCode,
                    modelCode,
                    localId,
                    partName,
                    formattedDefectHour,
                    defectCode,
                    defrespName,
                }) => ({
                    id: depCode,
                    depCode,
                    bodyNo,
                    assyNo,
                    vinNo,
                    colorExtCode,
                    modelCode,
                    localId,
                    partName,
                    formattedDefectHour,
                    defectCode,
                    defrespName,
                })
            )
        )
    );

    return (
        <div style={{ height: "%100", width: '100%' }}>
            <DataGrid columns={columns} rows={rows} />
            <ToastContainer />
            <div className='bottom-grid'>
                <BottomGrid />
            </div>
        </div>
    );
};

export default DefectList;
