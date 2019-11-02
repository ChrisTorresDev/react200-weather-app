import React from 'react';

import { 
  updateCityName,
  getWeather
} from './searchActions';


export default class Search extends React.Component {
  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  onChange(e) {
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(updateCityName(value));
  }

  handleClick(e) {
    e.preventDefault()
    const { dispatch, city } = this.props;
    dispatch(getWeather(city));
  }

  render() {
    const { city } = this.props;
    return (
      <form>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary" value="San Diego" onClick={ this.handleClick }>San Diego</button>
          <button type="button" className="btn btn-primary" value="New York" onClick={ this.handleClick }>New York</button>
          <button type="button" className="btn btn-primary" value="Washington D.C" onClick={ this.handleClick }>Washington D.C</button>
          <button type="button" className="btn btn-primary" value="London" onClick={ this.handleClick }>London</button>
          <button type="button" className="btn btn-primary" value="Tokyo" onClick={ this.handleClick }>Tokyo</button>
        </div>
        <div className="input-group">
          <input 
            type="text"
            className="form-control"
            placeholder="Search Any City"
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
