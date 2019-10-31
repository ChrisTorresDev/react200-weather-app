import { connect } from 'react-redux';
import CityInfromation from './CityInformation';

function mapStoreToProps(store) {
  return {
    // name: store.search.name,
    city: store.city,
    lon: store.lon,
    lat: store.lat,
    temp: store.temp,
    pressure: store.pressure,
    humidity: store.humidity,
    lowestTemp: store.lowestTemp,
    highestTemp: store.highestTemp,
    windSpeed: store.windSpeed,
  };
}

export default connect(mapStoreToProps)(CityInfromation);