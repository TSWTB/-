
import React, { useState, useEffect } from 'react';
import { ViewType, Word, BrainStats, UserProgress } from './types';
import { MOCK_WORDS, INITIAL_BRAIN_STATS } from './constants';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import TrainingModule from './components/TrainingModule';
import ParentPortal from './components/ParentPortal';
import AssessmentView from './components/AssessmentView';
import ReportView from './components/ReportView';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>(ViewType.DASHBOARD);
  const [words, setWords] = useState<Word[]>(MOCK_WORDS);
  const [brainStats, setBrainStats] = useState<BrainStats>(INITIAL_BRAIN_STATS);
  const [progress, setProgress] = useState<UserProgress>({
    streak: 12,
    totalWords: 450,
    masteredCount: 128,
    brainPower: 685,
    percentile: 88
  });

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const handleCompleteWord = (wordId: string) => {
    setWords(prev => prev.map(w => w.id === wordId ? { ...w, status: 'mastered' } : w));
    setProgress(prev => ({ ...prev, masteredCount: prev.masteredCount + 1, brainPower: prev.brainPower + 5 }));
  };

  return (
    <div className="flex h-screen w-full bg-[#F8FAFC] overflow-hidden">
      {/* PPT Proposal Panel (Left side summary for user) */}
      <div className="hidden lg:flex flex-col w-80 bg-white border-r border-slate-200 p-6 overflow-y-auto">
        <h2 className="text-xl font-bold text-blue-600 mb-6">核心策划案 (PPT概要)</h2>
        <div className="space-y-6 text-sm text-slate-600">
          <section>
            <h3 className="font-bold text-slate-800 border-l-4 border-blue-500 pl-2 mb-2">1. 功能定位</h3>
            <p>基于脑力测评的“语数英”个性化大脑训练系统。解决“学什么、怎么学”的家长焦虑。</p>
          </section>
          <section>
            <h3 className="font-bold text-slate-800 border-l-4 border-blue-500 pl-2 mb-2">2. 英语核心：情景拼读</h3>
            <p>融合自然拼读与“中英夹杂情景法”。通过[单词替换]让孩子在母语语境中即学即用，强化长效记忆。</p>
          </section>
          <section>
            <h3 className="font-bold text-slate-800 border-l-4 border-blue-500 pl-2 mb-2">3. 脑力自适应</h3>
            <p>训练量级与难度实时匹配脑力测评数据，基于艾宾浩斯理论动态调整复习周期。</p>
          </section>
          <section>
            <h3 className="font-bold text-slate-800 border-l-4 border-blue-500 pl-2 mb-2">4. 家长端打通</h3>
            <p>全透明学习进度同步，家长可设置针对性检测。数据化呈现孩子大脑能力的周期性提升。</p>
          </section>
          <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-xs text-blue-700 font-medium">✨ 激励机制：每日打卡换取勋章与大脑能量点，打造高粘性学习闭环。</p>
          </div>
        </div>
      </div>

      {/* Main Interactive Demo Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">智</span>
            </div>
            <h1 className="text-lg font-bold text-slate-800 tracking-tight">智汇大脑 · 英语模块演示</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
              <span>🔥 连续打卡 {progress.streak} 天</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm">
              <img src="https://picsum.photos/seed/child/100/100" alt="Avatar" />
            </div>
          </div>
        </header>

        <div className="flex-1 flex overflow-hidden">
          <Sidebar currentView={currentView} setView={setCurrentView} />
          
          <main className="flex-1 overflow-y-auto p-8">
            {currentView === ViewType.DASHBOARD && (
              <Dashboard progress={progress} setView={setCurrentView} />
            )}
            {currentView === ViewType.TRAINING && (
              <TrainingModule 
                word={words[currentWordIndex]} 
                onNext={() => setCurrentWordIndex((prev) => (prev + 1) % words.length)}
                onComplete={() => handleCompleteWord(words[currentWordIndex].id)}
              />
            )}
            {currentView === ViewType.PARENT && <ParentPortal words={words} progress={progress} />}
            {currentView === ViewType.ASSESSMENT && <AssessmentView stats={brainStats} />}
            {currentView === ViewType.REPORT && <ReportView stats={brainStats} progress={progress} />}
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
