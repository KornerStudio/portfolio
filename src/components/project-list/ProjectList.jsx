function Projectlist({projects}){
    return(
        <div className="accordion" id="project-list">


            {projects.map((project, index) => {
                return (
                    <div className="accordion-item">
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
                               {project?.mainTasks?.map((mainTasks, index) => {
                                    return(
                                        <li key={`task-${index}`}>{mainTasks}</li>      
                                    )
                                })}
                            </ul>
                            <p><b>Major Contribution:</b><br/>{project.majorContribution}</p> 
                            <p><b>Technologies:</b><br/></p> 
                            {project?.technologies?.map((technology, index) => {
                                return(
                                    <span className="badge rounded-pill text-bg-success me-2 py-2 px-3">{technology}</span> 
                                )
                            })}
                            </div>
                        </div>
                    </div>
                )
            })}

            
            
         
        </div>
    )
}

export default Projectlist;
