import React from 'react'

const Item = ({ id, name, price, image }) => {
  return (
    <>
      <div className='item-container col-md-4' id={id}>
        <div className='item-card card text-center d-flex flex-column align-items-center'>
          <div className='card-body d-flex flex-column align-items-center'>
            <h5 className='card-title mt-3'>{name}</h5>
            <img className='card-img-top' src={image} alt={name} />
            <p className='card-text'>$ {price}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Item
