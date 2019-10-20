import React from 'react';

export default class searchHistory extends React.Component {
  render() {
    return (
      <div className="card">
        <h5 className="card-header">Search History</h5>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">San Diego</li>
            <li className="list-group-item">New York</li>
            <li className="list-group-item">Washington D.C</li>
            <li className="list-group-item">London</li>
            <li className="list-group-item">Tokyo</li>
          </ul>
        </div>
      </div>
    )
  }
}