import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes/Index'
import './App.css'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import { ItemProvider } from '@/context/ItemContext'

function App () {
  return (
    <>
      <BrowserRouter>
        <ItemProvider>
          <Navbar />
          <RoutesIndex />
        </ItemProvider>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
