import React from 'react';
import Title from './components/Title';
import Search from './components/Search';
import CityInformation from './components/CityInformation';
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
            <Search />
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
