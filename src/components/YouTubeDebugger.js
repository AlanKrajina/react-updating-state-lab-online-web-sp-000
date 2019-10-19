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

  updateBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings, // SPREAD - returns all the keys and values from within that object
        bitrate: 'New York City'
      }
    })
  }

  render() {
    return (
      <button onClick={this.handleClick}></button>
    );
  }
}
