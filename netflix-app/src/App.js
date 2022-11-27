import React from 'react';
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} >
          </Route>
        </Routes>
      </Router>
    </>
    
  );
}

export default App;
