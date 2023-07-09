import React from "react";

import Header from "./Header";
import NavBar from "./Navbar";
import arrow from "../assets/arrow-2.svg";
import arrow2 from "../assets/arrow.svg";
import more from "../assets/plus.svg";
import Graph from "./Graph";

export const Dashboard = () => {
  const data = [
    {
      id: 1,
      number: 23,
      title: "MacBook Pro 13",
      price: "R$ 17.9800,90",
    },
    {
      id: 1,
      number: 23,
      title: "MacBook Pro 13",
      price: "R$ 17.9800,90",
    },
    {
      id: 1,
      number: 23,
      title: "MacBook Pro 13",
      price: "R$ 17.9800,90",
    },
    {
      id: 1,
      number: 23,
      title: "MacBook Pro 13",
      price: "R$ 17.9800,90",
    },

    {
      id: 1,
      number: 23,
      title: "MacBook Pro 13",
      price: "R$ 17.9800,90",
    },

    // Adicione mais objetos de dados aqui, se necessário
  ];

  return (
    <div
      className="pl-[135px] pr-[40px] h-screen font-roboto"
      style={{ backgroundColor: "#2D2E33" }}
    >
      <div className="flex justify-start items-center">
        <Header />
        <NavBar />
      </div>

      <div className="flex gap-[45px]">
        <div className="grid grid-cols-4 gap-[20px] ">
          <div className="w-[215px] h-[150px] rounded-[12px] relative p-3  bg-[#3E3F43] flex flex-col justify-center">
            <h2 className="text-white text-[16px] mb-2 font-light">
              Saldo da Conta
            </h2>
            <span className="text-[#05DACA] font-roboto text-[28px] font-semibold mb-2">
              $ 1200,00
            </span>
            <p className="text-white flex items-center gap-3 text-[14px] font-light cursor-pointer">
              Ver Extrato <img src={arrow} alt="Seta" className="w-4 h-4" />
            </p>
          </div>

          <div className="w-[215px] h-[150px] rounded-[12px] relative p-3  bg-[#191919] w-215px flex flex-col justify-center">
            <h2 className="text-white text-[16px] mb-2 font-light">
              Aprovados
            </h2>
            <span className="text-[#05DACA] font-roboto text-[28px] font-semibold mb-2">
              2
            </span>
            <p className="text-[#6D7D93] flex items-center gap-3 text-[14px] font-light">
              <span className="font-semibold">2%</span> De Redução da Meta
              <img src={arrow2} alt="Seta" className="w-4 h-4" />
            </p>
          </div>

          <div className="w-[215px] h-[150px] rounded-[12px] relative p-3  bg-[#191919] flex flex-col justify-center">
            <h2 className="text-white text-[16px] mb-2 font-light">Pendênte</h2>
            <span className="text-[#05DACA] font-roboto text-[28px] font-semibold mb-2">
              13
            </span>
            <p className="text-[#6D7D93]  flex items-center gap-3 text-[14px] font-light">
              <span className="font-semibold">6%</span>De Aumento do Alvo{" "}
              <img
                src={arrow2}
                alt="Seta"
                className="w-4 h-4 transform -rotate-180"
              />
            </p>
          </div>

          <div className="w-[215px] h-[150px] rounded-[12px] relative p-3  bg-[#191919] flex flex-col justify-center">
            <h2 className="text-white text-[16px] mb-2 font-light">Emitidas</h2>
            <span className="text-[#05DACA] font-roboto text-[28px] font-semibold mb-2">
              90
            </span>
            <p className="text-[#6D7D93]  flex items-center gap-3 text-[14px] font-light">
              <span className="font-semibold">1%</span> De Almento do Alvo
              <img src={arrow2} alt="Seta" className="w-4 h-4" />
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-[45px] text-white font-light">
          <div className="w-[345px] h-[344px] relative p-[20px]  bg-[#191919] rounded-[12px] items-center">
            <h2 className="font-bold font-[18px]">Extrato</h2>

            <div className="flex justify-between items-center">
              <span className="">
                <p className="font-semibold font-[16px] mt-[22px]">
                  Cadeira Gamer
                </p>
                <p className="font-normal font-[12px] opacity-50">
                  Vence em 16/03/21
                </p>
              </span>
              <p className="font-semibold font-[16px]">R$ 2.131,33</p>
            </div>

            <div className="flex justify-center mt-[25px]">
              <button className="hover:border-[#6D7D93] border-[#3E3F43] text-[#6D7D93] p-[10px 30px] border rounded-[6px] font-[12px] font-bold flex items-center justify-center gap-[10px] bg-[#111111] w-[151px] h-[36px]">
                <img src={more} />
                Mais dados
              </button>
            </div>
          </div>

          <div className="h-[210px] h-[415px] rounded-[12px] relative p-[20px]  bg-[#191919]">
            <h2 className="font=[18px] font-semibold">Estoque</h2>

            <div>
              <div className="overflow-y-scroll your-container">
                {data.slice(0, 3).map((item) => (
                  <div
                    key={item.id}
                    className="mt-[20px] bg-[#0D0D0D] h-[70px] rounded-[6px] p-[7px] flex gap-[17px] items-center"
                  >
                    <div className="bg-[#303243] w-[58px] h-[58px] rounded-[4px] flex items-center justify-center">
                      <h2 className="text-[#05DACA] font-bold font-[24px]">
                        {item.number}
                      </h2>
                    </div>
                    <div className="">
                      <h2 className="font-[12px]">{item.title}</h2>
                      <p className="font-[10px] text-[#6D7D93] font-light">
                        {item.price}
                      </p>
                    </div>
                    <img
                      src={arrow}
                      className="ml-[62px] w-[24px] h-[24px] cursor-pointer"
                      alt="Seta"
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-[25px]">
                <button className="hover:border-[#6D7D93] border-[#3E3F43] text-[#6D7D93] p-[10px 30px] border rounded-[6px] font-[12px] font-bold flex items-center justify-center gap-[10px] bg-[#111111] w-[151px] h-[36px]">
                  <img src={more} />
                  Mais dados
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[-500px] flex">
        <Graph />
      </div>
    </div>
  );
};
