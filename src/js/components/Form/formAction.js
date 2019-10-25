import axios from "axios"

export default function getWeather() {
  return(dispatch) => {
    return axios.get(`https://openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22`), 
    then((res) => {
      dispatch(getCity(res.data.name));
      dispatch(getLon(res.data.coord.lon));
      dispatch(getLat(res.data.coord.lat));
      dispatch(getTemp(res.data.main.temp));
      dispatch(getPressure(res.data.main.pressure));
      dispatch(getHumidity(res.data.main.humidity));
      dispatch(getLowestTemp(data.main.temp_min));
      dispatch(getHighestTemp(data.main.temp_max));
      dispatch(getWindSpeed(data.main.wind.speed));
    })
  }
}

export function getCity(city){
  return {
    type:"CHANGE_CITY",
    payload: city
  }
}

export function getLon(lon){
  return {
    type:"CHANGE_LON",
    payload: lon
  }
}

export function getLat(lat){
  return {
    type:"CHANGE_LAT",
    payload: lat
  }
}

export function getTemp(temp){
  return {
    type:"CHANGE_TEMP",
    payload: temp
  }
}

export function getPressure(pressure){
  return {
    type:"CHANGE_PRESSURE",
    payload: pressure
  }
}

export function getHumidity(humidity){
  return {
    type:"CHANGE_HUMIDITY",
    payload: humidity
  }
}

export function getLowestTemp(lowestTemp){
  return {
    type:"CHANGE_LOWEST_TEMP",
    payload: lowestTemp
  }
}

export function getHighestTemp(highestTemp){
  return {
    type:"CHANGE_HIGHEST_TEMP",
    payload: highestTemp
  }
}

export function getWindSpeed(windSpeed){
  return {
    type:"CHANGE_WIND_SPEED",
    payload: windSpeed
  }
}