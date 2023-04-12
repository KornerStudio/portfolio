import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        success: {
            main: "#27ae60"
        }
    },
    components: {
        MuiButton: {
          defaultProps: {
            variant: 'contained',
            size: 'large'
          },
          styleOverrides: {
            root: {
                color: 'white'
            }
          }
        },
      },
});

export default theme;
