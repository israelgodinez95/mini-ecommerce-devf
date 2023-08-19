import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes/Index'
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

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
