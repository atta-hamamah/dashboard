import { LineChart, Line, ResponsiveContainer } from "recharts";

type lineProps = {
  title: string;
  value: number;
  percentage: number;
  data: { value: number }[];
  style: string;
};
const SimpleLine = ({ title, value, percentage, style, data }: lineProps) => {
  const fillColor = style === "increasing" ? "#04CE00" : "#FF718B";
  const formatter = new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
  });
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={300}
        height={300}
        data={data}
        margin={{ right: 20, top: 30, left: 120 }}
      >
        <text x="3%" y="25" fontSize="24" fill="#9291A5">
          {title}
        </text>
        <text x="4%" y="60" fontSize="26" fill={fillColor} fontWeight={500}>
          {value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </text>
        <text x="4%" y="100" fontSize="15" fill={fillColor} fontWeight={"bold"}>
          {style === "increasing" ? "+" : "-"}21.01%
        </text>
        <Line
          type="linear"
          dataKey={"value"}
          stroke={fillColor}
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SimpleLine;
