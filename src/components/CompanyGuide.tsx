import React from 'react';
import { CORE_VALUES, BENEFITS } from '../data/guideData';
import { Compass, Zap, Heart, Sprout, ShieldCheck, Award, Coffee, BookOpen } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Compass,
  Zap,
  Heart,
  Sprout
};

export const CompanyGuide: React.FC = () => {
  return (
    <div className="space-y-10 animate-fadeIn">
      
      {/* Intro Banner Card */}
      <div className="bg-gradient-to-br from-emerald-50/90 via-teal-50/50 to-white border border-emerald-100 rounded-3xl p-8 shadow-sm relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-6 -translate-y-6 w-64 h-64 bg-emerald-100/40 rounded-full blur-2xl pointer-events-none"></div>
        <div className="max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            <span>Inspire Overview & Culture</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight mb-4">
            세상을 연결하는 혁신, 인스파이어와 함께합니다
          </h2>
          <p className="text-slate-600 leading-relaxed text-base">
            인스파이어(Inspire)는 기술과 사람을 잇는 따뜻한 연결을 통해 더 나은 일상을 만들어갑니다. 
            우리는 투명한 소통과 자율적인 몰입을 바탕으로 고객에게 최고의 경험을 선사하고, 
            구성원 모두가 주도적으로 성장할 수 있는 일터를 지향합니다.
          </p>
        </div>
      </div>

      {/* Core Values Section */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">
            01
          </div>
          <h3 className="text-xl font-bold text-slate-800">핵심 가치 (Core Values)</h3>
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
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-200">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      Value 0{idx + 1}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 mb-1">{val.title}</h4>
                  <p className="text-xs font-medium text-emerald-800 mb-2">{val.subtitle}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{val.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Benefits Section */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center text-teal-700 font-bold">
            02
          </div>
          <h3 className="text-xl font-bold text-slate-800">복리후생 및 근무 제도 (Benefits & Culture)</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {BENEFITS.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white/90 border border-slate-200 rounded-2xl p-5 shadow-sm hover:border-teal-200 transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-100">
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
      <div className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-6 flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0 mt-0.5">
          <BookOpen className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-bold text-amber-900 text-base mb-1">인사담당자 한마디</h4>
          <p className="text-sm text-amber-800/90 leading-relaxed">
            "처음 오셨을 때 낯선 부분이 많으실 겁니다. 모르는 내용이 있다면 언제든 슬랙 채널(#ask-hr)이나 
            웰컴 버디에게 편하게 문의해주세요. 여러분의 멋진 성장을 진심으로 응원합니다!"
          </p>
        </div>
      </div>

    </div>
  );
};
