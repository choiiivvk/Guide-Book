import React, { useState } from 'react';
import { BookOpen, Sparkles, User, Edit2, CheckCircle2 } from 'lucide-react';

interface HeaderProps {
  completedCount: number;
  totalCount: number;
}

export const Header: React.FC<HeaderProps> = ({ completedCount, totalCount }) => {
  const [employeeName, setEmployeeName] = useState<string>(() => {
    return localStorage.getItem('onboarding_employee_name') || '신규 입사자';
  });
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [tempName, setTempName] = useState<string>(employeeName);

  const handleSaveName = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempName.trim()) {
      setEmployeeName(tempName.trim());
      localStorage.setItem('onboarding_employee_name', tempName.trim());
    }
    setIsEditing(false);
  };

  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <header className="bg-gradient-to-r from-emerald-50 via-teal-50 to-sky-50 border-b border-emerald-100/80 px-6 py-8 shadow-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        
        {/* Title & Badge */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-200/60 border border-emerald-300 flex items-center justify-center shadow-inner text-emerald-700">
            <BookOpen className="w-7 h-7" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-medium mb-2 border border-emerald-200">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Inspire Onboarding Manual 2026</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight flex items-center gap-2">
              신규입사자 가이드북
            </h1>
            <p className="text-sm text-slate-600 mt-1">
              인스파이어의 새로운 여정을 시작하시는 동료분을 진심으로 환영합니다.
            </p>
          </div>
        </div>

        {/* Personalized Welcome & Progress Widget */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto">
          
          {/* Employee Name Card */}
          <div className="bg-white/90 backdrop-blur border border-emerald-100 rounded-2xl p-4 shadow-sm flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-teal-100/70 flex items-center justify-center text-teal-700">
                <User className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-500 block font-medium">웰컴 온보디</span>
                {isEditing ? (
                  <form onSubmit={handleSaveName} className="flex items-center gap-1 mt-0.5">
                    <input
                      type="text"
                      value={tempName}
                      onChange={(e) => setTempName(e.target.value)}
                      className="text-sm font-bold text-slate-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-300 w-28 focus:outline-none"
                      autoFocus
                    />
                    <button type="submit" className="text-xs bg-emerald-600 text-white px-2 py-1 rounded hover:bg-emerald-700">
                      저장
                    </button>
                  </form>
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-slate-800">{employeeName} 님</span>
                    <button
                      onClick={() => { setTempName(employeeName); setIsEditing(true); }}
                      className="text-slate-400 hover:text-emerald-600 transition-colors"
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
          <div className="bg-white/90 backdrop-blur border border-teal-100 rounded-2xl p-4 shadow-sm flex items-center gap-4 min-w-[200px]">
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm">
              {progressPercent}%
            </div>
            <div className="flex-1">
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                <span>온보딩 체크리스트</span>
                <span>{completedCount}/{totalCount} 완료</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-emerald-500 h-2 rounded-full transition-all duration-500"
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
