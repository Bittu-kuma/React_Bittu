import React, { Component } from 'react';

export default class StateFullComponent extends Component {
    constructor()
    {
        super();
        this.state = {
            name:"Bk Anand",
            age:"25",
            city:"Patna"
        }
    }
  render() {
    return(
        <>
            <div>
                <h2>I'm {this.state.name}. I'm {this.state.age} years Old. I belongs to {this.state.city} Bihar.</h2>
            </div>
        </>
    )
  }
}
