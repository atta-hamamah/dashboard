import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { useMediaQuery } from "react-responsive";
import { type CSSProperties } from 'react';

const data = [
  { name: "Show", value: 400 },
  { name: "Movie", value: 300 },
  { name: "Tour", value: 300 },
  { name: "Conference", value: 200 },
];
const COLORS = ["#F0E5FC", "#C893FD", "#E5EAFC", "#C6D2FD"];

const EventTypes = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDesktop = useMediaQuery({ minWidth: 1025, maxWidth: 1250 });
  const isSmall = useMediaQuery({ minWidth: 640, maxWidth: 688 });
  const legendWrapperStyle: CSSProperties = {
    position: "relative",
    marginTop: isDesktop ? "-42px" : isSmall ? "-42px" : "-30px",
  };
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <text x="5%" y="25" fontSize="24" fill="#9291A5">
          Events by Type
        </text>
        <Pie
          data={data}
          startAngle={180}
          endAngle={0}
          cy={200}
          innerRadius={80}
          outerRadius={140}
          fill="#8884d8"
          paddingAngle={1}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload?.length) {
              return (
                <div className="custom-tooltip bg-white p-2 shadow-lg rounded">
                  <p className="text-sm text-gray-600">
                    {`${payload[0]?.name}: ${payload[0]?.value}`}
                  </p>
                </div>
              );
            }
            return null;
          }}
        />
        <Legend
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          iconType="circle"
          iconSize={8}
          wrapperStyle={legendWrapperStyle}
          formatter={(value, entry) => (
            <span style={{ color: "#615E83" }}>{value}</span>
          )}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventTypes;
