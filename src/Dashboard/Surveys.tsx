import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
  type LabelProps,
} from "recharts";
type customLabelProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  src: string | undefined;
};
const CustomLabel = ({ x, y, width, height, src }: customLabelProps) => {
  const imageWidth = width / 2;
  const imageX = x - imageWidth / 2;
  return (
    <image
      x={imageX}
      y={y - height / 2 + 15}
      width={width / 2}
      height={height / 2}
      href={`./${src}`}
    />
  );
};
type SurveyData = {
  name: string;
  value: number;
  src: string;
};
const data: SurveyData[] = [
  { name: "A", value: 50, src: "phantom.jpg" },
  { name: "B", value: 70, src: "Logo.png" },
  { name: "C", value: 80, src: "Logo.png" },
  { name: "D", value: 120, src: "Logo.png" },
  { name: "E", value: 70, src: "Logo.png" },
];


const Surveys = () => {
  return (
    <ResponsiveContainer width="100%">
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
          tick={(props: { x: number, y: number, index: number, width: number, height: number }) => {
            return (
              <CustomLabel
                key={props.index}
                x={props.x}
                y={props.y}
                width={props.width}
                height={props.height}
                src={data[props.index]?.src}
              />
            )
          }}
        />
        <YAxis tickLine={false} axisLine={false} />
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
