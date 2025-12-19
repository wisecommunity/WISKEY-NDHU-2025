
import React, { useState, useEffect } from 'react';
import { SESSIONS, REFLECTIONS, TOUCH_CATEGORIES, TOUCH_CATEGORIES_SESSION_2 } from './constants';
import { SessionStatus } from './types';
import { 
  Users, 
  Target, 
  Zap, 
  GitBranch, 
  History, 
  Clock, 
  MapPin, 
  Video, 
  Image as ImageIcon,
  ChevronRight,
  MonitorPlay,
  BrainCircuit,
  Award,
  Quote
} from 'lucide-react';

const Header = () => (
  <header className="bg-wiskey-red text-white sticky top-0 z-50 shadow-lg">
    <div className="container mx-auto px-4 py-3 md:py-4 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center space-x-3 mb-2 md:mb-0">
        <div className="bg-white p-1.5 rounded-lg">
           <img 
              src="https://drive.google.com/thumbnail?id=1NoLl1tjoWKmIDKy1fPbo_UhY6WWDkzQq&sz=w1000" 
              alt="Course Logo" 
              className="h-8 md:h-10 w-auto object-contain"
            />
        </div>
        <div>
          <h1 className="text-lg md:text-2xl font-bold tracking-tight">當代企業策略</h1>
          <p className="text-[10px] md:text-sm text-red-100 opacity-90">東華大學 EMBA | 陳建男 教授、林益全 教授</p>
        </div>
      </div>
      <div className="flex items-center space-x-6 text-xs md:text-sm">
         <span className="flex items-center"><BrainCircuit className="w-3 h-3 md:w-4 md:h-4 mr-1"/> 度化智能 Evolving Intelligence</span>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <div className="bg-gradient-to-br from-wiskey-dark to-wiskey-red text-white py-8 md:py-20 relative overflow-hidden">
    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6">不確定環境下的決策與領導</h2>
        <p className="text-sm md:text-xl text-red-100 mb-2 md:mb-8 leading-relaxed px-4">
          探索 AI 時代的策略思維，從創業家精神到動態競爭。
          <br className="hidden md:block"/>
          三堂深度課程，紀錄我們共同的學習軌跡。
        </p>
      </div>
    </div>
  </div>
);

