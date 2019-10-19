// Code DigitalClicker Component Here
import React, { Component } from 'react';

export default class DigitalClicker extends React.Component {

  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
   let newCount = this.state.timesClicked + 1
   this.setState({
     count: newCount
   })
 }

  render() {
    return (
      <button  onClick={this.handleClick} ></button>
    );
  }
}
