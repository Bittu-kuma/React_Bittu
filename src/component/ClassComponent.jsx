import React, { Component } from 'react';

export default class ClassComponent extends Component {
    constructor() {
        super();
        this.state = { data: [] };
    }

    async componentDidMount() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await response.json();
        this.setState({ data: json });
    }
    render() {
        return (
            <>
                <div>
                    <h1>Class Component Data</h1>
                    <ul>
                        {this.state.data.map(el => (
                            <li>
                                {el.title}
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        )
    }
}
