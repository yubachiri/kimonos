import { createMuiTheme } from '@material-ui/core/styles'
import pink from '@material-ui/core/colors/pink';
import cyan from '@material-ui/core/colors/cyan';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: pink[100],
      main: pink[200],
      dark: pink[400],
      contrastText: '#000000',
    },
    secondary: cyan,
  },
})

export default theme;
