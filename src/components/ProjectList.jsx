import skills from '../data/skills.json';
import { useEffect } from 'react';

function Projectlist({projects}){
    useEffect(() => {
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new window.bootstrap.Tooltip(tooltipTriggerEl)
        })
    }, [])

    return(
        <div className="accordion" id="project-list">


            {projects.map((project, index) => (
                <div key={`project-${index}`} className="accordion-item">
                    <h2 className="accordion-header" id={`heading-${index}`}>
                        <button className={`accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${index}`} >
                            {project.name}
                        </button>
                    </h2>
                    <div id={`collapse-${index}`} className={`accordion-collapse collapse ${index===0 && "show"}`} data-bs-parent="#project-list">
                        <div className="accordion-body">
                            <p><b>Description:</b><br/>{project.description}</p> 
                            <p><b>MainTasks:</b><br/></p>
                            <ul>
                                {project?.mainTasks?.map((mainTasks, index) => (
                                    <li key={`task-${index}`}>{mainTasks}</li>      
                                ))}
                            </ul>
                            <p><b>Major Contribution:</b><br/>{project.majorContribution}</p> 
                            <p><b>Technologies:</b><br/></p> 

                            {project?.technologies?.map((technology, index) => {
                                if (skills[technology]) {   
                                    return(
                                        <span
                                            key={`technology-${index}`}
                                            className="badge rounded-pill me-2 py-2 px-3"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            title={`${skills[technology].years} years of experience and counting...`}
                                            style={{ backgroundColor: skills[technology].color }}
                                        >
                                            {skills[technology].name} {skills[technology].years}x
                                        </span>
                                    )
                                }
                                return null;
                            })}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Projectlist;
