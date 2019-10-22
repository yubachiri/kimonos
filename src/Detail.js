import React from 'react';
import './App.css';

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
        <h1>Hello, Kimono!</h1>
        <p>this is detail page.</p>
        <p>{this.props.match.params.id}</p>
      </div>
    );
  }
}

export default Detail;
