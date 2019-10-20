import React from 'react';
import Title from './components/Title';
import Form from './components/Form/Form';
import CityInformation from './components/CityInformation/CityInformation';
import SearchHistory from './components/SearchHistory/SearchHistory';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className="row">
          <div className='col-md-12 title'>
            <Title />
          </div>
          <div className='col-md-12 form'>
            <Form />
          </div>
          <div className='col-md-6 info'>
            <CityInformation />
          </div>
          <div className='col-md-6 history'>
            <SearchHistory />
          </div>
        </div>
      </div>
    );
  }
}
