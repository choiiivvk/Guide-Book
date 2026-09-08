import React from 'react';
import { TabType } from '../types';
import { Building2, MapPin, CheckSquare, HelpCircle, Database } from 'lucide-react';

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
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100/70',
      activeColor: 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
    },
    {
      id: 'office' as TabType,
      label: '서울사무소 안내',
      sublabel: '위치, 교통 및 층별 편의시설',
      icon: MapPin,
      color: 'bg-sky-50 text-sky-700 border-sky-200 hover:bg-sky-100/70',
      activeColor: 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
    },
    {
      id: 'todo' as TabType,
      label: '온보딩 체크리스트',
      sublabel: `필수 To-do (${completedCount}/${totalCount})`,
      icon: CheckSquare,
      color: 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100/70',
      activeColor: 'bg-amber-600 text-white shadow-md shadow-amber-600/20'
    },
    {
      id: 'csv' as TabType,
      label: 'CSV 데이터 관리',
      sublabel: 'Supabase 누적 저장소',
      icon: Database,
      color: 'bg-teal-50 text-teal-700 border-teal-200 hover:bg-teal-100/70',
      activeColor: 'bg-teal-600 text-white shadow-md shadow-teal-600/20'
    },
    {
      id: 'contacts' as TabType,
      label: '사내 FAQ 및 연락처',
      sublabel: '자주 묻는 질문 및 담당자 안내',
      icon: HelpCircle,
      color: 'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100/70',
      activeColor: 'bg-purple-600 text-white shadow-md shadow-purple-600/20'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-8">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center p-4 rounded-2xl border transition-all duration-200 text-left group ${
              isActive ? tab.activeColor : `bg-white/80 hover:bg-white border-slate-200 shadow-sm text-slate-700`
            }`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 transition-transform group-hover:scale-105 ${
              isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
            }`}>
              <Icon className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-bold text-base truncate">{tab.label}</div>
              <div className={`text-xs truncate mt-0.5 ${isActive ? 'text-white/80' : 'text-slate-500'}`}>
                {tab.sublabel}
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
};
