import React from 'react';

const CartItem = (props) => {
  
  const { price, title, quantity , img} = props.product;
  const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } = props;
  return (
    <div className = "cart-item">
      <div className = "left-block">
        <img style = {styles.image} src = {img}/>
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
          onClick = {() =>  onIncreaseQuantity(product) } 
          />
          <img 
          alt = "decrease" 
          className = "action-icons" 
          src = "https://www.flaticon.com/svg/vstatic/svg/860/860821.svg?token=exp=1613716633~hmac=dfd93c213b7046acdff4a56c63f05704"
          onClick = { () => onDecreaseQuantity(product) }
          />
          <img 
          alt = "delete" 
          className = "action-icons" 
          src = "https://www.flaticon.com/svg/vstatic/svg/833/833262.svg?token=exp=1613718140~hmac=4b9b2ce5417d3866ea27a330ea90423a"
          onClick = { () => onDeleteProduct(product.id)}
          />
        </div>          
      </div>
    </div>
  );
    
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