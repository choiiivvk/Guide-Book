import React, { useState, useEffect } from 'react';
import { TodoItem } from '../types';
import { INITIAL_TODOS } from '../data/guideData';
import { CheckSquare, Plus, Trash2, Calendar, CheckCircle, Sparkles, Filter, RotateCcw } from 'lucide-react';

export const TodoList: React.FC<{
  onUpdateCount: (completed: number, total: number) => void;
}> = ({ onUpdateCount }) => {
  const [todos, setTodos] = useState<TodoItem[]>(() => {
    const saved = localStorage.getItem('onboarding_todos');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return INITIAL_TODOS;
  });

  const [filterCategory, setFilterCategory] = useState<'all' | 'day1' | 'week1' | 'month1'>('all');
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<'day1' | 'week1' | 'month1'>('day1');
  const [newDueDate, setNewDueDate] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    localStorage.setItem('onboarding_todos', JSON.stringify(todos));
    const completed = todos.filter(t => t.completed).length;
    onUpdateCount(completed, todos.length);
  }, [todos, onUpdateCount]);

  const toggleTodo = (id: string) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newItem: TodoItem = {
      id: `custom-${Date.now()}`,
      category: newCategory,
      title: newTitle.trim(),
      description: '사용자 추가 업무 항목',
      completed: false,
      dueDate: newDueDate.trim() || '기한 미정'
    };

    setTodos([newItem, ...todos]);
    setNewTitle('');
    setNewDueDate('');
    setIsAdding(false);
  };

  const resetTodos = () => {
    if (window.confirm('체크리스트를 초기 상태로 되돌리시겠습니까?')) {
      setTodos(INITIAL_TODOS);
      localStorage.removeItem('onboarding_todos');
    }
  };

  const filteredTodos = todos.filter(t => {
    if (filterCategory === 'all') return true;
    return t.category === filterCategory;
  });

  const completedCount = todos.filter(t => t.completed).length;
  const totalCount = todos.length;
  const percent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const categoryLabels = {
    day1: { label: 'Day 1 (입사 첫날)', badge: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
    week1: { label: 'Week 1 (첫 주 적응)', badge: 'bg-sky-100 text-sky-800 border-sky-200' },
    month1: { label: 'Month 1 (한 달 완성)', badge: 'bg-amber-100 text-amber-800 border-amber-200' }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Header & Stats Banner */}
      <div className="bg-gradient-to-br from-amber-50/95 via-orange-50/40 to-white border border-amber-200/80 rounded-3xl p-8 shadow-sm relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold mb-3">
              <CheckSquare className="w-3.5 h-3.5 text-amber-600" />
              <span>Onboarding Checklist</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight mb-2">
              신규입사자 필수 To-do List
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              입사 후 단계별로 진행해야 할 필수 업무를 체크하고 완수해 보세요. 
              체크한 내용은 브라우저에 안전하게 저장됩니다.
            </p>
          </div>

          <div className="bg-white/90 border border-amber-200 rounded-2xl p-5 shadow-sm min-w-[260px]">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-bold text-slate-700">전체 달성률</span>
              <span className="text-sm font-extrabold text-amber-600">{completedCount} / {totalCount} 완료 ({percent}%)</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden p-0.5 border border-slate-200/60">
              <div
                className="bg-gradient-to-r from-amber-400 to-emerald-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${percent}%` }}
              ></div>
            </div>
            {percent === 100 && (
              <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg w-full justify-center border border-emerald-200">
                <Sparkles className="w-3.5 h-3.5" />
                <span>모든 온보딩 미션을 완수하셨습니다! 축하합니다!</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Filter & Actions Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 text-slate-500 text-xs font-semibold mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>단계별 필터:</span>
          </div>
          {[
            { id: 'all', label: '전체 보기' },
            { id: 'day1', label: 'Day 1' },
            { id: 'week1', label: 'Week 1' },
            { id: 'month1', label: 'Month 1' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterCategory(tab.id as any)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                filterCategory === tab.id
                  ? 'bg-slate-800 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsAdding(!isAdding)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-600 text-white text-xs font-medium hover:bg-amber-700 transition-colors shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>할 일 추가</span>
          </button>
          <button
            onClick={resetTodos}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 text-slate-600 text-xs font-medium hover:bg-slate-200 transition-colors"
            title="기본값으로 초기화"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>초기화</span>
          </button>
        </div>

      </div>

      {/* Add New Task Form Modal/Box */}
      {isAdding && (
        <form onSubmit={handleAddTodo} className="bg-amber-50/80 border border-amber-200 rounded-2xl p-6 shadow-sm space-y-4 animate-fadeIn">
          <h4 className="font-bold text-slate-800 text-base flex items-center gap-2">
            <Plus className="w-4 h-4 text-amber-700" />
            <span>새로운 온보딩 할 일 추가하기</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-slate-600 mb-1">할 일 제목</label>
              <input
                type="text"
                placeholder="예: 부서 내 멘토와 커피챗 진행하기"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-amber-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">단계 선택</label>
              <select
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value as any)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-amber-200 text-sm text-slate-800 focus:outline-none"
              >
                <option value="day1">Day 1 (입사 첫날)</option>
                <option value="week1">Week 1 (첫 주 적응)</option>
                <option value="month1">Month 1 (한 달 완성)</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">권장 기한 (선택)</label>
            <input
              type="text"
              placeholder="예: 입사 2일 차 오전까지"
              value={newDueDate}
              onChange={(e) => setNewDueDate(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-amber-200 text-sm text-slate-800 focus:outline-none"
            />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setIsAdding(false)}
              className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-600 hover:bg-slate-50"
            >
              취소
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-amber-600 text-white text-xs font-medium hover:bg-amber-700 shadow-sm"
            >
              추가하기
            </button>
          </div>
        </form>
      )}

      {/* Todo List Items */}
      <div className="space-y-3">
        {filteredTodos.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center text-slate-400">
            <CheckSquare className="w-10 h-10 mx-auto mb-3 opacity-40" />
            <p className="text-sm font-medium">해당 단계에 등록된 할 일이 없습니다.</p>
          </div>
        ) : (
          filteredTodos.map((todo) => {
            const catInfo = categoryLabels[todo.category] || categoryLabels.day1;
            return (
              <div
                key={todo.id}
                onClick={() => toggleTodo(todo.id)}
                className={`bg-white border rounded-2xl p-5 shadow-sm transition-all duration-200 flex items-start gap-4 cursor-pointer group hover:border-amber-300 ${
                  todo.completed ? 'bg-slate-50/70 border-slate-200 opacity-75' : 'border-slate-200'
                }`}
              >
                {/* Checkbox */}
                <div className="pt-0.5 flex-shrink-0">
                  <div className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-colors ${
                    todo.completed ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-300 bg-white group-hover:border-amber-500'
                  }`}>
                    {todo.completed && <CheckCircle className="w-4 h-4" />}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${catInfo.badge}`}>
                      {catInfo.label}
                    </span>
                    {todo.dueDate && (
                      <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                        <Calendar className="w-3 h-3" />
                        <span>{todo.dueDate}</span>
                      </span>
                    )}
                  </div>
                  <h4 className={`text-base font-bold transition-colors ${
                    todo.completed ? 'line-through text-slate-400' : 'text-slate-800'
                  }`}>
                    {todo.title}
                  </h4>
                  {todo.description && (
                    <p className={`text-sm mt-1 leading-relaxed ${todo.completed ? 'text-slate-400' : 'text-slate-600'}`}>
                      {todo.description}
                    </p>
                  )}
                </div>

                {/* Delete button for custom or all */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteTodo(todo.id);
                  }}
                  className="text-slate-300 hover:text-red-500 p-1.5 rounded-lg transition-colors"
                  title="항목 삭제"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            );
          })
        )}
      </div>

    </div>
  );
};
