import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 45,
    title: "1st Boook",
    description: "wlfoiwf  roijdfe iijfijierf fjiweje  jfew w efwem"
  },
  {
    id: 'p2',
    price: 40,
    title: "2nd Boook",
    description: "wlfoiwf  roijdfe iijfijierf fjiweje  jfew w efwem"
  },
  {
    id: 'p3',
    price: 50,
    title: "3rd Boook",
    description: "wlfoiwf  roijdfe iijfijierf fjiweje  jfew w efwem"
  }
]


const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(e => <ProductItem title={e.title} price={e.price} description={e.description} id={e.id}/>)}
      </ul>
    </section>
  );
};

export default Products;
