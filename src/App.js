import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MuiThemeProvider } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container';

import './App.css';
import theme from './theme'
import HeaderMenu from './HeaderMenu';
import Top from './Top';
import Detail from './Detail';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <HeaderMenu />
            <Container style={{marginTop: 50}}>
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
