import React, { useState } from "react";
import "./styles.css";
import Timeline from "../Timeline/Timeline";
import { useEffect } from "react";
import { fetchData } from '../../utils/api';

function Experience(){
    const [activeDialog, setActiveDialog] = useState(0);
    const [companies, setCompanies] = useState([]);

    const getCompanies = async () => {
        const response = await fetchData('/companies');
        setCompanies(response);
    };

    useEffect(() => {
        getCompanies()
    },[]); 

    const openDialog = (index) => {
        setActiveDialog(index);
        new window.bootstrap.Modal('#project-dialog').show();
    }

    return(
        <div id="experience-section" className="section">
            <div className="container">
                <h2>Experience</h2>
                <Timeline
                    companies={companies}
                    openDialog={openDialog}
                />
            </div>
            {/* <Dialog
                activeDialog={activeDialog}
                companies={companies}
                setActiveDialog={setActiveDialog}
            /> */}
        </div>
    )
}

export default Experience;