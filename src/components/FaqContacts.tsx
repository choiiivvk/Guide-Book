import React, { useState } from 'react';
import { FAQ_LIST, CONTACT_LIST } from '../data/guideData';
import { HelpCircle, PhoneCall, Search, ChevronDown, ChevronUp, Mail, User } from 'lucide-react';

export const FaqContacts: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const filteredFaqs = FAQ_LIST.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-12 animate-fadeIn">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-purple-50/90 via-indigo-50/40 to-white border border-purple-100 rounded-3xl p-8 shadow-sm">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-purple-600" />
            <span>FAQ & Important Contacts</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight mb-3">
            사내 FAQ 및 주요 연락처
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            궁금한 점이 있으신가요? 자주 묻는 질문들을 확인하시거나 각 부서별 담당자에게 문의해 보세요.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-700 font-bold">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-800">자주 묻는 질문 (FAQ)</h3>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="질문 검색 (예: 휴가, 식대...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
            />
          </div>
        </div>

        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center text-slate-400">
              검색 결과가 없습니다.
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isExpanded = expandedFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/80 rounded-2xl shadow-sm overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50/50 transition-colors"
                  >
                    <div className="flex items-center gap-3 pr-4">
                      <span className="px-2.5 py-1 rounded-md bg-purple-50 text-purple-700 text-xs font-semibold border border-purple-100 flex-shrink-0">
                        {faq.category}
                      </span>
                      <span className="font-bold text-slate-800 text-base">{faq.question}</span>
                    </div>
                    <div className="text-slate-400 flex-shrink-0">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-6 pb-5 pt-1 border-t border-slate-100 bg-slate-50/50">
                      <p className="text-sm text-slate-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Key Contacts Section */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">
            02
          </div>
          <h3 className="text-xl font-bold text-slate-800">주요 부서 및 담당자 연락처 (Contacts)</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {CONTACT_LIST.map((contact, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:border-purple-200 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-100">
                    {contact.department}
                  </span>
                  <PhoneCall className="w-4 h-4 text-slate-400" />
                </div>
                
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-purple-100/70 text-purple-700 flex items-center justify-center font-bold">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-base">{contact.name}</h4>
                    <p className="text-xs text-slate-500">{contact.role}</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span className="font-medium text-slate-700">{contact.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-3.5 h-3.5 text-slate-400" />
                  <span className="font-medium text-slate-700">내선: {contact.extension}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
