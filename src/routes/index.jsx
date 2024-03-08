import React, { useContext, useState } from "react";
import { useLocation, Routes, Route, Outlet } from "react-router-dom";
import LoginPage from "../pages/Login";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SignIn from "../components/modal/signIn";
import SignUp from "../components/modal/signUp";
import DashMenu from "../components/dashMenu";
import Dashboard from "../pages/App/dashboard";
import NewProduct from "../pages/App/newProduct";
import EditProduct from "../pages/App/editProduct";
import Table from "../components/table";
import LayoutPage from "../components/pageLayout";
import { ApiContext } from "../contexts/ApiContext";
import ErrorMessage from "../components/errorMessage";
import { PrivateRoute } from "./privateRoutes";

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
      {hasError && <ErrorMessage />}
      {!hasError && (
        <LayoutPage>
          <Outlet />
        </LayoutPage>
      )}
    </>
  );
}

function Rotas() {
  const location = useLocation();
  const [openUpModal] = useState(true);
  const [openInModal] = useState(true);

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<LoginPage />}>
        <Route path="signup" element={<SignUp isOpen={openUpModal} />} />
        <Route path="signin" element={<SignIn isOpen={openInModal} />} />
      </Route>

      <Route path="" element={<PrivateRoute />}>
        <Route path="/app" element={<AppDash />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<ProductsDash />}>
            <Route path="/app/products" element={<Table />} />
            <Route path="new" element={<NewProduct />} />
            <Route path="edit/:id" element={<EditProduct />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default Rotas;
