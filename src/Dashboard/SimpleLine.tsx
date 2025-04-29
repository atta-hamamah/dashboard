import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";
import { TooltipProps } from "recharts";

type lineProps = {
  title: string;
  value: number;
  percentage: number;
  data: { value: number }[];
  style: string;
};

type CustomTooltipProps = TooltipProps<number, string> & {
  active?: boolean;
  payload?: Array<{
    value: number;
  }>;
};

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-white p-2 shadow-lg rounded">
        <p className="text-sm text-gray-600">
          {`Value: ${payload[0].value.toLocaleString()}`}
        </p>
      </div>
    );
  }
  return null;
};

const SimpleLine = ({ title, value, percentage, style, data }: lineProps) => {
  const fillColor = style === "increasing" ? "#04CE00" : "#FF718B";

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
          {style === "increasing" ? "+" : "-"}{percentage}%
        </text>
        <Tooltip content={<CustomTooltip />} />
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
