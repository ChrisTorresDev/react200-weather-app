import { connect } from 'react-redux';
import CityInfromation from './CityInformation';

function mapStoreToProps(store) {
  return {
    // name: store.search.name,
    city: store.search.city,
    lon: store.search.lon,
    lat: store.search.lat,
    temp: store.search.temp,
    pressure: store.search.pressure,
    humidity: store.search.humidity,
    lowestTemp: store.search.lowestTemp,
    highestTemp: store.search.highestTemp,
    windSpeed: store.search.windSpeed,
  };
}

export default connect(mapStoreToProps)(CityInfromation);