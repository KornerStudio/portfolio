import {useState} from "react";
import "./styles.css";
import companies from "../../data/companies.json";
import Dialog from "../Dialog";

function Experience(){
    const [activeDialog, setActiveDialog] = useState(0);

    const openDialog = (index) => {
        setActiveDialog(index);
        new window.bootstrap.Modal('#project-dialog').show();
    }

    return(
        <div id="experience-section" className="section">
            <div className="container">
                <h1>Experience</h1>
                {
                    companies.map((company, index) => ( 
                        <div key={`company-${index}`} className="card mb-3"> 
                            <h5 className="card-header">{company.name}</h5>
                            <div className="card-body">
                                <h5 className="card-title">{company.startyear} - {company.endyear}</h5>
                                <button
                                    onClick={() => openDialog(index)}
                                    type="button"
                                    className="btn btn-primary"
                                >
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Dialog
                activeDialog={activeDialog}
                companies={companies}
                setActiveDialog={setActiveDialog}
            />
        </div>
    )
}

export default Experience;