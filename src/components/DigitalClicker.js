// Code DigitalClicker Component Here
import React, { Component } from 'react';

export default class DigitalClicker extends React.Component {

  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
  }

  render() {
    return (
      <button  onClick={this.handleClick} ></button>
    );
  }
}
