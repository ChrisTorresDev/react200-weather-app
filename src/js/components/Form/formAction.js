import axios from "axios"

export default function getWeather() {
  return(dispatch) => {
    return axios.get(`https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22`), then((res) => {
      dispatch(getCity(res.data.name));
    })
  }
}

export function getCity(city){
  return {
    type:"CHANGE_CITY",
    city: city
  }
}