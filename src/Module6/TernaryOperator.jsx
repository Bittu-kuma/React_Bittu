import React, { Component } from 'react';

export default class TernaryOperator extends Component {
    constructor()
    {
        super()
        this.state = {
            number:24,
        }
    }
  render() {
    return (
        <>
        <div>
           {this.state.number % 2 == 0 
           ? 
           <h2>{this.state.number} is an Even Number</h2> 
           : 
           <h2>{this.state.number} is not an Even Number</h2>}
        </div>
        </>
    )
  }
}
