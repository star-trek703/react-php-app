import { NavLink } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa"

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink exact to='/' activeClassName='active'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/products' activeClassName='active'>Products</NavLink>
                </li>
                <li>
                    <NavLink to='/services' activeClassName='active'>Services</NavLink>
                </li>
                <li>
                    <NavLink to='/contact' activeClassName='active'>Contact</NavLink>
                </li>
                <li>
                    <NavLink to='/about' activeClassName='active'>About</NavLink>
                </li>
                
                <ul>
                    <li>
                        <FaShoppingCart />
                    </li>
                </ul>
            </ul>

        </nav>
    )
}

export default Navbar
