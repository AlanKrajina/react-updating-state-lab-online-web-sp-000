// Code DigitalClicker Component Here
import React, { Component } from 'react';

export default class DigitalClicker extends React.Component {

  handleFocus = () => {
    console.log('Good!');
  }

  handleBlur = () => {
    console.log('Hey! Eyes on me!');
  }

  render() {
    return (
      <button  onClick={this.handleClick} ></button>
    );
  }
}