import { FiMoreHorizontal, FiArrowUp, FiArrowDown, FiChevronRight, FiChevronDown, FiStar } from "react-icons/fi";
import { MiniSparkLine } from "./ChartComponents";


export const RevenueSection = () => {
    return (
        <div className="flex flex-col">
            <h2 className="text-xl font-bold text-gray-800 mb-1">Revenue</h2>
            <div className="flex items-center gap-3">
                <span className="text-5xl font-extrabold text-[#1a1a1a] tracking-tight">$528,976<span className="text-gray-300">.82</span></span>
                <div className="flex items-center gap-2">
                    <span className="bg-brand-red text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                        <FiArrowUp className="mr-0.5" /> 7.9%
                    </span>
                    <span className="bg-brand-red text-white text-xs font-bold px-2 py-1 rounded-full">
                        $27,335.00
                    </span>
                </div>
            </div>
            <div className="mt-2 text-xs font-bold text-gray-400 flex items-center gap-1">
                vs prev. $501,641.73 <span className="text-gray-300">Jun 1 - Aug 31, 2023</span> <FiChevronDown />
            </div>
        </div>
    );
};



export const SmallStatCard = ({ title, value, change, isPositive, meta, isActive }) => {
    return (
        <div className={`p-5 rounded-[1.5rem] flex flex-col justify-between h-full min-h-[140px] transition-all duration-200 ${isActive
            ? "bg-white shadow-card border border-brand-red ring-1 ring-brand-red/10"
            : "bg-white shadow-card hover:shadow-md"
            }`}>
            <div className="flex justify-between items-start">
                <h3 className={`text-sm font-bold ${isActive ? 'text-brand-red' : 'text-gray-500'}`}>{title}</h3>
                {meta && <span className="bg-gray-100 px-2 py-0.5 rounded-full text-[10px] font-bold text-gray-400">{meta}</span>}
            </div>

            <div className="mt-2">
                <div className={`text-3xl font-extrabold tracking-tight ${isActive ? 'text-brand-red' : 'text-gray-800'}`}>{value}</div>
            </div>

            <div className="flex items-center gap-1 mt-auto text-xs font-bold">
                <div className={`flex items-center ${isPositive ? 'text-green-500' : 'text-gray-400'}`}>
                    {isPositive ? <FiArrowUp className="mr-0.5" /> : null}
                    {change}
                </div>
            </div>

            {isActive && (
                <div className="absolute inset-x-0 bottom-0 h-1 bg-brand-red rounded-full mx-6 mb-1 opacity-20"></div>
            )}
        </div>
    );
};

export const TopSalesCard = () => {
    return (
        <div className="bg-white p-5 rounded-[1.5rem] shadow-card hover:shadow-card-hover transition-shadow duration-300 h-full flex flex-row items-center justify-between min-w-[220px]">
            <div className="flex flex-col justify-between h-full">
                <h3 className="text-gray-400 text-xs font-bold">Top sales</h3>
                <div className="text-3xl font-extrabold text-gray-800 my-1">72</div>
                <div className="flex items-center gap-2">
                    <img className="w-6 h-6 rounded-full" src="https://i.pravatar.cc/100?img=12" alt="Mikasa" />
                    <span className="font-bold text-gray-700 text-sm">Mikasa</span>
                </div>
            </div>

            <div className="flex items-end h-full">
                <button className="bg-gray-50 p-2 rounded-full hover:bg-black hover:text-white transition-all duration-300 text-gray-400">
                    <FiChevronRight size={16} />
                </button>
            </div>
        </div>
    );
};

export const BestDealCard = () => {
    return (
        <div className="bg-[#111] p-5 rounded-[1.5rem] shadow-card text-white h-full relative overflow-hidden flex flex-row items-center justify-between min-w-[240px] group">
            <div className="flex flex-col justify-between h-full z-10">
                <div className="flex items-center gap-1">
                    <h3 className="text-gray-400 text-xs font-bold">Best deal</h3>
                    <FiStar className="text-yellow-500 fill-current text-[10px]" />
                </div>

                <div className="text-2xl font-extrabold tracking-tight my-1">$42,300</div>
                <div className="text-xs text-gray-400 font-bold">Rolf Inc.</div>
            </div>

            <div className="flex items-end h-full z-10">
                <button className="bg-white p-2 rounded-full text-black hover:scale-110 transition-all duration-300">
                    <FiChevronRight size={16} />
                </button>
            </div>

            {/* Ambient Glow */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-16 h-16 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
        </div>
    );
};



export const UserStatsRow = () => {
    const users = [
        { name: 'Armin', img: 'https://i.pravatar.cc/100?img=11', amount: '$209,633', pct: '39.63%', isFirst: true },
        { name: 'Mikasa', img: 'https://i.pravatar.cc/100?img=12', amount: '$156,841', pct: '29.65%' },
        { name: 'Eren', img: 'https://i.pravatar.cc/100?img=33', amount: '$117,115', pct: '22.14%' },
        { name: 'Nobody', img: null, label: 'C', amount: '$45,336', pct: '8.58%' },
    ];

    return (
        <div className="flex items-center gap-4 overflow-x-auto py-2 custom-scrollbar no-scrollbar">
            {users.map((u, i) => (
                <div key={i} className="bg-white rounded-full px-2 py-2 pr-6 shadow-sm flex items-center gap-3 shrink-0 border border-gray-50 min-w-[180px]">
                    {u.img ? (
                        <img src={u.img} alt={u.name} className="w-8 h-8 rounded-full border border-gray-100" />
                    ) : (
                        <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs">
                            {u.label}
                        </div>
                    )}

                    <div className="flex items-center justify-between flex-1 gap-4">
                        <span className="font-bold text-sm text-gray-800">{u.amount}</span>
                        <span className="text-xs font-bold text-gray-300">{u.pct}</span>
                    </div>
                </div>
            ))}
            <button className="bg-black text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-gray-800 transition-colors ml-auto shadow-lg shadow-black/20">
                Details
            </button>
        </div>
    );
};

export const PlatformList = () => {

    const platforms = [
        { name: 'Dribbble', value: '$227,459', change: '43%', color: 'text-pink-500', icon: '🏀' },
        { name: 'Instagram', value: '$142,823', change: '27%', color: 'text-red-500', icon: '📷' },
        { name: 'Behance', value: '$89,935', change: '11%', color: 'text-blue-500', icon: 'Bt' },
    ];

    return (
        <div className="bg-white p-6 rounded-[2rem] shadow-card h-full">
            <div className="flex justify-between items-center mb-8">
                <div className="p-3 bg-gray-50 rounded-xl hover:bg-gray-100 cursor-pointer transition-colors">
                    <FiMoreHorizontal className="text-gray-600" />
                </div>
                <button className="flex items-center gap-2 text-gray-500 text-sm bg-gray-50 px-4 py-2 rounded-xl font-medium hover:bg-gray-100 transition-colors">
                    Filters <FiChevronRight className="rotate-90" />
                </button>
            </div>

            <div className="space-y-4">
                {platforms.map(p => (
                    <div key={p.name} className="flex items-center justify-between group cursor-pointer hover:bg-gray-50 p-3 rounded-2xl transition-all duration-200">
                        <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center font-bold text-lg ${p.color} shadow-sm group-hover:bg-white group-hover:shadow-md transition-all`}>
                                {p.icon}
                            </div>
                            <span className="font-bold text-gray-700">{p.name}</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="font-bold text-gray-900">{p.value}</span>
                            <span className="text-xs bg-gray-100 px-2.5 py-1 rounded-lg text-gray-600 font-bold group-hover:bg-white transition-colors">{p.change}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
