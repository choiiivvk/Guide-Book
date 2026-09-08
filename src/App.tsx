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
import { CsvDataManager } from './components/CsvDataManager';
import { LoginModal } from './components/LoginModal';
import { SupabaseSetupModal } from './components/SupabaseSetupModal';
import { INITIAL_TODOS } from './data/guideData';
import { supabase } from './lib/supabase';
import { Heart, LogOut, Settings } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('company');
  const [completedCount, setCompletedCount] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(INITIAL_TODOS.length);
  
  const [user, setUser] = useState<any>(null);
  const [authLoading, setAuthLoading] = useState<boolean>(true);
  const [showSetupModal, setShowSetupModal] = useState<boolean>(false);

  useEffect(() => {
    // Check if Supabase client is configured
    if (!supabase) {
      setShowSetupModal(true);
      setAuthLoading(false);
      return;
    }

    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setAuthLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setAuthLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

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

  const handleLogout = async () => {
    if (supabase) {
      await supabase.auth.signOut();
    }
    setUser(null);
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#FDFBF7] flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  // If Supabase setup modal is forced or no user logged in
  if (showSetupModal && !supabase) {
    return <SupabaseSetupModal onConnected={() => { setShowSetupModal(false); window.location.reload(); }} />;
  }

  if (!user) {
    return (
      <>
        <LoginModal
          onLoginSuccess={(loggedInUser) => setUser(loggedInUser)}
          onOpenSetup={() => setShowSetupModal(true)}
        />
        {showSetupModal && (
          <SupabaseSetupModal onConnected={() => { setShowSetupModal(false); }} />
        )}
      </>
    );
  }

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
          {activeTab === 'csv' && <CsvDataManager user={user} />}
          {activeTab === 'contacts' && <FaqContacts />}
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/80 bg-white/80 py-6 px-6 mt-16 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-bold text-slate-700">Inspire Onboarding Guidebook</span>
            <span className="text-slate-300">|</span>
            <span className="text-emerald-700 font-medium">접속 계정: {user.email}</span>
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowSetupModal(true)}
              className="inline-flex items-center gap-1 text-slate-500 hover:text-emerald-600 transition-colors"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Supabase 설정</span>
            </button>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1 text-rose-600 hover:text-rose-700 font-medium transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>로그아웃</span>
            </button>
          </div>
        </div>
      </footer>

      {showSetupModal && (
        <SupabaseSetupModal onConnected={() => { setShowSetupModal(false); window.location.reload(); }} />
      )}

    </div>
  );
}
