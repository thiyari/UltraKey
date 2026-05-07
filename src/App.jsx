import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Common/Header';
import General from './Components/General';
import Business from './Components/Business';
import Quotes from './Components/Quotes';
import Invoices from './Components/Invoices';
import Payments from './Components/Payments';
import Tax from './Components/Tax';
import Emails from './Components/Emails';
import PDF from './Components/PDF';
import Translate from './Components/Translate';


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
          </Routes>
        </Router>
    </div>
  )
}

export default App
