import cmedia from './weatherPad.module.css';
import sunImg from '../../media/images/sun.png'
import * as axios from 'axios';
import React from 'react';
import WeatherNext from './weatherNext/weatherNext';
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
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${latz}&lang=ru&appid=${APIkey}`).then(response => {
                newImg = 'https://openweathermap.org/img/wn/' + response.data.weather[0].icon + '@2x.png';
                props.setCityWeather(response.data.name, Math.ceil(response.data.main.temp - 273.15), Math.ceil(response.data.main.feels_like - 273.15), response.data.wind, response.data.weather[0].description, newImg);

            })
           // https://api.openweathermap.org/data/2.5/forecast?q=Moscow,ru&appid=71236dc5b01d30f870ee8474c75a3180
           axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${latz},ru&appid=${APIkey}`).then(response => {
                
                props.setListWeather(response.data.list);

            })
        } else { alert('Введите город!') }
        console.log(props.listWeather);
    }

    let onCityChange = (city) => {
        props.getCityWeather(city);
    }
    var masWeather=[];
    if(props.listWeather.length!==0){
        for(let i=0;i<40;i+=8){
            masWeather.push(<WeatherNext imgSrc={"https://openweathermap.org/img/wn/" + `${props.listWeather[0][i].weather[0].icon}`+"@2x.png"} temp={Math.ceil(props.listWeather[0][i].main.temp-273.15)} date={props.listWeather[0][i].dt_txt} item={i}/>);
        }
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
            <div className={cmedia.description}>
                <p>Ощущается как: {props.feels_like}  &deg;</p>
                <p>Ветер: {props.wind.speed} м/с</p>
            </div>
            <div className={cmedia.nextWeather}>
            {/* {props.listWeather.length!==0 && <>
                 <p>Дата: {props.listWeather[0][0].dt_txt}</p>
                <p>Температура: {Math.ceil(props.listWeather[0][0].main.temp-273.15)}</p>
                <img src={"https://openweathermap.org/img/wn/" + `${props.listWeather[0][0].weather[0].icon}`+"@2x.png"} alt="" />
                <p>Дата: {props.listWeather[0][8].dt_txt}</p>
                <p>Температура: {Math.ceil(props.listWeather[0][8].main.temp-273.15)}</p>
                <img src={"https://openweathermap.org/img/wn/" + `${props.listWeather[0][8].weather[0].icon}`+"@2x.png"} alt="" />
                <p>Дата: {props.listWeather[0][16].dt_txt}</p>
                <p>Температура: {Math.ceil(props.listWeather[0][16].main.temp-273.15)}</p>
                <img src={"https://openweathermap.org/img/wn/" + `${props.listWeather[0][16].weather[0].icon}`+"@2x.png"} alt="" />
                <p>Дата: {props.listWeather[0][24].dt_txt}</p>
                <p>Температура: {Math.ceil(props.listWeather[0][24].main.temp-273.15)}</p>
                <img src={"https://openweathermap.org/img/wn/" + `${props.listWeather[0][24].weather[0].icon}`+"@2x.png"} alt="" />
                <p>Дата: {props.listWeather[0][32].dt_txt}</p>
                <p>Температура: {Math.ceil(props.listWeather[0][32].main.temp-273.15)}</p>
                <img src={"https://openweathermap.org/img/wn/" + `${props.listWeather[0][32].weather[0].icon}`+"@2x.png"} alt="" />
                <p>Дата: {props.listWeather[0][39].dt_txt}</p>
                <p>Температура: {Math.ceil(props.listWeather[0][39].main.temp-273.15)}</p>
                <img src={"https://openweathermap.org/img/wn/" + `${props.listWeather[0][39].weather[0].icon}`+"@2x.png"} alt="" /></>
            }
                for(i=0;i<40;i++){
                    masWeather.push(<WeatherNext item={i}/>)
                }
             */}
              {masWeather}
            </div>
        </div>

    </div>)
}

export default WeatherPad;