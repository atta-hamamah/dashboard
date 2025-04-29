import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, TooltipProps } from 'recharts';

const data = [
    { month: 'Jan', visitors: 4000, engagement: 2400, conversion: 1800 },
    { month: 'Feb', visitors: 3000, engagement: 1398, conversion: 1200 },
    { month: 'Mar', visitors: 2000, engagement: 9800, conversion: 2800 },
    { month: 'Apr', visitors: 2780, engagement: 3908, conversion: 2000 },
    { month: 'May', visitors: 1890, engagement: 4800, conversion: 2181 },
    { month: 'Jun', visitors: 2390, engagement: 3800, conversion: 2500 },
];

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip bg-white p-2 shadow-lg rounded">
                <p className="text-sm font-bold text-gray-600">{label}</p>
                {payload.map((entry, index) => (
                    <p key={index} className="text-sm text-gray-600" style={{ color: entry.color }}>
                        {`${entry.name}: ${entry.value?.toLocaleString() ?? 0}`}
                    </p>
                ))}
            </div>
        );
    }
    return null;
};

const WebMetrics = () => {
    return (
        <div className="h-full w-full">
            <text x="5%" y="25" className="text-2xl text-gray-600">Website Performance</text>
            <ResponsiveContainer width="100%" height="90%">
                <ComposedChart
                    data={data}
                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="month" scale="band" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Area type="monotone" dataKey="visitors" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="engagement" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="conversion" stroke="#ff7300" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};

export default WebMetrics;