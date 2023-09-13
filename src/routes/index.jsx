import React from 'react';
import {
  useLocation,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import Layout from '../pages/Home/layout';
import LoginPage from '../pages/Login';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

function Homedash() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

function Rotas() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Homedash />}>
        <Route path="/" element={<Layout />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      {/* <Route path="/app" element={<Appdash />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route> */}
    </Routes>
  );
}

export default Rotas;
