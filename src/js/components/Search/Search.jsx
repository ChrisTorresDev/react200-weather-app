import React from 'react';

import { 
  updateCityName,
  getWeather
} from '../Actions';


export default class Search extends React.Component {
  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // this.handleGetWeather = this.handleGetWeather.bind(this);
  }
  
  onChange(e) {
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(updateCityName(value));
  }

  handleClick(e) {
    event.preventDefault()
    const { dispatch, city } = this.props;
    const { value } = e.target;
    dispatch(getWeather(value || city));
  }
  
  // handleGetWeather(e) {
  //   const { dispatch, cityName } = this.props;
  //   const { value } = e.target;
  //   if (event.key === 'Enter') {
  //     dispatch(getWeather(value || cityName));
  //   }
  // }

  render() {
    const { city } = this.props;
    return (
      <form>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary">San Diego</button>
          <button type="button" className="btn btn-primary">New York</button>
          <button type="button" className="btn btn-primary">Washington D.C</button>
          <button type="button" className="btn btn-primary">London</button>
          <button type="button" className="btn btn-primary">Tokyo</button>
        </div>
        <div className="input-group">
          <input 
            type="text"
            className="form-control"
            placeholder="Search Any City"
            aria-label=""
            name="city"
            value={ city }
            onChange={ this.onChange }
          />
          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-light"
              onClick={ this.handleClick }
              >Go!
            </button>
          </div>
        </div>
      </form>
    )
  }
}