import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Icon from '../icon/Icon';
import "./timeline.css";
import { useState, useEffect } from  'react';
import skillData from '../../data/skills.json';

function Timeline({companies}) {
    function RelatedSkills({company}){
        const [skills, setSkills] = useState([]);
    
        useEffect(function (){
            if (company?.projects?.length){
                ///create array
                const newSkills = [];

                company?.projects?.forEach((project) => {
                    project?.technologies.forEach((technology) => {
                        ///add filtered skills
                        if (!newSkills.includes(technology)) {
                            ///filter repeated skills
                            newSkills.push(technology);
                        }
                    })
                })

                setSkills(newSkills);
            }
        }, [])

        return(
            <>
                {skills.map((technology, index) => {
                    return(
                        <span
                            key={`technolohy-${index}`}
                            className="badge rounded-pill me-2 py-2 px-3"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            // title={`${skills[technology].years} years of experience and counting...`}
                            style={{ backgroundColor: skillData[technology]?.color }}
                        >
                            {skillData[technology] && (
                                <>
                                    {skillData[technology].name} &nbsp; 
                                    {skillData[technology]?.years}x
                                </>
                            )}
                        </span>
                    )
                })}
            </>
        );
    }


    return (
        <>
            <VerticalTimeline>
                {companies.map((company, index) => (
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date={`${company.startyear} - ${company.endyear}`}
                        icon={<Icon use="Bolt" />}
                    >
                        <h3 className="vertical-timeline-element-title">{company.name}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{company.position}</h4>
                        <p>
                        {company.description}
                        </p>
                        <RelatedSkills company={company} />
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
    
        </>
    )

};

export default Timeline; 