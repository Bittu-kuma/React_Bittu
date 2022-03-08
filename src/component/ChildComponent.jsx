import React, { Component } from 'react';

export default class ChildComponent extends Component {
  render() {
      const style = {
          display:"flex",
          alignItem:"center",
          justifyContent:"space-between",
          padding:"20px"
      }
    return (
        <>
            <h1>Hii Child Component</h1>
            <div style={style}>
                <img src={this.props.image}></img>
                {this.props.children}
            </div>
        </>
    )
  }
}
