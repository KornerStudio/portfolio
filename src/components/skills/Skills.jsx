import "./styles.css" 
import Expertise from "../expertise/Expertise";
import skills from '../../data/skills.json';

function Skills(){
    return(
        <div id="skills-section" className="section">
            <div className="container">
                <h1>Skills</h1>
                <div className="expertise-grid">
                    {
                        Object.values(skills).map((technology, index) => (
                            <Expertise key={`skill-${index}`} {...technology}/>
                        )) 
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills;
