import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';

export const Product = (props) => {
    const {id, productName, price, productImg} = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemAmount = cartItems[id]

  return (
    <div className='product'>
        <img src={productImg} />
        <div className="description">
            <p>
                <b>{productName}</b>
            </p>
            <p>${price}</p>
        </div>
        <button className='addToCartBtn' onClick={() => addToCart(id)}>
            Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
        </button>
    </div>
  )
}
