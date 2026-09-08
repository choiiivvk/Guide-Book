import React, { useState } from 'react';
import { Database, Key, Globe, CheckCircle, AlertCircle } from 'lucide-react';
import { createSupabaseClient } from '../lib/supabase';

interface SupabaseSetupModalProps {
  onConnected: () => void;
}

export const SupabaseSetupModal: React.FC<SupabaseSetupModalProps> = ({ onConnected }) => {
  const [url, setUrl] = useState(localStorage.getItem('supabase_url') || '');
  const [key, setKey] = useState(localStorage.getItem('supabase_anon_key') || '');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim() || !key.trim()) {
      setError('Supabase URL과 Anon Key를 모두 입력해주세요.');
      return;
    }

    try {
      const client = createSupabaseClient(url.trim(), key.trim());
      if (!client) {
        throw new Error('Supabase 클라이언트 생성 실패');
      }
      localStorage.setItem('supabase_url', url.trim());
      localStorage.setItem('supabase_anon_key', key.trim());
      setSuccess(true);
      setError(null);
      setTimeout(() => {
        onConnected();
      }, 1000);
    } catch (err: any) {
      setError(err.message || 'Supabase 연결에 실패했습니다.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white border border-emerald-100 rounded-3xl p-8 max-w-md w-full shadow-xl animate-fadeIn">
        <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
          <Database className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">Supabase 연결 설정</h3>
        <p className="text-sm text-slate-600 mb-6">
          인가된 사용자 인증 및 CSV 누적 저장을 위해 Supabase 프로젝트 정보를 입력해주세요.
        </p>

        {success ? (
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-emerald-800 text-sm flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span>Supabase 연결 성공! 앱을 시작합니다...</span>
          </div>
        ) : (
          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-slate-500" />
                <span>Supabase Project URL</span>
              </label>
              <input
                type="url"
                placeholder="https://your-project.supabase.co"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
                <Key className="w-3.5 h-3.5 text-slate-500" />
                <span>Supabase Anon / Public Key</span>
              </label>
              <input
                type="password"
                placeholder="eyJhbGciOi..."
                value={key}
                onChange={(e) => setKey(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                required
              />
            </div>

            {error && (
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-3 text-rose-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 transition-colors shadow-sm"
            >
              Supabase 연결 및 시작
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
