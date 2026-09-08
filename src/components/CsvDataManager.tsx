import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { FileSpreadsheet, Upload, Database, Code, CheckCircle, AlertCircle, RefreshCw, Trash2, FileText } from 'lucide-react';

interface CsvDataManagerProps {
  user: any;
}

export const CsvDataManager: React.FC<CsvDataManagerProps> = ({ user }) => {
  const [csvText, setCsvText] = useState<string>('');
  const [fileName, setFileName] = useState<string>('');
  const [parsedRows, setParsedRows] = useState<any[]>([]);
  const [headers, setHeaders] = useState<string[]>([]);
  const [savedRecords, setSavedRecords] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [showSql, setShowSql] = useState(false);

  const fetchRecords = async () => {
    if (!supabase) return;
    setFetching(true);
    try {
      const { data, error } = await supabase
        .from('csv_data_entries')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSavedRecords(data || []);
    } catch (err: any) {
      console.error('Fetch error:', err.message);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      if (text) {
        setCsvText(text);
        parseCsv(text);
      }
    };
    reader.readAsText(file, 'utf-8');
  };

  const parseCsv = (text: string) => {
    try {
      const lines = text.split(/\r\n|\n/).filter(line => line.trim() !== '');
      if (lines.length === 0) return;

      const headerCols = lines[0].split(',').map(h => h.trim().replace(/^["']|["']$/g, ''));
      setHeaders(headerCols);

      const rows = lines.slice(1).map((line, idx) => {
        const values = line.split(',').map(v => v.trim().replace(/^["']|["']$/g, ''));
        const rowObj: Record<string, string> = {};
        headerCols.forEach((col, i) => {
          rowObj[col || `col_${i}`] = values[i] || '';
        });
        return rowObj;
      });

      setParsedRows(rows);
      setError(null);
    } catch (err: any) {
      setError('CSV 파싱 중 오류가 발생했습니다: ' + err.message);
    }
  };

  const handleSaveToSupabase = async () => {
    if (!supabase) {
      setError('Supabase가 설정되지 않았습니다.');
      return;
    }
    if (parsedRows.length === 0) {
      setError('저장할 CSV 데이터가 없습니다.');
      return;
    }

    setLoading(true);
    setError(null);
    setSuccessMsg(null);

    try {
      // Cumulative insertion: insert each parsed row or bulk insert
      const insertPayloads = parsedRows.map(row => ({
        user_email: user?.email || 'unknown',
        file_name: fileName || 'manual_upload.csv',
        row_data: row
      }));

      const { data, error: insertError } = await supabase
        .from('csv_data_entries')
        .insert(insertPayloads);

      if (insertError) throw insertError;

      setSuccessMsg(`성공적으로 ${parsedRows.length}개의 데이터 행이 Supabase에 누적 저장되었습니다!`);
      fetchRecords();
      setParsedRows([]);
      setFileName('');
      setCsvText('');
    } catch (err: any) {
      setError('Supabase 저장 실패: ' + (err.message || '테이블 권한 및 스키마를 확인해주세요.'));
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteRecord = async (id: string) => {
    if (!supabase) return;
    if (!window.confirm('이 레코드를 삭제하시겠습니까?')) return;

    try {
      const { error } = await supabase
        .from('csv_data_entries')
        .delete()
        .eq('id', id);

      if (error) throw error;
      setSavedRecords(savedRecords.filter(r => r.id !== id));
    } catch (err: any) {
      alert('삭제 실패: ' + err.message);
    }
  };

  const sqlQueryText = `-- 1. Supabase SQL Editor에서 실행할 테이블 생성 쿼리
create table if not exists public.csv_data_entries (
  id uuid default gen_random_uuid() primary key,
  user_email text,
  file_name text,
  row_data jsonb not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Row Level Security (RLS) 설정
alter table public.csv_data_entries enable row level security;

-- 3. 인증된 사용자 권한 정책 생성
create policy "Allow authenticated users to insert csv data"
  on public.csv_data_entries for insert
  to authenticated
  with check (true);

create policy "Allow authenticated users to read csv data"
  on public.csv_data_entries for select
  to authenticated
  using (true);

create policy "Allow authenticated users to delete csv data"
  on public.csv_data_entries for delete
  to authenticated
  using (true);`;

  return (
    <div className="space-y-10 animate-fadeIn">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-emerald-50/90 via-teal-50/40 to-white border border-emerald-100 rounded-3xl p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
            <Database className="w-3.5 h-3.5 text-emerald-600" />
            <span>Supabase Cumulative Storage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight mb-2">
            CSV 데이터 관리 및 누적 저장
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            CSV 파일을 업로드하여 Supabase DB에 실시간으로 파싱하고 누적 저장할 수 있습니다. 
            로그인 계정({user?.email})으로 안전하게 기록됩니다.
          </p>
        </div>

        <button
          onClick={() => setShowSql(!showSql)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 text-white text-xs font-medium hover:bg-slate-700 transition-colors shadow-sm"
        >
          <Code className="w-4 h-4" />
          <span>{showSql ? 'SQL 가이드 숨기기' : 'Supabase DB SQL 보기'}</span>
        </button>
      </div>

      {/* SQL Schema Guide Modal / Box */}
      {showSql && (
        <div className="bg-slate-900 text-slate-100 rounded-2xl p-6 shadow-lg space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="font-bold text-emerald-400 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>Supabase SQL Editor 실행 쿼리 (필수)</span>
            </span>
            <button
              onClick={() => {
                navigator.clipboard.writeText(sqlQueryText);
                alert('SQL이 클립보드에 복사되었습니다.');
              }}
              className="px-3 py-1 rounded bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs"
            >
              SQL 복사
            </button>
          </div>
          <pre className="overflow-x-auto text-emerald-300 p-2 leading-relaxed">
            {sqlQueryText}
          </pre>
        </div>
      )}

      {/* CSV Upload Section */}
      <div className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <Upload className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 text-lg">CSV 파일 업로드</h3>
            <p className="text-xs text-slate-500">쉼표(,)로 구분된 CSV 파일을 선택해주세요.</p>
          </div>
        </div>

        <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center hover:border-emerald-400 transition-colors bg-slate-50/50 relative">
          <input
            type="file"
            accept=".csv"
            onChange={handleFileUpload}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <FileSpreadsheet className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
          <p className="text-sm font-bold text-slate-700 mb-1">
            {fileName ? `선택된 파일: ${fileName}` : '여기를 클릭하거나 CSV 파일을 드래그하여 업로드하세요'}
          </p>
          <p className="text-xs text-slate-400">지원 형식: .csv (UTF-8)</p>
        </div>

        {error && (
          <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 text-rose-700 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {successMsg && (
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-emerald-800 text-xs flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>{successMsg}</span>
          </div>
        )}

        {parsedRows.length > 0 && (
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-slate-800">
                미리보기 ({parsedRows.length}개 행 감지됨)
              </span>
              <button
                onClick={handleSaveToSupabase}
                disabled={loading}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors shadow-sm disabled:opacity-50 flex items-center gap-2"
              >
                {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Database className="w-4 h-4" />}
                <span>Supabase에 누적 저장하기</span>
              </button>
            </div>

            <div className="overflow-x-auto border border-slate-200 rounded-xl max-h-60">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-slate-100 text-slate-800 uppercase font-bold sticky top-0">
                  <tr>
                    {headers.map((h, i) => (
                      <th key={i} className="px-4 py-3 border-b border-slate-200">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {parsedRows.slice(0, 5).map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-slate-50 border-b border-slate-100">
                      {headers.map((h, cIdx) => (
                        <td key={cIdx} className="px-4 py-2.5 truncate max-w-xs">{row[h] || ''}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              {parsedRows.length > 5 && (
                <div className="p-2 text-center text-xs text-slate-400 bg-slate-50">
                  외 {parsedRows.length - 5}개 행 생략...
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Saved Records in Supabase */}
      <div className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-lg">Supabase 누적 데이터 목록</h3>
              <p className="text-xs text-slate-500">데이터베이스에 저장된 CSV 누적 기록 ({savedRecords.length}개)</p>
            </div>
          </div>
          <button
            onClick={fetchRecords}
            disabled={fetching}
            className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
            title="새로고침"
          >
            <RefreshCw className={`w-4 h-4 ${fetching ? 'animate-spin' : ''}`} />
          </button>
        </div>

        {savedRecords.length === 0 ? (
          <div className="text-center py-12 text-slate-400 border border-dashed border-slate-200 rounded-2xl">
            저장된 데이터가 없습니다. CSV 파일을 업로드하여 누적 저장해보세요.
          </div>
        ) : (
          <div className="overflow-x-auto border border-slate-200 rounded-2xl">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-slate-100 text-slate-800 uppercase font-bold">
                <tr>
                  <th className="px-4 py-3">ID</th>
                  <th className="px-4 py-3">파일명</th>
                  <th className="px-4 py-3">업로더</th>
                  <th className="px-4 py-3">데이터 내용 (JSON)</th>
                  <th className="px-4 py-3">저장 일시</th>
                  <th className="px-4 py-3 text-right">관리</th>
                </tr>
              </thead>
              <tbody>
                {savedRecords.map((rec) => (
                  <tr key={rec.id} className="hover:bg-slate-50 border-b border-slate-100">
                    <td className="px-4 py-3 font-mono text-slate-400">{rec.id.slice(0, 8)}...</td>
                    <td className="px-4 py-3 font-medium text-slate-800">{rec.file_name}</td>
                    <td className="px-4 py-3 text-slate-600">{rec.user_email}</td>
                    <td className="px-4 py-3 font-mono text-slate-600 truncate max-w-xs">
                      {JSON.stringify(rec.row_data)}
                    </td>
                    <td className="px-4 py-3 text-slate-500">
                      {new Date(rec.created_at).toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button
                        onClick={() => handleDeleteRecord(rec.id)}
                        className="text-slate-400 hover:text-red-500 p-1 rounded transition-colors"
                        title="삭제"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

    </div>
  );
};
