import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';

import { Stack, useTheme } from '@mui/material';
import { RocketLaunch } from '@mui/icons-material';
import skills from '../../data/skills.json';

const Projects = ({ projectList }) => {
  const [activeStep, setActiveStep] = React.useState(0);
    const theme = useTheme();

  return (
    <Box sx={{  }}>
        <Stepper
            activeStep={activeStep}
            orientation="vertical"    
        >
        {projectList.map((p, index) => (
          <Step key={p.name}>
            <StepLabel
                StepIconComponent={RocketLaunch}
                sx={{
                    color: index === activeStep ? theme.palette.primary.main : 'black',
                    cursor: 'pointer'
                }}
            >
                <Typography
                    variant="h6"
                    onClick={() => setActiveStep(index)}
                    sx={{
                        textTransform: 'uppercase',
                        color: index === activeStep ? theme.palette.primary.main : 'black'
                    }}
                >
                    {p.name}
                </Typography>
            </StepLabel>
            <StepContent>
                {p?.description ? (
                    <>
                        <Typography variant="caption" color="grey">Description:</Typography>
                        <Typography variant="body1">{p.description}</Typography>
                    </>
                ) : null}
                {p?.majorContribution ? (
                    <>
                        <Typography variant="caption" color="grey">Major Contribution:</Typography>
                        <Typography variant="body1">{p.majorContribution}</Typography>
                    </>
                ) : null}
                {p?.mainTasks ? (
                    <>
                        <Typography variant="caption" color="grey">Main Tasks:</Typography>
                        <ul>
                            {p.mainTasks?.map((t, i) => (
                                <li key={`task-${i}`}>{t}</li>
                            ))}
                        </ul>
                    </>
                ) : null}
                {p?.technologies ? (
                    <>
                        <Typography variant="caption" color="grey">Stack:</Typography>
                        <br/>
                        {p.technologies.map((t, index) => {
                                if (skills[t]) {   
                                    return(
                                        <span
                                            key={`technology-${index}`}
                                            className="badge rounded-pill me-2 py-2 px-3"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            title={`${skills[t].years} years of experience and counting...`}
                                            style={{ backgroundColor: skills[t].color }}
                                        >
                                            {skills[t].name} {skills[t].years}x
                                        </span>
                                    )
                                }
                                return null;
                            })}
                    </>
                ) : null}
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default Projects;
