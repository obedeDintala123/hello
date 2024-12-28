import Logo from '../../assents/img/hello_logo.svg';

import '../../assents/style/output.css'
import style from './splash.module.css';
const Splash = () => {

    return (
        <div className="w-screen h-screen flex justify-center items-center" id="splash">
            <img src={Logo} alt="Hello Logo" className={style.splash_animate} />
        </div>
    )
}

export default Splash;