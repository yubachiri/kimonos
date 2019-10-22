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

async function fetchKimonos(component) {
  component.setState({ isLoading: true })
  const url = "https://kimonos.microcms.io/api/v1/kimonos";
  const resp = await axios.get(url, {
    headers: { 'X-API-KEY': process.env.REACT_APP_CMS_API_KEY }
  });
  component.setState({ isLoading: false, kimonos: resp.data.contents });
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
      contents = <p>now loading...</p>;
    } else {
      contents = <KimonoLinks kimonos={this.state.kimonos} />;
    }

    return (
      <div className="Top">
        <h1>My Kimonos</h1>
        {contents}
      </div>
    );
  }

  componentDidMount() {
    fetchKimonos(this);
  }
}

function KimonoLinks(props) {
  const classes = useStyles();

  const listItems = props.kimonos.map((kimono) => (
    <Grid item xs={6} key={kimono.id}>
      <Link to={`/detail/${kimono.id}`} style={{ textDecoration: 'none' }}>
        <img
          src={kimono.image.url}
          alt="kimono-image"
          style={{ objectFit: 'contain', width: 250, height: 250 }}
        />
        <h5>{kimono.nickname}</h5>
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
