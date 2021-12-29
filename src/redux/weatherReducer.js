let initialState = {
    city: '',
    temp: -null,
    feels_like: -null,
    wind: {
        speed: null,
        deg: null,
        gust: null
    },
    description: "",
    weatherIcon: "https://openweathermap.org/img/wn/02d@2x.png"
}


const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CITY_WEATHER':
            return {
                ...state,
                city:action.city
                
            }
        case 'SET_CITY_WEATHER':
            return {
                ...state,
                city: action.city,
                temp:action.temp,
                feels_like:action.feels_like,
                wind:action.wind,
                description:action.description,
                weatherIcon:action.weatherIcon
            }
        default: return state;
    }

}


export const getCityWeather = (city) => {
    return { type: 'GET_CITY_WEATHER', city }

}
export const setCityWeather = (city,temp, feels_like, wind, description, weatherIcon) => {
    return { type: 'SET_CITY_WEATHER', city,temp, feels_like, wind, description, weatherIcon }

}
export default weatherReducer;