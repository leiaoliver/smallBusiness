import React from "react";
import logo from "../assets/logo.svg";
import inicio from "../assets/start.svg";
import extract from "../assets/extract.svg";
import docs from "../assets/docs.svg";
import stock from "../assets/stok.svg";
import logoutImage from "../assets/log-out.svg";
import HoverableImage from "./HoverableImage";


const NavBarVertical = () => {
  return (
    <nav className="fixed left-0 top-0 bg-[#0D0D0D] text-white h-full w-[90px] p-4 flex flex-col">
    <ul className="space-y-2 mt-[40px] flex flex-col items-center">
      <li className="flex items-center">
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
      </li>
      <li className="flex items-center">
        <a href="#" className="mt-[63px]">
          <img src={inicio} alt="tela inicial" />
        </a>
      </li>
      <li className="flex items-center">
        <a href="#">
          <img src={extract} alt="extract" className="mt-[70px]" />
        </a>
      </li>
      <li className="flex items-center">
        <a href="#">
          <img
            src={docs}
            alt="docs"
            className="mt-[70px] hover:filter hover:brightness-110"
            style={{ filter: "brightness(1)", transition: "filter 0.3s" }}
          />
        </a>
      </li>
      <li className="flex items-center">
        <a href="#">
          <img
            src={stock}
            alt="stock"
            className="mt-[70px] hover:filter hover:brightness-110"
            style={{ filter: "brightness(1)", transition: "filter 0.3s" }}
          />
        </a>
      </li>
      <li className="flex items-center mt-auto">
        <a href="#">
          <img
            src={logoutImage}
            alt="log-out"
            className="mt-[400px] hover:filter hover:brightness-110"
            style={{ filter: "brightness(1)", transition: "filter 0.3s" }}
          />
        </a>
      </li>
    </ul>
  </nav>
  
  );
};

export default NavBarVertical;
