import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart'
import GoogleMaps from '../components/google_maps';

class WeatherList extends Component {

    renderWeather(cityData) {
        const {city, list}  = cityData
        const tempArray = list.map(({main}) =>  main.temp)
        const pressureArray = list.map(({main}) =>  main.pressure)
        const humidityArray = list.map(({main}) =>  main.humidity)
        const {lat, lon} = city.coord
        return (
            <tr key={city.name}>
                <td><GoogleMaps lat={lat} lon={lon} /></td>
                <td width="25%">
                    <Chart data={tempArray} color="red" units="K" />
                </td>
                <td width="25%">
                    <Chart data={pressureArray} color="blue" units="hPa" />
                </td>
                 <td width="25%">
                    <Chart data={humidityArray} color="orange" units="%" />
                </td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th width="25%">Temperature (K)</th>
                        <th width="25%">Pressure (hPa)</th>
                        <th width="25%">Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapsStateToProps({weather}) {
    return {weather};
}

export default connect(mapsStateToProps)(WeatherList)