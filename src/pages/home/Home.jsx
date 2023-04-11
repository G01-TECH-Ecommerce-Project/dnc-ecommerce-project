import './index.scss';
import HeaderMenuDetail from '../../components/HeaderMenuDetail/HeaderMenuDetail';
import Footer from '../../components/Footer/Footer';
import Banner from '../../assets/imgs/home-banner.png';

const Home = ({data}) => {
  return (
      <>
        <HeaderMenuDetail/>
        <div className='home'>
          <div className="home__banner">
            <img src={Banner} alt="Banner Playstation" />
          </div>
          <div className="home__products">
          </div>
        </div>
        <Footer/>
      </>
  )
}

export default Home