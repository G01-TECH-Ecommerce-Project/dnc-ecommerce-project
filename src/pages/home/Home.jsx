import "./index.scss";
import HeaderMenuDetail from "../../components/HeaderMenuDetail/HeaderMenuDetail";
import Footer from "../../components/Footer/Footer";
import ProductCard from "../../components/ProductCard/ProductCard";
import Banner from "../../components/Banner/Banner";

const Home = ({ data }) => {
  return (
    <>
      <HeaderMenuDetail />
      <div className="home">
        <Banner/>
        <div className="home__productCard">
          {data.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
