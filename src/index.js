import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import classNames from 'classnames';
class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({expanded : !this.state.expanded});
    console.log(this.state.expanded);
  }

  render() {
    let classes = classNames({
      'tile' : true,
      'expanded': this.state.expanded 
    });
    return (
      <div className={classes} onClick={this.handleClick} >
        <img src="http://via.placeholder.com/300x300" alt="placeholder image" />
      </div>
    );
  }
}
class ExpandedTile extends React.Component {
  render(props) {
    let classes = classNames({
      'expanded-tile': true,
      'open': this.props.expanded
    });
    return (
      <div className='expanded-tile'>
        <p>This is the expanded Tile</p>
      </div>
    );
  }
}

class Container extends React.Component {
  render() {
    let tiles = [];
    for (let i = 0; i < 9; i++) {
      tiles.push(
        <Tile key={i} />
      );
    }
    
    return (
      <div>
        <ExpandedTile />
        <div className="tiles">{tiles}</div>
      </div>
    );

  }
};

ReactDOM.render(
  <Container />,
  document.getElementById('container')
);
