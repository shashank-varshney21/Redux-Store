import { useEffect, useState } from 'react';
import { add } from '../Store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Store/productSlice';
import { Link } from 'react-router-dom';

const Products = () => {
  const dispatch = useDispatch();
  // const [IsAdding, SetIsAdding] = useState(false);
  const { data: products, status } = useSelector(state => state.product);

  // const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchedProducts = async () => {
    //   try {
    //     const res = await fetch('https://fakestoreapi.com/products');
    //     if (!res.ok) {
    //       throw new Error(`HTTP error! status: ${res.status}`);
    //     }
    //     const data = await res.json();
    //     console.log(data);
    //     setProducts(data);
    //   } catch (error) {
    //     console.error('Fetch error:', error);
    //   }
    // };
    // fetchedProducts();
  }, []);

  const HandleAdd = (event, product) => {
    event.preventDefault();
    // SetIsAdding(true);
    dispatch(add(product));
    // setTimeout(()=> {
    //   SetIsAdding(false)
    // }, 1000)
  }

  if (status === 'Loading') {
    return <h2>Loading...</h2>;
  }
  if (status === 'Error') {
    return <h2>Error fetching products</h2>;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10">
      {
        products.map(product => (
          <Link to={`/products/${product.id}`}>
            <div className='bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl' key={product.id}>
              <img className='h-48 w-auto object-contain mb-4' src={product.image} alt={product.title} height="70%" />
              <h4 className='font-semibold text-lg text-gray-800 mb-1'>{product.title}</h4>
              <h5 className='text-gray-600 mb-4'>Price: ${product.price}</h5>
              <button onClick={(event) => { HandleAdd(event, product) }} className='px-6 py-2 bg-indigo-600 rounded-lg text-white font-medium shadow-md hover:bg-indigo-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-200 hover:cursor-pointer'>Add to Cart</button>
            </div>
          </Link>
        ))
      }
    </div>
  );
};

export default Products;