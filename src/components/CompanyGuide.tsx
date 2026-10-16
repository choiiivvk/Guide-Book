import React from 'react';
import { CORE_VALUES, WAY_OF_WORKS, BENEFITS } from '../data/guideData';
import { Compass, Zap, Heart, ShieldCheck, Award, Coffee, BookOpen } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Compass,
  Zap,
  Heart,
  ShieldCheck
};

export const CompanyGuide: React.FC = () => {
  return (
    <div className="space-y-10 animate-fadeIn">
      
      {/* Intro Banner Card */}
      <div className="bg-gradient-to-br from-red-50/90 via-rose-50/50 to-white border border-red-100 rounded-3xl p-8 shadow-sm relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-6 -translate-y-6 w-64 h-64 bg-red-100/40 rounded-full blur-2xl pointer-events-none"></div>
        <div className="max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-semibold mb-3">
            <Award className="w-3.5 h-3.5 text-red-600" />
            <span>LX MMA Overview & Culture</span>
          </div>
          <h2 className="text-sm sm:text-base font-bold text-slate-800 tracking-tight mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
            차별화된 소재와 솔루션으로 고객과 함께 지속 성장하는 시장선도 기업, LX MMA입니다
          </h2>
          <p className="text-slate-600 text-xs font-medium tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">
            우리는 Specialty 확대를 통해 업계 최고 수익성을 달성해가며, Global 시장에서 Market Presence를 강화해 가고 있습니다.
          </p>
        </div>
      </div>

      {/* 01 Vision Section */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center text-red-700 font-bold">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-800">비전 (Vision)</h3>
          </div>
          <p className="text-sm text-slate-600 font-medium">
            제품과 기술을 넘어 고객이 꿈꾸는 최고의 솔루션을 제공하기 위해 노력하고 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {CORE_VALUES.map((val, idx) => {
            const IconComponent = iconMap[val.iconName] || ShieldCheck;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors duration-200">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold text-red-700 bg-red-50 px-2.5 py-1 rounded-full border border-red-100">
                      Vision 0{idx + 1}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 mb-2">{val.title}</h4>
                  {val.subtitle && <p className="text-xs font-medium text-red-800 mb-2">{val.subtitle}</p>}
                  <p className="text-sm text-slate-600 leading-relaxed">{val.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 02 Way of Work Section */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center text-red-700 font-bold">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-800">일하는 방식 (Way of Work)</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {WAY_OF_WORKS.map((wow, idx) => {
            const IconComponent = iconMap[wow.iconName] || Zap;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors duration-200">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold text-red-700 bg-red-50 px-2.5 py-1 rounded-full border border-red-100">
                      Way 0{idx + 1}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 mb-1">{wow.title}</h4>
                  {wow.subtitle && <p className="text-xs font-bold text-red-700 mb-3">{wow.subtitle}</p>}
                  <p className="text-sm text-slate-600 leading-relaxed">{wow.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 03 Welfare Section */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-rose-100 flex items-center justify-center text-rose-700 font-bold">
              03
            </div>
            <h3 className="text-xl font-bold text-slate-800">복리후생 (Welfare)</h3>
          </div>
          <p className="text-sm text-slate-600 font-medium max-w-xl text-right">
            구성원 복지 증진 및 워라밸 확대를 통해 의욕적으로 업무에 집중할 수 있도록<br />
            주거, 학자금, 생활안정, 의료, 자기계발, 선택적 복지 등 다양한 제도를 운영하고 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {BENEFITS.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white/90 border border-slate-200 rounded-2xl p-5 shadow-sm hover:border-red-200 transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-red-700 bg-red-50 px-2.5 py-1 rounded-md border border-red-100">
                  {benefit.category}
                </span>
                <Coffee className="w-4 h-4 text-slate-400" />
              </div>
              <h4 className="font-bold text-slate-800 text-base mb-2">{benefit.title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Handbook Note Callout */}
      <div className="bg-red-50/60 border border-red-200/80 rounded-2xl p-6 flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center flex-shrink-0 mt-0.5">
          <BookOpen className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-bold text-red-900 text-base mb-1">LX MMA 임직원 일동</h4>
          <p className="text-sm text-red-800/90 leading-relaxed">
            LX MMA의 새로운 여정에 향하게 된 여러분을 진심으로 환영합니다. 여러분의 도전과 열정이 우리의 내일을 더 단단하게 만들 것이라 믿습니다.<br />
            첫 걸음을 응원하며, 우리 함께 성장해 나갑시다.
          </p>
        </div>
      </div>

    </div>
  );
};
