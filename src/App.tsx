/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TabType } from './types';
import { Header } from './components/Header';
import { SidebarTabs } from './components/SidebarTabs';
import { CompanyGuide } from './components/CompanyGuide';
import { MannerGuide } from './components/MannerGuide';
import { TodoList } from './components/TodoList';
import { FaqContacts } from './components/FaqContacts';
import { INITIAL_TODOS } from './data/guideData';

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
    <div className="min-h-screen bg-[#FDFBF7] text-slate-800 flex flex-col font-sans selection:bg-red-100 selection:text-red-900">
      
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
          {activeTab === 'manner' && <MannerGuide />}
          {activeTab === 'todo' && <TodoList onUpdateCount={handleUpdateCount} />}
          {activeTab === 'contacts' && <FaqContacts />}
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/80 bg-white/80 py-6 px-6 mt-16 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-bold text-slate-700">LX MMA Onboarding Guidebook</span>
            <span className="text-slate-300">|</span>
            <span className="text-red-700 font-medium">신규입사자 온보딩 프로그램</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
