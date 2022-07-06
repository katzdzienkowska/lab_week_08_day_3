import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EcommerceShop from './containers/EcommerceShop';
import Checkout from './components/Checkout';
import './App.css';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<EcommerceShop/>} />
          <Route path='/checkout' element={<Checkout/>} />
          {/* <Route path='*' element={<ErrorPage />} /> */}
        </Routes>
      </Router>
  );
}

export default App;
