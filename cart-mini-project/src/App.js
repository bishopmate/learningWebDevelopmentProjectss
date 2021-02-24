import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/app';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products : [],
      cartQuantity : 5,
      loading : true
    }
  }
  componentDidMount(){
    firebase
      .firestore()
      .collection('products')
      .get()
      .then((snapshot) => {
        console.log(snapshot);
        snapshot.docs.map((doc) => {
          console.log(doc.data);
        });
        const products = snapshot.docs.map((doc) => {
          const data = doc.data();
          data['id'] = doc.id;
          return data;
        })
        this.setState({
          products,
          loading : false
        })
      })
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
    const {cartQuantity, loading} = this.state;
    return (
      <div className="App">
        <Navbar cartQuantity = {cartQuantity}/>
        <Cart
          products = {this.state.products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteProduct = {this.handleDeleteProduct}
        />
        { loading && <h1>Loading Products</h1>}
        <div style = { { fontSize : 20, paddingTop : 30, paddingLeft : 50}}>Total Price : {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
