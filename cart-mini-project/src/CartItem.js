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
          src = "https://image.flaticon.com/icons/png/128/1237/1237946.png"
          onClick = {() =>  onIncreaseQuantity(product) } 
          />
          <img 
          alt = "decrease" 
          className = "action-icons" 
          src = "https://image.flaticon.com/icons/png/128/1828/1828901.png"
          onClick = { () => onDecreaseQuantity(product) }
          />
          <img 
          alt = "delete" 
          className = "action-icons" 
          src = "https://image.flaticon.com/icons/png/128/1214/1214428.png"
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