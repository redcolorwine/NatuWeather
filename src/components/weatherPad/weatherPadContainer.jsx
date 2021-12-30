import { connect } from "react-redux"
import { getCityWeather, setCityWeather, setListWeather } from "../../redux/weatherReducer"
import WeatherPad from "./weatherPad"

const mapStateToProps=(state)=>{
    return{
        city:state.weatherPage.city,
        temp:state.weatherPage.temp,
        temp_min:state.weatherPage.temp_min,
        temp_max:state.weatherPage.temp_max,
        feels_like:state.weatherPage.feels_like,
        wind:state.weatherPage.wind,
        description:state.weatherPage.description,
        humidity:state.weatherPage.humidity,
        weatherIcon:state.weatherPage.weatherIcon,
        listWeather:state.weatherPage.listWeather

    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        getCityWeather:(city)=>{dispatch(getCityWeather(city))},
        setCityWeather:(city, temp,temp_min,temp_max, feels_like, wind, description,humidity,weatherIcon)=>{dispatch(setCityWeather(city, temp,temp_min,temp_max, feels_like, wind, description,humidity,weatherIcon))},
        setListWeather:(listWeather)=>{
            dispatch(setListWeather(listWeather))
        }
    }
}

const WeatherPadContainer=connect(mapStateToProps,mapDispatchToProps)(WeatherPad)


export default WeatherPadContainer;