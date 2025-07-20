import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
        <span>REDUX STORE</span>
        <div>
            <Link className="navLink" to='/'>Home</Link>
            <Link className="navLink" to='/cart'>Cart</Link>
        </div>
        <span className="cartCount">
            Total Items: 0
        </span>
    </div>
  )
}

export default Navbar