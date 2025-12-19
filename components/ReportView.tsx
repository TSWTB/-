
import React from 'react';
import { BrainStats, UserProgress } from '../types';

interface ReportViewProps {
  stats: BrainStats;
  progress: UserProgress;
}

const ReportView: React.FC<ReportViewProps> = ({ stats, progress }) => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white rounded-[40px] shadow-sm border border-slate-100 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-10 text-white flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold mb-2">第 12 期 · 脑力特训周报</h2>
            <p className="opacity-80">统计周期：2023.10.23 - 2023.10.29</p>
          </div>
          <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center text-3xl">
            🏆
          </div>
        </div>

        <div className="p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <p className="text-slate-400 text-sm mb-1 uppercase font-bold tracking-widest">学习词汇量</p>
              <p className="text-5xl font-black text-slate-800">{progress.totalWords}</p>
              <div className="mt-2 text-emerald-500 font-bold text-sm">比上周 +12%</div>
            </div>
            <div className="text-center">
              <p className="text-slate-400 text-sm mb-1 uppercase font-bold tracking-widest">综合脑力值</p>
              <p className="text-5xl font-black text-blue-600">{progress.brainPower}</p>
              <div className="mt-2 text-blue-500 font-bold text-sm">Lv. 8 脑力精英</div>
            </div>
            <div className="text-center">
              <p className="text-slate-400 text-sm mb-1 uppercase font-bold tracking-widest">全国排名</p>
              <p className="text-5xl font-black text-slate-800">Top {100 - progress.percentile}%</p>
              <div className="mt-2 text-orange-500 font-bold text-sm">超过 12,042 人</div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-800">本周亮点</h3>
            <div className="space-y-4">
              <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100 flex items-start gap-4">
                <span className="text-2xl">🔥</span>
                <div>
                  <p className="font-bold text-emerald-800 mb-1">持之以恒</p>
                  <p className="text-sm text-emerald-700 opacity-80">你本周每天都完成了英语情景训练，触发了“艾宾浩斯之眼”勋章，记忆巩固率提升了 15%。</p>
                </div>
              </div>
              <div className="p-6 bg-amber-50 rounded-3xl border border-amber-100 flex items-start gap-4">
                <span className="text-2xl">💡</span>
                <div>
                  <p className="font-bold text-amber-800 mb-1">情景应用专家</p>
                  <p className="text-sm text-amber-700 opacity-80">在“中英夹杂”测试中，你的语境还原度极高，表明你的发散思维正在变强。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportView;
