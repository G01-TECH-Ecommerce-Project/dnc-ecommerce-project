import './index.scss';
import HeaderMenuDetail from '../../components/HeaderMenuDetail/HeaderMenuDetail';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';


const Home = ({data}) => {
  return (
      <>
        <HeaderMenuDetail/>
        <Banner />
          
          <div className="home__products">
          </div>

        <Footer/>
      </>
  )
}

export default Home