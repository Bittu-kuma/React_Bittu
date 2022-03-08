import React, { Component } from 'react';

export default class PassingProps extends Component {

  render() {
    return (
        <>
        <h2>I'm {this.props.name}. I'm {this.props.age} years Old. I belongs to {this.props.city} Bihar.</h2>
        
        </>
    );
  }
}
