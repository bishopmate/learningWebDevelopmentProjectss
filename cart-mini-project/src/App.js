import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';


class App extends React.Component {
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
      ],
      cartQuantity : 5
    }
  }

  handleIncreaseQuantity = (product) => {
    // console.log(product);
    let {products, cartQuantity } = this.state;
    const index = products.indexOf(product);
    cartQuantity += 1;
    products[index].quantity += 1;
    this.setState({
      products,
      cartQuantity
    });
  }

  handleDecreaseQuantity = (product) => {
    // console.log(product);
    let {products, cartQuantity } = this.state;
    const index = products.indexOf(product);
    if(products[index].quantity > 0){
      products[index].quantity -= 1;
      cartQuantity -= 1;
      this.setState({ 
        products,
        cartQuantity
      });
    }
  }

  handleDeleteProduct = (id) => {
    let { products, cartQuantity } = this.state;
    const items = products.filter( (product) => {
      if(product.id == id){
        cartQuantity -= product.quantity;
      }
      return product.id != id
    
    });
    this.setState({ 
      products : items,
      cartQuantity
    });
  } 


  render(){
    const {cartQuantity} = this.state;
    return (
      <div className="App">
        <Navbar cartQuantity = {cartQuantity}/>
        <Cart
          products = {this.state.products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteProduct = {this.handleDeleteProduct}
        />
      </div>
    );
  }
}

export default App;
