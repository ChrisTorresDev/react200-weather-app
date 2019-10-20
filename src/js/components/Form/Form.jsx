import React from 'react';

export default class Form extends React.Component {
  render() {
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
          <input type="text" className="form-control" placeholder="" aria-label="" aria-description="basic-addon1"/>
          <div className="input-group-append">
            <button className="btn btn-light" type="button">Go!</button>
          </div>
        </div>
      </form>
    )
  }
}