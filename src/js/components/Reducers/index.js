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

function mainReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {

    case 'GET_WEATHER_FUFILLED': {
      return {
        ...state,
        city: payload.data.name,
        lon: payload.data.coord.lon,
        lat: payload.data.coord.lat,
        temp: payload.data.main.temp,
        pressure: payload.data.main.pressure,
        humidity: payload.data.main.humidity,
        lowestTemp: payload.data.main.temp_min,
        lowestTemp: payload.data.main.temp_max,
        lowestTemp: payload.data.main.wind.speed,
        information: [
          ...state.information,
          {
            city: payload.data.name
          }
        ]
      };
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

export default mainReducer;