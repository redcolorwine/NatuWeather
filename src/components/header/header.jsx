import cmedia from './header.module.css';
import logo from '../../media/images/weather.png'

const Header = (props) => {
    return (<div className={cmedia.header}>
        <div className={cmedia.logo}>
            <h1>NatuWeather</h1>
            <img src={logo} alt="" />
        </div>
        <div className={cmedia.menu}>
            <ul>
                <li><a href="#">Контакты</a></li>
                <li><a href="#">Обратная связь</a></li>
                <li><a href="#">Справка</a></li>
                <li><a href="#">Пользовательское соглашение</a></li>
            </ul>
        </div>
    </div>)
}

export default Header;