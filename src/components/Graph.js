import React from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries,
  VerticalBarSeries,
} from "react-vis";
import "react-vis/dist/style.css";

export const Graph = () => {
  const data1 = [
    { x: 1, y: 6 },
    { x: 2, y: 11 },
    { x: 3, y: 3 },
    { x: 4, y: 18 },
    { x: 5, y: 6 },
  ];

  const data2 = [
    { x: 1, y: 0 },
    { x: 2, y: 11 },
    { x: 3, y: 6 },
    { x: 4, y: 10 },
    { x: 5, y: 4 },
  ];

  return (
    <div className="bg-[#191919] p-[60px] mt-[-100px] flex flex-col rounded-[12px]">
      <div className="flex justify-between text-white mb-[30px]">
        <h2 className="font-[20px] font-semibold">Notas Fiscais</h2>

        <span className="flex  items-center gap-[40px]">
          <p className="flex items-center gap-[4px]">
            <div className="w-[14px] h-[7px] bg-[#05DACA] rounded-full" />
            Aprovadas
          </p>

          <p className="flex items-center gap-[4px]">
            <div className="w-[14px] h-[7px] bg-white rounded-full" />
            Emitidas
          </p>
        </span>
      </div>

      <XYPlot width={720} height={400}>
        <HorizontalGridLines />
        <XAxis
          title="Dia da semana"
          tickValues={[0, 1, 2, 3, 4]}
          tickFormat={(v) => {
            const daysOfWeek = ["Seg", "Ter", "Qua", "Qui", "Sex"];
            return daysOfWeek[v];
          }}
          style={{ fontSize: "15px" }}
        />
        <YAxis
          title="Valor"
          tickValues={[0, 5, 10, 15, 20]}
          style={{ fontSize: "15px" }}
        />
        <LineSeries data={data1} color="white" />
        <LineSeries data={data2} color="#05DACA" />
      </XYPlot>
    </div>
  );
};

export default Graph;
