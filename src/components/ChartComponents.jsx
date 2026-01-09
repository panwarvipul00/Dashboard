import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell
} from 'recharts';
import { FiArrowUp, FiArrowDown } from "react-icons/fi";

const revenueData = [
    { name: 'Jun 1', value: 400 },
    { name: 'Jun 10', value: 300 },
    { name: 'Jun 20', value: 550 },
    { name: 'Jul 1', value: 450 },
    { name: 'jul 10', value: 650 },
    { name: 'Jul 20', value: 600 },
    { name: 'Aug 1', value: 700 },
    { name: 'Aug 10', value: 500 },
];

const sparkData1 = [
    { name: '1', value: 10 },
    { name: '2', value: 40 },
    { name: '3', value: 30 },
    { name: '4', value: 70 },
    { name: '5', value: 40 },
    { name: '6', value: 60 },
    { name: '7', value: 50 },
];

const sparkData2 = [
    { name: '1', value: 30 },
    { name: '2', value: 50 },
    { name: '3', value: 40 },
    { name: '4', value: 70 },
    { name: '5', value: 80 },
    { name: '6', value: 80 },
    { name: '7', value: 90 },
];


export const RevenueWidget = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-gray-800">Revenue</h2>
            <div className="flex items-center gap-4 my-2">
                <span className="text-4xl font-bold text-gray-900">$528,976.82</span>
                <span className="flex items-center px-2 py-1 rounded-full bg-brand-red text-white text-xs font-bold">
                    <FiArrowDown className="mr-1" /> 7.9%
                </span>
                <span className="px-2 py-1 rounded-full bg-brand-red text-white text-xs font-bold">
                    $27,335.09
                </span>
            </div>
            <p className="text-gray-400 text-sm mb-6">vs prev: $501,641.73 Jun 1 - Aug 31, 2023</p>

            <div className="h-16 w-full flex items-end gap-1 opacity-50">
            </div>


            <div className="space-y-4 mt-4">
                <UserProgress avatar="https://i.pravatar.cc/100?img=33" value="$209,633" percent={45} color="bg-gray-800" />
                <UserProgress avatar="https://i.pravatar.cc/100?img=32" value="$156,841" percent={30} color="bg-blue-500" />
                <UserProgress avatar="https://i.pravatar.cc/100?img=11" value="$117,115" percent={22} color="bg-orange-500" />
            </div>
        </div>
    );
};

const UserProgress = ({ avatar, value, percent, color }) => (
    <div className="flex items-center gap-3">
        <img src={avatar} alt="User" className="w-8 h-8 rounded-full" />
        <span className="text-sm font-bold w-20">{value}</span>
        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className={`h-full ${color}`} style={{ width: `${percent}%` }}></div>
        </div>
        <span className="text-xs text-gray-400 w-10 text-right">{percent}%</span>
    </div>
)


export const SalesDynamicChart = () => {

    return (
        <div className="bg-white p-6 rounded-3xl shadow-card h-full flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h3 className="text-lg font-bold text-gray-800">Sales dynamic</h3>
                </div>
                <div className="flex gap-2 text-sm text-gray-400">
                    <span>W 1</span>
                    <span>W 3</span>
                    <span>W 5</span>
                </div>
            </div>

            <div className="flex-1 min-h-[150px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={revenueData}>
                        <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#F42F4B" stopOpacity={0.1} />
                                <stop offset="95%" stopColor="#F42F4B" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <Tooltip />
                        <Area type="monotone" dataKey="value" stroke="#F42F4B" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>


            <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                    <img src="https://i.pravatar.cc/100?img=59" className="w-6 h-6 rounded-full" alt="User" />
                    <span>Eren Y.</span>
                    <span className="text-black font-bold">$117,115</span>
                </div>
                <div className="flex gap-4">
                    <span className="bg-black text-white px-2 py-1 rounded-md text-xs">22</span>
                    <span>84</span>
                    <span>0.79</span>
                </div>
            </div>
        </div>
    )
}

export const PlatformChart = () => {
    return (
        <div className="bg-brand-red p-6 rounded-[2rem] shadow-card h-full text-white">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h3 className="font-bold text-white text-lg leading-tight">Platform value<br />Dribbble</h3>
                </div>
                <div className="flex bg-white/20 rounded-xl p-1 backdrop-blur-sm">
                    <button className="bg-white text-brand-red px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm">Revenue</button>
                    <button className="px-3 py-1.5 text-white/70 text-xs font-medium hover:text-white transition-colors">Leads</button>
                </div>
            </div>

            <div className="h-56 flex items-end justify-between gap-3 mb-4">
                {[40, 70, 50, 90, 60, 80].map((h, i) => (
                    <div key={i} className="w-full bg-black/10 rounded-t-2xl relative group h-full flex items-end overflow-hidden">
                        <div
                            className={`w-full rounded-t-2xl transition-all duration-500 ${i === 3 ? 'bg-white' : 'bg-white/40 group-hover:bg-white/60'}`}
                            style={{ height: `${h}%` }}
                        ></div>
                        {i === 3 && (
                            <div className="absolute top-[5%] left-1/2 -translate-x-1/2 bg-white text-brand-red text-[10px] font-bold px-2 py-1 rounded-lg shadow-lg">
                                $11k
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="flex justify-between mt-6">
                <div className="bg-white/10 p-4 rounded-2xl w-full flex items-center justify-between backdrop-blur-md">
                    <div>
                        <div className="text-xs text-pink-100 mb-1">Average monthly</div>
                        <div className="text-lg font-bold">Revenue</div>
                    </div>
                    <div className="text-2xl font-bold">$18,552</div>
                </div>
            </div>
        </div>
    )
}

export const MiniSparkLine = ({ color, data }) => {
    const dataset = data === 2 ? sparkData2 : sparkData1;
    const stroke = color === 'red' ? '#F42F4B' : color === 'pink' ? '#E4405F' : '#48BB78';
    const fill = color === 'red' ? '#F42F4B' : color === 'pink' ? '#E4405F' : '#48BB78';

    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={dataset}>
                <defs>
                    <linearGradient id={`gradient-${color}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={fill} stopOpacity={0.2} />
                        <stop offset="100%" stopColor={fill} stopOpacity={0} />
                    </linearGradient>
                </defs>
                <Area
                    type="monotone"
                    dataKey="value"
                    stroke={stroke}
                    strokeWidth={2}
                    fill={`url(#gradient-${color})`}
                    fillOpacity={1}
                />
            </AreaChart>
        </ResponsiveContainer>
    )
}
