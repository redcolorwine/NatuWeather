import cmedia from './weatherPad.module.css';
import sunImg from '../../media/images/sun.png'
import * as axios from 'axios';
import React from 'react';
const WeatherPad = (props) => {
    let cityRef = React.createRef();
    let APIkey = '71236dc5b01d30f870ee8474c75a3180';
    let latz;
    var newImg;
    var fullDate = new Date();
    var mm = fullDate.getMonth() + 1;
    var dd = fullDate.getDate();
    var year = fullDate.getFullYear();
    //https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=71236dc5b01d30f870ee8474c75a3180
    let onBut = () => {
        latz = cityRef.current.value;
        if (props.city.trim() !== '') {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${latz}&lang=ru&appid=71236dc5b01d30f870ee8474c75a3180`).then(response => {
                newImg = 'https://openweathermap.org/img/wn/' + response.data.weather[0].icon + '@2x.png';
                props.setCityWeather(response.data.name, Math.ceil(response.data.main.temp - 273.15), Math.ceil(response.data.main.feels_like - 273.15), response.data.wind, response.data.weather[0].description, newImg);

            })
        } else { alert('Введите город!') }
    }

    let onCityChange = (city) => {
        props.getCityWeather(city);
    }



    return (<div className={cmedia.weatherPad}>
        <div className={cmedia.inputPad}>

            <input type="text" placeholder='Выберите город' onChange={() => { onCityChange(cityRef.current.value) }} ref={cityRef} value={props.city} />
            <button onClick={onBut}>Поиск</button>
            <h3>Сегодня {dd} / {mm} / {year}</h3>
            <div className={cmedia.visual}>
                <div className={cmedia.weather}>
                    <img src={props.weatherIcon} alt="" />
                </div>
                <div className={cmedia.weatherText}>
                    <h1> {props.temp} &deg;</h1>
                    <p>{props.description}</p>
                </div>
            </div>
            <div>
                <p>Ощущается как: {props.feels_like}  &deg;</p>
                <p>Ветер: {props.wind.speed} м/с</p>
            </div>
        </div>

    </div>)
}

export default WeatherPad;