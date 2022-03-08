import React, { Component } from 'react';
import image from '../image/skillstone.png';

export default class ShowingImage extends Component {
  render() {
    return (
        <>
            <img src={image} alt="Skillstone Image"/>
            
        </>
    )
  }
}
