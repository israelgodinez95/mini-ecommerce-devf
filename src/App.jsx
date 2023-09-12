import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from '@/routes/Index'
import './App.css'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import { ItemProvider } from '@/context/ItemContext'
import { AdminProvider } from '@/context/AdminContext'

function App () {
  return (
    <>
      <div className='App'>
        <AdminProvider>
          <BrowserRouter>
            <ItemProvider>
              <Navbar />
              <RoutesIndex />
            </ItemProvider>
            <Footer />
          </BrowserRouter>
        </AdminProvider>
      </div>

    </>
  )
}

export default App
