import { Link } from "react-router-dom"
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
        <span>REDUX STORE</span>
        <div>
            <Link className="navLink" to='/'>Home</Link>
            <Link className="navLink" to='/cart'>Cart</Link>
        </div>
        <span className="cartCount">
            Total Items: {items.length}
        </span>
    </div>
  )
}

export default Navbar