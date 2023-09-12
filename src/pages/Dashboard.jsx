import React from 'react'
import { useForm } from 'react-hook-form'
import { createNewItem } from '@/services/userService'

const Dashboard = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const sendData = async (data) => {
    try {
      const token = localStorage.getItem('jwt_token')
      const response = await createNewItem(data, token)
      console.log(response)
    } catch (error) {
      console.error(error)
    }
    reset()
  }

  return (
    <>
      <div className='title-container container d-flex justify-content-center'>
        <h1>Dashboard</h1>
      </div>
      <main className='form-signin w-100 m-auto'>

        <form onSubmit={handleSubmit(sendData)}>
          <h1 className='h3 mb-3 fw-normal'>Create new item</h1>

          <div className='form-floating'>
            <input
              type='text'
              className='form-control'
              id='product_name'
              name='product_name'
              placeholder='Tenis'
              {...register('product_name')}
            />
            <label htmlFor='product_name'>Product Name</label>
          </div>

          <div className='form-floating'>
            <input
              type='text'
              className='form-control'
              id='description'
              name='description'
              placeholder='Designed for running'
              {...register('description')}
            />
            <label htmlFor='description'>Description</label>
          </div>

          <div className='form-floating'>
            <input
              type='text'
              className='form-control'
              id='price'
              name='price'
              placeholder='$999'
              {...register('price')}
            />
            <label htmlFor='price'>Price</label>
          </div>

          <div className='form-floating'>
            <select
              className='form-select'
              id='category'
              name='category'
              {...register('category')}
            >
              <option value=''>Choose...</option>
              <option value='Books'>Books</option>
              <option value='Movies'>Movies</option>
              <option value='Music'>Music</option>
              <option value='Games'>Games</option>
              <option value='Electronics'>Electronics</option>
              <option value='Computers'>Computers</option>
              <option value='Home'>Home</option>
              <option value='Garden'>Garden</option>
              <option value='Tools'>Tools</option>
              <option value='Grocery'>Grocery</option>
              <option value='Health'>Health</option>
              <option value='Beauty'>Beauty</option>
              <option value='Toys'>Toys</option>
              <option value='Kids'>Kids</option>
              <option value='Baby'>Baby</option>
              <option value='Clothing'>Clothing</option>
              <option value='Shoes'>Shoes</option>
              <option value='Jewelery'>Jewelery</option>
              <option value='Sports'>Sports</option>
              <option value='Outdoors'>Outdoors</option>
              <option value='Automotive'>Automotive</option>
              <option value='Industrial'>Industrial</option>
            </select>
            <label htmlFor='category'>Category</label>
          </div>

          <div className='form-floating'>
            <input
              type='text'
              className='form-control'
              id='brand'
              name='brand'
              placeholder='Adidas'
              {...register('brand')}
            />
            <label htmlFor='brand'>Brand</label>
          </div>

          <div className='form-floating'>
            <input
              type='text'
              className='form-control'
              id='sku'
              name='sku'
              placeholder='name@example.com'
              {...register('sku')}
            />
            <label htmlFor='sku'>SKU</label>
          </div>

          <div className='form-floating'>
            <input
              type='text'
              className='form-control'
              id='image'
              name='image'
              placeholder='Image'
              {...register('image')}
            />
            <label htmlFor='password'>Image URL</label>
          </div>

          <button className='w-100 btn btn-lg btn-primary' type='submit'>Create Item</button>
          <p className='mt-5 mb-3 text-muted'>© 2017–2023</p>
        </form>
      </main>

    </>
  )
}

export default Dashboard
