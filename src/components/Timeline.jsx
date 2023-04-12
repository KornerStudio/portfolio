import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Icon from './Icon';
import "./Timeline.styles.css";
import { Button, Chip } from '@mui/material'

function Timeline({companies, openDialog}) {
    console.log("🚀 ~ file: Timeline.jsx:8 ~ Timeline ~ companies:", companies)
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
                            <p style={{ opacity: 0.5 }}>{company.description}</p>
                            <br/>
                            {(company?.projects?.technologies ?? []).map((skill, index) => (
                                <Chip label={index}/>
                            ))}
                            <br/>
                            <Button color='success' onClick={() => openDialog(index)}>
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