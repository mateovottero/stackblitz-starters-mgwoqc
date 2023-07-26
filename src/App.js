import React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<p>hola soy otro</p>} />
        <Route path="/item/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}
