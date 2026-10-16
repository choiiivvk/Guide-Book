import React from 'react';
import { 
  Building, 
  Clock, 
  FileText, 
  Calendar, 
  Gift, 
  MapPin, 
  CheckCircle2, 
  Users, 
  Laptop,
  Briefcase
} from 'lucide-react';

export const JoiningInfo: React.FC = () => {
  const scheduleDays = [
    {
      day: 'Day 1 (월요일)',
      title: '첫 출근 및 온보딩 오리엔테이션',
      time: '08:30 ~ 18:00',
      color: 'bg-red-50 text-[#C00000] border-red-200',
      tasks: [
        '08:30 | 본사 1층 로비 도착 및 안내 데스크 집결',
        '09:00 ~ 10:30 | 인사팀 주관 신규 입사자 오리엔테이션 및 계약 서류 확인',
        '10:30 ~ 12:00 | 사원증 촬영 및 사내 보안/IT 시스템 계정 생성',
        '13:00 ~ 15:00 | 멘토-멘티 결연식 및 웰컴 런치 타임',
        '15:00 ~ 18:00 | 소속 부서 상견례 및 자리 배치, 사내 오피스 투어'
      ]
    },
    {
      day: 'Day 2 ~ Day 3 (화 ~ 수)',
      title: '회사 이해 및 기초 직무 교육',
      time: '09:00 ~ 18:00',
      color: 'bg-blue-50 text-blue-700 border-blue-200',
      tasks: [
        '회사 비전, 핵심가치 및 사업 영역 집중 교육',
        '그룹웨어, ERP, 이메일 등 사내 디지털 워크플로우 실습',
        '부서별 주요 업무 소개 및 선배 사원과의 직무 멘토링 세션',
        '사내 규정, 준법 경영 및 정보 보안 교육 수강'
      ]
    },
    {
      day: 'Day 4 ~ Day 5 (목 ~ 금)',
      title: '현업 OJT 시작 및 실무 적응',
      time: '09:00 ~ 18:00',
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      tasks: [
        '소속 팀 배치 완료 및 1:1 전담 멘토와 본격적인 OJT(On-the-Job Training) 시작',
        '팀 내 진행 중인 주요 프로젝트 현황 파악 및 자료 스터디',
        '주간 업무 회의 참관 및 업무 프로세스 체득',
        '첫 주 마무리 면담: 입사 소감 나눔 및 질의응답 (멘토 & 팀장)'
      ]
    }
  ];

  const documents = [
    { title: '신분증', desc: '주민등록증 또는 운전면허증 본인 지참' },
    { title: '근로계약 서류', desc: '사전 안내된 이메일 내 서명 및 필수 지참물 확인' },
    { title: '통장 사본', desc: '급여 사본 제출용 (필요시)' },
    { title: '자격증 / 졸업증명서', desc: '인사팀 제출용 원본 또는 사본 (미제출자에 한함)' }
  ];

  const welcomeKit = [
    { title: '업무용 노트북', desc: '고성능 비즈니스 노트북 및 주변기기 세트 지급' },
    { title: '웰컴 키트 굿즈', desc: '브랜드 다이어리, 고급 텀블러, 시그니처 펜 세트' },
    { title: '사원증 및 스트랩', desc: '사내 출입 및 식권 결제용 스마트 사원증' },
    { title: '온보딩 가이드북', desc: '오프라인 인쇄본 가이드북 및 웰컴 카드' }
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-red-600/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-semibold mb-4 border border-red-500/30">
            <Building className="w-3.5 h-3.5" />
            <span>Joining & Onboarding Schedule</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
            입사 정보 및 출근 후 일정
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            신규 입사자분들을 환영합니다! 첫 출근 장소와 준비물, 그리고 성공적인 적응을 위한 첫 주 차 상세 일정을 확인해 보세요.
          </p>
        </div>
      </div>

      {/* Basic Joining Logistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Reporting Info */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-[#C00000] flex items-center justify-center border border-red-100">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800">출근 장소 및 시간</h3>
              <p className="text-xs text-slate-500">첫 출근일 안내</p>
            </div>
          </div>
          
          <div className="space-y-3 text-sm">
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 flex items-start gap-3">
              <Clock className="w-4 h-4 text-[#C00000] mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold text-slate-800">출근 일시: </span>
                <span className="text-slate-600">오전 8시 30분까지 도착</span>
              </div>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 flex items-start gap-3">
              <Building className="w-4 h-4 text-[#C00000] mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold text-slate-800">출근 장소: </span>
                <span className="text-slate-600">본사 1층 로비 안내 데스크 앞 집결</span>
              </div>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 flex items-start gap-3">
              <Briefcase className="w-4 h-4 text-[#C00000] mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold text-slate-800">복장: </span>
                <span className="text-slate-600">단정한 스마트 비즈니스 캐주얼</span>
              </div>
            </div>
          </div>
        </div>

        {/* Required Documents */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-100">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800">제출 서류 및 준비물</h3>
              <p className="text-xs text-slate-500">필수 지참 항목</p>
            </div>
          </div>

          <div className="space-y-3">
            {documents.map((doc, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-sm text-slate-800">{doc.title}</span>
                  <p className="text-xs text-slate-600 mt-0.5">{doc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Schedule After Joining */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-red-50 text-[#C00000] flex items-center justify-center border border-red-100">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">출근 후 첫 주 온보딩 일정</h3>
            <p className="text-xs text-slate-500">신규 입사자 적응 프로그램 (Day 1 ~ Day 5)</p>
          </div>
        </div>

        <div className="space-y-6">
          {scheduleDays.map((s, idx) => (
            <div key={idx} className="border border-slate-200/80 rounded-2xl p-5 sm:p-6 bg-slate-50/50 hover:bg-slate-50 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${s.color}`}>
                    {s.day}
                  </span>
                  <h4 className="font-bold text-base text-slate-900">{s.title}</h4>
                </div>
                <div className="text-xs font-semibold text-slate-500 bg-white px-3 py-1 rounded-lg border border-slate-200/60 inline-flex items-center gap-1.5 w-fit">
                  <Clock className="w-3.5 h-3.5 text-[#C00000]" />
                  <span>{s.time}</span>
                </div>
              </div>

              <div className="space-y-2.5 pl-2">
                {s.tasks.map((task, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C00000] mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">{task}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Welcome Kit Section */}
      <div className="bg-gradient-to-br from-red-50 via-white to-red-50/40 rounded-2xl border border-red-200/60 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#C00000] text-white flex items-center justify-center shadow-md shadow-[#C00000]/25">
            <Gift className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">웰컴 키트 & 지급 품목</h3>
            <p className="text-xs text-slate-500">첫 출근 시 지급되는 특별한 선물과 업무 장비</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {welcomeKit.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl p-4 border border-red-100 shadow-xs flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-sm text-slate-900 mb-1.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C00000]"></span>
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
