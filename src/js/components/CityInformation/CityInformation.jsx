import React from 'react';

export default class cityInformation extends React.Component {

  render() {
    return (
      <div className="weather_info">
        <div className="card">
          <h5 className="card-header">City Information</h5>
          <div className="card-group">
            <div className="col-sm-12 text-center">
              <h1 className="card-title">{ this.props.city }</h1>
              <p className="card-text">{ this.props.latLan }</p>
            </div>
            <div className="col-sm-4 text-center">
              <div className="card-body ">
                <h6 className="card-title">Temperature (F)</h6>
                <p className="card-text">{ this.props.temperature }</p>
              </div>
            </div>
            <div className="col-sm-4 text-center">
              <div className="card-body ">
                <h6 className="card-title">Pressure</h6>
                <p className="card-text">{ this.props.pressure }</p>
              </div>
            </div>
            <div className="col-sm-4 text-center">
              <div className="card-body ">
                <h6 className="card-title">Humidity</h6>
                <p className="card-text">{ this.props.humidity }</p>
              </div>
            </div>
            <div className="col-sm-4 text-center">
              <div className="card-body ">
                <h6 className="card-title">Lowest Temp (F)</h6>
                <p className="card-text">{ this.props.lowestTemp }</p>
              </div>
            </div>
            <div className="col-sm-4 text-center">
              <div className="card-body ">
                <h6 className="card-title">Highest Temp (F)</h6>
                <p className="card-text">{ this.props.highestTemp }</p>
              </div>
            </div>
            <div className="col-sm-4 text-center">
              <div className="card-body ">
                <h6 className="card-title">Wind Speed</h6>
                <p className="card-text">{ this.props.windSpeed }</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}