const SessionOneDetail = () => {
  const [activeTab, setActiveTab] = useState<'strategy' | 'execution' | 'choice' | 'legacy'>('strategy');

  const tabs = [
    { id: 'strategy', label: '策略', icon: Users, color: 'border-wiskey-red text-wiskey-red' },
    { id: 'execution', label: '執行', icon: Zap, color: 'border-blue-600 text-blue-600' },
    { id: 'choice', label: '選擇', icon: GitBranch, color: 'border-amber-600 text-amber-600' },
    { id: 'legacy', label: '傳承', icon: History, color: 'border-emerald-600 text-emerald-600' },
  ];

  return (
    <div className="space-y-8 md:space-y-16 animate-fade-in pb-12">
      {/* 1. Touch Quotes Section - Optimized for Mobile Spacing */}
      <section>
        <div className="bg-wiskey-red text-white px-5 py-3 rounded-t-xl shadow-md inline-block mb-4 md:mb-8">
           <h3 className="text-xl md:text-2xl font-bold">課堂中最觸動您的一句發言</h3>
        </div>
        
        <div className="space-y-6 md:space-y-12">
          {TOUCH_CATEGORIES.map((category, catIdx) => (
            <div key={catIdx} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
               <div className="bg-gray-50 border-b border-gray-100 p-4 md:p-6">
                  <h4 className="text-lg md:text-xl font-bold text-wiskey-red mb-1 md:mb-2">{category.title}</h4>
                  <p className="text-gray-500 italic text-xs md:text-sm">{category.description}</p>
               </div>
               <div className="p-4 md:p-6">
                  <ul className="space-y-4 md:space-y-6">
                    {category.students.map((student, sIdx) => (
                      <li key={sIdx} className="flex gap-2 md:gap-4 items-start">
                        <span className="text-wiskey-red font-bold whitespace-nowrap pt-0.5 text-sm md:text-base">• {student.name}：</span>
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed bg-gray-50/50 p-3 md:p-4 rounded-lg border border-gray-100 flex-1">
                          {student.quote}
                        </p>
                      </li>
                    ))}
                  </ul>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Definitions Sections - Redesigned with Tabs for Mobile Efficiency */}
      <section className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="bg-gray-800 text-white p-4 md:p-6">
          <h3 className="text-xl md:text-2xl font-bold flex items-center">
            <BrainCircuit className="w-6 h-6 mr-2 text-red-400" />
            深度反思：四大核心定義
          </h3>
          <p className="text-gray-400 text-xs md:text-sm mt-1">點擊下方標籤快速切換不同維度的同學見解</p>
        </div>

        {/* Tab Switcher */}
        <div className="flex overflow-x-auto no-scrollbar border-b border-gray-100 bg-gray-50 snap-x">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 min-w-[80px] py-3 md:py-4 px-2 flex flex-col items-center justify-center transition-all border-b-2 outline-none snap-start
                  ${isActive 
                    ? `${tab.color} bg-white font-bold` 
                    : 'border-transparent text-gray-400 hover:text-gray-600'
                  }
                `}
              >
                <Icon className={`w-5 h-5 md:w-6 md:h-6 mb-1 ${isActive ? '' : 'opacity-50'}`} />
                <span className="text-xs md:text-sm whitespace-nowrap">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="p-4 md:p-8 min-h-[400px]">
          {activeTab === 'strategy' && (
            <div className="animate-in fade-in duration-500">
              <div className="mb-6 flex items-center">
                <div className="w-2 h-8 bg-wiskey-red mr-3 rounded-full"></div>
                <h4 className="text-xl font-bold text-gray-800">策略 (Strategy) — 從規劃到護城河</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {REFLECTIONS.filter(r => r.strategy).map((r, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                    <div className="font-bold text-wiskey-red mb-2 flex items-center text-sm md:text-base">
                      <Users className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      {r.name}
                    </div>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{r.strategy}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'execution' && (
            <div className="animate-in fade-in duration-500">
              <div className="mb-6 flex items-center">
                <div className="w-2 h-8 bg-blue-600 mr-3 rounded-full"></div>
                <h4 className="text-xl font-bold text-gray-800">執行 (Execution) — 從行動到成果</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {REFLECTIONS.filter(r => r.execution).map((r, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                    <div className="font-bold text-blue-600 mb-2 flex items-center text-sm md:text-base">
                      <Zap className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      {r.name}
                    </div>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{r.execution}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'choice' && (
            <div className="animate-in fade-in duration-500">
              <div className="mb-6 flex items-center">
                <div className="w-2 h-8 bg-amber-600 mr-3 rounded-full"></div>
                <h4 className="text-xl font-bold text-gray-800">選擇 (Choice) — 從取捨到智慧</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {REFLECTIONS.filter(r => r.choice).map((r, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                    <div className="font-bold text-amber-600 mb-2 flex items-center text-sm md:text-base">
                      <GitBranch className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      {r.name}
                    </div>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{r.choice}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'legacy' && (
            <div className="animate-in fade-in duration-500">
              <div className="mb-6 flex items-center">
                <div className="w-2 h-8 bg-emerald-600 mr-3 rounded-full"></div>
                <h4 className="text-xl font-bold text-gray-800">傳承 (Legacy) — 從交棒到永續</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {REFLECTIONS.filter(r => r.legacy).map((r, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                    <div className="font-bold text-emerald-600 mb-2 flex items-center text-sm md:text-base">
                      <History className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      {r.name}
                    </div>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{r.legacy}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

const SessionTwoDetail = () => {
  return (
    <div className="space-y-8 md:space-y-12 animate-fade-in pb-12">
      {/* Section 1: Introduction */}
      <section>
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
           <div className="flex-1 w-full">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">創業家思維 + AI 時代的決策與領導</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-3">
                {[
                  "訊息管理看創業家思維",
                  "創意、創新、創業",
                  "創造機會：機會辨識與創造",
                  "組織團隊：AGI時代下的領導力"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700 text-sm md:text-base bg-white p-3 rounded-lg border border-gray-100 md:bg-transparent md:border-none md:p-0">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
           </div>
           <div className="w-full md:w-1/2">
              <div className="rounded-xl overflow-hidden shadow-lg bg-gray-900 aspect-video relative group">
                <img 
                  src="https://i.postimg.cc/L6zZjMGx/Screenshot-2025-12-07-at-7-02-08-PM.png" 
                  alt="Online Class Screenshot" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="text-center p-4">
                      <p className="text-white font-bold text-lg">線上課程紀錄</p>
                      <p className="text-gray-300 text-xs md:text-sm">2025/12/07</p>
                   </div>
                </div>
              </div>
              <p className="text-center text-xs text-gray-500 mt-2">課程全體合影</p>
           </div>
        </div>
      </section>

      <hr className="border-gray-200" />

      {/* Section 2: Guest Speaker (Redesigned) */}
      <section className="bg-gray-900 rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-wiskey-red/10 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3"></div>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          <div className="w-full lg:w-7/12">
             <img 
               src="https://i.postimg.cc/NFBHLJbD/neng-huo-dong-hua-zheng-yi-qi-chuang-ban-ren.png" 
               alt="能火動畫：從創意到創業" 
               className="w-full h-auto rounded-xl md:rounded-2xl shadow-xl ring-1 ring-white/10"
             />
          </div>

          <div className="w-full lg:w-5/12 flex flex-col justify-center text-white">
             <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <span className="px-2 py-0.5 md:px-3 md:py-1 bg-amber-500 text-black text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-full">
                  創業家分享
                </span>
             </div>

             <h3 className="text-2xl md:text-4xl font-bold mb-2 md:mb-3 leading-tight">
               能火動畫：從創意到創業
             </h3>
             <div className="flex items-end gap-2 mb-6 md:mb-8">
                <p className="text-lg md:text-xl text-amber-400 font-medium">
                  鄭義錡 Ethan Cheng
                </p>
                <span className="text-gray-500 text-xs md:text-sm mb-1">/ 創辦人</span>
             </div>

             <div className="space-y-4 md:space-y-6">
                <div className="bg-gray-800/50 border border-gray-700 p-4 md:p-5 rounded-xl hover:bg-gray-800 transition-colors">
                   <div className="flex items-center mb-1 md:mb-2">
                     <Zap className="w-4 h-4 md:w-5 md:h-5 text-blue-400 mr-2" />
                     <h5 className="font-bold text-white text-sm md:text-base">虛擬人 AI 技術</h5>
                   </div>
                   <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                     結合全息投影與 AI，創造鄧麗君、林俊傑等虛擬展演的沉浸式體驗。
                   </p>
                </div>

                <div className="bg-gray-800/50 border border-gray-700 p-4 md:p-5 rounded-xl hover:bg-gray-800 transition-colors">
                   <div className="flex items-center mb-1 md:mb-2">
                      <Award className="w-4 h-4 md:w-5 md:h-5 text-amber-400 mr-2" />
                      <h5 className="font-bold text-white text-sm md:text-base">國際創業歷程</h5>
                   </div>
                   <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                     從台大 EiMBA 到獲得 Hult Prize 霍特獎 Top 6 的國際肯定。
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Section 3: Student Reflections for Session 2 */}
      <section className="mt-12 md:mt-16">
        <div className="bg-blue-700 text-white px-5 py-3 rounded-t-xl shadow-md inline-block mb-4 md:mb-8">
           <h3 className="text-xl md:text-2xl font-bold">課堂中最觸動您的一句發言</h3>
        </div>
        
        <div className="space-y-6 md:space-y-12">
          {TOUCH_CATEGORIES_SESSION_2.map((category, catIdx) => (
            <div key={catIdx} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
               <div className="bg-blue-50 border-b border-blue-100 p-4 md:p-6">
                  <h4 className="text-lg md:text-xl font-bold text-blue-800 mb-1 md:mb-2">{category.title}</h4>
                  <p className="text-gray-500 italic text-xs md:text-sm">{category.description}</p>
               </div>
               <div className="p-4 md:p-6">
                  <ul className="space-y-4 md:space-y-6">
                    {category.students.map((student, sIdx) => (
                      <li key={sIdx} className="flex gap-2 md:gap-4 items-start">
                        <span className="text-blue-700 font-bold whitespace-nowrap pt-0.5 text-sm md:text-base">• {student.name}：</span>
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed bg-gray-50/50 p-3 md:p-4 rounded-lg border border-gray-100 flex-1">
                          {student.quote}
                        </p>
                      </li>
                    ))}
                  </ul>
               </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const SessionThreeDetail = () => {
  return (
    <div className="space-y-8 md:space-y-10 animate-fade-in text-center py-6 md:py-10">
       <div className="max-w-2xl mx-auto px-4">
          <div className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full inline-flex items-center mb-4 md:mb-6">
             <Clock className="w-4 h-4 md:w-5 md:h-5 mr-2" />
             <span className="font-semibold text-xs md:text-base">課程日期：2025/12/21 (日)</span>
          </div>
          <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">競爭對抗與動態競爭</h3>
          <p className="text-sm md:text-lg text-gray-600 mb-6 md:mb-8">
            本堂課程將以實體形式進行。課程設計核心圍繞「因果效果邏輯」，
            並將透過 30 位同學的實際訪談影片，呈現最真實的策略激盪。
          </p>
       </div>

       <div className="max-w-4xl mx-auto bg-white p-5 md:p-8 rounded-2xl shadow-xl border border-gray-100 mx-4">
          <h4 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-left border-l-4 border-emerald-500 pl-3">課程架構核心：Effectuation vs. Causation</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
             <div className="bg-orange-50 p-4 md:p-6 rounded-lg text-left">
                <h5 className="font-bold text-orange-700 mb-2 text-sm md:text-base">因果邏輯 (Causation)</h5>
                <p className="text-[10px] md:text-sm text-gray-700 mb-2">預測未來 → 設定目標 → 尋找資源</p>
                <div className="h-1.5 w-full bg-orange-200 rounded-full mt-2"></div>
                <div className="h-1.5 w-2/3 bg-orange-200 rounded-full mt-2"></div>
             </div>
             <div className="bg-blue-50 p-4 md:p-6 rounded-lg text-left">
                <h5 className="font-bold text-blue-700 mb-2 text-sm md:text-base">效果邏輯 (Effectuation)</h5>
                <p className="text-[10px] md:text-sm text-gray-700 mb-2">盤點現有手段 → 創造機會 → 控制風險</p>
                <div className="h-1.5 w-full bg-blue-200 rounded-full mt-2"></div>
                <div className="h-1.5 w-2/3 bg-blue-200 rounded-full mt-2"></div>
             </div>
          </div>
       </div>

       <div className="max-w-5xl mx-auto mt-8 md:mt-12 px-4">
          <div className="flex items-center justify-between mb-4 md:mb-6">
             <h4 className="text-lg md:text-xl font-bold text-gray-900 flex items-center">
               <Video className="w-5 h-5 mr-2 text-emerald-600" />
               學員訪談紀錄 (預覽)
             </h4>
             <span className="text-[10px] md:text-sm text-emerald-600 font-medium bg-emerald-50 px-3 py-1 rounded-full">Coming Soon</span>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 opacity-70">
             {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-[9/16] bg-gray-200 rounded-lg flex items-center justify-center relative overflow-hidden group">
                   <MonitorPlay className="w-6 h-6 md:w-8 md:h-8 text-gray-400 group-hover:text-emerald-500 transition-colors" />
                   <div className="absolute inset-x-0 bottom-0 bg-black/50 p-1 md:p-2">
                      <div className="h-1 w-10 md:w-16 bg-gray-400 rounded"></div>
                   </div>
                </div>
             ))}
             <div className="aspect-[9/16] bg-gray-100 rounded-lg flex flex-col items-center justify-center text-gray-400 text-[10px] p-1 border-2 border-dashed border-gray-300">
                <span>+ 20 More</span>
                <span>Interviews</span>
             </div>
          </div>
       </div>
    </div>
  );
};

function App() {
  const [activeSession, setActiveSession] = useState<string>('session-1');

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-gray-50">
      <Header />
      <Hero />

      <main className="container mx-auto px-4 py-4 md:py-12 -mt-6 md:-mt-10 relative z-20">
        {/* Main Navigation - Mobile Scrollable Section Blocks */}
        <div className="flex overflow-x-auto no-scrollbar md:grid md:grid-cols-3 gap-4 mb-6 md:mb-10 pb-4 snap-x px-2">
          {SESSIONS.map((session) => {
            const isActive = activeSession === session.id;
            return (
              <button
                key={session.id}
                onClick={() => setActiveSession(session.id)}
                className={`text-left p-5 md:p-6 rounded-2xl transition-all duration-300 border-2 relative overflow-hidden group shrink-0 w-[85%] md:w-full snap-center
                  ${isActive 
                    ? 'bg-white border-wiskey-red shadow-xl transform scale-[1.02]' 
                    : 'bg-white/90 border-transparent hover:border-gray-200 shadow-md hover:shadow-lg'
                  }
                `}
              >
                <div className={`absolute top-0 right-0 p-1.5 md:p-2 text-[8px] md:text-xs font-bold uppercase tracking-wide
                   ${isActive ? 'bg-wiskey-red text-white' : 'bg-gray-100 text-gray-500'} rounded-bl-lg`}>
                   {session.status}
                </div>
                <div className="mb-1 md:mb-2 flex items-center text-[10px] md:text-sm font-medium text-gray-500">
                   <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                   {session.date}
                   <span className="mx-2 md:mx-2">•</span>
                   {session.format === '線上' ? <MonitorPlay className="w-3 h-3 md:w-4 md:h-4 mr-1"/> : <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1"/>}
                   {session.format}
                </div>
                <h3 className={`text-base md:text-lg font-bold mb-1 md:mb-2 ${isActive ? 'text-wiskey-red' : 'text-gray-800'}`}>
                  {session.title}
                </h3>
                <div className={`h-1.5 w-10 md:w-12 rounded mt-3 md:mt-4 transition-all duration-500 ${isActive ? 'w-full bg-wiskey-red' : 'bg-gray-200 group-hover:w-24'}`}></div>
              </button>
            );
          })}
        </div>

        <div className="min-h-[500px]">
           {activeSession === 'session-1' && <SessionOneDetail />}
           {activeSession === 'session-2' && <SessionTwoDetail />}
           {activeSession === 'session-3' && <SessionThreeDetail />}
        </div>
      </main>

      <footer className="bg-wiskey-dark text-white py-6 md:py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center mb-2 md:mb-4 space-x-2">
             <Award className="w-4 h-4 md:w-5 md:h-5 text-amber-500" />
             <span className="font-bold text-xs md:text-base">National Dong Hwa University EMBA</span>
          </div>
          <p className="text-[10px] md:text-sm text-gray-400">
            &copy; 2025 當代企業策略課程紀錄 | 陳建男 教授、林益全 教授
          </p>
          <p className="text-[8px] md:text-xs text-gray-600 mt-1 md:mt-2">
            Designed for educational purposes.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
