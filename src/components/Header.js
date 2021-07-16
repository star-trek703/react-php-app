import { Link } from "react-router-dom"
import Navbar from "./Navbar"

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='logo'>
                    <Link to='/'>Brand</Link>
                </div>
                <Navbar />
            </div>
        </header>
    )
}

export default Header
