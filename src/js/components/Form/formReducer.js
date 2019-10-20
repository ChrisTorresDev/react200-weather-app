const defaultState = {
  city: '',
  temp: '',
  pressure: '',
  humidity: '',
  lowestTemp: '',
  highestTemp: '',
  windSpeed: '',
  information: []
};

const formReducer=(state=defaultState.action) => {
  return {
    ...state,
    city: action.city
  }
}