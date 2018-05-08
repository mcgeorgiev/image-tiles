import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Tile extends React.Component {
  render() {
    return (
     <img src="http://via.placeholder.com/300x300" alt="placeholder image" />
    );
  }
}

class Container extends React.Component {
  render() {
    let tiles = [];
    for (let i = 0; i < 9; i++) {
      tiles.push(
        <Tile />
      );
    }
    
    return (
      <div className="tiles">{tiles}</div>
    );

  }
};

ReactDOM.render(
  <Container />,
  document.getElementById('container')
);
