import { Treemap, ResponsiveContainer, Tooltip } from 'recharts';

interface TreemapData {
    name: string;
    children?: Array<{
        name: string;
        size: number;
        color: string;
    }>;
    size?: number;
    color?: string;
}

interface CustomizedContentProps {
    depth: number;
    x: number;
    y: number;
    width: number;
    height: number;
    name: string;
    color: string;
}

const data: TreemapData[] = [
    {
        name: 'Events',
        children: [
            { name: 'Musical Shows', size: 5000, color: '#8884d8' },
            { name: 'Theater', size: 3000, color: '#83a6ed' },
            { name: 'Art Exhibitions', size: 2000, color: '#8dd1e1' },
            { name: 'Concerts', size: 4500, color: '#82ca9d' },
            { name: 'Dance Shows', size: 1500, color: '#a4de6c' },
            { name: 'Comedy Shows', size: 2300, color: '#d0ed57' },
        ],
    },
];

const CustomizedContent = ({ depth, x, y, width, height, name, color }: CustomizedContentProps) => {
    return (
        <g>
            <rect
                x={x}
                y={y}
                width={width}
                height={height}
                style={{
                    fill: color,
                    stroke: '#fff',
                    strokeWidth: 2 / (depth + 1e-10),
                    strokeOpacity: 1 / (depth + 1e-10),
                }}
            />
            {depth === 1 && (
                <text
                    x={x + width / 2}
                    y={y + height / 2 + 7}
                    textAnchor="middle"
                    fill="#fff"
                    fontSize={14}
                >
                    {name}
                </text>
            )}
        </g>
    );
};

const RevenueTreemap = () => {
    return (
        <div className="h-full w-full">
            <text x="5%" y="25" className="text-2xl text-gray-600">Revenue by Category</text>
            <ResponsiveContainer width="100%" height="90%">
                <Treemap
                    data={data}
                    dataKey="size"
                    aspectRatio={4 / 3}
                    stroke="#fff"
                    fill="#8884d8"
                    content={<CustomizedContent depth={0} x={0} y={0} width={0} height={0} name="" color="" />}
                >
                    <Tooltip />
                </Treemap>
            </ResponsiveContainer>
        </div>
    );
};

export default RevenueTreemap;