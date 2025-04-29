import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';

const data = [
    { subject: 'Marketing', A: 120, B: 110, fullMark: 150 },
    { subject: 'Events', A: 98, B: 130, fullMark: 150 },
    { subject: 'Sales', A: 86, B: 130, fullMark: 150 },
    { subject: 'Customer Service', A: 99, B: 100, fullMark: 150 },
    { subject: 'Operations', A: 85, B: 90, fullMark: 150 },
    { subject: 'Finance', A: 65, B: 85, fullMark: 150 },
];

const RadarChartComponent = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <text x="5%" y="25" fontSize="24" fill="#9291A5">
                    Performance Metrics
                </text>
                <PolarGrid stroke="#e0e0e0" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#615E83', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 150]} tick={{ fill: '#615E83' }} />
                <Radar name="Current" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Radar name="Target" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
            </RadarChart>
        </ResponsiveContainer>
    );
};

export default RadarChartComponent;