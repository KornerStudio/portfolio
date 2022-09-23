import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Icon from '../icon/Icon';

function Timeline(props) {
    return (
        <>
            <VerticalTimeline>
                {props.companies.map((company, index) => (
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date={`${company.startyear} - ${company.endyear}`}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<Icon use="Bolt" />}
                    >
                        <h3 className="vertical-timeline-element-title">{company.name}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{company.position}</h4>
                        <p>
                        {company.description}
                        </p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
    
        </>
    )

};

export default Timeline; 