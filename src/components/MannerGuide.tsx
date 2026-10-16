import React from 'react';
import { 
  Calendar, 
  Briefcase, 
  Users, 
  MessageSquare, 
  Laptop, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Heart, 
  Sparkles,
  FileText
} from 'lucide-react';

export const MannerGuide: React.FC = () => {
  const etiquetteSections = [
    {
      title: '출근 첫날',
      subtitle: 'First Day Impression & Preparation',
      icon: Calendar,
      color: 'bg-red-50 text-[#C00000] border-red-100',
      description: '성공적인 첫 걸음을 위한 기본 준비와 에티켓을 확인하세요.',
      items: [
        {
          title: '시간 준수 및 여유있는 도착',
          desc: '첫 출근일에는 오전 8시 30분까지 여유 있게 도착하여 오리엔테이션 및 자리 배정을 준비합니다.'
        },
        {
          title: '단정한 복장 (스마트 캐주얼)',
          desc: '단정한 비즈니스 캐주얼(마트 캐주얼) 복장으로 신뢰감을 주는 첫인상을 남깁니다.'
        },
        {
          title: '밝은 미소와 인사',
          desc: '사내 동료 및 선배님들께 먼저 밝은 미소로 인사하며 긍정적인 소통의 문을 엽니다.'
        }
      ]
    },
    {
      title: '비즈니스 에티켓',
      subtitle: 'Professional Business Manners',
      icon: Briefcase,
      color: 'bg-blue-50 text-blue-700 border-blue-100',
      description: '업무 현장에서 지켜야 할 프로페셔널한 태도와 예절입니다.',
      items: [
        {
          title: '호칭 및 상호 존중',
          desc: '사내 구성원 간 직급/직책 호칭을 사용하며, 서로를 존중하고 배려하는 언행을 실천합니다.'
        },
        {
          title: '명함 교환 예절',
          desc: '명함을 주고받을 때는 두 손으로 공손히 건네고 받으며, 상대방의 소속과 이름을 정확히 확인합니다.'
        },
        {
          title: '전화 응대 기본',
          desc: '밝고 명확한 목소리로 소속과 이름을 밝히며, 통화 내용은 메모하는 습관을 가집니다.'
        }
      ]
    },
    {
      title: '회의 에티켓',
      subtitle: 'Effective Meeting Etiquette',
      icon: Users,
      color: 'bg-amber-50 text-amber-700 border-amber-100',
      description: '효율적이고 생산적인 회의를 위한 기본 수칙입니다.',
      items: [
        {
          title: '시간 엄수 (5분 전 입실)',
          desc: '회의 시작 5분 전 미리 입실하여 자료를 검토하고 원활한 진행을 돕습니다.'
        },
        {
          title: '경청과 적극적 참여',
          desc: '타인의 의견을 끝까지 경청하고, 건설적인 의견 개진으로 시너지를 창출합니다.'
        },
        {
          title: '디지털 기기 매너',
          desc: '회의 중 노트북과 태블릿은 회의 관련 용도로만 사용하며, 스마트폰은 무음으로 설정합니다.'
        }
      ]
    },
    {
      title: '동료와 관계',
      subtitle: 'Colleague Relations & Harmony',
      icon: Heart,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-100',
      description: '동료들과 상호 신뢰를 쌓고 함께 성장하는 관계 에티켓입니다.',
      items: [
        {
          title: '다양성 존중과 배려',
          desc: '서로의 개성과 다양성을 인정하고 상호 배려하는 따뜻한 조직 문화를 만듭니다.'
        },
        {
          title: '칭찬과 감사의 표현',
          desc: '작은 도움이나 협조에도 적극적으로 감사의 마음을 표현하여 긍정 에너지를 전파합니다.'
        },
        {
          title: '열린 소통과 협업',
          desc: '벽 없는 소통을 통해 동료의 의견을 수용하고 유기적인 협업을 실천합니다.'
        }
      ]
    },
    {
      title: '디지털 에티켓',
      subtitle: 'Digital Workspace Etiquette',
      icon: Laptop,
      color: 'bg-purple-50 text-purple-700 border-purple-100',
      description: '온라인 및 스마트 오피스 환경에서 지켜야 할 보안과 소통 매너입니다.',
      items: [
        {
          title: '이메일 작성 수칙',
          desc: '명확한 제목과 요점 중심의 본문을 작성하고, 발송 전 수신자와 맞춤법을 꼼꼼히 확인합니다.'
        },
        {
          title: '메신저 소통 매너',
          desc: '업무 시간 내 신속하게 확인 및 회신하며, 간결하고 정중한 표현으로 소통합니다.'
        },
        {
          title: '정보 보안 및 PC 잠금',
          desc: '자리 비움 시 반드시 PC 잠금(Win+L)을 생활화하여 사내 정보와 보안을 철저히 지킵니다.'
        }
      ]
    }
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-red-600/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-semibold mb-4 border border-red-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Professional Guidebook</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
            기본 매너 및 에티켓
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            신규 입사자가 조직에 빠르게 적응하고 동료들과 신뢰를 쌓기 위해 꼭 알아두어야 할 핵심 비즈니스 에티켓을 안내해 드립니다.
          </p>
        </div>
      </div>

      {/* Etiquette Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {etiquetteSections.map((sec, idx) => {
          const Icon = sec.icon;
          return (
            <div 
              key={idx} 
              className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${sec.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-800">{sec.title}</h3>
                      <p className="text-xs text-slate-500 font-medium">{sec.subtitle}</p>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-600 mb-6 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  {sec.description}
                </p>
                
                <div className="space-y-4">
                  {sec.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-50 text-[#C00000] flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-800 mb-1">{item.title}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary Banner */}
      <div className="bg-gradient-to-br from-red-50 via-white to-red-50/50 rounded-2xl border border-red-200/60 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#C00000] text-white flex items-center justify-center shadow-md shadow-[#C00000]/25">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">한눈에 보는 핵심 요약</h3>
            <p className="text-xs text-slate-500">성공적인 온보딩을 위한 3대 핵심 수칙</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-white rounded-xl p-4 border border-red-100 shadow-xs">
            <div className="flex items-center gap-2 font-bold text-sm text-[#C00000] mb-2">
              <Clock className="w-4 h-4" />
              <span>출근 및 시간 준수</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              오전 8시 30분까지 여유 있는 출근과 스마트 캐주얼 복장으로 프로페셔널한 첫인상 완성
            </p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-red-100 shadow-xs">
            <div className="flex items-center gap-2 font-bold text-sm text-[#C00000] mb-2">
              <Users className="w-4 h-4" />
              <span>소통과 협업</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              상호 존중과 배려, 적극적인 경청과 감사 표현으로 동료와 신뢰 구축
            </p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-red-100 shadow-xs">
            <div className="flex items-center gap-2 font-bold text-sm text-[#C00000] mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>디지털 보안</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              자리 비움 시 PC 잠금(Win+L) 생활화 및 철저한 정보 보호 실천
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
