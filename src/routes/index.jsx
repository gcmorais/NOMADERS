import React from 'react';
import {
  useLocation,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import LoginPage from '../pages/Login';
import Home from '../pages/Home';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

// function Appdash(){
//   return(
//     <>

//     </>
//   )
// }

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
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      {/* <Route path="/app" element={<Appdash />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route> */}
    </Routes>
  );
}

export default Rotas;
