import cmedia from './weatherNext.module.css';

const WeatherNext = (props) => {

    return (<div className={cmedia.WeatherNext}>
        <h1>{props.date.slice(0, 11)}</h1>
        <div className={cmedia.temp}>
            <img src={props.imgSrc} alt="" />
            <p>{props.temp} &deg;</p>
        </div>


    </div>)
}

export default WeatherNext;