import React from 'react';
import { useHistory } from "react-router-dom";

import './App.css';
import { Button } from '@material-ui/core';

// 詳細画面
// idもらって出し分けしたい
class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Detail">
        <TopButton />
        <h1>Hello, Kimono!</h1>
        <p>this is detail page.</p>
        <p>{this.props.match.params.id}</p>
        <p>detail contents</p>
      </div>
    );
  }
}

function TopButton() {
  const history = useHistory();

  function handleToRootPage() {
    history.push('/');
  }

  return (
    <Button onClick={handleToRootPage} variant="contained" color="primary">
      Top
    </Button>
  );
}

export default Detail;
