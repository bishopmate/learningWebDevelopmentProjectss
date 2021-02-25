import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/app';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products : [],
      loading : true,
      cartTotal : 0
    }
  }
  componentDidMount(){
    // firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //    .then((snapshot) => {
    //   console.log(snapshot);
    //   snapshot.docs.map((doc) => {
    //     console.log(doc.data);
    //   });
    //   const products = snapshot.docs.map((doc) => {
    //     const data = doc.data();
    //     data['id'] = doc.id;
    //     return data;
    //   })
    //   this.setState({
    //     products,
    //     loading : false
    //   })
    // })
    firebase
      .firestore()
      .collection('products')
      .onSnapshot((snapshot) => {
        console.log(snapshot);
        snapshot.docs.map((doc) => {
          console.log(doc.data);
        });
        let cartQuantity = 0, cartTotal = 0;
        const products = snapshot.docs.map((doc) => {
          const data = doc.data();
          data['id'] = doc.id;
          cartQuantity += data.quantity;
          cartTotal += data.quantity*data.price;
          return data;
        })
        this.setState({
          products,
          cartQuantity,
          cartTotal,
          loading : false
        })
      })
  }
  handleIncreaseQuantity = (product) => {
    let {products, cartQuantity, cartTotal } = this.state;
    const index = products.indexOf(product);
    cartQuantity += 1;
    cartTotal += products[index].price;
    products[index].quantity += 1;
    this.setState({
      products,
      cartQuantity,
      cartTotal
    });
  }

  handleDecreaseQuantity = (product) => {
    let {products, cartQuantity, cartTotal} = this.state;
    const index = products.indexOf(product);
    products[index].quantity -= 1;
    cartQuantity -= 1;
    cartTotal -= products[index].price;
    if(products[index].quantity > 0){
      this.setState({ 
        products,
        cartQuantity,
        cartTotal
      });
    }else{
      this.handleDeleteProduct(products[index].id, true);
      return;
    }
    
  }

  handleDeleteProduct = (id, zeroed = false) => {
    let { products, cartQuantity, cartTotal } = this.state;
    const items = products.filter( (product) => {
      if(product.id == id){
        cartQuantity -= product.quantity;
        if(!zeroed)
          cartTotal -= product.quantity*product.price;
        else
          cartTotal -= product.price;
      }
      
      return product.id != id
    
    });
    if(zeroed){
      cartQuantity -= 1;
    }
    this.setState({ 
      products : items,
      cartQuantity,
      cartTotal
    }, );
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
    const {cartQuantity, loading, cartTotal} = this.state;
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
        <div style = { { fontSize : 20, paddingTop : 30, paddingLeft : 50}}>Total Price : {cartTotal}</div>
      </div>
    );
  }
}

export default App;
