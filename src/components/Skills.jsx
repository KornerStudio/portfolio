import "./skills.css" 
import Expertise from "./Expertise";
import Tabs from "./Tabs";
import { useState } from 'react';
import { useEffect } from "react";
import { fetchData } from '../utils/api';

const options = ["Development", "Design", "Soft Skills"];

function Skills(){
    const [activeTab, setActiveTab] = useState(1);
    const [skills, setSkills] = useState([]);

    const getSkills = async () => {
        const response = await fetchData('/skills');
        setSkills(response);
    };

    useEffect(() => {
        getSkills()
    },[]);



    return(
        <div id="skills-section" className="section">
            <div className="container">
                <h2>Skills</h2> 
                { Object.values(skills).length ? ( 
                    <>
                        <Tabs options={options}  setActiveTab={setActiveTab} activeTab={activeTab}/>
                        <div className="expertise-grid">
                            {
                                Object.values(skills).map((skill, index) => (
                                    activeTab=== skill.type && <Expertise key={`skill-${index}`} {...skill}/> 
                                    )) 
                            }
                        </div>
                    </>
                ) : (
                    <div className="spinner-border text-light" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div> 
                )}
            </div>
        </div>
    )
}

export default Skills;
