import React from 'react';

class CartItem extends React.Component{
  
  constructor(){
    super();
    this.state = {
      price : 999,
      title : 'Mobile Phone',
      quantity : 1,
      img : ''
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }

  increaseQuantity = () => {
    // console.log(this.state);
    // All forms of setState calls are asynchronous
    // setState form 1
    // Batching is done, but only the last change on a state property through the latest call of this form is changed
    // When calling setState the previous state is not up to date because of Batching
    // this.setState({ quantity : this.state.quantity+10 }, ()=> { console.log("hey 10")});
    // this.setState({ quantity : this.state.quantity+9 });
    // this.setState({ quantity : this.state.quantity+5 });
    
    // setState form 2 - if previous state is required then use form 2
    // Batching is done in a way that the previous state is up to date when calling the callback function in
    //  all of these calls to setState of this form
    this.setState((previousState) => {
      return {
        quantity : previousState.quantity+1
      }
    });
    // this.setState((previousState) => {
    //   return {
    //     quantity : previousState.quantity+2
    //   }
    // });
    // // the second paramter passed is a callback function that is called when the state is updated
    // this.setState((previousState) => {
    //   return {
    //     quantity : previousState.quantity+3
    //   }
    // }, ()=>{
    //   console.log(this.state);
    // });
  }

  decreaseQuantity = () => {
    const { quantity } = this.state;
    if(quantity >= 1){
      this.setState( (previousState) => {
        return{
          quantity : previousState.quantity-1
        }
      });
    }
  }

  // setState behaves as synchronous calls in promises which explains it synchronous behaviour over here
  testing(){
    const promise = new Promise((resolve, reject) => {
      setTimeout( () => {
        resolve('done');
      }, 1500);
    })

    promise.then(() => {
      this.setState({
        quantity : this.state.quantity+10
      })
      this.setState({
        quantity : this.state.quantity+10
      })
      this.setState({
        quantity : this.state.quantity+10
      })   
      console.log('state', this.state);
    });

  }






  render(){
    // console.log("render");
    const { price, title, quantity } = this.state;
    return (
      <div className = "cart-item">
        <div className = "left-block">
          <img style = {styles.image}/>
        </div>
        <div className = "right-block">
          <div style = {{ fontSize : 25}}> {title}  </div>
          <div style = {{ color : "#777"}}> Price : {price} </div>
          <div style = {{ color : "#777"}}> Quantity :  {quantity}</div>
          <div className = "cart-item-actions">
            {/* Buttons*/}
            <img 
            alt = "increase"
            className = "action-icons"
            src = "https://www.flaticon.com/svg/vstatic/svg/748/748113.svg?token=exp=1613716588~hmac=12e74df51b96b01d251fca4bb7db7481"
            onClick = { this.increaseQuantity } 
            />
            <img 
            alt = "decrease" 
            className = "action-icons" 
            src = "https://www.flaticon.com/svg/vstatic/svg/860/860821.svg?token=exp=1613716633~hmac=dfd93c213b7046acdff4a56c63f05704"
            onClick = { this. decreaseQuantity }
            />
            <img 
            alt = "delete" 
            className = "action-icons" 
            src = "https://www.flaticon.com/svg/vstatic/svg/833/833262.svg?token=exp=1613718140~hmac=4b9b2ce5417d3866ea27a330ea90423a"/>
          </div>          
        </div>
      </div>
    );
  }  
}

const styles = {
  image : {
    height : 110,
    width : 110,
    borderRadius : 4,
    background : "#ccc"
  }
}

export default CartItem;