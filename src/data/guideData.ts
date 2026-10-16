import { CoreValue, BenefitItem, OfficeFacility, FaqItem, ContactItem, TodoItem } from '../types';

export const CORE_VALUES: CoreValue[] = [
  {
    title: '차별화된 소재',
    subtitle: '',
    description: '고객의 사업 성공을 위한 최적의 소재 제공하고 가격, 품질 면에서 경쟁사들을 능가하는 소재와 고객 제품의 성능을 향상시키는 핵심 소재를 제공하는 것',
    iconName: 'ShieldCheck'
  },
  {
    title: '솔루션',
    subtitle: '',
    description: '제품과 서비스, 기술적 지식을 결합하여 고객의 개별적 니즈에 맞춤화된 가치를 제공하는 것',
    iconName: 'Compass'
  },
  {
    title: '고객과 함께 지속 성장',
    subtitle: '',
    description: '고객에게 차별화된 소재와 솔루션을 제공함으로써 고객의 발전과 성공을 돕고, 이를 바탕으로 당사도 지속적인 성장을 하는 것',
    iconName: 'Heart'
  },
  {
    title: '시장선도 기업',
    subtitle: '',
    description: '고객의 기대를 뛰어넘는 시장선도 소재 및 솔루션을 제공하는 회사, 구성원들을 존중하고 공정하게 대우하는 회사',
    iconName: 'Zap'
  }
];

export const WAY_OF_WORKS: CoreValue[] = [
  {
    title: '고객 중심 업무 수행',
    subtitle: 'Customer Focused Work',
    description: '고객의 성장에 기여하고, 고객과 함께 동반 성장',
    iconName: 'Heart'
  },
  {
    title: '빠르고 강한 실행',
    subtitle: 'Fast and Powerful Execution',
    description: '기존과는 다른 새로운 방식으로 혁신하고, 남들과 비교할 수 없는 노력, Detail 한 선행관리를 통해 시장에서 성장하고, 경쟁에서 승리',
    iconName: 'Zap'
  },
  {
    title: '협업 기반의 Compact 한 조직 구축',
    subtitle: 'Co-work and Compact Organization',
    description: '열린 소통과 협업이 일상화 되는 문화를 통해 업무의 효율성 극대화, 작은 시도를 민첩하게 실행하고, 실패를 교훈삼아 지속적으로 성장하고 혁신',
    iconName: 'Compass'
  }
];

export const BENEFITS: BenefitItem[] = [
  {
    category: '주거지원',
    title: '주거 지원 제도',
    description: '기숙사 / 월세지원금 / 주택자금대출'
  },
  {
    category: '생활안정',
    title: '생활 안정 지원',
    description: '경조금 / 경조휴가 / 소액대출 / 기념일 / 선택적복리후생'
  },
  {
    category: '여가·자기계발',
    title: '여가 및 자기계발',
    description: '콘도 / 장기근속 / 어학지원비'
  },
  {
    category: '학자금',
    title: '자녀 학자금 지원',
    description: '유치원비 / 자녀입학축하금 / 자녀학자금(고등학교, 대학교)'
  },
  {
    category: '의료',
    title: '의료 및 건강 지원',
    description: '의료비(본인, 배우자, 자녀, 부모) / 종합검진 / 단체정기보험'
  }
];

export const SEOUL_OFFICE_INFO = {
  name: 'LX MMA 서울 본사 / R&D 센터',
  address: '서울특별시 중구 통일로 92, LG서울역빌딩 (남대문로5가)',
  transport: {
    subway: '1·4호선 서울역 10번 출구 지하 연결 통로 도보 2분 거리',
    bus: '서울역버스환승센터 및 연세로 정류장 하차 (간선 100, 150, 402, 502)'
  },
  wifi: {
    ssid: 'LX_MMA_Guest (방문자용) / LX_MMA_Secure (임직원 보안망)',
    password: '사내 인트라넷(LX Portal) 또는 IT 서비스데스크 문의'
  },
  parking: {
    rule: 'LG서울역빌딩 지하 주차장 이용 가능 (임직원 등록 차량)',
    support: '입사 첫 달 주차 등록 지원 (방문객은 안내데스크 사전 등록 시 2시간 무료 주차)'
  }
};

