import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { TooltipProps } from "recharts";

const data1 = [{ value: 70, name: "Inner Progress" }, { value: 30, name: "Remaining" }];
const data2 = [{ value: 60, name: "Middle Progress" }, { value: 40, name: "Remaining" }];
const data3 = [{ value: 85, name: "Outer Progress" }, { value: 15, name: "Remaining" }];

const COLORS = ["#4A3AFF", "#F0E5FC"];

type CustomTooltipProps = TooltipProps<number, string> & {
    active?: boolean;
    payload?: Array<{
        payload: {
            value: number;
            name: string;
        };
    }>;
};

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
        if (payload[0].payload.name !== "Remaining") {
            return (
                <div className="custom-tooltip bg-white p-2 shadow-lg rounded">
                    <p className="text-sm text-gray-600">
                        {`${payload[0].payload.name}: ${payload[0].payload.value}%`}
                    </p>
                </div>
            );
        }
    }
    return null;
};

const ConcentricCircles = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <text x="5%" y="25" fontSize="24" fill="#9291A5">
                    Progress Metrics
                </text>
                <Tooltip content={<CustomTooltip />} />
                <Pie
                    data={data1}
                    cx="50%"
                    cy="50%"
                    innerRadius={0}
                    outerRadius={40}
                    fill="#8884d8"
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                >
                    {data1.map((entry, index) => (
                        <Cell key={`cell-1-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Pie
                    data={data2}
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={65}
                    fill="#8884d8"
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                >
                    {data2.map((entry, index) => (
                        <Cell key={`cell-2-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Pie
                    data={data3}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={90}
                    fill="#8884d8"
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                >
                    {data3.map((entry, index) => (
                        <Cell key={`cell-3-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
};

export default ConcentricCircles;