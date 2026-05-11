import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Common/Header';
import Footer from './Components/Common/Footer';
import General from './Components/General';
import Business from './Components/Business';
import Quotes from './Components/Quotes';
import Invoices from './Components/Invoices';
import Payments from './Components/Payments';
import Tax from './Components/Tax';
import Emails from './Components/Emails';
import PDF from './Components/PDF';
import Translate from './Components/Translate';
import Template1 from './Components/Templates/Template1';
import Template2 from './Components/Templates/Template2';


function App() {

  return (
    <div className='container'>
      <Router>
        <Header/>
          <Routes>
            <Route path="/" element = {<General/>} />
            <Route path="/business" element = {<Business/>} />
            <Route path="/quotes" element = {<Quotes/>} />
            <Route path="/invoices" element = {<Invoices/>} /> 
            <Route path="/payments" element = {<Payments/>} />
            <Route path="/tax" element = {<Tax/>} />
            <Route path="/emails" element = {<Emails/>} />
            <Route path="/pdf" element = {<PDF/>} />
            <Route path="/translate" element = {<Translate/>} />
            <Route path="/template1" element = {<Template1/>} />
            <Route path="/template2" element = {<Template2/>} />
          </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
