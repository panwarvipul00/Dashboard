import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { RevenueSection, SmallStatCard, TopSalesCard, BestDealCard, PlatformList, UserStatsRow } from "../components/DashboardWidgets";
import { RevenueWidget, SalesDynamicChart, PlatformChart, MiniSparkLine } from "../components/ChartComponents";
import { FcGoogle } from "react-icons/fc";
import { FaBehance, FaDribbble } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-[#fbfbfb]">
      <Sidebar />

      <div className="flex-1 p-8 overflow-y-auto h-screen">
        <Navbar />

        <div className="space-y-6">


          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h1 className="text-3xl font-extrabold text-[#eaeaea]">New report</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-3">
                  <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=11" alt="" />
                  <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=12" alt="" />
                  <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=33" alt="" />
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-black text-white flex items-center justify-center font-bold text-xs">C</div>
                </div>

                <button className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-400 hover:text-black hover:scale-105 transition-all text-lg font-light">+</button>
              </div>

              <div className="h-6 w-px bg-gray-200 mx-2"></div>

              <div className="flex items-center bg-transparent">
                <div className="flex items-center cursor-pointer">
                  <div className={`w-8 h-4 bg-black rounded-full relative mr-2`}>
                    <div className="absolute left-1 top-0.5 w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <span className="text-xs font-bold text-gray-500 mr-4">Timeframe</span>
                </div>
                <button className="bg-[#f0f0f0] px-4 py-2 rounded-xl text-xs font-bold text-gray-600 flex items-center gap-2 hover:bg-gray-200 transition-colors">
                  Sep 1 - Nov 30, 2023 <FiChevronRight className="rotate-90 text-gray-400" />
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-6">

            <div className="flex flex-col xl:flex-row gap-6 items-start">

              <div className="min-w-[280px] py-4">
                <RevenueSection />
              </div>


              <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4">
                <TopSalesCard />
                <BestDealCard />


                <div className="flex flex-row md:flex-row lg:flex-row gap-4 col-span-2">
                  <div className="flex-1">
                    <SmallStatCard title="Deals" value="256" change="5" meta="256" />
                  </div>
                  <div className="flex-1">
                    <SmallStatCard title="Value" value="528k" change="7.9%" isPositive isActive />
                  </div>
                  <div className="flex-1">
                    <SmallStatCard title="Win rate" value="44%" change="1.2%" isPositive />
                  </div>
                </div>
              </div>
            </div>


            <div>
              <UserStatsRow />
            </div>
          </div>



          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">


            <div className="xl:col-span-1">
              <PlatformList />
            </div>



            <div className="xl:col-span-1">
              <div className="bg-white p-6 rounded-[2rem] shadow-card h-full flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-400 font-medium">Filters</span>
                  <span className="text-gray-300 text-xs">Monthly</span>
                </div>

                <div className="flex-1 flex items-end justify-center gap-4 min-h-[180px] pb-4">
                  {/* Dribbble Bar */}
                  <div className="flex flex-col justify-end items-center gap-2 group cursor-pointer">
                    <div className="w-12 bg-pink-50 rounded-2xl h-24 relative group-hover:h-32 transition-all duration-300 flex items-end justify-center pb-2">
                      <span className="text-xs font-bold text-pink-400 hidden group-hover:block transition-all">$2.4k</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-500">
                      <FaDribbble />
                    </div>
                  </div>


                  <div className="flex flex-col justify-end items-center gap-2 group cursor-pointer">
                    <div className="relative">
                      <div className="w-14 bg-white border-2 border-dashed border-blue-200 rounded-2xl h-40 flex items-end justify-center pb-2 shadow-sm group-hover:-translate-y-1 transition-transform">
                        <span className="text-xs font-bold text-gray-400">$37k</span>
                      </div>
                      {/* Floating Badge */}
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white p-1.5 rounded-full shadow-md">
                        <FcGoogle size={20} />
                      </div>
                    </div>
                  </div>

                  {/* Behance Bar */}
                  <div className="flex flex-col justify-end items-center gap-2 group cursor-pointer">
                    <div className="w-12 bg-blue-50 rounded-2xl h-16 relative group-hover:h-24 transition-all duration-300 flex items-end justify-center pb-2">
                      <span className="text-xs font-bold text-blue-400 hidden group-hover:block transition-all">$1.2k</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <FaBehance />
                    </div>
                  </div>
                </div>

                <div className="text-center text-sm text-gray-500 font-medium mt-2">
                  Deals amount<br />by referrer category
                </div>
              </div>
            </div>

            <div className="xl:col-span-1">
              <SalesDynamicChart />
            </div>
          </div>


          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-1">
              <PlatformChart />
            </div>

            <div className="xl:col-span-2 bg-white p-6 rounded-3xl shadow-card relative overflow-hidden">

              <div className="flex justify-between mb-4">
                <div>
                  <div className="flex gap-4 items-center">
                    <h3 className="font-bold text-gray-700">Work with platforms</h3>
                  </div>
                  <div className="mt-6">
                    <h1 className="text-3xl font-bold text-gray-800">45.3% <span className="text-gray-300">$71,048</span></h1>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="bg-brand-red text-white px-3 py-1 rounded-full text-xs font-bold self-end">$156,841</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-2 mb-2 text-red-500"><span className="font-bold">Dribbble</span></div>
                  <div className="h-20 bg-white rounded-lg w-full overflow-hidden">
                    <MiniSparkLine color="red" data={1} />
                  </div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-2 mb-2 text-pink-500"><span className="font-bold">Instagram</span></div>
                  <div className="h-20 bg-white rounded-lg w-full overflow-hidden">
                    <MiniSparkLine color="pink" data={2} />
                  </div>
                  <div className="mt-2 text-sm font-bold text-gray-600">28.1% <span className="text-gray-400">$44,072</span></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
