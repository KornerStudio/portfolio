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
            size: 'large',
            disableElevation: true,
          },
          styleOverrides: {
            contained: {
                color: 'white'
            }
          }
        },
        MuiDivider: {
          defaultProps: {
          },
          styleOverrides: {
            root: {
              opacity: 0.75,
            }
          }
        },
        MuiTypography: {
          defaultProps: {
          },
          styleOverrides: {
            h4: {
              fontFamily: 'Roboto Slab',
              fontWeight: 900
            },
            h6: {
              fontFamily: 'Roboto Slab',
              fontWeight: 'bold'
            }
          }
        },
      },
});

export default theme;
