import React from 'react'
import { useItemContext } from '../hooks/useItemContext'
import Item from '../components/Item/Item'
import { Link } from 'react-router-dom'

const Home = () => {
  const { items, loading } = useItemContext()

  return (
    <>
      {loading
        ? <h1>Cargando ...</h1>
        : <div className='container'>
          <div className='title-container container d-flex justify-content-center'>
            <h1>Welcome!</h1>
          </div>
          <div className='row'>
            {items.map(item => (
              <div className='item-container col-md-4' key={item.id}>
                <Link
                  className='card-link'
                  to={`/items/${item.id}`}
                >
                  <Item
                    key={item.id}
                    name={item.product_name}
                    price={item.price}
                    image={item.image}
                  />
                </Link>
              </div>
            ))}
          </div>
          </div>}
    </>
  )
}

export default Home
