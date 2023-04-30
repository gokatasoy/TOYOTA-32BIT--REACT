import './defectList.css';
import { useState, useEffect } from "react";
import axios from "axios";
import  NrReason  from "../../components/nr-reason/NrReason"
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
              defectList.map(({ depCode, bodyNo,assyNo, vinNo,colorExtCode,modelCode,localId,partName,formattedDefectHour,defectCode,defrespName }) => 
                <tr>
                  <td>{depCode}</td>
                  <td>{bodyNo}</td>
                  <td>{assyNo}</td>
                  <td>{vinNo}</td>
                  <td>{colorExtCode}</td>
                  <td>{modelCode}</td>
                  <td>{localId}</td>
                  <td className='partName'>{partName}</td>
                  <td>{}</td>
                  <td>{}</td>
                  <td>{}</td>
                  <td>{}</td>
                  <td>{}</td>
                  <td>{formattedDefectHour}</td>
                  <td>{defectCode}</td>
                  <td>{defrespName}</td>
                  <td>{}</td>
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
      <ToastContainer/>
      <div className='bottom-grid'>
        <BottomGrid/>
      </div>
    </div>
  );
}

export default App;