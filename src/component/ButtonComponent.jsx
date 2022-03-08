import React, { Component } from 'react';

export default class ButtonComponent extends Component {
    render() {
        const btnStyle = {
            padding:"15px 30px",
            backgroundColor:"blue",
            color:"white",
            border:"0px",
            marginTop:"10px"
        }
        return (
            <>
                <div style={{textAlign:"center"}}>
                    <button type={this.props.type} onClick={this.props.handleClick} style={btnStyle}>
                        {this.props.name}
                    </button>
                </div>
            </>
        )
    }
}
