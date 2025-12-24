
import React, { useState, useEffect, useRef } from 'react';
import { SESSIONS, REFLECTIONS, TOUCH_CATEGORIES, TOUCH_CATEGORIES_SESSION_2, COOKING_GROUPS, SESSION_3_CONTENT, SESSION_3_FIELD_NOTES } from './constants';
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
  Navigation,
  X,
  Loader2,
  BookOpen,
  ArrowRightLeft,
  Infinity as InfinityIcon,
  TrendingUp,
  Globe,
  Sparkles,
  PenTool,
  ArrowUp,
  Camera,
  ExternalLink
} from 'lucide-react';

const Header = () => (
  <header className="bg-wiskey-red/80 backdrop-blur-xl text-white fixed top-0 left-0 right-0 z-[100] shadow-xl border-b border-white/10 transition-all duration-300">
    <div className="container mx-auto px-4 py-3 md:py-4 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center space-x-3 mb-2 md:mb-0">
        <div className="bg-white p-1.5 rounded-lg shadow-inner">
           <img 
              src="https://drive.google.com/thumbnail?id=1NoLl1tjoWKmIDKy1fPbo_UhY6WWDkzQq&sz=w1000" 
              alt="Course Logo" 
              className="h-7 md:h-9 w-auto object-contain"
            />
        </div>
        <div>
          <h1 className="text-lg md:text-xl font-bold tracking-tight">當代企業策略</h1>
          <p className="text-sm text-red-100 opacity-90 font-medium tracking-wide">東華大學 EMBA | 陳建男、林益全 教授</p>
        </div>
      </div>
      <div className="flex items-center space-x-4 text-xs md:text-sm font-bold bg-white/10 px-4 py-2 rounded-full border border-white/20">
         <span className="flex items-center uppercase tracking-widest"><BrainCircuit className="w-4 h-4 mr-2 text-red-200"/> 度化智能 Evolving Intelligence</span>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <div className="bg-gradient-to-br from-wiskey-dark to-wiskey-red text-white pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
    <div className="container mx-auto px-4 relative z-10 text-center">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-black mb-4 tracking-tight leading-tight">不確定環境下的決策與領導</h2>
      <p className="text-base md:text-xl text-red-100 max-w-2xl mx-auto opacity-90 leading-relaxed font-bold">
        探索 AI 時代的策略思維，紀錄我們共同的學習軌跡。
      </p>
    </div>
  </div>
);

const VideoModal = ({ isOpen, onClose, videoId }: { isOpen: boolean, onClose: () => void, videoId: string }) => {
  const [isLoading, setIsLoading] = useState(true);
  
  // Fix: Changed NodeJS.Timeout to ReturnType<typeof setTimeout> to resolve the namespace error in the browser environment.
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (isOpen) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollBarWidth}px`;
      setIsLoading(true);

      // Fallback: If iframe doesn't trigger onLoad within 8 seconds (common with Google Drive blocks), hide the spinner
      timeoutRef.current = setTimeout(() => {
        setIsLoading(false);
      }, 8000);
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0px';
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const driveLink = `https://drive.google.com/file/d/${videoId}/view`;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/95 p-4 md:p-10 animate-fade-in backdrop-blur-md" onClick={onClose}>
      <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-[10001] bg-white/10 rounded-full transition-all hover:rotate-90">
        <X className="w-8 h-8" />
      </button>
      
      <div className="relative w-full max-w-5xl rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/20 aspect-video flex items-center justify-center bg-gray-900" onClick={e => e.stopPropagation()}>
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 z-10 space-y-4">
            <Loader2 className="w-10 h-10 text-emerald-500 animate-spin" />
            <p className="text-white/60 text-sm font-medium animate-pulse">正在從 Google Drive 載入影片...</p>
          </div>
        )}
        <iframe
          key={videoId}
          src={`https://drive.google.com/file/d/${videoId}/preview`}
          className="w-full h-full border-none rounded-xl"
          allow="autoplay; fullscreen; accelerometer; encrypted-media; gyroscope; picture-in-picture"
          onLoad={() => {
            setIsLoading(false);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
          }}
          title="Video Content"
          loading="lazy"
          allowFullScreen
        />
      </div>

      <div className="mt-6 flex flex-col items-center space-y-3" onClick={e => e.stopPropagation()}>
        <p className="text-white/40 text-xs md:text-sm italic">若影片無法在此處播放，請點擊下方按鈕直接開啟</p>
        <a 
          href={driveLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 rounded-full border border-white/20 transition-all font-bold text-sm group"
        >
          <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
          在 Google 雲端硬碟中開啟影片
        </a>
      </div>
    </div>
  );
};

