
import React from 'react';
import { Word, UserProgress } from '../types';

interface ParentPortalProps {
  words: Word[];
  progress: UserProgress;
}

const ParentPortal: React.FC<ParentPortalProps> = ({ words, progress }) => {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-800">家长监控中心</h2>
        <div className="bg-white border border-slate-200 px-4 py-2 rounded-xl flex items-center gap-2 text-sm text-slate-600 shadow-sm">
          <span>📱 实时同步中</span>
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <p className="text-xs text-slate-400 mb-1 uppercase font-bold tracking-wider">今日学习时长</p>
          <p className="text-3xl font-bold text-slate-800">24 <span className="text-sm font-normal text-slate-500">分钟</span></p>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <p className="text-xs text-slate-400 mb-1 uppercase font-bold tracking-wider">新词掌握</p>
          <p className="text-3xl font-bold text-slate-800">12 <span className="text-sm font-normal text-slate-500">个</span></p>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <p className="text-xs text-slate-400 mb-1 uppercase font-bold tracking-wider">复习任务</p>
          <p className="text-3xl font-bold text-orange-500">8 <span className="text-sm font-normal text-slate-500">个</span></p>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <p className="text-xs text-slate-400 mb-1 uppercase font-bold tracking-wider">训练积极性</p>
          <p className="text-3xl font-bold text-emerald-500">极高</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-800">最近掌握的单词 (艾宾浩斯曲线)</h3>
            <button className="text-blue-600 text-sm font-bold">查看全部</button>
          </div>
          <div className="space-y-4">
            {words.map((w) => (
              <div key={w.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                <div>
                  <p className="font-bold text-slate-800">{w.word}</p>
                  <p className="text-xs text-slate-400">{w.translation}</p>
                </div>
                <div className="text-right">
                  <div className="h-1.5 w-24 bg-slate-200 rounded-full overflow-hidden mb-1">
                    <div className={`h-full bg-blue-500`} style={{ width: w.status === 'mastered' ? '100%' : '30%' }}></div>
                  </div>
                  <p className="text-[10px] text-slate-400 font-medium">下次复习: 3天后</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white">
            <h3 className="text-xl font-bold mb-4">家长挑战设置</h3>
            <p className="text-sm opacity-80 mb-6">为了巩固记忆，您可以为孩子设置一个周末挑战任务，通过情景对话测试掌握情况。</p>
            <button className="w-full py-4 bg-white text-blue-600 rounded-2xl font-bold hover:bg-blue-50 transition-colors">
              设置 10 词快速抽测
            </button>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8">
            <h3 className="font-bold text-slate-800 mb-4">大脑训练周期反馈</h3>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-xl shrink-0">📈</div>
              <div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  本周期孩子在【注意力持久度】上有显著提升，反映在单词拼读的连贯性上。建议周末进行一些【逻辑类】户外活动以配合目前的脑力发展趋势。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentPortal;
