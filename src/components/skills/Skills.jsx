import "./styles.css" 
import Expertise from "../expertise/Expertise";
import skills from '../../data/skills.json';
import Tabs from "../tabs/Tabs";
import React, { useState } from 'react';

const options = ["Development", "Design", "Soft Skills"];

function Skills(){
    const [activeTab, setActiveTab] = useState(1);

    return(
        <div id="skills-section" className="section">
            <div className="container">
                <h2>Skills</h2> 
                <Tabs options={options}  setActiveTab={setActiveTab} activeTab={activeTab}/>
                <div className="expertise-grid">
                    {
                        Object.values(skills).map((skill, index) => (
                           activeTab=== skill.type && <Expertise key={`skill-${index}`} {...skill}/> 
                        )) 
                    }
                </div>
                        
            </div>
        </div>
    )
}

export default Skills;
