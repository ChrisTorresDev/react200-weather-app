const defaultState = {
  temp: '',
  pressure: '',
  humidity: '',
  lowestTemp: '',
  highestTemp: '',
  windSpeed: ''
};

export default function cityInfoReducer(state =defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'GET_TEMP': {
      return {
        ...state,
        temp: payload.temp
      };
    }

    case 'GET_PRESSURE': {
      return {
        ...state,
        pressure: payload.pressure
      };
    }

    case 'GET_HUMIDITY': {
      return {
        ...state,
        humidity: payload.humidity
      };
    }

    case 'GET_LOWEST_TEMP': {
      return {
        ...state,
        lowestTemp: payload.lowestTemp
      };
    }

    case 'GET_HIGHEST_TEMP': {
      return {
        ...state,
        highestTemp: payload.highestTemp
      };
    }

    case 'GET_WIND_SPEED': {
      return {
        ...state,
        windSpeed: payload.windSpeed
      };
    }
    
    default: {
      return state;
    }
  }
}