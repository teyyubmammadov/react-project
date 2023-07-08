
import 'bootstrap/dist/css/bootstrap.min.css'
// app.jsx css`in app.jsx a yeni ozune baglayirsan
import './App.css'

// komponentler
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import PartnyorCompanies from './components/PartnyorCompanies'


function App() {


  return (
    <>
      
      <Navbar />
      <Introduction />
      <PartnyorCompanies/>
    </>
  )
}

export default App
