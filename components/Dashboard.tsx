
import React from 'react';
import { ViewType, UserProgress } from '../types';

interface DashboardProps {
  progress: UserProgress;
  setView: (view: ViewType) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ progress, setView }) => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 mb-2">早安，睿睿同学！👋</h2>
          <p className="text-slate-500">根据你的脑力测评，今日为你准备了 3 个特训任务。</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium text-slate-400 mb-1">击败了全国</p>
          <p className="text-4xl font-bold text-blue-600">{progress.percentile}%<span className="text-sm text-slate-400 ml-1">的小朋友</span></p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl mb-4">🔤</div>
            <h3 className="text-xl font-bold text-slate-800 mb-1">英语特训</h3>
            <p className="text-sm text-slate-500 mb-4">情景拼读记忆 · 5个新词</p>
          </div>
          <button 
            onClick={() => setView(ViewType.TRAINING)}
            className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors"
          >
            开始训练
          </button>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between opacity-50 grayscale cursor-not-allowed">
          <div>
            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-2xl mb-4">🔢</div>
            <h3 className="text-xl font-bold text-slate-800 mb-1">数学逻辑</h3>
            <p className="text-sm text-slate-500 mb-4">逻辑矩阵训练 · 10道题</p>
          </div>
          <button className="w-full py-3 bg-slate-200 text-slate-400 rounded-xl font-bold">暂未开启</button>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between opacity-50 grayscale cursor-not-allowed">
          <div>
            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-2xl mb-4">📚</div>
            <h3 className="text-xl font-bold text-slate-800 mb-1">语文思维</h3>
            <p className="text-sm text-slate-500 mb-4">快速阅读训练 · 1篇章</p>
          </div>
          <button className="w-full py-3 bg-slate-200 text-slate-400 rounded-xl font-bold">暂未开启</button>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
        <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
          <span>📅</span> 学习打卡进度 (艾宾浩斯复习提醒)
        </h3>
        <div className="flex justify-between items-center">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl border-2 ${
                i < 3 ? 'bg-blue-600 border-blue-600 text-white' : 'bg-slate-50 border-slate-200 text-slate-300'
              }`}>
                {i < 3 ? '✓' : i + 1}
              </div>
              <span className="text-xs font-medium text-slate-500">Day {i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
