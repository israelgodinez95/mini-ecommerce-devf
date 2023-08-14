import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ItemDetail = () => {
  const { id } = useParams()
  const [item, setItems] = useState(null)

  useEffect(() => {
    fetch(`https://mini-ecommerce-devf.onrender.com/items/${id}`)
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.error(err))
  }, [id])

  return (
    <section className='section-item-detail'>
      <div className='container mt-5'>
        <div className='card'>
          <div className='d-flex justify-content-center'>
            <img src={item?.image} className='img-detail' alt={item?.product_name} />
          </div>
          <div className='card-body'>
            <h5 className='card-title'>{item?.product_name}</h5>
            <p className='card-text'>Description: {item?.description}</p>
            <p className='card-text'>Brand: {item?.brand}</p>
            <p className='card-text'>Price: ${item?.price}</p>
            <p className='card-text'>Category: {item?.category}</p>
            <p className='card-text'>SKU: {item?.sku}</p>
            <button className='btn btn-outline-success' type='submit'>Buy</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ItemDetail
