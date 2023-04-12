import './index.scss';
import HeaderMenuDetail from '../../components/HeaderMenuDetail/HeaderMenuDetail';
import Footer from '../../components/Footer/Footer';
import Banner from '../../assets/imgs/home-banner.png';
import ProductCard from '../../components/ProductCard/ProductCard';

const Home = ({ data }) => {
  return (
    <>
      <HeaderMenuDetail />
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