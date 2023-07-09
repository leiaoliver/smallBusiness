import React from "react";
import bellIcon from "../assets/bell.svg";
import messageIcon from "../assets/message.svg";
import arrow from "../assets/arrow-2.svg";

const Header = ({ name }) => {
  const input = {
    backgroundColor: "#3D3E42",
    color: "white",
  };

  return (
    <div className="w-full mt-[42px] mb-[47px] flex items-center justify-between">
      <h1 class=" font-roboto text-3xl font-semibold text-white">Dashboard</h1>

      <div class="relative">
        <span class=" ml-[174px] absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <i class="fas fa-search"></i>
        </span>
        <input
          type="text"
          placeholder="Pesquisar..."
          style={input}
          class="ml-[174px] w-[351px] h-[44px] text-zinc-600 bg-[#3D3E42] rounded-lg py-2 pl-10 pr-4 border border-[#3D3E42] appearance-none transition-colors duration-300 hover:border-[#05DACA] focus:outline-none focus:border-[#05DACA]"
        />
      </div>

      <div className="flex justify-between gap-[20px]">
        <img className="h-6 w-6 cursor-pointer" src={bellIcon} alt="" />
        <img className="h-6 w-6 cursor-pointer" src={messageIcon} alt="chat" />
      </div>

      <div className="text-white flex items-center  space-x-4 gap-[12px]">
        <div className="flex justify-center items-center gap-[9px]">
          <h2 className="bg-white text-[#05DACA] rounded-full w-[44px] h-[44px] flex items-center justify-center">
            LB
          </h2>
          <span>
            <p className="text-[12px]">Razão Social</p>
            <p className="text-[16px]">Léia Bortolato</p>
          </span>
        </div>

        <div>
          <h2 className="text-[12px]">
            Ag: <span className="font-bold">0001</span>
          </h2>
          <h2 className="text-[12px]">
            Cc: <span className="font-bold">32769-5</span>
          </h2>
        </div>

        <div className="ml-4 transform rotate-90">
          <img
            className="w-[24px] h-[24px] filter brightness-100 cursor-pointer"
            src={arrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
