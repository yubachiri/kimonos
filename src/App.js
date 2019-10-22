import React from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { MuiThemeProvider } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/styles'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import './App.css';
import theme from './theme'
import HeaderMenu from './HeaderMenu';
import Top from './Top';
import Detail from './Detail';

const useStyles = makeStyles({
  button: {
    margin: '30px',
  },
  links: {
    margin: '30px',
  },
});

function KimonoLinks() {
  const classes = useStyles();

  const ids = [1, 2, 3];
  const listItems = ids.map((id) => (
    <Link to={`/detail/${id}`} key={id}>
      <Button variant="contained" color="secondary">
        detail_{id}
      </Button>
    </Link>
  ));
  return (<div className={classes.links}>{listItems}</div>);
}

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <HeaderMenu />
            <Container style={{marginTop: 50}}>
              <Link to='/'>
                <Button variant="contained" color="primary">
                  top
                </Button>
              </Link>

              <KimonoLinks />

              <Route path='/' exact component={Top} />
              <Route path='/detail/:id' exact component={Detail} />
            </Container>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
