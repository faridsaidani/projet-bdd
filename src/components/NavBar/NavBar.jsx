import { useRef, useState } from "react";
import { FaBars, FaSearch, FaShoppingCart } from "react-icons/fa";
import "./NavBar.css";
import logo from "../../logo.png"

const  Navbar = () => {
	const navRef = useRef();
	const [searchValue, setSearchValue] = useState('');
	const handleSearchClick = () =>{
		console.log("search : " + searchValue);
		setSearchValue('');
	}
	const handleSearchChange = (event) => {
		setSearchValue(event.target.value);
	}
	

	return (
		<header>
			<a href="#" onClick={() => console.log("home")}><img src={logo} alt="logo" /></a>
			<form onSubmit={handleSearchClick} className="searchBox">
				<a href="#"onClick={handleSearchClick}><FaSearch color="#008ECC"/></a>
				<input type="search" placeholder="Search essentials, furniture and more..." onChange={handleSearchChange} value={searchValue} required/> 
				<a href="#" onClick={() => console.log("Bars")}><FaBars color="#008ECC" /></a>
			</form>
			<nav ref={navRef}>
				<a href="#" onClick={() => console.log("cart")}><FaShoppingCart className="cart" />Cart</a>
			</nav>
		</header>
	);
}

export default Navbar;