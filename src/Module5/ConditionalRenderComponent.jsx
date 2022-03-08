import React, { Component } from 'react';

export default class ConditionalRenderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true
        };
    }
    render() {
        if (this.state.isLoggedIn) {
            return (
                <div className="App">
                    <h1>
                        This is a Demo showing several ways to implement Conditional Rendering in React.
                    </h1>
                    <button>Logout</button>
                </div>
            );
        } else {
            return (
                <div className="App">
                    <h1>
                        This is a Demo showing several ways to implement Conditional Rendering in React.
                    </h1>
                    <button>Login</button>
                </div>
            );
        }
    }
}
