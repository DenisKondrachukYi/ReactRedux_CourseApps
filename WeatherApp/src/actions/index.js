import axios from 'axios'

const API_KEY = '87c7bbe5c512c0a78d57c1924b7ce331';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`
    // Make a request for a user with a given ID
    const request = axios.get(url)


    return {
        type: FETCH_WEATHER,
        payload: request
    }
}