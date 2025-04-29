import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
  type LabelProps,
  Tooltip,
  TooltipProps,
} from "recharts";

type SurveyData = {
  name: string;
  value: number;
  icon: string;
};

interface CustomLabelProps extends LabelProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  value?: number;
  index?: number;
  payload?: SurveyData;
}

const data: SurveyData[] = [
  { name: "Movie Night", value: 50, icon: "🎬" },
  { name: "Concert", value: 70, icon: "🎵" },
  { name: "Art Show", value: 80, icon: "🎨" },
  { name: "Theater", value: 120, icon: "🎭" },
  { name: "Dance", value: 70, icon: "💃" },
];

const CustomLabel = ({ x, y, width, height, payload }: CustomLabelProps) => {
  if (!x || !y || !width || !height || !payload) return null;

  return (
    <text
      x={x + width / 2}
      y={y - height / 2 + 15}
      textAnchor="middle"
      dominantBaseline="middle"
      fontSize="20"
    >
      {payload.icon}
    </text>
  );
};

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    const data = payload[0];
    return (
      <div className="custom-tooltip bg-white p-2 shadow-lg rounded">
        <p className="text-sm font-bold text-gray-600">{label}</p>
        <p className="text-sm text-gray-600">
          {`Responses: ${data.value}`}
        </p>
      </div>
    );
  }
  return null;
};

const Surveys = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={600}
        height={300}
        data={data}
        margin={{ right: 0, top: 40, left: -20 }}
      >
        <CartesianGrid strokeDasharray="3 8" vertical={false} />
        <text x="3%" y="25" fontSize="24" fill="#9291A5">
          Surveys Per Event
        </text>
        <XAxis
          dataKey="name"
          tickLine={false}
          axisLine={false}
          tick={(props) => (
            <CustomLabel {...props} />
          )}
        />
        <YAxis tickLine={false} axisLine={false} />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="value" fill="#C6D2FD" barSize={5}>
          <LabelList
            dataKey="value"
            position="top"
            content={(props: LabelProps) => {
              const { x, y, width } = props;
              return (
                <circle
                  cx={(x as number) + (width as number) / 2}
                  cy={y as number - 8}
                  r={6}
                  fill="#4A3AFF"
                  stroke="#FFFFFF"
                  strokeWidth={2}
                />
              );
            }}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Surveys;
