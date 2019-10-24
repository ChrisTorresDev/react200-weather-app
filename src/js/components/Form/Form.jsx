import React from 'react';
import { 
  getWeather,
  getCity 
} from './formAction'

export default class Form extends React.Component {
  constructor(props) {
    super(props)

    this.handleUpdateCity = this.handleUpdateCity.bind(this);
  }

  handleUpdateCity() {
    const { city, dispatch } = this.props;
    dispatch(getWeather(city));
  }

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
            value={ city }
            onChange={ this.getCity }
          />
          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-light"
              onClick={ this.handleUpdateCity }
              >Go!
            </button>
          </div>
        </div>
      </form>
    )
  }
}