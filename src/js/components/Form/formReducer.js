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

const formReducer = (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'CHANGE_CITY': {
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

export default formReducer;