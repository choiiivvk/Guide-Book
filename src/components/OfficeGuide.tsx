import React, { useState } from 'react';
import { SEOUL_OFFICE_INFO, OFFICE_FACILITIES } from '../data/guideData';
import { MapPin, Navigation, Wifi, Car, Building, ChevronDown, ChevronUp, Copy, Check } from 'lucide-react';

export const OfficeGuide: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const [expandedFloor, setExpandedFloor] = useState<string | null>('12층');

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(SEOUL_OFFICE_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleFloor = (floor: string) => {
    setExpandedFloor(expandedFloor === floor ? null : floor);
  };

  return (
    <div className="space-y-10 animate-fadeIn">
      
      {/* Office Header Card */}
      <div className="bg-gradient-to-br from-sky-50/90 via-blue-50/40 to-white border border-sky-100 rounded-3xl p-8 shadow-sm relative overflow-hidden">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold mb-3">
            <Building className="w-3.5 h-3.5 text-sky-600" />
            <span>Seoul Head Office</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight mb-3">
            {SEOUL_OFFICE_INFO.name}
          </h2>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-white/80 p-4 rounded-2xl border border-sky-200/60 shadow-sm">
            <div className="flex items-center gap-2 text-slate-700 text-sm font-medium flex-1">
              <MapPin className="w-5 h-5 text-sky-600 flex-shrink-0" />
              <span>{SEOUL_OFFICE_INFO.address}</span>
            </div>
            <button
              onClick={handleCopyAddress}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sky-600 text-white text-xs font-medium hover:bg-sky-700 transition-colors shadow-sm"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? '주소 복사됨' : '주소 복사'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Transport & Access */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Subway & Bus */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
              <Navigation className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-lg">대중교통 안내</h3>
              <p className="text-xs text-slate-500">지하철 및 버스 오시는 길</p>
            </div>
          </div>
          <div className="space-y-3 text-sm text-slate-600">
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
              <span className="font-bold text-sky-700 block mb-1">🚇 지하철 이용 시</span>
              {SEOUL_OFFICE_INFO.transport.subway}
            </div>
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
              <span className="font-bold text-sky-700 block mb-1">🚌 버스 이용 시</span>
              {SEOUL_OFFICE_INFO.transport.bus}
            </div>
          </div>
        </div>

        {/* Wifi & Parking */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4">
          
          {/* Wifi */}
          <div className="border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Wifi className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-slate-800 text-base">사내 무선랜 (Wi-Fi)</h4>
            </div>
            <p className="text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
              <span className="font-medium text-slate-700 block mb-0.5">SSID: {SEOUL_OFFICE_INFO.wifi.ssid}</span>
              <span className="text-slate-500">{SEOUL_OFFICE_INFO.wifi.password}</span>
            </p>
          </div>

          {/* Parking */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <Car className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-slate-800 text-base">주차 안내</h4>
            </div>
            <p className="text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
              <span className="font-medium text-slate-700 block mb-0.5">{SEOUL_OFFICE_INFO.parking.rule}</span>
              <span className="text-slate-500">{SEOUL_OFFICE_INFO.parking.support}</span>
            </p>
          </div>

        </div>

      </div>

      {/* Floor Guide & Amenities */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center text-sky-700 font-bold">
            03
          </div>
          <h3 className="text-xl font-bold text-slate-800">층별 안내 및 편의시설 (Floor Guide)</h3>
        </div>

        <div className="space-y-4">
          {OFFICE_FACILITIES.map((fac, idx) => {
            const isExpanded = expandedFloor === fac.floor;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFloor(fac.floor)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50/60 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="px-3.5 py-1.5 rounded-xl bg-sky-100 text-sky-800 font-bold text-sm border border-sky-200">
                      {fac.floor}
                    </span>
                    <div>
                      <h4 className="font-bold text-slate-800 text-base">{fac.name}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">{fac.description}</p>
                    </div>
                  </div>
                  <div className="text-slate-400">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isExpanded && fac.details && (
                  <div className="px-6 pb-5 pt-1 border-t border-slate-100 bg-slate-50/50">
                    <span className="text-xs font-semibold text-slate-600 block mb-2">주요 공간 및 시설</span>
                    <div className="flex flex-wrap gap-2">
                      {fac.details.map((detail, dIdx) => (
                        <span
                          key={dIdx}
                          className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-700 shadow-xs"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
