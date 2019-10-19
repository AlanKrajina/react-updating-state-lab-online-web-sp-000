import React, { Component } from 'react';

export default class YouTubeDebugger extends React.Component {

  constructor() {
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleClick = () => {
   let newCount = this.state.timesClicked + 1
   this.setState({
     timesClicked: newCount
   })
 }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    );
  }
}
