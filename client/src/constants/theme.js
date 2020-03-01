import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: '#f44336'
    },
    background: {
      plain: '#FFFCFF',
      primary: '#556cd6',
      secondary: '#5da9e9'
    }
  }
});

export default theme;
