import "./index.scss";
import Logo from "../../assets/imgs/logo-alternative.png";

const Footer = () => {
  return (
    <footer className="footer">
      <img className="footer-img" src={Logo} alt="Logo dnc" />
      <p className="footer-info">
        Preços e condições de pagamento exclusivos para compras via internet e
        podem variar nas lojas físicas. <br/>
        <strong>Para mais informações</strong>, entre em contato: (011) 1111-2222
      </p>
    </footer>
  );
};

export default Footer;
