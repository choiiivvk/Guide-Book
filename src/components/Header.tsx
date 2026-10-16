import React, { useState, useEffect } from 'react';
import { BookOpen, Sparkles, User, Edit2 } from 'lucide-react';

interface HeaderProps {
  completedCount: number;
  totalCount: number;
}

export const Header: React.FC<HeaderProps> = ({ completedCount, totalCount }) => {
  const [employeeName, setEmployeeName] = useState<string>('이대로');
  const [joiningDate, setJoiningDate] = useState<string>('2027-12-01');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [tempName, setTempName] = useState<string>('이대로');

  useEffect(() => {
    // Parse URL hash and search params
    const hash = window.location.hash;
    const search = window.location.search;
    const combined = (hash ? hash.replace('#', '&') : '') + (search ? '&' + search.replace('?', '') : '');
    const urlParams = new URLSearchParams(combined);

    const nameParam = urlParams.get('name') || localStorage.getItem('onboarding_employee_name') || '이대로';
    const dateParam = urlParams.get('date') || '2027-12-01';

    setEmployeeName(nameParam);
    setJoiningDate(dateParam);
    setTempName(nameParam);
    localStorage.setItem('onboarding_employee_name', nameParam);
    localStorage.setItem('onboarding_joining_date', dateParam);
  }, []);

  const handleSaveName = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempName.trim()) {
      setEmployeeName(tempName.trim());
      localStorage.setItem('onboarding_employee_name', tempName.trim());
    }
    setIsEditing(false);
  };

  // Calculate D-Day
  const calculateDDay = (dateStr: string) => {
    try {
      const today = new Date();
      const target = new Date(dateStr);
      const diffTime = target.setHours(0,0,0,0) - new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();
      const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
      if (diffDays === 0) return 'D-Day';
      if (diffDays > 0) return `D-${diffDays}`;
      return `D+${Math.abs(diffDays)}`;
    } catch {
      return 'D-Day';
    }
  };

  const dDayText = calculateDDay(joiningDate);
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <header className="bg-gradient-to-r from-[#800000] via-[#A00000] to-slate-950 text-white border-b border-[#600000] px-6 py-8 shadow-md">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        
        {/* Title & Badge */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shadow-inner text-rose-300 backdrop-blur">
            <BookOpen className="w-7 h-7" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C00000] text-white text-xs font-medium mb-2 border border-red-500/60 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>LX MMA Preboarding Guidebook</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-2">
              LX MMA 온보딩 가이드북
            </h1>
            <p className="text-sm text-rose-100/90 mt-1 leading-relaxed">
              성공적인 온보딩을 위한 가이드북을 준비했습니다.<br />
              LX MMA 人으로 알아두면 좋을 정보들을 확인해 보세요.
            </p>
          </div>
        </div>

        {/* Personalized Welcome & Progress Widget */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto">
          
          {/* Employee Name & Date Card */}
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-4 shadow-sm flex items-center justify-between gap-6 text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C00000]/80 flex items-center justify-center text-white border border-red-400">
                <User className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-rose-200 font-medium">입사 예정일 ({joiningDate})</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#C00000] text-white shadow-xs">
                    {dDayText}
                  </span>
                </div>
                {isEditing ? (
                  <form onSubmit={handleSaveName} className="flex items-center gap-1 mt-1">
                    <input
                      type="text"
                      value={tempName}
                      onChange={(e) => setTempName(e.target.value)}
                      className="text-sm font-bold text-slate-900 bg-white px-2 py-0.5 rounded border border-red-300 w-28 focus:outline-none"
                      autoFocus
                    />
                    <button type="submit" className="text-xs bg-[#C00000] text-white px-2 py-1 rounded hover:bg-red-700">
                      저장
                    </button>
                  </form>
                ) : (
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-base font-bold text-white">{employeeName} 님</span>
                    <button
                      onClick={() => { setTempName(employeeName); setIsEditing(true); }}
                      className="text-rose-200 hover:text-white transition-colors"
                      title="이름 수정"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Quick Progress Indicator */}
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-4 shadow-sm flex items-center gap-4 min-w-[200px]">
            <div className="w-10 h-10 rounded-full bg-[#C00000] border border-red-400 flex items-center justify-center text-white font-bold text-sm">
              {progressPercent}%
            </div>
            <div className="flex-1">
              <div className="flex justify-between text-xs font-semibold text-rose-200 mb-1">
                <span>온보딩 체크리스트</span>
                <span>{completedCount}/{totalCount} 완료</span>
              </div>
              <div className="w-full bg-black/40 rounded-full h-2 overflow-hidden border border-red-900/60">
                <div
                  className="bg-gradient-to-r from-red-500 to-rose-400 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </header>
  );
};
