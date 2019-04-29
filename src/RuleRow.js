import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {

  }
  render() {
    return (
      <tr className="RuleRow RuleRow-active" onClick={this.props.doScore}>
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{this.props.score}</td>
      </tr>
    )
  }
}

export default RuleRow;