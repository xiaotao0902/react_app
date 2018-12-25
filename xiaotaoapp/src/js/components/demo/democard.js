import React from 'react';

export default class DemoCard extends React.Component {
  render() {
    return (
      <div className="demo-democard">
        <div className="demo-democard-title">{this.props.name}</div>
        <div className="demo-democard-img">
          <video width="500" height="300" src={this.props.video} controls="controls"/>
        </div>
        <div className="demo-democard-desc">
          <a target="_blank" rel="noopener noreferrer" href={this.props.src}>源代码</a>
        </div>
      </div>
    );
  }
}