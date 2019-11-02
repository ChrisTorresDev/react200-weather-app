const defaultState = {
  city: '',
  lon: '',
  lat: '',
  temp: '',
  pressure: '',
  humidity: '',
  lowestTemp: '',
  highestTemp: '',
  windSpeed: '',
  information: []
};

export default function mainReducer(state = defaultState, action) {
  const { type, payload } = action;  

  // console.log('this is the payload:', payload);

  switch (type) {
    case 'GET_WEATHER_FULFILLED': {
      console.log('payload', payload);
      return {
      
        ...state,
        cityInfo: payload.data,
        city: payload.data.name,
        lon: payload.data.coord.lon,
        lat: payload.data.coord.lat,
        temp: payload.data.main.temp,
        pressure: payload.data.main.pressure,
        humidity: payload.data.main.humidity,
        lowestTemp: payload.data.main.temp_min,
        highestTemp: payload.data.main.temp_max,
        windSpeed: payload.data.wind.speed,
        information: [
          ...state.information,
          {
            city: payload.data.name
          }
        ]
      };
    }

    case 'GET_WEATHER_REJECTED': {
      console.log('rejected', payload);
      return 'something went wrong';
    }
    
    case 'UPDATE_CITY_NAME': {
      return {
        ...state,
        city: payload.city
      };
    }
    
    default: {
      return state;
    }
  }
}