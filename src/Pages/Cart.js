import React from 'react'
import { useSelector } from 'react-redux';
import { remove } from '../Store/cartSlice';
import { useDispatch } from 'react-redux';

// Here we bring the products from the cartSlice (Redux)
const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch ();
  const HandleRemove = (productID) => {
    dispatch(remove(productID));
  }
  return (
    products.length === 0 ? (
      <img src='/empty-cart.png' alt='Empty cart' className='emptyCartImage'/>
    ) : (
      <div className='cartWrapper'>
        {products.map(product => (
          <div className='cartCard' key={product.id}>
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <h5>Price: ${product.price}</h5>
            <button onClick={() => {HandleRemove(product.id)}} className='btn'>Remove from Cart</button>
          </div>
        ))}
      </div>
    )
  )
}

export default Cart