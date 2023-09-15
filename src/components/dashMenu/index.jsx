import React from 'react';
import { FaHome, FaDatabase } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { BiSolidDownArrow } from 'react-icons/bi';
import User from '../../assets/user.svg';

function DashMenu() {
  return (
    <div className="flex flex-col gap-1.5 w-full lg:w-72 ">
      <div className="lg:h-[13vh] flex flex-col justify-center items-left gap-1 bg-secundary-white rounded-lg">
        <div className="flex justify-around items-center pr-10">
          <img src={User} alt="profile-img" className="pl-1" />
          <div>
            <h1 className="font-inter font-semibold text-xl text-primary-black ">
              Antony Curt
            </h1>
            <p className="font-inter text-[10.5px] opacity-50">
              Imperatriz systems AD
            </p>
          </div>
          <span className="text-[10px] text-secundary-gray mb-3">
            <BiSolidDownArrow />
          </span>
        </div>
      </div>
      <div className="pt-5 lg:h-[84.8vh] bg-secundary-white rounded-lg">
        <NavLink to="home" className={({ isActive }) => (isActive ? 'w-[90%] flex justify-center gap-10 items-center px-20 py-2 mb-2 lg:mb-10 rounded-r-full bg-primary-indigo text-white' : 'w-[90%] flex justify-center gap-10 items-center px-20 py-2 mb-10 text-[#7E86A8]')}>
          <span className="text-2xl">
            <FaHome />
          </span>
          <p className="text-md font-inter font-medium">
            Dashboard
          </p>
          <span className="text-2xl">
            <BsArrowRight />
          </span>
        </NavLink>
        <p className="hidden lg:block text-[10px] uppercase tracking-widest ml-8  pb-4 text-[#7E86A8]/80">
          Vendas
        </p>
        <NavLink to="products" className={({ isActive }) => (isActive ? 'hidden w-[90%] lg:flex justify-center items-center gap-10 py-2 rounded-r-full text-white bg-primary-indigo' : 'hidden w-[90%] lg:flex justify-center items-center gap-10 py-2 text-[#7E86A8]')}>
          <span className="text-xl mr-2">
            <FaDatabase />
          </span>
          <p className="mr-[70px] text-md font-inter font-medium">
            Produtos
          </p>
        </NavLink>
      </div>
    </div>
  );
}

export default DashMenu;
