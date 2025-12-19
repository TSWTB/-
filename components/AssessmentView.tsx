
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { BrainStats } from '../types';

interface AssessmentViewProps {
  stats: BrainStats;
}

const AssessmentView: React.FC<AssessmentViewProps> = ({ stats }) => {
  const data = [
    { subject: '记忆力', value: stats.memory },
    { subject: '逻辑力', value: stats.logic },
    { subject: '专注力', value: stats.focus },
    { subject: '反应速度', value: stats.speed },
    { subject: '创造力', value: stats.creativity },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-[40px] shadow-sm border border-slate-100 p-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">大脑训练全景图</h2>
          <p className="text-slate-500">基于近30天的训练表现，你的【记忆力】处于爆发成长期。</p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid stroke="#E2E8F0" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748B', fontSize: 14 }} />
                <Radar
                  name="当前能力"
                  dataKey="value"
                  stroke="#3B82F6"
                  fill="#3B82F6"
                  fillOpacity={0.5}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            {data.map((item) => (
              <div key={item.subject} className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <p className="text-sm text-slate-500 mb-1">{item.subject}</p>
                <div className="flex items-end gap-2">
                  <span className="text-2xl font-bold text-slate-800">{item.value}</span>
                  <span className="text-xs text-emerald-500 font-bold mb-1">↑ 12%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 p-6 bg-blue-50 rounded-3xl border border-blue-100">
          <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
            🚀 训练方案建议
          </h4>
          <p className="text-blue-700 text-sm leading-relaxed">
            根据测评显示，你的逻辑思维目前稍低于全国平均水平。本周已为你自动调整【英语模块】的训练策略：增加了“拼读拆解”和“语境推理”的深度，旨在通过英语学习同步刺激前额叶皮层，提升逻辑处理能力。
          </p>
        </div>
      </div>
    </div>
  );
};

export default AssessmentView;
