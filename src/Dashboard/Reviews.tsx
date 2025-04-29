import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
} from "recharts";

const data = [{ Negative: 50, Neutral: 80, Positive: 200 }];

const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
  if (active && payload?.[0]) {
    return (
      <div className="custom-tooltip bg-white p-2 shadow-lg rounded">
        <p className="text-sm text-gray-600">
          {`${payload[0].dataKey}: ${payload[0].value?.toLocaleString() ?? 0}`}
        </p>
      </div>
    );
  }
  return null;
};

const Reviews = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        layout="vertical"
        data={data}
        margin={{ top: 40, right: 30, left: 20, bottom: 60 }}
      >
        <text x="5%" y="25" fontSize="24" fill="#9291A5">
          User Reviews
        </text>
        <XAxis hide type="number" />
        <YAxis hide type="category" />
        <Tooltip content={<CustomTooltip />} />
        <Bar
          dataKey="Negative"
          stackId="a"
          fill="#FF718B"
          radius={[10, 10, 10, 10]}
          style={{ stroke: "#fff", strokeWidth: 4 }}
        />
        <Bar
          dataKey="Neutral"
          stackId="a"
          fill="#FFEB3A"
          radius={[10, 10, 10, 10]}
          style={{ stroke: "#fff", strokeWidth: 4 }}
        />
        <Bar
          dataKey="Positive"
          stackId="a"
          fill="#7FE47E"
          radius={[10, 10, 10, 10]}
          style={{ stroke: "#fff", strokeWidth: 4 }}
        />
        <text x="5%" y="90" fontSize="18" fill="#9291A5">
          Negative
        </text>
        <text x="5%" y="120" fontSize="18" fill="#9291A5">
          <tspan fontSize="18">&#128545;118K</tspan>
        </text>
        <text x="38%" y="90" fontSize="18" fill="#9291A5">
          Neutral
        </text>
        <text x="38%" y="120" fontSize="18" fill="#9291A5">
          <tspan fontSize="18">&#128528;479K</tspan>
        </text>
        <text x="70%" y="90" fontSize="18" fill="#9291A5">
          Positive
        </text>
        <text x="70%" y="120" fontSize="18" fill="#9291A5">
          <tspan fontSize="18">&#128516;792K</tspan>
        </text>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Reviews;
