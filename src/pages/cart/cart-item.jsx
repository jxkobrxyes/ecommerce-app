import React from 'react'

export const CartItem = (props) => {
    const { id, productName, price, productImg } = props.data;

  return (
    <div className="cartItem">
        <img src={productImg} />
        <div className="desc">
            <p>
                <b>
                    {productName}
                </b>
            </p>
            <p>
                ${price}
            </p>
        </div>
    </div>
  )
}
