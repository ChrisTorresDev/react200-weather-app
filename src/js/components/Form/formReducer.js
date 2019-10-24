const defaultState = {
  city: '',
  latLan: '',
  temp: '',
  pressure: '',
  humidity: '',
  lowestTemp: '',
  highestTemp: '',
  windSpeed: '',
  information: []
};

const formReducer = (state = defaultState, action) => {
  if (action.type === "CHANGE_CITY") {
    return {
      ...state,
      city: action.city
    }
  } else {
    return {
      ...state,

    }
  }
}

export default formReducer;