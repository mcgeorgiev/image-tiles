import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import classNames from 'classnames';

class Tile extends React.Component {
  render(props) {
    let classes = classNames({
      'tile': true,
      'expanded': this.props.expanded
    });
    return (
      <div className={classes} onClick={() => this.props.onClick()} >
        <img src="http://via.placeholder.com/300x300" alt="placeholder" />
      </div>
    );
  }
}

class ExpandedTile extends React.Component {
  render(props) {
    let classes = classNames({
      'expanded-tile': true,
      'open': (this.props.expanded !== false)
    });
    return (
      <div className={classes}> 
        <p>This is the expanded Tile {this.props.expanded}</p>
        <button onClick={() => this.props.onClick()}>X</button>
      </div>
    );
  }
}

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tileExpanded: false
    }
    this.openImage = this.openImage.bind(this);
    this.closeWindow = this.closeWindow.bind(this);
  }

  openImage(i) {
      this.setState({tileExpanded: (this.state.tileExpanded === i) ? false : i});
  }

  closeWindow() {
    this.setState({tileExpanded: false});
  }

  render() {
    let tiles = [];
    for (let i = 0; i < 9; i++) {
      tiles.push(
        <Tile key={i}
          expanded={this.state.tileExpanded === i}
          onClick={() => { this.openImage(i)}} />
      );
    }

    return (
      <div>
        <ExpandedTile expanded={this.state.tileExpanded} onClick={() => {this.closeWindow()}}/>
        <div className="tiles">{tiles}</div>
      </div>
    );
  }
};

ReactDOM.render(
  <Container />,
  document.getElementById('container')
);
