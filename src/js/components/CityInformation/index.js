import { connect } from 'react-redux';
import CityInfromation from './CityInformation';

function mapStoreToProps(store) {
  return {
    city: store.city,
    location: store.location,
    temp: store.temp,
    pressure: store.pressure,
    humidity: store.humidity,
    low: store.low,
    high: store.high,
    wind: store.wind
  };
}

export default connect(mapStoreToProps)(CityInfromation);