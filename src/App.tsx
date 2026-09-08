/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TabType } from './types';
import { Header } from './components/Header';
import { SidebarTabs } from './components/SidebarTabs';
import { CompanyGuide } from './components/CompanyGuide';
import { OfficeGuide } from './components/OfficeGuide';
import { TodoList } from './components/TodoList';
import { FaqContacts } from './components/FaqContacts';
import { INITIAL_TODOS } from './data/guideData';
import { Heart, Sparkles } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('company');
  const [completedCount, setCompletedCount] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(INITIAL_TODOS.length);

  useEffect(() => {
    const saved = localStorage.getItem('onboarding_todos');
    if (saved) {
      try {
        const todos = JSON.parse(saved);
        setCompletedCount(todos.filter((t: any) => t.completed).length);
        setTotalCount(todos.length);
      } catch (e) {
        console.error(e);
      }
    } else {
      setCompletedCount(INITIAL_TODOS.filter(t => t.completed).length);
      setTotalCount(INITIAL_TODOS.length);
    }
  }, []);

  const handleUpdateCount = (completed: number, total: number) => {
    setCompletedCount(completed);
    setTotalCount(total);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-slate-800 flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* Handbook Top Header */}
      <Header completedCount={completedCount} totalCount={totalCount} />

      {/* Main Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8">
        
        {/* Navigation Tabs */}
        <SidebarTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          completedCount={completedCount}
          totalCount={totalCount}
        />

        {/* Tab Content Area */}
        <div className="bg-white/60 backdrop-blur-sm border border-slate-200/60 rounded-3xl p-6 sm:p-10 shadow-sm">
          {activeTab === 'company' && <CompanyGuide />}
          {activeTab === 'office' && <OfficeGuide />}
          {activeTab === 'todo' && <TodoList onUpdateCount={handleUpdateCount} />}
          {activeTab === 'contacts' && <FaqContacts />}
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/80 bg-white/80 py-6 px-6 mt-16 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-700">Inspire Onboarding Guidebook</span>
            <span>© 2026 All Rights Reserved.</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-500">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for new team members</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
