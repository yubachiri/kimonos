import React from 'react';
import { Link } from "react-router-dom";
import './App.css';
import { makeStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

const useStyles = makeStyles({
  button: {
    margin: '30px',
  },
  links: {
    margin: '30px',
  },
});

async function fetchKimonos(props) {
  props.component.setState({ isLoading: true })
  const url = "https://kimonos.microcms.io/api/v1/kimonos";
  const resp = await axios.get(url, {
    headers: { 'X-API-KEY': process.env.REACT_APP_CMS_API_KEY }
  });
  props.component.setState({ isLoading: false, kimonos: resp.data.contents });
}

function FetchButton(props) {
  return (
    <Button variant="contained" color="secondary" onClick={() => fetchKimonos(props)}>一覧を取得する</Button>
  );
}

// 一覧画面
class Top extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      kimonos: [],
    };
  }

  render() {
    let contents;
    if (this.state.isLoading) {
      contents = <FetchButton component={this} />;
    } else {
      contents = <KimonoLinks kimonos={this.state.kimonos} />;
    }

    return (
      <div className="Top">
        <h1>Hello, React!</h1>
        <p>this is top page.</p>
        <p>list of contents</p>
        {contents}
      </div>
    );
  }
}

function KimonoLinks(props) {
  const classes = useStyles();

  const ids = props.kimonos.map((kimono) => {
    return kimono.id;
  });

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
