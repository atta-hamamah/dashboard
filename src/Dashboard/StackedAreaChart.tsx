import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

const data = [
    { month: 'Jan', mobile: 4000, desktop: 2400, tablet: 1800 },
    { month: 'Feb', mobile: 3000, desktop: 1398, tablet: 2210 },
    { month: 'Mar', mobile: 2000, desktop: 9800, tablet: 2290 },
    { month: 'Apr', mobile: 2780, desktop: 3908, tablet: 2000 },
    { month: 'May', mobile: 1890, desktop: 4800, tablet: 2181 },
    { month: 'Jun', mobile: 2390, desktop: 3800, tablet: 2500 },
];

const StackedAreaChart = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart
                data={data}
                margin={{ top: 40, right: 30, left: 0, bottom: 0 }}
            >
                <text x="5%" y="25" fontSize="24" fill="#9291A5">
                    Platform Usage
                </text>
                <defs>
                    <linearGradient id="colorMobile" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorDesktop" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorTablet" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ffc658" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#ffc658" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#615E83' }}
                />
                <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#615E83' }}
                    tickFormatter={(value) => new Intl.NumberFormat('en-US', {
                        notation: 'compact',
                        compactDisplay: 'short',
                    }).format(value)}
                />
                <Tooltip />
                <Area
                    type="monotone"
                    dataKey="mobile"
                    stackId="1"
                    stroke="#8884d8"
                    fillOpacity={1}
                    fill="url(#colorMobile)"
                />
                <Area
                    type="monotone"
                    dataKey="desktop"
                    stackId="1"
                    stroke="#82ca9d"
                    fillOpacity={1}
                    fill="url(#colorDesktop)"
                />
                <Area
                    type="monotone"
                    dataKey="tablet"
                    stackId="1"
                    stroke="#ffc658"
                    fillOpacity={1}
                    fill="url(#colorTablet)"
                />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default StackedAreaChart;