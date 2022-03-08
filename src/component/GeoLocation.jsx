import React, { Component } from 'react';

export default class GeoLocation extends Component {
    componentDidMount()
    {
        if(navigator.geolocation)
        {
            navigator.permissions
            .query({name:"geolocation"})
            .then(function (result){
                if(result.state === "granted")
                {
                    navigator.geolocation.getCurrentPosition(function(position) {
                        console.log(position);
                        console.log("Latitude is :", position.coords.latitude);
                        console.log("Longitude is :", position.coords.longitude);
                      })
                }
            });
        }
        else
        {
            alert("Sorry Not Available");
        }
    }

  render() {
    
    return (
        <h1>Hello GeoLocation</h1>
    )
  }
}
