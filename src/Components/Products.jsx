import React, { useEffect, useState } from 'react';

const Products = () => {
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

  return (
    <div className='productsWrapper'>
      {
        products.map(product=> (
          <div className='card' key={product.id}>
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <h5>Price: ${product.price}</h5>
            <button className='btn'>Add to Cart</button>
          </div>
        ))
      }
    </div>
  );
};

export default Products;
