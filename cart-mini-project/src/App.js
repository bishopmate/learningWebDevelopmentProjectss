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
          img : "https://images-na.ssl-images-amazon.com/images/I/81%2Bd6eSA0eL._UL1500_.jpg"
        },
        { 
          id : 2,
          price : 1999,
          title : "Mobile Phone",
          quantity : 1,
          img : "https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBAPPLE-IPHONESTRI2736846433CC44/1603979127170_0..jpg?imwidth=320&impolicy=hq"
        },
        { 
          id : 3,
          price : 44599,
          title : "PS5",
          quantity : 1,
          img : "https://cdn.mos.cms.futurecdn.net/ao26LJcipVKJxoSdd4UpXc-1024-80.jpg.webp"
        },
        { 
          id : 4,
          price : 79999,
          title : "Laptop",
          quantity : 1,
          img : "https://images-na.ssl-images-amazon.com/images/I/71cd41RWSNL._SL1500_.jpg"
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
      if(products[index].quantity > 0){
        this.setState({ 
          products,
          cartQuantity
        });
      }else{
        this.handleDeleteProduct(products[index].id, true);
        return;
      }
    }
  }

  handleDeleteProduct = (id, zeroed = false) => {
    let { products, cartQuantity } = this.state;
    const items = products.filter( (product) => {
      if(product.id == id){
        cartQuantity -= product.quantity;
      }
      
      return product.id != id
    
    });
    if(zeroed){ cartQuantity -= 1;}
    this.setState({ 
      products : items,
      cartQuantity
    });
  } 

  getCartTotal = ()=>{
    const { products } = this.state;
    let  total = 0;
    products.forEach(product => {
      total += product.quantity*product.price;
    });
    return total;
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
        <div style = { { fontSize : 20, paddingTop : 30, paddingLeft : 50}}>Total Price : {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
