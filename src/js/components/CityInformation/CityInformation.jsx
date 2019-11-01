import React from 'react';

export default class cityInformation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { city, lon, lat, temp, pressure, humidity, lowestTemp, highestTemp, windSpeed } = this.props;
    return (
      <div className="weather_info">
        <div className="card">
          <h5 className="card-header">City Information</h5>
          <div className="card-group">
            <div className="col-sm-12 text-center">
              <h1 className="card-title" name="city">{ city }</h1>
              <p className="card-text" name="location">{ lon } / { lat }</p>
              <hr />
            </div>
            <div className="col-sm-4 text-center">
              <div className="card-body">
                <h6 className="card-title">Temperature (F)</h6>
                <p className="card-text" name="temp">{ temp }</p>
              </div>
            </div>
            <div className="col-sm-4 text-center">
              <div className="card-body">
                <h6 className="card-title">Pressure</h6>
                <p className="card-text" name="pressure">{ pressure }</p>
              </div>
            </div>
            <div className="col-sm-4 text-center">
              <div className="card-body ">
                <h6 className="card-title">Humidity</h6>
                <p className="card-text" name="humidity">{ humidity }</p>
              </div>
            </div>
            <div className="col-sm-4 text-center">
              <div className="card-body">
                <h6 className="card-title">Lowest Temp (F)</h6>
                <p className="card-text" name="low">{ lowestTemp }</p>
              </div>
            </div>
            <div className="col-sm-4 text-center">
              <div className="card-body">
                <h6 className="card-title">Highest Temp (F)</h6>
                <p className="card-text" name="high">{ highestTemp }</p>
              </div>
            </div>
            <div className="col-sm-4 text-center">
              <div className="card-body">
                <h6 className="card-title">Wind Speed</h6>
                <p className="card-text" name="wind">{ windSpeed }</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}