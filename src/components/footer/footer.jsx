import cmedia from './footer.module.css'

const Footer=(props)=>{
    //Футер. Отображаем дату и знак копирайта
    var fullDate = new Date();
    var mm = fullDate.getMonth() + 1;
    var dd = fullDate.getDate();
    var year = fullDate.getFullYear();
    return (
        <div className={cmedia.footer}>
            <div className={cmedia.footerLabel}>
                <p>REDCOLORWINE &copy; {dd} / {mm} / {year}</p>
            </div>

        </div>
    )
}

export default Footer;