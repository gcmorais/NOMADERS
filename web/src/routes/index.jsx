import React, { useState } from 'react';
import {
  useLocation, Routes, Route, Outlet,
} from 'react-router-dom';
import Layout from '../pages/Home/layout';
import LoginPage from '../pages/Login';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import SignIn from '../components/modal/signIn';
import SignUp from '../components/modal/signUp';
import DashMenu from '../components/dashMenu';
import Dashboard from '../pages/App/dashboard';
import Products from '../pages/App/products';

function AppDash() {
  return (
    <div className="lg:flex lg:gap-1.5 p-[13.5px] pb-[50px]  dark:bg-primary-blue">
      <DashMenu />
      <Outlet />
    </div>
  );
}

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
  const [openUpModal] = useState(true);
  const [openInModal] = useState(true);

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Homedash />}>
        <Route path="/" element={<Layout />} />
      </Route>
      <Route path="/app" element={<LoginPage />}>
        <Route path="signup" element={<SignUp isOpen={openUpModal} />} />
        <Route path="signin" element={<SignIn isOpen={openInModal} />} />
      </Route>
      <Route path="app/nomaders" element={<AppDash />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="products" element={<Products />} />
      </Route>
      {/* <Route path="/app" element={<Appdash />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route> */}
    </Routes>
  );
}

export default Rotas;
