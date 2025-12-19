
import React from 'react';
import { ViewType } from '../types';

interface SidebarProps {
  currentView: ViewType;
  setView: (view: ViewType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, setView }) => {
  const menuItems = [
    { type: ViewType.DASHBOARD, label: '学习大本营', icon: '🏠' },
    { type: ViewType.ASSESSMENT, label: '脑力测评', icon: '🧠' },
    { type: ViewType.TRAINING, label: '英语特训', icon: '🇬🇧' },
    { type: ViewType.REPORT, label: '成长报告', icon: '📊' },
    { type: ViewType.PARENT, label: '家长中心', icon: '👪' },
  ];

  return (
    <nav className="w-24 md:w-64 bg-white border-r border-slate-200 flex flex-col py-6 shrink-0">
      <div className="px-4 mb-8 hidden md:block">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">学习空间</p>
      </div>
      <div className="flex-1 space-y-1 px-3">
        {menuItems.map((item) => (
          <button
            key={item.type}
            onClick={() => setView(item.type)}
            className={`w-full flex flex-col md:flex-row items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              currentView === item.type
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-100'
                : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="hidden md:block font-medium">{item.label}</span>
          </button>
        ))}
      </div>
      <div className="px-4 mt-auto">
        <div className="p-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl text-white hidden md:block">
          <p className="text-xs opacity-80 mb-1">当前脑力值</p>
          <p className="text-2xl font-bold">685</p>
          <div className="mt-2 h-1 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-white w-2/3"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
