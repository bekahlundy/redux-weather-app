import React, { Component } from 'react';
import { Link } from 'react-router';
import Pin from '../Pin';
import AddPin from '../AddPin';
import './pinbox-style.css';

export default class PinBox extends Component {
  render() {
    const { PinForecastData, receiveForecast } = this.props;
    return (
      <div className='pinbox-container'>
        <p className='pinbox-title'>Favorites</p>
        <div className='card-container'>
        {PinForecastData.map((city, i) => {
          return <Pin key={i} data={city} />
        })}
        {PinForecastData.length < 2 ?
          <div className='pin-container'>
            <AddPin data={PinForecastData} receiveForecast={receiveForecast} />
          </div>
          : <div/>}
        </div>
          <button className='edit-btn'><Link to='/settings'>Edit Pinned Cities</Link></button>
      </div>
    )
  }
}
