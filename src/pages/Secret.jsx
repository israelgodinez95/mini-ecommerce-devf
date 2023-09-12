import { useEffect, useState } from 'react'
import { getAllUsersService } from '@/services/userService'

const Secret = () => {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState(null)

  useEffect(() => {
    const fetchUsersData = async () => {
      try {
        const token = localStorage.getItem('jwt_token')
        const { data } = await getAllUsersService(token)
        setUsers(data)
        setLoading(false)
      } catch (error) {
        console.error(error)
      }
    }
    fetchUsersData()
  }, [])

  return (
    <>
      <div className='title-container container d-flex justify-content-center'>
        <h1>Secret</h1>
      </div>
      <div className='container'>
        <div className='row'>
          {loading
            ? <h1>Cargando...</h1>
            : users.map(({ id, first_name, last_name, gender, email, role }) =>
              (
                <div className='col-md-6 mx-auto' key={id}>
                  <div className='card mb-4'>
                    <div className='card-body'>
                      <h5 className='card-title'>
                        {first_name} {last_name}
                      </h5>
                      <p className='card-text'>
                        <strong>Gender:</strong> {gender}
                      </p>
                      <p className='card-text'>
                        <strong>Email:</strong> {email}
                      </p>
                      <p className='card-text'>
                        <strong>Role:</strong> {role}
                      </p>
                    </div>
                  </div>
                </div>

              ))}
        </div>
      </div>

    </>
  )
}
export default Secret

/*
<div key={id}>
              <span>{first_name}</span><br />
              <span>{last_name}</span><br />
              <span>{gender}</span><br />
              <span>{email}</span><br />
              <span>{role}</span><br />
             </div>
*/
