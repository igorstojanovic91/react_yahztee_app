import React, { Component } from "react";
import "./Die.css";

class Die extends Component {

  static defaultProps = {
    numberWords : ["one", "two", "three", "four", "five", "six"],
  }

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  
  handleClick() {
    this.props.handleClick(this.props.idx)
  }

  render() {
    console.log(this.props.rolling)
    const diceNumber = this.props.numberWords[this.props.val-1]
    let diceClass = `Die fas fa-dice-${diceNumber} fa-5x `
    if(this.props.locked) diceClass += 'Die-locked '
    if(this.props.rolling && !this.props.locked) diceClass += 'Die-rolling'

    return (
      <i
        className={diceClass}
        onClick={this.handleClick}
        disabled={this.props.disabled}
      />
      
    );
  }
}

export default Die;
