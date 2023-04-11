import LogoDNC from '../../assets/imgs/logo.png';
import HeaderMenuDetail from '../HeaderMenuDetail/HeaderMenuDetail';
import SearchBar from '../SearchBar/SearchBar';
import './index.scss'

function HeaderMenu({ homeInfo }) {
    return (
        <header className='header'>
            <img src={LogoDNC} alt="" className='header__logo'/>
            {
                homeInfo && <>
                    <SearchBar></SearchBar>
                    <HeaderMenuDetail></HeaderMenuDetail>
                </>
            }
        </header>
    )
}

export default HeaderMenu;