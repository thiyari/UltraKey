import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Common/Header';
import Footer from './Components/Common/Footer';
import General from './Components/Settings/General';
import Business from './Components/Settings/Business';
import Quotes from './Components/Settings/Quotes';
import Invoices from './Components/Settings/Invoices';
import Payments from './Components/Settings/Payments';
import Tax from './Components/Settings/Tax';
import Emails from './Components/Settings/Emails';
import PDF from './Components/Settings/PDF';
import Translate from './Components/Settings/Translate';
import Template1 from './Components/Templates/Template1';
import Template2 from './Components/Templates/Template2';
import Client from './Components/Client/Client';
import NewInvoice from './Components/Invoices/NewInvoice';

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
            <Route path="/client" element = {<Client/>} />
            <Route path="/new-invoice" element = {<NewInvoice/>} />
          </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
