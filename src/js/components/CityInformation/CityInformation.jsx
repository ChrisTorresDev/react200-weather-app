import React from 'react';

export default class cityInformation extends React.Component {

  render() {
    return (
      <div className="weather_info">
        <div className="card">
          <h5 className="card-header">City Information</h5>
          <div className="card-group">
            <div className="col-sm-12 text-center">
              <h1 className="card-title" name="city">{ this.props.city }</h1>
              <p className="card-text" name="location">{ this.props.latLan }</p>
            </div>
            <div className="col-sm-4 text-center">
              <div className="card-body ">
                <h6 className="card-title">Temperature (F)</h6>
                <p className="card-text" name="temp">{ this.props.temperature }</p>
              </div>
            </div>
            <div className="col-sm-4 text-center">
              <div className="card-body ">
                <h6 className="card-title">Pressure</h6>
                <p className="card-text" name="pressure">{ this.props.pressure }</p>
              </div>
            </div>
            <div className="col-sm-4 text-center">
              <div className="card-body ">
                <h6 className="card-title">Humidity</h6>
                <p className="card-text" name="humidity">{ this.props.humidity }</p>
              </div>
            </div>
            <div className="col-sm-4 text-center">
              <div className="card-body ">
                <h6 className="card-title">Lowest Temp (F)</h6>
                <p className="card-text" name="low">{ this.props.lowestTemp }</p>
              </div>
            </div>
            <div className="col-sm-4 text-center">
              <div className="card-body ">
                <h6 className="card-title">Highest Temp (F)</h6>
                <p className="card-text" name="high">{ this.props.highestTemp }</p>
              </div>
            </div>
            <div className="col-sm-4 text-center">
              <div className="card-body ">
                <h6 className="card-title">Wind Speed</h6>
                <p className="card-text" name="wind">{ this.props.windSpeed }</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}