export const OFFICE_FACILITIES: OfficeFacility[] = [
  {
    floor: '18층',
    name: '경영진 및 대표이사실 / 경영지원본부',
    description: 'CEO실, 인사팀, 재무팀 및 대회의실',
    details: ['서울역 대회의실 (24인용)', '미팅룸 A/B', '임원 접견실']
  },
  {
    floor: '17층',
    name: 'MMA 영업 및 마케팅 본부',
    description: '국내영업팀, 해외수출팀, 마케팅기획실',
    details: ['오픈 워크스페이스', '글로벌 화상 회의실', '포커스 부스']
  },
  {
    floor: '16층',
    name: '연구개발(R&D) 및 기술지원실',
    description: '고분자 화학 연구실, 기술서비스(TS) 팀',
    details: ['화학 분석실', '테크 라운지', '스마트 프린팅 존']
  },
  {
    floor: '15층',
    name: '웰컴 라운지 및 사내 식당 / 카페테리아',
    description: '임직원 식당, 프리미엄 바리스타 카페, 피트니스 및 휴게 공간',
    details: ['LX MMA 가든 (휴게 라운지)', '사내 카페테리아', '종합 안내데스크']
  }
];

export const INITIAL_TODOS: TodoItem[] = [
  // Day 1
  {
    id: 'd1-5',
    category: 'day1',
    title: '본인 주소 입력 및 웰컴 키트 배송지 등록',
    description: 'LX MMA 웰컴 키트 및 입사 기념품 수령을 위한 자택 주소를 입력해주세요.',
    completed: false,
    dueDate: '입사 당일 오후'
  },
  {
    id: 'd1-2',
    category: 'day1',
    title: 'IT 장비 지급 및 계정 세팅',
    description: '업무용 노트북 수령, 사내 LX포털/메일/협업툴(Teams) 계정 접속으로 2FA 보안 설정',
    completed: false,
    dueDate: '입사 당일 오전'
  },
  {
    id: 'd1-3',
    category: 'day1',
    title: '웰컴 런치 및 부서 버디(Buddy) 미팅',
    description: '소속 팀원들과 함께하는 환영 점심 식사 및 1:1 웰컴 버디 매칭 안내',
    completed: false,
    dueDate: '입사 당일 점심'
  },
  {
    id: 'd1-4',
    category: 'day1',
    title: '보안 및 안전환경(EHS) 서약서 제출',
    description: '화학 사업장 안전환경(EHS) 교육 수강 및 서약서 온라인 제출',
    completed: false,
    dueDate: '입사 당일 오후'
  },

  // Week 1
  {
    id: 'w1-1',
    category: 'week1',
    title: '부서장 및 팀원 1:1 오리엔테이션',
    description: '담당 업무 파악, 주요 프로젝트 브리핑 및 기대 역할(R&R) 싱크 맞추기',
    completed: false,
    dueDate: '입사 첫 주 수요일까지'
  },
  {
    id: 'w1-2',
    category: 'week1',
    title: '사내 인트라넷(LX Portal) 가이드 숙지',
    description: '화학 규정, 결재 양식, 문서 보안 규정 및 사내 커뮤니케이션 채널 확인',
    completed: false,
    dueDate: '입사 첫 주 금요일까지'
  },
  {
    id: 'w1-3',
    category: 'week1',
    title: '온라인 법정 의무 교육 이수',
    description: '성희롱 예방, 개인정보보호, 직장 내 괴롭힘 방지 등 필수 교육 수강',
    completed: false,
    dueDate: '입사 첫 주 금요일까지'
  },

  // Month 1
  {
    id: 'm1-1',
    category: 'month1',
    title: '신규입사자 멘토링 프로그램 참여',
    description: '지정 멘토와의 월간 리뷰 미팅 및 회사 적응 상황 점검',
    completed: false,
    dueDate: '입사 1개월 차'
  },
  {
    id: 'm1-2',
    category: 'month1',
    title: '수습 기간 과제 점검 및 피드백 세션',
    description: '부서장과의 1개월 종합 피드백 면담 및 향후 목표 설정',
    completed: false,
    dueDate: '입사 1개월 차 말일'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: '출근 및 복장',
    question: '출근 시 복장',
    answer: '스마트 캐주얼(단정한 비즈니스 캐주얼) 복장으로 오전 8시 30분까지 출근해 주시면 됩니다.'
  },
  {
    category: '근무 제도',
    question: '출퇴근 시간 및 근무 제도',
    answer: '부서장 사전 협의 하에 출퇴근 시간을 조절할 수 있는 FLEXTIME 제도를 운영하고 있습니다.'
  },
  {
    category: '급여 및 복지',
    question: '급여 지급일은 언제인가요?',
    answer: '매월 25일에 지급됩니다. (토요일 또는 공휴일인 경우 그 전일에 지급됩니다.)'
  }
];

export const CONTACT_ITEMS: ContactItem[] = [
  {
    department: '인사팀',
    name: '김인사 사원',
    role: '채용 및 온보딩 총괄',
    email: 'hr@lxmma.com',
    extension: '02-6930-0000'
  }
];

export const FAQ_LIST = FAQ_ITEMS;
export const CONTACT_LIST = CONTACT_ITEMS;
