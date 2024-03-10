import React, { useContext } from "react";
import { FaHome, FaDatabase } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { NavLink, useLocation } from "react-router-dom";
import User from "../../assets/user.png";
import PersonalMenu from "./personalMenu";
import { AuthContext } from "../../contexts/AuthContext";
import { ApiContext } from "../../contexts/ApiContext";

function DashMenu() {
  const location = useLocation();
  const { getUser } = useContext(ApiContext);

  return (
    <div className="flex w-full flex-col gap-1.5 lg:w-[270px] ">
      <div className="items-left flex flex-col justify-center gap-1 rounded-lg bg-secundary-white dark:bg-secundary-blue lg:h-[13.75vh]">
        <div className="z-10 flex items-center justify-center gap-3 p-3 lg:gap-0">
          <img src={User} alt="profile-img" className="ml-5 mr-5 h-10" />
          <div>
            <h1 className="font-inter text-sm font-semibold text-primary-black dark:text-white/80">
              {getUser.name}
            </h1>
            <p className="font-inter text-[10.5px] opacity-50 dark:text-secundary-neutral">
              {getUser.email}
            </p>
          </div>
          <PersonalMenu />
        </div>
      </div>
      <div className="hidden rounded-lg bg-secundary-white pt-5 dark:bg-secundary-blue lg:block lg:h-full">
        <NavLink
          to="dashboard"
          className={({ isActive }) =>
            isActive
              ? "mb-2 flex w-[90%] items-center justify-center gap-10 rounded-r-full bg-primary-indigo px-20 py-2 text-white lg:mb-10"
              : "mb-10 flex w-[90%] items-center justify-center gap-10 px-20 py-2 text-[#7E86A8]"
          }
        >
          <span className="text-2xl">
            <FaHome />
          </span>
          <p className="text-md font-inter font-medium">Dashboard</p>
          <span className="text-2xl">
            <BsArrowRight />
          </span>
        </NavLink>
        <p className="ml-8 hidden pb-4 text-[10px] uppercase tracking-widest  text-[#7E86A8]/80 lg:block">
          Vendas
        </p>
        <NavLink
          to="products"
          className={({ isActive }) =>
            isActive
              ? "hidden w-[90%] items-center justify-center gap-10 rounded-r-full bg-primary-indigo py-2 text-white lg:flex"
              : "hidden w-[90%] items-center justify-center gap-10 py-2 text-[#7E86A8] lg:flex"
          }
        >
          <span className="mr-2 text-xl">
            <FaDatabase />
          </span>
          <p className="text-md mr-[70px] font-inter font-medium">Produtos</p>
        </NavLink>
      </div>
    </div>
  );
}

export default DashMenu;
