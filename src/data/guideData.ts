import { CoreValue, BenefitItem, OfficeFacility, FaqItem, ContactItem, TodoItem } from '../types';

export const CORE_VALUES: CoreValue[] = [
  {
    title: '자율과 책임 (Autonomy & Responsibility)',
    subtitle: '스스로 주도하고 결과에 책임집니다',
    description: '업무의 방식과 과정을 스스로 고민하고 결정하며, 그에 따른 투명한 소통과 결과를 만들어갑니다.',
    iconName: 'Compass'
  },
  {
    title: '속도와 본질 (Speed & Essence)',
    subtitle: '핵심에 집중하고 빠르게 실행합니다',
    description: '형식에 얽매이지 않고 본질적인 가치에 집중하여 신속하게 시도하고 피드백을 통해 개선합니다.',
    iconName: 'Zap'
  },
  {
    title: '상호 존중 (Mutual Respect)',
    subtitle: '다름을 이해하고 경청합니다',
    description: '동료의 의견을 존중하고 건설적인 피드백을 주고받으며 심리적 안전감을 바탕으로 협업합니다.',
    iconName: 'Heart'
  },
  {
    title: '끊임없는 성장 (Continuous Growth)',
    subtitle: '배움을 즐기고 한계에 도전합니다',
    description: '새로운 기술과 지식을 적극적으로 습득하며 개인과 회사가 함께 성장하는 문화를 지향합니다.',
    iconName: 'Sprout'
  }
];

export const BENEFITS: BenefitItem[] = [
  {
    category: '근무 제도',
    title: '유연근무제 (시차출퇴근)',
    description: '오전 8시 ~ 10시 사이 자율 출근, 8시간 근무 후 퇴근 (코어타임 11:00 ~ 16:00)'
  },
  {
    category: '근무 제도',
    title: '하이브리드 워크',
    description: '주 3일 출근, 2일 재택근무 운영 (팀별 상황에 따라 탄력 운영)'
  },
  {
    category: '건강/복지',
    title: '종합건강검진 지원',
    description: '매년 본인 및 가족 1인 종합건강검진 연 1회 지원'
  },
  {
    category: '건강/복지',
    title: '복지 포인트 지급',
    description: '연간 120만 원 상당의 복지 포인트 (도서, 운동, 여가, 쇼핑 등 자유 사용)'
  },
  {
    category: '성장 지원',
    title: '도서 및 교육비 무제한 지원',
    description: '업무 관련 도서 구입비 실비 지원 및 외부 온·오프라인 직무 교육 수강권 제공'
  },
  {
    category: '생활 지원',
    title: '조식 및 간식 바 운영',
    description: '사내 카페테리아에서 신선한 샐러드, 샌드위치, 프리미엄 원두커피 및 간식 상시 제공'
  }
];

export const SEOUL_OFFICE_INFO = {
  name: '서울 본사 (테헤란로 센터)',
  address: '서울특별시 강남구 테헤란로 123, 인스파이어 타워 12층 ~ 14층 (역삼동)',
  transport: {
    subway: '2호선 역삼역 3번 출구 도보 3분 거리 / 2호선·분당선 선릉역 도보 7분 거리',
    bus: '역삼역 포스코 P&S타워 정류장 하차 (간선 146, 360, 740 / 지선 3412)'
  },
  wifi: {
    ssid: 'Inspire_Welcome (방문자용) / Inspire_Office_5G (사내 임직원용)',
    password: '사내 인트라넷(Wikit) 또는 IT 데스크 문의'
  },
  parking: {
    rule: '지하 2층 ~ 지하 4층 임직원 주차장 이용 가능',
    support: '입사 첫 달 주차 등록 시 월 정기 주차 할인 적용 (방문객은 안내데스크 사전 등록 시 2시간 무료)'
  }
};

export const OFFICE_FACILITIES: OfficeFacility[] = [
  {
    floor: '14층',
    name: '경영지원본부 및 임원실',
    description: '대표이사실, 인사팀, 재무팀 및 대회의실',
    details: ['아이리스 회의실 (12인용)', '로즈마리 회의실 (8인용)', '집중 업무 부스']
  },
  {
    floor: '13층',
    name: '핵심 개발 및 프로덕트 본부',
    description: '개발팀, 디자인팀, 기획팀 오픈형 오피스 및 스크럼 룸',
    details: ['스튜디오 A/B (디자인 워크숍)', '포커스 존 (정숙 구역)', '스탠딩 데스크 존']
  },
  {
    floor: '12층',
    name: '종합 안내 및 웰컴 라운지 (카페테리아)',
    description: '안내데스크, 타운홀 미팅룸, 사내 카페 및 휴게 공간',
    details: ['인스파이어 라운지 (안마의자 및 빈백)', '오픈 카페테리아 (제빙기, 커피머신)', '우편함 및 택배 보관소']
  }
];

