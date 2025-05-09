import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppHeader from './components/header/header';
import Footer from './components/footer/footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import Management from './pages/Management';
import CreateProduct from './pages/CreateProduct';
import ManageProducts from './pages/ManageProducts'; 
import EditProduct from './pages/EditProduct';

const App = () => {
  return (
    <>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/manage" element={<ManageProducts />} />
        <Route path="/management" element={<Management />} />
        <Route path="/management/create" element={<CreateProduct />} />
        <Route path="/products/edit/:id" element={<EditProduct />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
