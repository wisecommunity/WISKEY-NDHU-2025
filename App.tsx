
import { useState } from 'react';
import { SESSIONS, REFLECTIONS, TOUCH_CATEGORIES, TOUCH_CATEGORIES_SESSION_2, COOKING_GROUPS } from './constants';
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
  Quote,
  Flame,
  Scale,
  Radar,
  Eye,
  Settings,
  ShieldCheck,
  Handshake,
  Navigation
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
          探索 AI 時代的策略思維，從創業家精神到動態競爭.
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

const GroupMatrix = () => {
  return (
    <section className="mt-16 md:mt-24">
      <div className="text-center mb-10 md:mb-16">
        <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full mb-4">
          <Radar className="w-5 h-5" />
          <span className="font-bold">六組決策分析矩陣 (The 6-Group Matrix)</span>
        </div>
        <h3 className="text-2xl md:text-4xl font-bold text-gray-900">烹飪競賽中的決策軌跡</h3>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">透視各組在「共創料理」過程中的邏輯偏向，從光譜到細部原則的深度偵測。</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {COOKING_GROUPS.map((group) => (
          <div key={group.id} className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-500">
            {/* Dish Image */}
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={group.image} 
                alt={group.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1495195129352-aec325b55b65?q=80&w=800&auto=format&fit=crop';
                }}
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-emerald-800 shadow-sm">
                Group {group.id}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 flex-1 flex flex-col">
              <h4 className="text-xl font-bold text-gray-900 mb-6">{group.name}</h4>

              {/* Main Spectrum UI - Orientation logic, not a score */}
              <div className="mb-8">
                <div className="flex justify-between text-[10px] md:text-xs font-bold text-gray-400 mb-2 uppercase tracking-widest">
                  <span>效果導向 (Effectuation)</span>
                  <span>因果導向 (Causation)</span>
                </div>
                <div className="h-4 bg-gray-100 rounded-full relative">
                  <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-400 via-gray-200 to-green-500 opacity-20 w-full"></div>
                  {/* Indicator Triangle - Swapped position logic (1 - spectrum) to put Effectuation(1) on left(0) */}
                  <div 
                    className="absolute top-0 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-emerald-600 transition-all duration-1000 ease-out z-10"
                    style={{ left: `calc(${(1 - group.spectrum) * 100}% - 8px)` }}
                  ></div>
                </div>
              </div>

              {/* Principles Radar - Represented as Orientation Sliders, not progress bars */}
              <div className="space-y-4 bg-gray-50 p-5 rounded-2xl border border-gray-100">
                <div className="text-xs font-bold text-gray-400 mb-2 flex items-center">
                  <Eye className="w-3 h-3 mr-1" /> 五大原則偏向偵測
                </div>
                
               {[
                  { label: "食材取得", icon: Flame, val: group.principles.sourcing },
                  { label: "風險控管", icon: ShieldCheck, val: group.principles.risk },
                  { label: "競爭or合作", icon: Handshake, val: group.principles.partnership },
                  { label: "控制or預測", icon: Navigation, val: group.principles.control },
                  { label: "因應變局", icon: Zap, val: group.principles.lemonade },
                ].map((p, idx) => {
                  const biasColor = p.val > 50 ? 'bg-blue-500' : p.val < 50 ? 'bg-green-500' : 'bg-gray-400';
                  const textColor = p.val > 50 ? 'text-blue-700' : p.val < 50 ? 'text-green-700' : 'text-gray-500';

                  return (
                    <div key={idx} className="flex items-center space-x-3">
                      <p.icon className={`w-4 h-4 shrink-0 ${p.val > 50 ? 'text-blue-500' : 'text-green-500'}`} />
                      <div className="flex-1">
                        <div className="flex justify-between text-[10px] font-bold mb-1">
                          <span className="text-gray-600">{p.label}</span>
                          <span className={`text-[8px] uppercase ${textColor}`}>
                            {p.val > 50 ? '效果傾向' : p.val < 50 ? '因果傾向' : '中性'}
                          </span>
                        </div>
                        <div className="h-2 w-full bg-gray-200 rounded-full relative overflow-hidden">
                          {/* Track logic: Left is Blue (Effectuation), Right is Green (Causation) */}
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-green-100 opacity-50"></div>
                          {/* Indicator Dot (100 - val)% positioning to align with Left=Effectuation logic */}
                          <div 
                            className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border border-white shadow-sm transition-all duration-1000 delay-300 ${biasColor}`}
                            style={{ left: `calc(${(100 - p.val)}% - 6px)` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  );
                })}

              </div>
            </div>
          ))}
        </div>
      </section>
  );
};

const SessionThreeDetail = () => {
  return (
    <div className="space-y-8 md:space-y-12 animate-fade-in text-center py-6 md:py-10">
       <div className="max-w-2xl mx-auto px-4">
          <div className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full inline-flex items-center mb-4 md:mb-6">
             <Clock className="w-4 h-4 md:w-5 md:h-5 mr-2" />
             <span className="font-semibold text-xs md:text-base">課程日期：2025/12/21 (日)</span>
          </div>
          <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">廚房裡的孫子兵法：共創料理的決策邏輯分析</h3>
          <p className="text-sm md:text-lg text-gray-600 mb-6 md:mb-8">
            本堂課程將以實體形式進行。課程設計核心圍繞「因果效果邏輯」，
            並將透過烹飪實作中的動態競爭，呈現最具生命力的策略激盪。
          </p>
       </div>

       {/* Swapped and Recolored Core Framework */}
       <div className="max-w-4xl mx-auto bg-white p-5 md:p-8 rounded-2xl shadow-xl border border-gray-100">
          <div className="text-center mb-6 md:mb-8">
            <h4 className="text-lg md:text-xl font-bold inline-block pb-2 border-b-4 border-emerald-500 uppercase tracking-wide">課程架構核心</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
             {/* Effectuation - Left, Blue */}
             <div className="bg-blue-50 p-6 md:p-8 rounded-3xl text-left border border-blue-100 shadow-sm">
                <div className="flex items-center mb-4">
                   <div className="bg-blue-600 p-2 rounded-xl mr-3">
                      <Zap className="w-5 h-5 text-white" />
                   </div>
                   <h5 className="font-bold text-blue-800 text-lg md:text-xl">效果邏輯 (Effectuation)</h5>
                </div>
                <p className="text-sm md:text-base text-blue-900 font-medium leading-relaxed mb-4">
                  盤點現有手段 → 創造機會 → 控制風險
                </p>
                <div className="space-y-2 opacity-60">
                   <div className="h-1.5 w-full bg-blue-200 rounded-full"></div>
                   <div className="h-1.5 w-3/4 bg-blue-200 rounded-full"></div>
                   <div className="h-1.5 w-1/2 bg-blue-200 rounded-full"></div>
                </div>
             </div>

             {/* Causation - Right, Green */}
             <div className="bg-green-50 p-6 md:p-8 rounded-3xl text-left border border-green-100 shadow-sm">
                <div className="flex items-center mb-4">
                   <div className="bg-green-600 p-2 rounded-xl mr-3">
                      <Target className="w-5 h-5 text-white" />
                   </div>
                   <h5 className="font-bold text-green-800 text-lg md:text-xl">因果邏輯 (Causation)</h5>
                </div>
                <p className="text-sm md:text-base text-green-900 font-medium leading-relaxed mb-4">
                  預測未來 → 設定目標 → 尋找資源
                </p>
                <div className="space-y-2 opacity-60">
                   <div className="h-1.5 w-full bg-green-200 rounded-full"></div>
                   <div className="h-1.5 w-3/4 bg-green-200 rounded-full"></div>
                   <div className="h-1.5 w-1/2 bg-green-200 rounded-full"></div>
                </div>
             </div>
          </div>
       </div>

       {/* New 6-Group Matrix Section */}
       <GroupMatrix />

       {/* Existing Videos Section */}
       <div className="max-w-5xl mx-auto mt-16 md:mt-24 px-4 pb-12">
          <div className="flex items-center justify-between mb-8">
             <h4 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center">
               <Video className="w-6 h-6 mr-2 text-emerald-600" />
               實作與訪談紀錄
             </h4>
             <span className="text-xs md:text-sm text-emerald-600 font-bold bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100">2025/12/21 即將錄製</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4 opacity-50">
             {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-[9/16] bg-gray-200 rounded-2xl flex items-center justify-center relative overflow-hidden group border border-gray-300">
                   <MonitorPlay className="w-8 h-8 text-gray-400 group-hover:text-emerald-500 transition-colors" />
                   <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <div className="h-1.5 w-16 bg-white/40 rounded-full"></div>
                   </div>
                </div>
             ))}
             <div className="aspect-[9/16] bg-gray-100 rounded-2xl flex flex-col items-center justify-center text-gray-400 text-xs p-4 border-2 border-dashed border-gray-300">
                <span className="font-bold">更多紀錄</span>
                <span className="mt-1">等待精彩瞬間...</span>
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
