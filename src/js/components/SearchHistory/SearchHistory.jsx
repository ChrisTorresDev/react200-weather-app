import React from 'react';

export default class SearchHistory extends React.Component {
  constructor(props) {
    super(props);
}

  render() {
    const { information } = this.props;
    return (
      <div className='card mb-3'>
        <div className='card-header alert-primary'>Search History</div>
        <div className='card-body'>
          <table className='table table-sm table-striped'>
            <tbody>
              {information == 0 ? 'Your search history will display here.'
                :
                information.map(location =>
                  <tr key={Math.random(1000)}>
                    <td>{location.city}</td>
                    <td style={{ width: 120 }}>{new Date().toLocaleString()}</td>
                  </tr>
                )}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}