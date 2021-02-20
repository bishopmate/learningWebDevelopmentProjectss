import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
  constructor(){
    super();
    this.state = {
      products : [
        { id : 1,
          price : 499,
          title : "Watch",
          quantity : 2,
          img : ""
        },
        { 
          id : 2,
          price : 1999,
          title : "Mobile Phone",
          quantity : 1,
          img : ""
        },
        { 
          id : 3,
          price : 44599,
          title : "PS5",
          quantity : 1,
          img : ""
        },
        { 
          id : 4,
          price : 79999,
          title : "Laptop",
          quantity : 1,
          img : ""
        }
      ]
    }
  }
  render(){
    const { products } = this.state;
    return(
      <div className = "cart">
        {products.map((product) => {
        return (
          <CartItem key = {product.id} product = {product}/>
        );

        })}
      </div>
    );
  }
}

export default Cart;