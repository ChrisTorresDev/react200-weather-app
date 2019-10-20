import axios from "axios"

export function getWeather() {
  return(dispatch) => {
    return axios.get(`url`), then((res) => {
      dispatch(city(res.data.city))
    })
  }
}