import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';

export const CartItem = (props) => {
    const { id, productName, price, productImg } = props.data;
    const { cartItems, addToCart, remFromCart, updateCartItemCount} = useContext(ShopContext);

  return (
    <div className="cartItem">
        <img src={productImg} />
        <div className="desc">
            <p>
                <b>{productName}</b>
            </p>
            <p>${price}</p>

             {/* Changes the value from input  */}
            <div className="countHandler">
                <button onClick={() => remFromCart(id)}> - </button>
                <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                <button onClick={() => addToCart(id)}> + </button>
            </div>
        </div>
    </div>
  )
}
