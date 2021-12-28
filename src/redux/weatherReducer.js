let initialState = {
    city: 'Amursk',
    temp: -30,
    feels_like: -50,
    wind: {
        speed: 1.5,
        deg: 350,
        gust: 1.37
    },
    description: "clear sky",
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