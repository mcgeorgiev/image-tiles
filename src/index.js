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
    this.toggleExpanded = this.toggleExpanded.bind(this);
  }

  toggleExpanded(i) {
      this.setState({tileExpanded: (this.state.tileExpanded === i) ? false : i});
  }

  render() {
    let tiles = [];
    for (let i = 0; i < 9; i++) {
      tiles.push(
        <Tile key={i}
          expanded={this.state.tileExpanded === i}
          onClick={() => { this.toggleExpanded(i)}} />
      );
    }

    return (
      <div>
        <ExpandedTile expanded={this.state.tileExpanded}/>
        <div className="tiles">{tiles}</div>
      </div>
    );
  }
};

ReactDOM.render(
  <Container />,
  document.getElementById('container')
);
