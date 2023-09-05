import React from 'react'

export const Product = (props) => {
    const {id, productName, price, productImg} = props.data;

  return (
    <div className='product'>
        <img src={productImg} />
        <div className="descritpion">
            <p>
                <b>{productName}</b>
            </p>
            <p>${price}</p>
        </div>
    </div>
  )
}
