import cmedia from './header.module.css';
import logo from '../../media/images/weather.png'

const Header = (props) => {
    return (<div className={cmedia.header}>
        <h1>NatuWeather</h1>
        <img src={logo} alt="" />
    </div>)
}

export default Header;