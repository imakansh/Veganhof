
import './App.css';
import './bootstrap.css'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar';
import Footer from './component/Footer';


import ContactUs from './component/contact';
import About from './component/About';
import Maincontent from './component/Maincontent';
import Product from './component/Product';


function App() {
 

  return (
    <div className="App">
      <Router>
        
      < Navbar />
        <Routes>

        <Route path= 'Contact_Us' element= {<ContactUs/>}/>
        <Route path= 'About' element= {<About/>}/>    
        <Route path= '' element= {<Maincontent/>}/> 
        <Route path= 'Product' element= {<Product /> }/>
      

      

        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
