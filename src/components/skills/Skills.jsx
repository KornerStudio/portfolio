import "./styles.css" 
import technologies from "../../data/technologies.json";
import Expertise from "../expertise/Expertise";

function Skills(){
    return(
        <div id="skills-section" className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-4"> 
                        <p>personaje aquí gvhcsy gkau vkvy uac sbkaschvjc  ausvhvjh ascasb kjbkj asjkjg yfuoi </p>
                    </div>
                    <div className="col-md-6 col-lg-8">
                        <h1>Skills</h1>
                        {
                            technologies.map((technology, index) => (
                                <Expertise key={`skill-${index}`} years={technology.years}/>
                            )) 
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;
