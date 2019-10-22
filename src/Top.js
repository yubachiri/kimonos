import React from 'react';
import { Link } from "react-router-dom";
import './App.css';
import { makeStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


// 一覧画面
function Top() {
  return (
    <div className="Top">
      <h1>Hello, React!</h1>
      <p>this is top page.</p>
      <p>list of contents</p>
      <KimonoLinks />
    </div>
  );
}

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

  const ids = [1, 2, 3, 4];
  const listItems = ids.map((id) => (
    <Grid item xs={6} key={id}>
      <Link to={`/detail/${id}`}>
        <Button variant="contained" color="secondary">
          detail_{id}
        </Button>
      </Link>
    </Grid>
  ));

  return (
    <div className={classes.links}>
      <Grid container spacing={3}>
        {listItems}
      </Grid>
    </div>
  );
}


export default Top;
