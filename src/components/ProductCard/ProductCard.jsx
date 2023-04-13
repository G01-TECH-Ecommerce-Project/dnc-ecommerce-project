import { Link } from 'react-router-dom';
import './index.scss';

const ProductCard = ({ data }) => {
  return (
    <section className='cardProduct'>
      <div className='cardProduct__wrapper'>
        <div className='cardProduct__top'>
          <img src={data.imgPath} />
        </div>
        <div className='cardProduct__botton'>
          <p>{data.title}</p>
          <Link to={`/info/${data.id}`}>
            <button>Ver mais</button>
          </Link>
        </div>
      </div>

    </section>
  )
}

export default ProductCard