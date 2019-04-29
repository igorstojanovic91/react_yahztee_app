import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {

  render() {
    const score = this.props.score
    const disabled = score !== undefined
    const description = this.props.description
    return (
      <tr className={`RuleRow RuleRow-${!disabled ? "active" : "disabled"}`}
      onClick={!disabled ? this.props.doScore: null}>
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{!disabled ? description : this.props.score}</td>
      </tr>
    )
  }
}

export default RuleRow;