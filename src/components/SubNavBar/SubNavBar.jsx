import { React } from "react";
import "./SubNavBar.css";

const  SubNavbar = () => {
	return (
		<header className="subheader">			
                <div className="elements">
                    <a href="#" className="element">Smartphones</a>
                    <a href="#" className="element">Decoration</a>
                    <a href="#" className="element">Clothes</a>
                    <a href="#" className="element">Furniture</a>
                    <a href="#" className="element">Electronics</a>
                    <a href="#" className="element">Cosmetics</a>
                    <a href="#" className="element">Appliances</a>
                </div>
		</header>
	);
}

export default SubNavbar;