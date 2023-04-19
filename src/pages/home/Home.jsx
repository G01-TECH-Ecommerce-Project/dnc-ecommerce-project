import "./index.scss";
import Footer from "../../components/Footer/Footer";
import ProductCard from "../../components/ProductCard/ProductCard";
import Banner from "../../components/Banner/Banner";
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";

const Home = ({ data }) => {
  return (
    <>
      <HeaderMenu/>
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
