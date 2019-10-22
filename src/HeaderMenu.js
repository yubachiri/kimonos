import React from 'react';
import { useHistory } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

function KimonoIcon() {
  return <img src={`${process.env.PUBLIC_URL}/kimono-icon.png`} alt="kimono-icon" style={{objectFit: 'contain', width: 30, height: 30, marginLeft: 10}} />;
}

export default function HeaderMenu(props) {
  const history = useHistory();

  function handleToRootPage() {
    history.push('/');
  }

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title} onClick={handleToRootPage} style={{cursor: 'pointer'}}>
            Kimonos
            <KimonoIcon />
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
