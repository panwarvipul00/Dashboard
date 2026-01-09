import { FiSearch, FiMenu, FiBell, FiPlus } from "react-icons/fi";
import { BiChevronDown } from "react-icons/bi";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between py-2 mb-6">

      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          Codename.com <BiChevronDown className="text-gray-400" />
        </h1>
      </div>


      <div className="flex-1 max-w-lg mx-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2.5 border-none rounded-full leading-5 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0 shadow-sm"
            placeholder='Try searching "insights"'
          />
        </div>
      </div>


      <div className="flex items-center gap-3">

        <button className="p-2 text-gray-500 hover:text-black">
          <FiMenu size={20} />
        </button>


        <div className="flex -space-x-2">
          <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=1" alt="User" />
          <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=2" alt="User" />
        </div>


        <button className="bg-brand-red text-white p-2 rounded-full hover:bg-red-600 transition-colors shadow-md">
          <FiPlus size={20} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
