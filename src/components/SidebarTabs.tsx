import React from 'react';
import { TabType } from '../types';
import { Building2, BookOpen, CheckSquare, HelpCircle } from 'lucide-react';

interface SidebarTabsProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  completedCount: number;
  totalCount: number;
}

export const SidebarTabs: React.FC<SidebarTabsProps> = ({
  activeTab,
  setActiveTab,
  completedCount,
  totalCount
}) => {
  const tabs = [
    {
      id: 'company' as TabType,
      label: '회사 안내',
      sublabel: '미션, 핵심가치 및 복리후생',
      icon: Building2,
      activeColor: 'bg-[#C00000] text-white shadow-md shadow-[#C00000]/25'
    },
    {
      id: 'todo' as TabType,
      label: '온보딩 체크리스트',
      sublabel: `필수 To-do (${completedCount}/${totalCount})`,
      icon: CheckSquare,
      activeColor: 'bg-[#C00000] text-white shadow-md shadow-[#C00000]/25'
    },
    {
      id: 'manner' as TabType,
      label: '기본 매너 에티켓',
      sublabel: '출근 첫날 및 비즈니스 에티켓',
      icon: BookOpen,
      activeColor: 'bg-[#C00000] text-white shadow-md shadow-[#C00000]/25'
    },
    {
      id: 'contacts' as TabType,
      label: '사내 FAQ 및 연락처',
      sublabel: '자주 묻는 질문 및 담당자 안내',
      icon: HelpCircle,
      activeColor: 'bg-[#C00000] text-white shadow-md shadow-[#C00000]/25'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center p-4 rounded-2xl border transition-all duration-200 text-left group ${
              isActive ? tab.activeColor : `bg-white/90 hover:bg-white border-slate-200 shadow-sm text-slate-700`
            }`}
          >
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center mr-3 transition-transform group-hover:scale-105 flex-shrink-0 ${
              isActive ? 'bg-white/20 text-white' : 'bg-red-50 text-[#C00000]'
            }`}>
              <Icon className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-bold text-sm truncate">{tab.label}</div>
              <div className={`text-xs truncate ${isActive ? 'text-red-100' : 'text-slate-500'}`}>
                {tab.sublabel}
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
};
