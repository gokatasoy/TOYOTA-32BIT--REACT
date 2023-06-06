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

  //////////////////////////////////////////////////////////////////////////////////////////////////
  const columns = [
    { field: 'depCode', headerName: 'Bildiren', width: 85 },
    { field: 'bodyNo', headerName: 'Body', width: 65 },
    { field: 'assyNo', headerName: 'Assy', width: 6 },
    { field: 'vinNo', headerName: 'Vin No', width: 200 },
    { field: 'colorExtCode', headerName: 'Renk', width: 70 },
    { field: 'modelCode', headerName: 'Mdl', width: 70 },
    { field: 'localId', headerName: 'Sicil', width: 70 },

    // ADDITIONAL CLASSNAME FOR PARTNAME
    {
      field: 'partName', headerName: 'Parça', width: 200, renderCell: (params) => (
        <div className={`cellStyle ${params.field === 'partName' ? 'partNameStyle' : ''}`}>
          {params.value}
        </div>
      ),
    },
    { field: 'spot', headerName: 'Spot', width: 60 },
    { field: 'gun', headerName: 'Gun', width: 60 },
    { field: 'arcgun', headerName: 'ArcGun', width: 80 },
    { field: 'hata', headerName: 'Hata', width: 60 },
    { field: 'rank', headerName: 'Rank', width: 60 },
    { field: 'formattedDefectHour', headerName: 'Saat', width: 100 },
    { field: 'defectCode', headerName: 'Hata Türü', width: 100 },
    { field: 'defrespName', headerName: 'Hata Sor', width: 100 },
    { field: 'altSorumlu', headerName: 'Alt Sorumlu', width: 110 },
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
      field: 'islem', headerName: 'İşlem', width: 120, renderCell: () => (
        <div>
          <FontAwesomeIcon className="editIcon" icon={faPen} />
          <FontAwesomeIcon className="deleteIcon" icon={faTrash} />
        </div>
      )
    },
  ];

  // ADD HEADER AND CELL CLASSNAMES
  const columnProperties = {
    headerClassName: 'headerStyle',
    cellClassName: 'cellStyle'
  };

  const columnsWithStyles = columns.map(column => ({ ...column, ...columnProperties }));

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

  //////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div style={{ height: "%100", width: '100%' }}>
      <div className='data-grid'>
        <DataGrid columns={columnsWithStyles} rows={rows} />
      </div>
      <ToastContainer />
      <div className='bottom-grid'>
        <BottomGrid />
      </div>
    </div>
  );
};

export default DefectList;
