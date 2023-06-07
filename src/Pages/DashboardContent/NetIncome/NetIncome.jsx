import React from "react";
import { FaDollarSign } from "react-icons/fa";
import {
  BarChart,
  Bar,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const NetIncome = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    }
  ];
  return (
    <div className="flex flex-col gap-4 items-center mt-[24px] p-[20px] rounded  bg-[#2F3349]">
      <div className="flex items-center justify-center">
        <span className="text-teal-200 text-2xl font-medium border-2 rounded-[50%] border-teal-200 p-2 mr-4">
          <FaDollarSign ></FaDollarSign>
        </span>
        <h2 className="text-[#A2A6C1] text-2xl font-medium "> Net Income</h2>
      </div>
      <div className="divider bg-[#484D6E] h-[1px] "></div>
      <div className="grid lg:grid-cols-5">
        <div className="col-span-3 text-[#A2A6C1] text-[16px]">
          <h1>$ 8245.00</h1>
          <p>
            <span className="text-red-300">-0.5%</span> from the last week
          </p>
        </div>
        <div className="col-span-2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={100}
              height={1000}
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <Tooltip  />
              <Bar dataKey="pv" stackId="a" fill="#8884d8" />
              <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default NetIncome;
