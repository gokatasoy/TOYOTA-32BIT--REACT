import React, { useState, useEffect } from "react";
import axios from "axios";

function DefectionSelectBox() {
    const [selectedOption, setSelectedOption] = useState("");
    const [data, setData] = useState([]);

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    useEffect(() => {
        axios.get("./picture-data2.json")
        .then(res => setData(res.data))
        .catch(error => {
            console.log(error);
            setData("An error occured while fetching data")
        })
    },[])

    return (
        <div className="nr-reason">
            <select value={selectedOption} onChange={handleChange}>
                {data.map(({partDefects}) => (
                    partDefects.map(({defectName, defectId}) => (
                        <option key={defectId}>{defectName}</option>
                    ))
                ))}
            </select>
        </div>

    );
}

export default DefectionSelectBox;