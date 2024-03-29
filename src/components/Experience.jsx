import { useState, useEffect } from "react";
import "./Experience.styles.css";
import Timeline from "./Timeline";
import { fetchData } from '../utils/api';
// import Dialog from './Dialog';
import Drawer from '../features/project-details/Drawer';

function Experience(){
    const [activeDialog, setActiveDialog] = useState();
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
        <>
            <Timeline
                companies={companies}
                openDialog={openDialog}
            />
            <Drawer
                companies={companies}
                activeDialog={activeDialog}
                setActiveDialog={setActiveDialog}
            />
            {/* <Dialog
                activeDialog={activeDialog}
                companies={companies}
                setActiveDialog={setActiveDialog}
            /> */}
        </>
    )
}

export default Experience;