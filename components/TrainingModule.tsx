
import React, { useState, useEffect } from 'react';
import { Word } from '../types';

interface TrainingModuleProps {
  word: Word;
  onNext: () => void;
  onComplete: () => void;
}

const TrainingModule: React.FC<TrainingModuleProps> = ({ word, onNext, onComplete }) => {
  const [step, setStep] = useState<'phonics' | 'context' | 'interaction'>('phonics');
  const [isRecording, setIsRecording] = useState(false);
  const [recorded, setRecorded] = useState(false);

  useEffect(() => {
    setStep('phonics');
    setRecorded(false);
  }, [word]);

  const handleRecord = () => {
    setIsRecording(true);
    setTimeout(() => {
      setIsRecording(false);
      setRecorded(true);
      if (step === 'interaction') {
        // Just visual feedback for the demo
      }
    }, 2000);
  };

  const nextStep = () => {
    if (step === 'phonics') setStep('context');
    else if (step === 'context') setStep('interaction');
    else {
      onComplete();
      onNext();
    }
  };

  return (
    <div className="max-w-4xl mx-auto h-full flex flex-col items-center justify-center gap-12 py-10">
      <div className="w-full flex justify-between items-center px-4">
        <div className="h-2 flex-1 bg-slate-200 rounded-full mx-4 overflow-hidden">
          <div className="h-full bg-blue-500 transition-all duration-500" style={{ width: step === 'phonics' ? '33%' : step === 'context' ? '66%' : '100%' }}></div>
        </div>
        <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">{step}</span>
      </div>

      {step === 'phonics' && (
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <h2 className="text-8xl font-black text-slate-800 mb-6 animate-bounce">{word.word}</h2>
          <p className="text-3xl font-medium text-blue-600 mb-8 bg-blue-50 px-6 py-3 rounded-2xl tracking-widest">
            {word.phonics.split('-').map((part, i) => (
              <span key={i} className="hover:text-orange-500 cursor-pointer transition-colors px-1 underline decoration-2 decoration-blue-200">
                {part}
              </span>
            ))}
          </p>
          <p className="text-xl text-slate-400">点击音节听自然拼读发音</p>
        </div>
      )}

      {step === 'context' && (
        <div className="flex-1 flex flex-col items-center justify-center max-w-2xl">
          <div className="bg-white p-10 rounded-[40px] shadow-2xl border border-slate-100 relative mb-8">
            <div className="absolute -top-4 -left-4 bg-orange-500 text-white px-4 py-1 rounded-lg font-bold">情景记忆法</div>
            <p className="text-3xl leading-relaxed text-slate-700 font-medium">
              {word.contextSentence.split('[').map((part, i) => {
                if (part.includes(']')) {
                  const [w, rest] = part.split(']');
                  return <React.Fragment key={i}>
                    <span className="text-blue-600 font-bold border-b-4 border-blue-200 px-1">{w}</span>
                    {rest}
                  </React.Fragment>
                }
                return part;
              })}
            </p>
          </div>
          <p className="text-lg text-slate-500 text-center">将单词带入中文语境，大脑更容易理解单词的真实含义并形成神经联结。</p>
        </div>
      )}

      {step === 'interaction' && (
        <div className="flex-1 flex flex-col items-center justify-center w-full">
          <h3 className="text-2xl font-bold text-slate-800 mb-12">现在轮到你了！大声读出这个单词</h3>
          <div className="relative group">
            <button 
              onMouseDown={handleRecord}
              onMouseUp={() => {}}
              className={`w-40 h-40 rounded-full flex items-center justify-center transition-all ${
                isRecording ? 'bg-red-500 scale-110 shadow-xl shadow-red-200' : 'bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-200'
              }`}
            >
              {isRecording ? (
                <div className="flex gap-1">
                  <div className="w-1 h-8 bg-white animate-pulse"></div>
                  <div className="w-1 h-12 bg-white animate-pulse delay-75"></div>
                  <div className="w-1 h-10 bg-white animate-pulse delay-150"></div>
                  <div className="w-1 h-6 bg-white animate-pulse delay-300"></div>
                </div>
              ) : (
                <span className="text-5xl">🎙️</span>
              )}
            </button>
            {recorded && !isRecording && (
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-bold animate-fade-in">
                ✨ 发音完美！脑力 +5
              </div>
            )}
          </div>
        </div>
      )}

      <button 
        onClick={nextStep}
        disabled={step === 'interaction' && !recorded}
        className={`px-12 py-5 rounded-3xl text-2xl font-bold shadow-xl transition-all ${
          step === 'interaction' && !recorded 
          ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
          : 'bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:scale-105 active:scale-95'
        }`}
      >
        {step === 'interaction' ? '完成训练' : '我学会了'}
      </button>
    </div>
  );
};

export default TrainingModule;
