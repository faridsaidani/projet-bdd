import { useRef } from "react";
import { FaBars, FaTimes, FaSearch, FaShoppingCart } from "react-icons/fa";
import "./NavBar.css";
import logo from "../../logo.png"

function Navbar() {
	const navRef = useRef();
	const handleSearchClick = () =>{
		console.log("search function");
	}

	return (
		<header>
			<a href="#"><img src={logo} alt="logo" /></a>
            <div className="searchBox">
            <a onClick={handleSearchClick} href="#"><FaSearch /></a>
                <input type="search" placeholder="Search essentials, furniture and more..."/> 
                <a href="#"><FaBars /></a>
               
            </div>
			<nav ref={navRef}>
				<a href="/#"><FaShoppingCart className="cart" />Cart</a>
			</nav>
		</header>
	);
}

export default Navbar;