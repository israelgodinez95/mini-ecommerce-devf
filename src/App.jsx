import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes/Index'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App () {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <RoutesIndex />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
