import React, { useEffect, useState } from 'react';
import { add } from '../Store/cartSlice';
import { useDispatch } from 'react-redux';

const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchedProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    fetchedProducts();
  }, []);

  const HandleAdd = (product) => {
    dispatch(add(product));
    alert(`${product.title} added to cart`);
  }

  return (
    <div className='productsWrapper'>
      {
        products.map(product=> (
          <div className='card' key={product.id}>
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <h5>Price: ${product.price}</h5>
            <button onClick={() => { HandleAdd(product) }} className='btn'>Add to Cart</button>
          </div>
        ))
      }
    </div>
  );
};

export default Products;
