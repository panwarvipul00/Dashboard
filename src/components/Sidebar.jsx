import {
  FiHome, FiGrid, FiPieChart, FiFolder, FiMessageSquare,
  FiSettings, FiLogOut, FiCommand, FiActivity, FiLayers, FiUsers,
  FiChevronDown, FiChevronRight, FiFile, FiSearch, FiBell
} from 'react-icons/fi';
import { BiGitBranch, BiLayer } from "react-icons/bi";
import { BsGrid1X2, BsStack } from "react-icons/bs";
import { useState } from 'react';

const Sidebar = () => {
  return (
    <aside className="w-80 flex h-screen sticky top-0 font-sans border-r border-gray-100 select-none bg-[#fbfbfb]">

      <div className="w-16 flex flex-col items-center py-6 border-r border-gray-100/50 bg-[#f7f7f7]/50">

        <div className="bg-black text-white p-2 rounded-xl w-10 h-10 flex items-center justify-center font-bold text-xl shadow-lg mb-8 shrink-0">
          C
        </div>


        <div className="flex flex-col gap-4 w-full px-2">
          <RailItem icon={<FiSearch />} />
          <RailItem icon={<BsStack />} isActive isRed />
          <RailItem icon={<FiFile />} />
          <RailItem icon={<FiCommand />} />
          <RailItem icon={<FiLayers />} />
        </div>

        <div className="mt-auto">
          <RailItem icon={<FiSettings />} />
        </div>
      </div>


      <div className="flex-1 flex flex-col h-full overflow-hidden">


        <div className="px-5 py-6 shrink-0">
          <div className="flex items-center gap-2 text-sm font-bold text-gray-800">
            <span>Codename.com</span>
            <FiChevronDown className="text-gray-400" />
          </div>
        </div>


        <div className="flex-1 px-3 flex flex-col gap-0.5 overflow-hidden">


          <TreeItem label="Starred" icon={<FiHome className="text-gray-400" />} isLeaf />
          <TreeItem label="Recent" icon={<FiActivity className="text-gray-400" />} isLeaf />

          <div className="my-2"></div> {/* Spacer */}

          <TreeItem label="Sales list" isLeaf />
          <TreeItem label="Goals" isLeaf />
          <TreeItem label="Dashboard" isActive isLeaf />

          <div className="my-2"></div>


          <TreeItem label="Codename" defaultOpen={true}>
            <TreeItem label="Shared with me" defaultOpen={true}>
              <TreeItem label="Cargo2go" isLeaf />
              <TreeItem label="Cloudz3r" hasNotification count={2} isLeaf />
              <TreeItem label="Idioma" isLeaf />
              <TreeItem label="Syllables" isLeaf />
              <TreeItem label="x-0b" isLeaf />
            </TreeItem>
          </TreeItem>


          <TreeItem label="Reports" defaultOpen={true}>
            <TreeItem label="Share with me" defaultOpen={true}>
              <TreeItem label="Deals by user" isLeaf />
              <TreeItem label="Deal duration" isLeaf />
            </TreeItem>
            <TreeItem label="My reports" defaultOpen={true}>
              <TreeItem label="Emails received" isLeaf />
              <TreeItem label="Deal duration" isLeaf />
              <TreeItem label="New report" isTextRed isLeaf />
              <TreeItem label="Analytics" hasHelp isLeaf />
            </TreeItem>
          </TreeItem>

        </div>


        <div className="p-4 space-y-1 shrink-0">
          <TreeItem label="Manage folders" icon={<FiFolder />} isLeaf />
        </div>
      </div>
    </aside>
  );
};

const RailItem = ({ icon, isActive, isRed }) => {
  return (
    <button className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 group ${isActive
      ? (isRed ? "bg-brand-red text-white shadow-md shadow-brand-red/30" : "bg-white text-black shadow-sm border border-gray-100")
      : "text-gray-400 hover:bg-white hover:text-black hover:shadow-sm"
      }`}>
      <span className="text-xl">{icon}</span>
    </button>
  );
}

const TreeItem = ({
  label,
  children,
  defaultOpen = false,
  icon,
  isLeaf = false,
  isActive = false,
  hasNotification,
  count,
  isTextRed,
  hasHelp
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);


  if (isLeaf) {
    return (
      <div className="relative pl-5 group/leaf">


        <a
          href="#"
          className={`flex items-center gap-3 px-3 py-1.5 rounded-lg text-[13px] transition-all duration-200 relative z-10 ${isActive
            ? "bg-transparent text-black font-semibold"
            : "text-gray-500 hover:bg-gray-100 hover:text-black"
            }`}
        >
          {icon && <span className="text-base shrink-0">{icon}</span>}

          <span className={`truncate ${isTextRed ? "text-brand-red" : ""}`}>{label}</span>

          {isActive && <div className="hidden w-1.5 h-1.5 rounded-full bg-brand-red ml-auto shadow-[0_0_8px_rgba(244,47,75,0.5)]"></div>}
          {hasNotification && (
            <span className="bg-brand-red text-white text-[10px] px-1.5 py-0.5 rounded-full shadow-md font-bold ml-auto leading-none">
              {count}
            </span>
          )}
          {hasHelp && (
            <div className="w-4 h-4 rounded-full bg-brand-red text-white flex items-center justify-center text-[10px] ml-auto shadow-md font-bold">?</div>
          )}
        </a>
      </div>
    );
  }

  // If it's a Node (parent)
  return (
    <div className="select-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-2 px-2 py-1.5 text-[13px] font-semibold text-gray-700 hover:bg-gray-50 rounded-lg transition-colors group"
      >
        {/* Toggle Icon or Spacer */}
        <div className="w-4 flex justify-center shrink-0">
          <FiChevronRight className={`text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} />
        </div>

        {icon && <span className="text-gray-500">{icon}</span>}
        <span className="truncate">{label}</span>

        {/* Add Plus icon for adding if needed, mocked for now as hinted in image */}
        <span className="ml-auto opacity-0 group-hover:opacity-100 text-gray-400 text-xs">+</span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-200 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col ml-[19px] border-l border-gray-200 pl-1 py-0.5">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
