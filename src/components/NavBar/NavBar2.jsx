import React from "react";
import "./NavBar.css"
import logo from "../../logo.png"
import SearchBar from "../SearchBar/SearchBar";

const NavBar = (props) => {
    return (
        <nav>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
         <div class="menu-icon">
            <span class="fas fa-bars"></span>
         </div>
         <div class="logo">
            CodingNepal
         </div>
         <div class="nav-items">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Feedback</a></li>
         </div>
         <div class="search-icon">
            <span class="fas fa-search"></span>
         </div>
         <div class="cancel-icon">
            <span class="fas fa-times"></span>
         </div>
         <form action="#">
            <input type="search" class="search-data" placeholder="Search" required/>
            <button type="submit" class="fas fa-search"></button>
         </form>
      </nav>
    )
}

export default NavBar