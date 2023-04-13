import './index.scss';
import Footer from '../../components/Footer/Footer';
import Banner from '../../assets/imgs/home-banner.png';
import ProductCard from '../../components/ProductCard/ProductCard';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';


const Home = ({ data }) => {
  return (
    <>
      <HeaderMenu />
      <div className='home'>
        <div className="home__banner">
          <img src={Banner} alt="Banner Playstation" />
        </div>
      </div>
      <div className="home__productCard">
        {data.map(product => (<ProductCard key={product.id} data={product} />))}
      </div>
      <Footer />
    </>
  )
}

export default Home