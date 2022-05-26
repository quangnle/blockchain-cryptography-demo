import { deepPurple, red, yellow } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500]
    },
    secondary: {
      main: yellow[600]
    },
    error: {
      main: red.A400
    }
  }
});

export default theme;
