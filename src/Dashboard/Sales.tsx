import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sun",
    sales: 2400,
    fill: new Date().getDay() === 0 ? "#962DFF" : "#F0E5FC",
  },
  {
    name: "Mon",
    sales: 1398,
    fill: new Date().getDay() === 1 ? "#962DFF" : "#F0E5FC",
  },
  {
    name: "Tue",
    sales: 9800,
    fill: new Date().getDay() === 2 ? "#962DFF" : "#F0E5FC",
  },
  {
    name: "Wed",
    sales: 9800,
    fill: new Date().getDay() === 3 ? "#962DFF" : "#F0E5FC",
  },
  {
    name: "Thu",
    sales: 3908,
    fill: new Date().getDay() === 4 ? "#962DFF" : "#F0E5FC",
  },
  {
    name: "Fri",
    sales: 4800,
    fill: new Date().getDay() === 5 ? "#962DFF" : "#F0E5FC",
  },
  {
    name: "Sat",
    sales: 3800,
    fill: new Date().getDay() === 6 ? "#962DFF" : "#F0E5FC",
  },
];

const Sales = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={100}
        data={data}
        margin={{ top: 80, right: 10, left: -15, bottom: 0 }}
      >
        <text x="3%" y="20" fontSize="24" fill="#9291A5">
          Sales
        </text>
        <text x="3%" y="50" fontSize="24" fontWeight={"bold"} fill="#7C51A1">
          {"E£" + data[new Date().getDay()]?.sales.toLocaleString("en-US")}
        </text>
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#615E83" }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#615E83" }}
          tickFormatter={(value: number) =>
            new Intl.NumberFormat("en-US", {
              notation: "compact",
              compactDisplay: "short",
            }).format(value)
          }
        />
        <Tooltip
          cursor={{ fill: "#FFFFFF" }}
          content={({ active, payload }) => {
            if (active && payload?.length) {
              return (
                <div className="custom-tooltip w-32 bg-white p-2 shadow-lg rounded">
                  <p className="text-sm text-gray-600">{`Sales: E£${payload[0]?.value?.toLocaleString()}`}</p>
                </div>
              );
            }
            return null;
          }}
        />
        <Bar dataKey="sales" fill="fill" radius={[10, 10, 0, 0]} barSize={20} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Sales;
