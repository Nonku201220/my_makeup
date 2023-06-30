import React, { useState, useEffect, useRef } from 'react';
import css from './Products.module.css';
import Plane from '../../assets/plane.png';
import { bronzerData, eyeliner, fetchProductsData, foundation, lipstick, shadow } from '../../data/products';


const Products = () => {
  const [menuProducts, setMenuProducts] = useState([]);
  const listRef = useRef(null); // Create a ref for the list container

 useEffect(() => {
  const fetchData = async () => {
    try {
      const data = [...fetchProductsData];
      setMenuProducts(data);
    } catch (error) {
      console.error('Error fetching products data:', error);
      setMenuProducts([]); // Return an empty array in case of an error
    }
  };

  fetchData();
}, []);


  const filter = (type) => {
    setMenuProducts(menuProducts.filter((product) => product.type === type));
  };

  return (
    <div className={css.container}>
      <img src={Plane} alt='' />
      <h1>Our Featured Products</h1>

      <div className={css.products}>
  <ul className={css.menu}>
    <li onClick={() => setMenuProducts([...fetchProductsData])}>All</li>
    <li onClick={() => setMenuProducts([...eyeliner])}>Eyeliners</li>
    <li onClick={() => setMenuProducts([...shadow])}>Eyeshadows</li>
    <li onClick={() => setMenuProducts([...lipstick])}>Lipsticks</li>
    <li onClick={() => setMenuProducts([...bronzerData])}>Bronzer</li> 
    <li onClick={() => setMenuProducts([...foundation])}>Foundations</li>
  </ul>

        <div className={css.list} ref={listRef}>
          {menuProducts.map((product, i) => (
            <div className={css.product} key={i}>
              <div className='left-s'>
                <div className='name'>
                  <span>{product.brand}</span>
                  <span>{product.category}</span>
                </div>
                <span>${product.price}</span>
                <div>Shop Now</div>
                <img src={product.img} alt='' className={css.img} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;










