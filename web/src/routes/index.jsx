import React, { useContext, useState } from 'react';
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
import NewProduct from '../pages/App/newProduct';
import EditProduct from '../pages/App/editProduct';
import Table from '../components/table';
import LayoutPage from '../components/pageLayout';
import { ApiContext } from '../contexts/ApiContext';
import ErrorMessage from '../components/errorMessage';

function AppDash() {
  return (
    <div className="min-h-screen p-[13.5px] pb-[50px] dark:bg-primary-blue lg:flex lg:gap-1.5">
      <DashMenu />
      <Outlet />
    </div>
  );
}

function ProductsDash() {
  const { hasError } = useContext(ApiContext);
  return (
    <>
      {hasError && (
        <ErrorMessage />
      )}
      {!hasError && (
        <LayoutPage>
          <Outlet />
        </LayoutPage>
      )}
    </>
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
        <Route path="products" element={<ProductsDash />}>
          <Route path="/app/nomaders/products" element={<Table />} />
          <Route path="new" element={<NewProduct />} />
          <Route path="edit/:id" element={<EditProduct />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default Rotas;
