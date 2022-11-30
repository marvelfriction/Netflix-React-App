import React from 'react';
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import { AuthContextProvider } from './context/AuthContext'
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Account from './Pages/Account';


function App() {
  return (
    <>
    <AuthContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/account' element={<Account />} />
        </Routes>
      </Router>
    </AuthContextProvider>
    </>
  );
}

export default App;
