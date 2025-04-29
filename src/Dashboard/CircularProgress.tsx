import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
    { name: 'Completed', value: 70 },
    { name: 'Remaining', value: 30 },
];

const COLORS = ['#5E5498', '#F4F2FF'];

const CircularProgress = () => {
    return (
        <div className="flex h-full flex-col">
            <h3 className="mb-2 text-sm font-medium">Overall Progress</h3>
            <div className="relative h-full w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={0}
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
                                                {`${payload[0]?.name}: ${payload[0]?.value}%`}
                                            </p>
                                        </div>
                                    );
                                }
                                return null;
                            }}
                        />
                    </PieChart>
                </ResponsiveContainer>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                    <span className="text-2xl font-bold text-[#5E5498]">70%</span>
                </div>
            </div>
        </div>
    );
};

export default CircularProgress;