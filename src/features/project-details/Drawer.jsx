import { useMemo } from 'react';
import { Drawer, Box, Typography, Stack, Divider, Button, IconButton } from '@mui/material';
import { East, West, Close } from '@mui/icons-material'
import Projects from './Projects';

const CustomDrawer = ({ activeDialog, companies, setActiveDialog }) => {
    const company = useMemo(() => {
        return companies[activeDialog];
    }, [companies, activeDialog]);

    const handlePrev = () => {
        if (activeDialog > 0) {
            setActiveDialog(activeDialog - 1);
        }
    }
    
    const handleNext = () => {
        if (activeDialog < companies?.length) {
            const nextCompany = activeDialog + 1;
            setActiveDialog(nextCompany);
        }
    }

    if (!company) {
        return null;
    }

    return(
        <Drawer
            sx={{ maxWidth: '50%', height: '100vh' }}
            anchor="right"
            open={activeDialog >= 0}
            onClose={() => {
                setActiveDialog(undefined);
            }}
        >
            <Box sx={{ width: 900, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Box>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ padding: 4, paddingTop: 2, paddingBottom: 2 }}>
                        <Typography variant="h4" color="primary">{company.name}</Typography>
                        <IconButton onClick={() => setActiveDialog(undefined)}><Close/></IconButton>
                    </Stack>
                    <Divider />
                </Box>
                <Stack direction="column" gap={2} sx={{ padding: 4, flexGrow: 1 }}>
                    <Typography variant="body1">Projects: {companies?.projects?.length}</Typography>
                    <Projects projectList={company?.projects}/>
                </Stack>
                <Box>
                    <Divider />
                    <Stack direction="row" gap={4} justifyContent="space-between" alignItems="center" sx={{ padding: 4 }}>
                        <Button
                            fullWidth
                            onClick={handlePrev}
                            disabled={activeDialog === 0}
                            startIcon={<West/>}
                        >
                            Previous
                        </Button>
                        <Button
                            fullWidth
                            onClick={handleNext}
                            disabled={activeDialog === (companies.length - 1)}
                            endIcon={<East/>}
                            color="success"
                        >
                            Next
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </Drawer>
    )
}

export default CustomDrawer;
