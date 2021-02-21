import React from 'react';
import "./navbar.css"

const Navbar = (props) => {
  
    return(
      <div className = "navbar">
        <div className = "cartIconContainer">
          <img className = "cartIcon" src="https://www.flaticon.com/svg/vstatic/svg/1170/1170678.svg?token=exp=1613891077~hmac=4a087cb743823a1ec0dd112e77593317" alt = "cart-icon"/>
          <span className = "cartCount">{props.cartQuantity}</span>
        </div>
      </div>
    );
}


export default Navbar;