import cmedia from './weatherPad.module.css';
import sunImg from '../../media/images/sun.png'
import * as axios from 'axios';
import React from 'react';
const WeatherPad = (props) => {
    let cityRef=React.createRef();
    let APIkey='71236dc5b01d30f870ee8474c75a3180';
    let latz;
    //https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=71236dc5b01d30f870ee8474c75a3180
    let onBut=()=>{
       latz=cityRef.current.value;
       
       axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${latz}&appid=71236dc5b01d30f870ee8474c75a3180`).then(response=>{
            
        console.log(Math.ceil(response.data.main.temp-273.15));
        
    })
    }
    
    
    
    return (<div className={cmedia.weatherPad}>
        <div className={cmedia.inputPad}>
            {/* <input type="text" placeholder='Выберите страну' />
            <input type="text" placeholder='Выберите регион' /> */}
            <input type="text" placeholder='Выберите город' ref={cityRef} />
            <button onClick={onBut}>Запрос</button>
        </div>
        <div className={cmedia.weather}>
            <img src={sunImg} alt="" />
        </div>
    </div>)
}

export default WeatherPad;