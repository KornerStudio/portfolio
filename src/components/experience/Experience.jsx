import React, { useState } from "react";
import "./styles.css";
import companies from "../../data/companies.json";
// import Dialog from "../Dialog";
import Timeline from "../Timeline/Timeline";

function Experience(){
    const [activeDialog, setActiveDialog] = useState(0);

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