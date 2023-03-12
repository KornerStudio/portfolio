import { useState } from 'react';
import Expertise from "./Expertise";
import Tabs from "./Tabs";
import { useEffect } from "react";
import { fetchData } from '../utils/api';
import "./Skills.styles.css" 

const options = ["Development", "Design", "Soft Skills"];

function Skills(){
    const [activeTab, setActiveTab] = useState(0);
    const [skills, setSkills] = useState([]);

    const getSkills = async () => {
        const response = await fetchData('/skills');
        setSkills(response);
    };

    useEffect(() => {
        getSkills()
    },[]);



    return(
        <>
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
        </>
    )
}

export default Skills;
