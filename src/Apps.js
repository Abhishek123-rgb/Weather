import React, { Component } from 'react';

const Api_key = "a65fe619ccad862bea4c290f21e13776";

class Apps extends Component {

    getWeather = async () =>{
        const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=${Api_key}`);
        const response = await api.json();
        console.log(response);
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Apps;
