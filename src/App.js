import React from 'react';
import './App.css';
import { MuiThemeProvider, makeStyles } from '@material-ui/core/styles'
import theme from './theme'
import Top from './Top';
import Detail from './Detail';
import HeaderMenu from './HeaderMenu';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Button from '@material-ui/core/Button';

function App() {
  const useStyles = makeStyles(theme => ({
    button: {
      margin: '30px',
    },
  }));

  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <HeaderMenu />
          <Link to='/'>
            <Button variant="contained" color="primary" className={classes.button}>
              top
            </Button>
          </Link>
          
          {/* TODO: idかなんか渡して表示切り替え */}
          <Link to='/detail/1'>
            <Button variant="contained" color="secondary" className={classes.button}>
              detail
            </Button>
          </Link>

          <Route path='/' exact component={Top} />
          <Route path='/detail/:id' exact component={Detail} />
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