export const INITIAL_TODOS: TodoItem[] = [
  // Day 1
  {
    id: 'd1-1',
    category: 'day1',
    title: '사원증 발급 및 출입 등록',
    description: '12층 안내데스크 방문 후 본인 확인 및 임시 사원증 수령 (증명사진 등록 완료)',
    completed: false,
    dueDate: '입사 당일 오전'
  },
  {
    id: 'd1-5',
    category: 'day1',
    title: '본인 주소 입력 및 웰컴 키트 배송지 등록',
    description: '회사에서 발송하는 웰컴 키트 및 기념품 수령을 위한 자택 주소를 입력해주세요.',
    completed: false,
    dueDate: '입사 당일 오후'
  },
  {
    id: 'd1-2',
    category: 'day1',
    title: 'IT 장비 지급 및 계정 세팅',
    description: '노트북 및 주변기기 수령, 사내 구글/슬랙/인트라넷 계정 활성화 및 2단계 인증(2FA) 설정',
    completed: false,
    dueDate: '입사 당일 오전'
  },
  {
    id: 'd1-3',
    category: 'day1',
    title: '웰컴 런치 및 버디(Buddy) 미팅',
    description: '소속 팀원들과 함께하는 환영 점심 식사 및 1:1 웰컴 버디 매칭 안내',
    completed: false,
    dueDate: '입사 당일 점심'
  },
  {
    id: 'd1-4',
    category: 'day1',
    title: '보안 및 정보보호 서약서 제출',
    description: '개인정보보호 교육 수강 및 사내 보안 규정 서약서 온라인 제출',
    completed: false,
    dueDate: '입사 당일 오후'
  },

  // Week 1
  {
    id: 'w1-1',
    category: 'week1',
    title: '팀 리더 및 부서원 1:1 오리엔테이션',
    description: '현재 진행 중인 프로젝트 파악, 주요 업무 롤 및 기대 역할(R&R) 싱크 맞추기',
    completed: false,
    dueDate: '입사 첫 주 수요일까지'
  },
  {
    id: 'w1-2',
    category: 'week1',
    title: '사내 위키(Wikit) 및 문서 가이드 숙지',
    description: '코딩 컨벤션, 기획 문서 템플릿, 주간 회고 및 공유 문화 살펴보기',
    completed: false,
    dueDate: '입사 첫 주 금요일까지'
  },
  {
    id: 'w1-3',
    category: 'week1',
    title: '근태 및 복리후생 시스템 등록',
    description: '휴가 신청, 복지 포인트 신청, 경비 정산 시스템(BizExp) 계정 및 사용법 숙지',
    completed: false,
    dueDate: '입사 첫 주 금요일까지'
  },

  // Month 1
  {
    id: 'm1-1',
    category: 'month1',
    title: '첫 온보딩 프로젝트 완료 및 리뷰',
    description: '입사 후 첫 단독 업무 또는 팀 협업 태스크 완수 후 버디 및 리더와 회고',
    completed: false,
    dueDate: '입사 3주차'
  },
  {
    id: 'm1-2',
    category: 'month1',
    title: '신규 입사자 타운홀 / 교육 세션 참석',
    description: '대표이사 및 경영진과의 질의응답 세션 및 전사 비전 공유 타운홀 참석',
    completed: false,
    dueDate: '월말'
  },
  {
    id: 'm1-3',
    category: 'month1',
    title: '30일 수습 평가 및 정착 면담',
    description: '피플팀(HR) 및 소속 리더와 함께 한 달간의 적응 과정 점검 및 피드백 교환',
    completed: false,
    dueDate: '입사 30일 차'
  }
];

export const FAQ_LIST: FaqItem[] = [
  {
    category: '근태/휴가',
    question: '지각이나 조퇴 시 어디에 알려야 하나요?',
    answer: '사내 슬랙 #notice-attend 채널 또는 팀 채널에 공유하고, 사내 근태 시스템(HR system)에 사전 또는 사후 신청해주시면 됩니다.'
  },
  {
    category: '근태/휴가',
    question: '휴가는 언제부터 사용할 수 있나요?',
    answer: '입사일 기준 발생한 연차 휴가는 입사 당일부터 즉시 사용 가능합니다. (반차, 연차 등 최소 1일 전 팀 내 공유 필수)'
  },
  {
    category: '근무/장비',
    question: '추가 모니터나 키보드 등 주변기기가 필요해요.',
    answer: 'IT 서포트 포털(IT Helpdesk)을 통해 신청하시면 1~2일 내로 자리로 배송 및 설치를 도와드립니다.'
  },
  {
    category: '식대/복지',
    question: '점심 식사 지원은 어떻게 되나요?',
    answer: '12층 사내 카페테리아에서 중식 샐러드바 및 도시락이 무료 제공되며, 외부 식당 이용 시 법인카드 또는 모바일 식권(식권대장)을 통해 일 12,000원까지 지원됩니다.'
  },
  {
    category: '소통',
    question: '주요 사내 메신저 및 협업 툴은 무엇인가요?',
    answer: '모든 공식 커뮤니케이션은 Slack(슬랙)을 통해 이루어지며, 문서 협업은 Notion 및 Google Workspace를 사용합니다.'
  }
];

export const CONTACT_LIST: ContactItem[] = [
  {
    department: '인사/채용 (People Team)',
    name: '김지은 팀장',
    role: '온보딩 및 인사 관리 전반',
    email: 'jieun.kim@inspire.co.kr',
    extension: '02-555-0121'
  },
  {
    department: '총무/시설 (Admin Team)',
    name: '박민수 매니저',
    role: '사무실 시설, 자리 배치, 사원증',
    email: 'minsu.park@inspire.co.kr',
    extension: '02-555-0122'
  },
  {
    department: 'IT 인프라 (IT Support)',
    name: '이도현 엔지니어',
    role: 'PC 지급, 네트워크, 계정 권한',
    email: 'it.support@inspire.co.kr',
    extension: '02-555-0199'
  },
  {
    department: '재무/회계 (Finance)',
    name: '최유진 파트장',
    role: '법인카드, 경비 청구, 급여 관련',
    email: 'finance@inspire.co.kr',
    extension: '02-555-0133'
  }
];
