import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    index: 0,
    Revenue: 4000,
    Budget: 2400,
  },
  {
    name: "Feb",
    index: 1,
    Revenue: 3000,
    Budget: 1398,
  },
  {
    name: "March",
    index: 2,
    Revenue: 2000,
    Budget: 9800,
  },
  {
    name: "April",
    index: 3,
    Revenue: 2780,
    Budget: 3908,
  },
  {
    name: "May",
    index: 4,
    Revenue: 1890,
    Budget: 4800,
  },
  {
    name: "June",
    index: 5,
    Revenue: 2390,
    Budget: 3800,
  },
  {
    name: "Jul",
    index: 6,
    Revenue: 2390,
    Budget: 3800,
  },
  {
    name: "Aug",
    index: 7,
    Revenue: 2390,
    Budget: 3800,
  },
  {
    name: "Sep",
    index: 8,
    Revenue: 2390,
    Budget: 3800,
  },
  {
    name: "Oct",
    index: 9,
    Revenue: 2390,
    Budget: 3800,
  },
  {
    name: "Nov",
    index: 10,
    Revenue: 2390,
    Budget: 3800,
  },
  {
    name: "Dec",
    index: 11,
    Revenue: 2390,
    Budget: 3800,
  },
];
const EventsROI = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{ right: 20, top: 20 }}
      >
        <CartesianGrid vertical={false} />
        <text x="3%" y="25" fontSize="24" fill="#9291A5">
          Event ROI
        </text>
        <XAxis dataKey="name" tickLine={false} axisLine={false} />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickFormatter={(value: number) =>
            new Intl.NumberFormat("en-US", {
              notation: "compact",
              compactDisplay: "short",
            }).format(value)
          }
        />
        <Tooltip />
        <Legend
          layout="horizontal"
          verticalAlign="top"
          align="right"
          iconType="circle"
          iconSize={8}
        />
        <ReferenceLine
          x={
            data.find((element) => element.index === new Date().getMonth())
              ?.name
          }
          stroke="#9291A5"
          strokeDasharray={10}
        />
        <Line
          type="monotone"
          strokeWidth={2}
          dot={<CustomDot cx={0} cy={0} payload={null} />}
          dataKey="Budget"
          stroke="#FF718B"
        />
        <Line
          type="monotone"
          strokeWidth={2}
          dot={false}
          dataKey="Revenue"
          stroke="#4A3AFF"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
// Define a custom dot element
const CustomDot = (props: {
  cx: number;
  cy: number;
  payload: null | Record<string, string | number>;
}): JSX.Element => {
  const { cx, cy, payload } = props;
  if (payload?.index === new Date().getMonth()) {
    return (
      <svg viewBox="0 0 10 10" width={20} height={20} x={cx - 10} y={cy - 10}>
        <circle
          cx={5}
          cy={5}
          r={4}
          fill="#FFFFFF"
          stroke="#FF718B"
          strokeWidth={2}
        />
      </svg>
    );
  }
  return <div />;
};
export default EventsROI;
