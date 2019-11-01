import { connect } from 'react-redux';
import CityInfromation from './CityInformation';

function mapStoreToProps(store) {
  return {
    // name: store.main.name,
    city: store.main.city,
    lon: store.main.lon,
    lat: store.main.lat,
    temp: store.main.temp,
    pressure: store.main.pressure,
    humidity: store.main.humidity,
    lowestTemp: store.main.lowestTemp,
    highestTemp: store.main.highestTemp,
    windSpeed: store.main.windSpeed
  };
}

export default connect(mapStoreToProps)(CityInfromation);