const ImageModal = ({ isOpen, onClose, imageUrl }: { isOpen: boolean, onClose: () => void, imageUrl: string }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/95 p-4 md:p-12 animate-fade-in cursor-zoom-out" onClick={onClose}>
      <button onClick={onClose} className="absolute top-6 right-6 text-white/70 hover:text-white p-2 z-[10002] bg-white/10 rounded-full transition-all hover:rotate-90">
        <X className="w-8 h-8" />
      </button>
      <div className="relative max-w-full max-h-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
        <img src={imageUrl} alt="Zoomed View" className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl" />
      </div>
    </div>
  );
};

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-[9000] p-4 bg-wiskey-red text-white rounded-full shadow-2xl hover:bg-wiskey-dark transition-all hover:scale-110 active:scale-95 animate-fade-in group"
      aria-label="Back to top"
    >
      <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
    </button>
  );
};

const SessionOneDetail = () => {
  const [activeTab, setActiveTab] = useState<'strategy' | 'execution' | 'choice' | 'legacy'>('strategy');
  const [zoomedImageUrl, setZoomedImageUrl] = useState<string>('');

  const tabs = [
    { id: 'strategy', label: '策略', icon: Users, color: 'border-wiskey-red text-wiskey-red' },
    { id: 'execution', label: '執行', icon: Zap, color: 'border-blue-600 text-blue-600' },
    { id: 'choice', label: '選擇', icon: GitBranch, color: 'border-amber-600 text-amber-600' },
    { id: 'legacy', label: '傳承', icon: History, color: 'border-emerald-600 text-emerald-600' },
  ];

  const classPhotoUrl = "https://raw.githubusercontent.com/wisecommunity/WISKEY-NDHU-2025/main/images/Screenshot%202025-10-26.png";

  return (
    <div className="space-y-10 md:space-y-16 animate-fade-in pb-12">
      <section>
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
           <div className="flex-1 w-full flex flex-col">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-red-100 text-red-800 text-sm font-bold mb-5 border border-red-200 shadow-sm w-fit">
                <BrainCircuit className="w-4 h-4 mr-2" /> 核心主題
              </div>
              <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">透過宏觀思維理論、實務及模型，探索 「1 到 N」的思維邏輯</h3>
              <ul className="space-y-4 flex-1">
                {["AI-X-Gs、S.O.F.T、C.L.E.A.R. Model", "度化智能", "生命的樂章", "案例思問：搶進AI浪潮或是維持股利政策"].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-800 bg-white p-4 md:p-5 rounded-xl border border-gray-100 shadow-sm text-base md:text-lg font-bold hover:shadow-md transition-shadow">
                    <div className="w-3 h-3 bg-wiskey-red rounded-full mr-4 shrink-0 shadow-sm"></div>{item}
                  </li>
                ))}
              </ul>
           </div>
           <div className="w-full lg:w-1/2 flex items-center justify-center">
              <div 
                className="w-full h-full rounded-2xl overflow-hidden shadow-xl bg-gray-950 aspect-video lg:aspect-auto relative group border-4 border-white max-h-[420px] cursor-zoom-in"
                onClick={() => setZoomedImageUrl(classPhotoUrl)}
              >
                <img 
                  src={classPhotoUrl} 
                  alt="Session 1 Class" 
                  className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors flex flex-col items-center justify-center p-4 text-center">
                   <p className="text-white font-bold text-base md:text-lg tracking-widest bg-black/60 px-5 py-2 rounded-full backdrop-blur-sm shadow-lg border border-white/20 group-hover:scale-105 transition-transform">
                      <Sparkles className="inline-block w-4 h-4 mr-2 text-amber-400" />
                      2025/10/26 線上課程紀錄
                   </p>
                </div>
              </div>
           </div>
        </div>
      </section>

      <section className="bg-wiskey-red rounded-[32px] p-8 md:p-12 shadow-2xl text-white relative overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-10 items-center relative z-10">
          <div className="w-full lg:w-5/12 relative">
             <img src="https://raw.githubusercontent.com/wisecommunity/WISKEY-NDHU-2025/main/images/%E5%A4%9A%E9%9D%A2%E5%90%91%E6%80%9D%E7%B6%AD.jpg" className="w-full rounded-2xl shadow-xl border-2 border-white/10" />
             <div className="absolute -bottom-4 -right-4 bg-amber-500 text-black px-4 py-2 text-sm md:text-base font-black rounded-lg shadow-lg">多面向思維</div>
          </div>
          <div className="flex-1">
             <h4 className="text-red-200 font-bold text-sm md:text-base mb-3 tracking-widest uppercase flex items-center opacity-80">
               <MonitorPlay className="w-4 h-4 mr-2" /> Multidimensional Thinking
             </h4>
             <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">探索策略的多維度空間</h3>
             <p className="text-white text-lg md:text-xl font-bold mb-6 border-l-4 border-amber-500 pl-5 py-1 bg-white/5 rounded-r-lg">從度化智能到生命樂章</p>
             <p className="text-gray-200 text-base md:text-lg leading-relaxed font-medium italic opacity-90">「策略不只是選擇，更是對 world 多重因果關係的深刻洞察。」</p>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-wiskey-red text-white px-5 py-3 rounded-t-xl shadow-md inline-block mb-6 md:mb-8">
           <h3 className="text-lg md:text-xl font-bold">課堂中最觸動您的一句發言</h3>
        </div>
        <div className="space-y-6 md:space-y-10">
          {TOUCH_CATEGORIES.map((category, catIdx) => (
            <div key={catIdx} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
               <div className="bg-gray-50 border-b border-gray-100 p-5 md:p-6">
                  <h4 className="text-lg md:text-xl font-bold text-wiskey-red mb-1">{category.title}</h4>
                  <p className="text-gray-600 italic text-sm md:text-base font-medium">{category.description}</p>
               </div>
               <div className="p-5 md:p-8">
                  <ul className="space-y-5 md:space-y-6">
                    {category.students.map((student, sIdx) => (
                      <li key={sIdx} className="flex gap-3 md:gap-5 items-start">
                        <span className="text-wiskey-red font-bold whitespace-nowrap pt-1 text-sm md:text-base shrink-0">• {student.name}：</span>
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed bg-gray-50/50 p-4 md:p-5 rounded-xl border border-gray-100 flex-1 font-medium">
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

      <section className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="bg-gray-800 text-white p-5 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold flex items-center">
            <BrainCircuit className="w-6 h-6 mr-2 text-red-400" />
            深度反思：四大核心定義
          </h3>
        </div>
        <div className="flex overflow-x-auto no-scrollbar border-b border-gray-100 bg-gray-50 snap-x">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button key={tab.id} onClick={() => setActiveTab(tab.id as any)} className={`flex-1 min-w-[100px] py-4 px-3 flex flex-col items-center justify-center transition-all border-b-4 outline-none snap-start ${isActive ? `${tab.color} bg-white font-bold` : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
                <Icon className={`w-5 h-5 md:w-6 md:h-6 mb-1 ${isActive ? '' : 'opacity-40'}`} />
                <span className="text-sm md:text-base whitespace-nowrap font-bold tracking-wider">{tab.label}</span>
              </button>
            );
          })}
        </div>
        <div className="p-5 md:p-10 min-h-[400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {REFLECTIONS.map((r, i) => (
              <div key={i} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all group flex flex-col">
                <div className="font-bold text-gray-900 mb-2.5 flex items-center text-base">
                   <div className="w-1.5 h-4 bg-gray-200 mr-2.5 rounded-full group-hover:bg-wiskey-red transition-colors shrink-0"></div>
                   {r.name}
                </div>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed italic font-medium flex-1">
                  {(r as any)[activeTab]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ImageModal isOpen={!!zoomedImageUrl} onClose={() => setZoomedImageUrl('')} imageUrl={zoomedImageUrl} />
    </div>
  );
};

const SessionTwoDetail = () => {
  const [zoomedImageUrl, setZoomedImageUrl] = useState<string>('');
  const classPhotoUrl = "https://raw.githubusercontent.com/wisecommunity/WISKEY-NDHU-2025/main/images/Screenshot%202025-12-07.png";

  return (
    <div className="space-y-10 md:space-y-16 animate-fade-in pb-12">
      <section>
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
           <div className="flex-1 w-full flex flex-col">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm font-bold mb-5 border border-blue-200 shadow-sm w-fit">
                <BrainCircuit className="w-4 h-4 mr-2" /> 核心主題
              </div>
              <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">創業家思維 + AI 時代的決策與領導</h3>
              <ul className="space-y-4 flex-1">
                {["訊息管理看創業家思維", "創意、創新、創業", "創造機會：機會辨識與創造", "組織團隊：AGI時代下的領導力"].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-800 bg-white p-4 md:p-5 rounded-xl border border-gray-100 shadow-sm text-base md:text-lg font-bold hover:shadow-md transition-shadow">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-4 shrink-0 shadow-sm"></div>{item}
                  </li>
                ))}
              </ul>
           </div>
           <div className="w-full lg:w-1/2 flex items-center justify-center">
              <div 
                className="w-full h-full rounded-2xl overflow-hidden shadow-xl bg-gray-950 aspect-video lg:aspect-auto relative group border-4 border-white max-h-[420px] cursor-zoom-in"
                onClick={() => setZoomedImageUrl(classPhotoUrl)}
              >
                <img 
                  src={classPhotoUrl} 
                  alt="Class" 
                  className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors flex flex-col items-center justify-center p-4 text-center">
                   <p className="text-white font-bold text-base md:text-lg tracking-widest bg-black/60 px-5 py-2 rounded-full backdrop-blur-sm shadow-lg border border-white/20 group-hover:scale-105 transition-transform">
                      <Sparkles className="inline-block w-4 h-4 mr-2 text-blue-400" />
                      2025/12/07 線上課程紀錄
                   </p>
                </div>
              </div>
           </div>
        </div>
      </section>

      <section className="bg-gray-900 rounded-[32px] p-8 md:p-12 shadow-2xl text-white relative overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-10 items-center relative z-10">
          <div className="w-full lg:w-5/12 relative">
             <img src="https://raw.githubusercontent.com/wisecommunity/WISKEY-NDHU-2025/main/images/%E7%95%B6%E4%BB%A3%E4%BC%81%E6%A5%AD%E7%AD%96%E7%95%A5%EF%BC%8820251207%E6%9D%B1%E8%8F%AF%EF%BC%89.jpg" className="w-full rounded-2xl shadow-xl border-2 border-white/10" />
             <div className="absolute -bottom-4 -right-4 bg-amber-500 text-black px-4 py-2 text-sm md:text-base font-black rounded-lg shadow-lg">創業家分享</div>
          </div>
          <div className="flex-1">
             <h4 className="text-amber-400 font-bold text-sm md:text-base mb-3 tracking-widest uppercase flex items-center opacity-80">
               <Zap className="w-4 h-4 mr-2" /> Entrepreneurship
             </h4>
             <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">能火動畫：從創意到創業</h3>
             <p className="text-white text-lg md:text-xl font-bold mb-6 border-l-4 border-amber-500 pl-5 py-1 bg-white/5 rounded-r-lg">鄭義錡 Ethan Cheng / 創辦人</p>
             <p className="text-gray-300 text-base md:text-lg leading-relaxed font-medium italic opacity-90">「結合全息投影與 AI，重新定義沉浸式體驗。」</p>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-blue-700 text-white px-5 py-3 rounded-t-xl shadow-md inline-block mb-6 md:mb-8">
           <h3 className="text-lg md:text-xl font-bold">課程反思精選：創業家思維</h3>
        </div>
        <div className="space-y-6 md:space-y-10">
          {TOUCH_CATEGORIES_SESSION_2.map((category, catIdx) => (
            <div key={catIdx} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
               <div className="bg-blue-50 border-b border-blue-100 p-5 md:p-6">
                  <h4 className="text-lg md:text-xl font-bold text-blue-900 mb-1">{category.title}</h4>
                  <p className="text-blue-700 italic text-sm md:text-base font-medium opacity-70">{category.description}</p>
               </div>
               <div className="p-5 md:p-8">
                  <ul className="space-y-5 md:space-y-6">
                    {category.students.map((student, sIdx) => (
                      <li key={sIdx} className="flex gap-3 md:gap-5 items-start">
                        <span className="text-blue-700 font-bold whitespace-nowrap pt-1 text-sm md:text-base shrink-0">• {student.name}：</span>
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed bg-blue-50/30 p-4 md:p-5 rounded-xl border border-blue-100 flex-1 font-medium">
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
      <ImageModal isOpen={!!zoomedImageUrl} onClose={() => setZoomedImageUrl('')} imageUrl={zoomedImageUrl} />
    </div>
  );
};

const SessionThreeDetail = () => {
  const [selectedVideoId, setSelectedVideoId] = useState<string>('');
  const [zoomedImageUrl, setZoomedImageUrl] = useState<string>('');

  const renderPrincipleCard = (principle: any) => (
    <div key={principle.id} className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden mb-6 md:mb-10 animate-fade-in">
      <div className="bg-gray-50 border-b border-gray-100 p-6 md:p-10">
        <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{principle.title}</h4>
        <p className="text-gray-600 italic text-sm md:text-base font-semibold">{principle.dimension}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-6 md:p-10 border-b md:border-b-0 md:border-r border-gray-100 bg-blue-50/20">
          <div className="mb-6">
            <div className="flex items-center mb-1">
              <div className="bg-blue-600 p-3 rounded-2xl mr-4 shadow-lg"><Zap className="w-5 h-5 text-white" /></div>
              <h5 className="font-bold text-blue-900 text-lg md:text-xl">效果邏輯 (Effectuation)</h5>
            </div>
            <p className="ml-[68px] text-blue-600 font-black text-sm md:text-base border-l-2 border-blue-200 pl-3">「{principle.effectuation.label}」</p>
          </div>
          <p className="text-base md:text-lg text-gray-800 mb-8 font-bold leading-relaxed bg-white/70 p-5 rounded-xl border border-blue-100">{principle.effectuation.definition}</p>
          <div className="space-y-4">
            <p className="text-sm font-bold text-blue-400 uppercase tracking-widest flex items-center">
              <Video className="w-4 h-4 mr-2" /> 實作影片
            </p>
            {principle.effectuation.videos.map((vid: any, i: number) => (
              <button key={i} onClick={() => setSelectedVideoId(vid.id)} className="flex items-center text-left bg-white hover:bg-blue-50 p-4 rounded-xl border border-gray-100 w-full group transition-all shadow-sm">
                <div className="w-20 h-12 bg-gray-200 rounded-lg overflow-hidden shrink-0 mr-4 relative border border-gray-100">
                   <img src={`https://drive.google.com/thumbnail?id=${vid.id}&sz=w400`} className="w-full h-full object-cover" alt="" />
                   <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/0"><MonitorPlay className="w-5 h-5 text-white" /></div>
                </div>
                <span className="text-sm md:text-base font-bold text-gray-700 group-hover:text-blue-700 line-clamp-2">{vid.title}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="p-6 md:p-10 bg-green-50/20">
          <div className="mb-6">
            <div className="flex items-center mb-1">
              <div className="bg-green-600 p-3 rounded-2xl mr-4 shadow-lg"><Target className="w-5 h-5 text-white" /></div>
              <h5 className="font-bold text-green-900 text-lg md:text-xl">因果邏輯 (Causation)</h5>
            </div>
            <p className="ml-[68px] text-green-700 font-black text-sm md:text-base border-l-2 border-green-200 pl-3">「{principle.causation.label}」</p>
          </div>
          <p className="text-base md:text-lg text-gray-800 mb-8 font-bold leading-relaxed bg-white/70 p-5 rounded-xl border border-green-100">{principle.causation.definition}</p>
          <div className="space-y-4">
            {principle.causation.videos.length > 0 ? (
              <>
                <p className="text-sm font-bold text-green-400 uppercase tracking-widest flex items-center">
                   <Video className="w-4 h-4 mr-2" /> 實作影片
                </p>
                {principle.causation.videos.map((vid: any, i: number) => (
                  <button key={i} onClick={() => setSelectedVideoId(vid.id)} className="flex items-center text-left bg-white hover:bg-green-50 p-4 rounded-xl border border-gray-100 w-full group transition-all shadow-sm">
                    <div className="w-20 h-12 bg-gray-200 rounded-lg overflow-hidden shrink-0 mr-4 relative border border-gray-100">
                       <img src={`https://drive.google.com/thumbnail?id=${vid.id}&sz=w400`} className="w-full h-full object-cover" alt="" />
                       <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/0"><MonitorPlay className="w-5 h-5 text-white" /></div>
                    </div>
                    <span className="text-sm md:text-base font-bold text-gray-700 group-hover:text-green-700 line-clamp-2">{vid.title}</span>
                  </button>
                ))}
              </>
            ) : <p className="text-gray-400 italic text-base text-center py-8 font-bold opacity-50">本次無對應因果邏輯案例</p>}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-12 md:space-y-16 animate-fade-in pb-16">
      <section className="text-center pt-8">
         <div className="max-w-3xl mx-auto px-4">
            <div className="bg-emerald-100 text-emerald-800 px-6 py-2 rounded-full inline-flex items-center mb-8 shadow-sm border border-emerald-200">
               <Clock className="w-5 h-5 mr-2" />
               <span className="font-bold text-sm md:text-base tracking-widest uppercase">決策實務與度化智能</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-5 leading-tight tracking-tight">決策實務與度化智能</h3>
            <p className="text-base md:text-xl text-gray-600 leading-relaxed font-bold opacity-80 mb-10">透過烹飪實作中的動態競爭，進行因果與效果邏輯的決策分析。</p>
            
            <div 
              className="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-white group cursor-zoom-in"
              onClick={() => setZoomedImageUrl(SESSION_3_CONTENT.images.group)}
            >
               <img src={SESSION_3_CONTENT.images.group} alt="Course Group Photo" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <p className="text-white font-bold text-lg md:text-xl">「夥伴選擇是策略落地的第一步」— 課程合影 (點擊放大)</p>
               </div>
            </div>
         </div>
      </section>

      <section className="max-w-5xl mx-auto px-4">
        <div className="bg-wiskey-red text-white p-8 md:p-14 rounded-[40px] shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-black mb-8 leading-tight tracking-tight">{SESSION_3_CONTENT.opening.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
               <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-white/20"><p className="text-white text-base md:text-lg font-bold leading-relaxed">{SESSION_3_CONTENT.opening.coreMessage}</p></div>
               <div className="relative pt-6 md:pt-0 italic text-white text-xl md:text-2xl font-black leading-tight border-l-4 border-red-400/30 pl-6">「{SESSION_3_CONTENT.opening.quote}」</div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Theory Column */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 flex items-center"><BookOpen className="w-8 h-8 mr-4 text-blue-600" />核心理論：因果與效果邏輯</h3>
            <div className="bg-white rounded-[40px] shadow-xl overflow-hidden border border-gray-100 p-6 md:p-8 flex flex-col flex-1">
              <div className="flex flex-col items-center justify-center h-full">
                <div 
                  className="cursor-zoom-in relative group rounded-2xl overflow-hidden"
                  onClick={() => setZoomedImageUrl(SESSION_3_CONTENT.images.theory)}
                >
                  <img src={SESSION_3_CONTENT.images.theory} alt="Causation and Effectuation Theory Diagram" className="max-w-full h-auto rounded-2xl shadow-lg border border-gray-100 transition-transform group-hover:scale-[1.02]" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                    <Sparkles className="text-white opacity-0 group-hover:opacity-100 w-10 h-10 drop-shadow-md" />
                  </div>
                </div>
                <p className="mt-8 text-gray-600 font-bold text-base md:text-lg text-center italic">「因果邏輯（Causation）強調以目標驅動手段；效果邏輯（Effectuation）則強調以現有手段創造目標。」 (點擊圖片放大)</p>
              </div>
            </div>
          </div>

          {/* Action Formula Column */}
          <div className="flex flex-col space-y-6 mt-10 lg:mt-0">
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 flex items-center"><Sparkles className="w-8 h-8 mr-4 text-emerald-600" />行動實務核心：9個行動實務口訣</h3>
            <div className="bg-white rounded-[40px] shadow-xl overflow-hidden border border-gray-100 p-6 md:p-8 flex flex-col flex-1">
              <div className="flex flex-col items-center justify-center h-full">
                <div 
                  className="cursor-zoom-in relative group rounded-2xl overflow-hidden"
                  onClick={() => setZoomedImageUrl(SESSION_3_CONTENT.images.actionFormula)}
                >
                  <img src={SESSION_3_CONTENT.images.actionFormula} alt="Action Formula Diagram" className="max-w-full h-auto rounded-2xl shadow-lg border border-gray-100 transition-transform group-hover:scale-[1.02]" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                    <Sparkles className="text-white opacity-0 group-hover:opacity-100 w-10 h-10 drop-shadow-md" />
                  </div>
                </div>
                <p className="mt-8 text-gray-600 font-bold text-base md:text-lg text-center italic">「將抽象邏輯轉化為具體行動，透過九大口訣讓策略在實踐中落地生根。」 (點擊圖片放大)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 mt-12 md:mt-20">
        <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-10 flex items-center border-b-2 border-gray-100 pb-6"><Scale className="w-8 h-8 mr-4 text-amber-600" />五大原則的對照</h3>
        {SESSION_3_CONTENT.principles.map(principle => renderPrincipleCard(principle))}
      </section>

      <section className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 flex items-center"><Flame className="w-8 h-8 mr-4 text-red-500" />實作成果：大家的美味結晶</h3>
        <div className="bg-white rounded-[40px] shadow-xl overflow-hidden border border-gray-100 mb-16 flex flex-col relative group">
           <img src={SESSION_3_CONTENT.images.products} alt="Finished Cooking Products" className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105" />
           <div className="absolute inset-0 hidden md:block bg-black/20 group-hover:bg-black/0 transition-colors pointer-events-none"></div>
           <div className="relative md:absolute bottom-0 md:bottom-12 md:left-12 bg-white md:bg-white/90 backdrop-blur-md p-6 md:p-10 rounded-b-[40px] md:rounded-3xl shadow-xl md:max-w-lg border-t md:border border-gray-100 md:border-white/50">
              <p className="text-gray-900 font-black text-lg md:text-2xl mb-2">「從零到一，共同創造」</p>
              <p className="text-gray-600 font-bold text-sm md:text-base leading-relaxed">在這個充滿煙火氣的實驗室中，每一道菜都是決策邏輯的實踐，也是團隊共識的展現。</p>
           </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 bg-gray-900 rounded-[48px] p-10 md:p-16 shadow-2xl text-white relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-2xl md:text-4xl font-black mb-16 text-center tracking-tight">企業生命週期的策略光譜</h3>
          <div className="space-y-12">
            {SESSION_3_CONTENT.lifecycle.map((stage, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-8 items-start bg-white/5 p-8 md:p-12 rounded-[32px] border border-white/10 hover:bg-white/10 transition-all shadow-xl group">
                <div className="bg-emerald-500 p-5 rounded-2xl shadow-xl shrink-0 group-hover:scale-110 transition-transform">
                  {idx === 0 ? <Flame className="w-8 h-8" /> : idx === 1 ? <TrendingUp className="w-8 h-8" /> : <Globe className="w-8 h-8" />}
                </div>
                <div className="flex-1">
                   <div className="flex flex-wrap items-center gap-6 mb-5">
                      <h4 className="text-2xl md:text-3xl font-black tracking-tight">{stage.title}</h4>
                      <span className="bg-emerald-500/20 text-emerald-400 px-4 py-1.5 rounded-full text-sm md:text-base font-black border border-emerald-500/30 tracking-widest uppercase">{stage.logic}</span>
                   </div>
                   <p className="text-emerald-100 font-bold mb-5 italic text-lg md:text-xl leading-relaxed border-l-4 border-emerald-500/50 pl-6">情境：{stage.context}</p>
                   <p className="text-gray-300 leading-relaxed text-base md:text-lg font-bold"><span className="text-emerald-400 font-black mr-3 uppercase tracking-widest text-sm">策略重點</span>{stage.strategy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Field Notes Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="bg-emerald-700 text-white px-8 py-4 rounded-t-3xl shadow-lg inline-flex items-center mb-10">
          <PenTool className="w-6 h-6 mr-3" />
          <h3 className="text-xl md:text-2xl font-black tracking-widest">【田野筆記：策略長們的廚房實踐】</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SESSION_3_FIELD_NOTES.map((note) => (
            <div key={note.id} className="bg-white rounded-[32px] p-8 md:p-10 shadow-xl border border-gray-100 flex flex-col hover:shadow-2xl transition-all group">
              <div className="flex items-center mb-6">
                <div className="bg-emerald-50 p-4 rounded-2xl mr-4 group-hover:bg-emerald-100 transition-colors">
                  <span className="text-emerald-700 font-black text-xl">{note.id}.</span>
                </div>
                <div>
                  <h4 className="text-xl font-black text-gray-900">{note.student}</h4>
                  <p className="text-emerald-600 font-bold text-sm tracking-widest">{note.title}</p>
                </div>
              </div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed font-medium whitespace-pre-wrap border-l-4 border-emerald-100 pl-6 py-2">
                {note.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Field Record Gallery Section */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="bg-emerald-100 text-emerald-800 px-8 py-4 rounded-t-3xl shadow-sm inline-flex items-center mb-10 border border-emerald-200">
          <Camera className="w-6 h-6 mr-3" />
          <h3 className="text-xl md:text-2xl font-black tracking-widest uppercase">課程現場紀實</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {SESSION_3_CONTENT.gallery.map((imgUrl, i) => (
            <div 
              key={i} 
              className="aspect-square rounded-2xl overflow-hidden shadow-md cursor-zoom-in group relative border border-gray-100"
              onClick={() => setZoomedImageUrl(imgUrl)}
            >
              <img 
                src={imgUrl} 
                alt={`Field Record ${i + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <Sparkles className="text-white opacity-0 group-hover:opacity-100 w-8 h-8 drop-shadow-md" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-16 text-center">
         <a href="https://ndhuemba1221.mystrikingly.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white font-black px-10 py-5 rounded-full shadow-xl transition-all hover:scale-105 active:scale-95 text-base md:text-lg group">
           <ImageIcon className="w-6 h-6 mr-4 group-hover:rotate-12 transition-transform" />活動紀錄網頁
         </a>
      </section>
      
      <VideoModal isOpen={!!selectedVideoId} onClose={() => setSelectedVideoId('')} videoId={selectedVideoId} />
      <ImageModal isOpen={!!zoomedImageUrl} onClose={() => setZoomedImageUrl('')} imageUrl={zoomedImageUrl} />
    </div>
  );
};

function App() {
  const [activeSession, setActiveSession] = useState<string>('session-1');

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-gray-50 overflow-x-hidden">
      <Header />
      <Hero />
      <main className="container mx-auto px-4 py-8 md:py-12 -mt-10 md:mt-[-5rem] relative z-20">
        <div className="flex overflow-x-auto no-scrollbar md:grid md:grid-cols-3 gap-6 mb-12 px-2 pb-8">
          {SESSIONS.map((session) => {
            const isActive = activeSession === session.id;
            return (
              <button key={session.id} onClick={() => setActiveSession(session.id)} className={`text-left p-8 rounded-[32px] transition-all border-4 relative overflow-hidden group shrink-0 w-[85%] md:w-full shadow-lg ${isActive ? 'bg-white border-wiskey-red scale-[1.03] z-10 shadow-2xl' : 'bg-white/95 border-transparent hover:border-gray-200'}`}>
                <div className="mb-3 flex items-center text-sm font-bold text-gray-500"><Clock className="w-4 h-4 mr-2" />{session.date}</div>
                <h3 className={`text-lg md:text-xl font-black leading-tight ${isActive ? 'text-wiskey-red' : 'text-gray-900'}`}>{session.title}</h3>
                <div className={`h-2.5 w-16 rounded-full mt-5 transition-all duration-700 ${isActive ? 'w-full bg-wiskey-red' : 'bg-gray-200 group-hover:bg-gray-300'}`}></div>
              </button>
            );
          })}
        </div>
        <div className="min-h-[600px]">
           {activeSession === 'session-1' && <SessionOneDetail />}
           {activeSession === 'session-2' && <SessionTwoDetail />}
           {activeSession === 'session-3' && <SessionThreeDetail />}
        </div>
      </main>
      <footer className="bg-wiskey-dark text-white py-12 mt-auto text-center shadow-inner relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Award className="w-8 h-8 text-amber-500 mx-auto mb-4 opacity-80" />
          <span className="font-bold text-lg tracking-widest block mb-1 uppercase">NATIONAL DONG HWA UNIVERSITY EMBA</span>
          <p className="text-gray-300 text-sm md:text-base font-medium">當代企業策略課程紀錄：陳建男 教授、林益全 教授</p>
        </div>
      </footer>
      <BackToTopButton />
    </div>
  );
}

export default App;
