let initialState = {
    city: '',
    temp: -null,
    temp_min:null,
    temp_max:null,
    feels_like: -null,
    wind: {
        speed: null,
        deg: null,
        gust: null
    },
    description: "",
    humidity:null,
    weatherIcon: "https://openweathermap.org/img/wn/02d@2x.png",
    listWeather: []
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
                temp_min:action.temp_min,
                temp_max:action.temp_max,
                feels_like:action.feels_like,
                wind:action.wind,
                description:action.description,
                humidity:action.humidity,
                weatherIcon:action.weatherIcon
            }
            case 'SET_LIST_WEATHER':
            return {
                ...state,
                listWeather:[action.listWeather]
            }
        default: return state;
    }

}


export const getCityWeather = (city) => {
    return { type: 'GET_CITY_WEATHER', city }

}
export const setCityWeather = (city,temp,temp_min,temp_max, feels_like, wind, description,humidity, weatherIcon) => {
    return { type: 'SET_CITY_WEATHER', city,temp,temp_min,temp_max, feels_like, wind, description, humidity, weatherIcon }

}
export const setListWeather=(listWeather)=>{
    return{type:'SET_LIST_WEATHER',listWeather}
}
export default weatherReducer;