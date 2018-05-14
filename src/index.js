import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import classNames from 'classnames';
let data = require('./data');
class Tile extends React.Component {
  render(props) {
    let classes = classNames({
      'tile': true,
      'expanded': this.props.expanded
    });
    return (
      <div className={classes} onClick={() => this.props.onClick()} >
        <img src={window.location.origin + "/images/" + this.props.data.src} alt="placeholder" />
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
    let imageURL = "#", desc = "", title = "";
    if(this.props.data !== undefined) {
      imageURL = window.location.origin + "/images/" + this.props.data.src;
      desc = this.props.data.desc;
      title = this.props.data.title;
    }

    return (
      <div className={classes}> 
        <button onClick={() => this.props.onClick()}>X</button>
        <img src={imageURL} alt="placeholder" />
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    );
  }
}

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tileExpanded: false,
      data: data.data.data
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
          onClick={() => { this.openImage(i)}}
          data={this.state.data[i]}
        />
      );
    }

    return (
      <div>
        <ExpandedTile
           expanded={this.state.tileExpanded} 
           onClick={() => {this.closeWindow()}}
           data={this.state.data[this.state.tileExpanded]}/>
        <div className="tiles">{tiles}</div>
      </div>
    );
  }
};

ReactDOM.render(
  <Container />,
  document.getElementById('container')
);
