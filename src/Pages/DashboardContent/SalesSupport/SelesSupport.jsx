import React from "react";
import "./SalesSupport.css";
import { PieChart, Pie,  Cell, Tooltip, Legend } from "recharts";

const SelesSupport = () => {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return (
    <div className="flex flex-col gap-4 items-center mt-[24px] p-[20px] rounded  bg-[#2F3349]">
      <div className="flex gap-4 items-center">
        <h1 className="text-[#A2A6C1] text-2xl font-medium">Sales Report</h1>
        <span>
          <select>
            <option selected>Month</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="Augusts">Augusts</option>
            <option selected value="September">
              September
            </option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </span>

      </div>
      <PieChart width={400} height={400} >
      <Pie
          data={data}
          cx={200}
          cy={150}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend></Legend>
        </PieChart>
    </div>
  );
};

export default SelesSupport;
