import React from 'react';
import { useHistory } from "react-router-dom";

import './App.css';
import { Button } from '@material-ui/core';
import { selectKimono } from './Api';

// 詳細画面
// idもらって出し分けしたい
class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      id: props.match.params.id,
      kimonoInfo: {},
    };
  }

  render() {
    let contents;

    if (this.state.isLoading) {
      contents = <p>now loading...</p>
    } else {
      const kimono = this.state.kimonoInfo;
      contents = (
        <div>
          <h2>{kimono.nickname}</h2>
          <img
            src={kimono.image.url}
            alt="kimono-image"
            style={{ objectFit: 'contain', width: 250, height: 250 }}
          />
          <div dangerouslySetInnerHTML={{ __html: kimono.desc }}></div>
        </div>
      );
    }

    return (
      <div className="Detail">
        <TopButton />
        {contents}
        <TopButton />
      </div>
    );
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    const kimonoInfo = await selectKimono(this.state.id);
    this.setState({ isLoading: false, kimonoInfo: kimonoInfo.data });
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
