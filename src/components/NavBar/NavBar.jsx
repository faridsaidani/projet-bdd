import { useRef } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import "./NavBar.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h3>LOGO</h3>
            <div className="searchBox">
            <a href="#"><FaSearch /></a>
                <input type="search" placeholder="Search essentials, furniture and more..."/> 
                <a href="#"><FaBars /></a>
               
            </div>
			<nav ref={navRef}>
				<a href="/#">About me</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;