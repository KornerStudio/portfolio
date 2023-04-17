import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';

import { Stack, useTheme, Chip } from '@mui/material';
import { RocketLaunch } from '@mui/icons-material';
import skills from '../../data/skills.json';

const Projects = ({ projectList }) => {
  const [activeStep, setActiveStep] = React.useState();
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
                {p?.images ? (
                    <Stack direction="row" gap={2} mb={2} sx={{
                        maxWidth: '100%',
                        overflowX: 'scroll',
                        padding: 1,
                    }}>
                        {p.images.map((image, index) => (
                            <Box
                                sx={{
                                    backgroundColor: 'white',
                                    padding: 1,
                                    borderRadius: 2,
                                    boxShadow: '0px 1px 2px rgba(0,0,0,0.25)',
                                    cursor: 'pointer'
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 150,
                                        height: 150,
                                        background: `url(/projects/on-frontiers/${image})`,
                                        backgroundColor: theme.palette.grey[200],
                                        backgroundSize: 'cover',
                                        boxShadow: 'inset 0px 0px 4px rgba(0,0,0,0.125)'
                                    }}
                                />
                            </Box>
                        ))}
                    </Stack>
                ) : null}
                {p?.description ? (
                    <Box mb={2}>
                        <Typography variant="caption" color="grey">Description:</Typography>
                        <Typography variant="body1">{p.description}</Typography>
                    </Box>
                ) : null}
                {p?.majorContribution ? (
                    <Box mb={2}>
                        <Typography variant="caption" color="grey">Major Contribution:</Typography>
                        <Typography variant="body1">{p.majorContribution}</Typography>
                    </Box>
                ) : null}
                {p?.mainTasks ? (
                    <Box mb={2}>
                        <Typography variant="caption" color="grey">Main Tasks:</Typography>
                        <ul>
                            {p.mainTasks?.map((t, i) => (
                                <li key={`task-${i}`}>{t}</li>
                            ))}
                        </ul>
                    </Box>
                ) : null}
                {p?.technologies ? (
                    <>
                        <Typography variant="caption" color="grey">Stack:</Typography>
                        <br/>
                        <Stack gap={1} flexDirection="row">
                            {p.technologies.map((t, index) => {
                                if (skills[t]) {   
                                    return (
                                            <Chip
                                                key={`technology-${index}`}
                                                label={`${skills[t].name} ${skills[t].years}x`}
                                                sx={{
                                                    color: 'white',
                                                    backgroundColor: skills[t].color
                                                }}
                                            />
                                    )
                                }
                                return null;
                            })}
                        </Stack>
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
