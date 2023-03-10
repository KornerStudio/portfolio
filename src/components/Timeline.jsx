import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Icon from './Icon';
import "./Timeline.styles.css";
// import { useState, useEffect } from  'react';
// import skillData from '../../data/skills.json';
import Button from './Button';

// function RelatedSkills({company}){
//     const [skills, setSkills] = useState([]);

//     useEffect(function (){
//         if (company?.projects?.length){
//             const newSkills = [];

//             company?.projects?.forEach((project) => {
//                 project?.technologies.forEach((technology) => {
//                     if (!newSkills.includes(technology)) {
//                         newSkills.push(technology);
//                     }
//                 })
//             })

//             setSkills(newSkills);
//         }
//     }, [])

//     return(
//         <div>
//             {skills.map((technology, index) => (
//                 <span
//                     key={`technolohy-${index}`}
//                     className="badge rounded-pill me-2 py-2 px-3"
//                     data-bs-toggle="tooltip"
//                     data-bs-placement="top"
//                     style={{ backgroundColor: skillData[technology]?.color }}
//                 >
//                     {skillData[technology] && (
//                         <>
//                             {skillData[technology].name} &nbsp; 
//                             {skillData[technology]?.years}x
//                         </>
//                     )}
//                 </span>
//             ))}
//         </div>
//     );
// }

function Timeline({companies, openDialog}) {
    if (companies.length) {
        return (
            <>
                <VerticalTimeline>
                    {companies.map((company, index) => (
                        <VerticalTimelineElement
                            key={`company-${index}`}
                            className={`vertical-timeline-element--work ${index % 2 === 0 && "vertical-timeline-element--odd"}`}
                            date={`${company.startyear} - ${company.endyear}`}
                            icon={<Icon use="Bolt" />}
                        >
                            <h3 className="vertical-timeline-element-title">
                                {company.name}
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle">{company.position}</h4>
                            <p>
                            {company.description}
                            </p>
                            <br/>
                            {/* <RelatedSkills company={company} /> */}
                            <br/>
                            <Button variant="success" onClick={() => openDialog(index)}>
                                View Projects ({company.projects.length})
                            </Button>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
        
            </>
        )
    }

    return (
        <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    );

};

export default Timeline; 