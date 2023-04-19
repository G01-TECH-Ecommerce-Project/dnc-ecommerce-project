import "./index.scss";
import logo from '../../assets/imgs/logo.png';
import cartLogo from '../../assets/imgs/cart-icon.png';
import Search from "../Search/Search";
import menuLogo from '../../assets/imgs/menu-icon.png';

const HeaderMenu = () => {

  const abrirMenu = () => {
    const listaMenu = document.querySelector('.header__menu-options');

    if(listaMenu.style.display == 'flex'){
      listaMenu.style.display = 'none';
    }

    else{
      listaMenu.style.display = 'flex';
    }
  }

  return (
    <header className="header__menu">
      <div className="header__menu-logo">
        <img src={logo} alt="logo" className="header-menu__logo"/>
        <Search />
        <img src={cartLogo} alt="cartLogo"  className="header-menu__cart"/>
      </div>

      <img onClick={abrirMenu} src={menuLogo} className="header__menu-burger"/>
      <div className="header__menu-options">
      <ul>
        <li><strong>Novidades</strong></li>
        <li>Jogos</li>
        <li>Video Games</li>
        <li>Mesas Gamer</li>
        <li>Promoções</li>
        <li>Atendimento</li>
      </ul>
      </div>
    </header>
  );
};

export default HeaderMenu;