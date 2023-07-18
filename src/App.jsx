
import 'bootstrap/dist/css/bootstrap.min.css'
// app.jsx css`in app.jsx a yeni ozune baglayirsan
import './App.css'

// komponentler
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import PartnyorCompanies from './components/PartnyorCompanies'
import ApplySection from './components/ApplySection'
import Mukafatlar from './components/Mukafatlar'



function App() {


  return (
    <>
      
      <Navbar />
      <Introduction />
      <PartnyorCompanies/>
      <ApplySection />
      <Mukafatlar/>
    </>
  )
}

export default App
