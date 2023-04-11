import LogoDNC from '../../assets/imgs/logo.png';
import './index.scss'

function HeaderMenu({ homeInfo }) {
    return (
        <header className='header'>
            <img src={LogoDNC} alt="" className='header__logo'/>
        </header>
    )
}

export default HeaderMenu;