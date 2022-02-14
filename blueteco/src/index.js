import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from './pages/Main';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { User } from './pages/User';
import axios from 'axios';


// import { NavbarS } from './components/Navbar';
// import { FooterS } from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(
  <React.StrictMode>
    {/* <NavbarS /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<User />} />

      </Routes>
    </BrowserRouter>
    {/* <FooterS /> */}
  </React.StrictMode>,
  document.getElementById('root'),
);
