import React from 'react';
import "./navbar.css"

const Navbar = (props) => {
  
    return(
      <div className = "navbar">
        <div className = "cartIconContainer">
          <img className = "cartIcon" src="https://image.flaticon.com/icons/png/128/1170/1170678.png" alt = "cart-icon"/>
          <span className = "cartCount">{props.cartQuantity}</span>
        </div>
      </div>
    );
}


export default Navbar;