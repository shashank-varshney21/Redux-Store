import { useSelector } from 'react-redux';
import { remove } from '../Store/cartSlice';
import { useDispatch } from 'react-redux';

// Here we bring the products from the cartSlice (Redux)
const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const HandleRemove = (productID) => {
    dispatch(remove(productID));
  }
  return (
    products.length === 0 ? (
      <div className='flex justify-center items-center mt-30'>
        <img className='w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain' src='/empty-cart.png' alt='Empty cart' />
      </div>
    ) : (
      <div className="mx-auto mt-10">
        {products.map(product => (
          <div
            key={product.id}
            className="
        flex flex-col md:flex-row md:justify-between md:items-center 
        bg-white mb-6 p-4 rounded-md shadow-sm space-y-4 md:space-y-0 md:space-x-4
      "
          >
            {/* Image */}
            <img
              src={product.image}
              alt={product.title}
              className="w-20 h-20 md:w-24 md:h-24 object-contain mx-auto md:mx-0"
            />

            {/* Title */}
            <h4 className="text-lg font-semibold text-center md:text-left">
              {product.title}
            </h4>

            {/* Price */}
            <h5 className="text-gray-700 text-center md:text-left">
              Price: ${product.price}
            </h5>

            {/* Button */}
            <button
              onClick={() => HandleRemove(product.id)}
              className="
          bg-red-500 hover:bg-red-600 text-white font-medium 
          px-4 py-2 rounded-md transition-colors duration-200 
          mx-auto md:mx-0
        "
            >
              Remove from Cart
            </button>
          </div>
        ))}
      </div>

    )
  )
}

export default Cart