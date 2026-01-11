import React, { useState, useMemo } from 'react';
import { Code, Palette, Sparkles, BookOpen, Search, ChevronDown, ChevronRight, ExternalLink, Youtube, FileText } from 'lucide-react';
import { LEARNING_DATA } from './constants/index';
import { TABS, TAB_COLORS, TAB_TEXT_COLORS } from './constants/index';
import { normalizeLearningData } from './utils/add_url';


const ResourceCard = ({ resource }) => (
  <div className={`bg-slate-800 p-4 rounded-lg border transition-colors group cursor-pointer ${
    resource.type === 'youtube' ? 'border-slate-600 hover:border-red-500' : 'border-slate-600 hover:border-blue-500'
  }`} onClick={()=> window.open(resource.url)}>
    <div className="flex items-start justify-between mb-2">
      <div className="flex items-center gap-2">
        {resource.type === 'youtube' ? (
          <Youtube className="w-5 h-5 text-red-500 flex-shrink-0" />
        ) : (
          <FileText className="w-5 h-5 text-blue-400 flex-shrink-0" />
        )}
        <h4 className={`font-semibold ${
          resource.type === 'youtube' ? 'text-red-400 group-hover:text-red-300' : 'text-blue-400 group-hover:text-blue-300'
        }`}>
          {resource.name}
        </h4>
      </div>
      <ExternalLink className="w-4 h-4 text-slate-400 flex-shrink-0 ml-2 cursor-pointer" onClick={()=> window.open(resource.url)}/>
    </div>
    <p className="text-sm text-slate-400 mb-2">{resource.desc}</p>
    <p className="text-xs text-slate-500 font-mono">{resource.url}</p>
  </div>
);

const ContentList = ({ content, color }) => (
  <ul className="space-y-3">
    {content.map((item, idx) => (
      <li key={idx} className="flex items-start gap-3">
        <div className={`${color} w-2 h-2 rounded-full mt-2 flex-shrink-0`} />
        <span className="text-slate-200">{item}</span>
      </li>
    ))}
  </ul>
);

const SectionCard = ({ section, isExpanded, onToggle, color }) => (
  <div className="bg-slate-700 rounded-xl overflow-hidden border border-slate-600">
    <button
      onClick={onToggle}
      className="w-full p-5 flex items-center justify-between hover:bg-slate-600 transition-colors"
    >
      <h3 className="text-xl font-semibold text-left text-cyan-950">{section.title}</h3>
      {isExpanded ? (
        <ChevronDown className="w-6 h-6 text-slate-800" />
      ) : (
        <ChevronRight className="w-6 h-6 text-slate-800" />
      )}
    </button>

    {isExpanded && (
      <div className="p-5 pt-0">
        {section.content && <ContentList content={section.content} color={color} />}
        {section.resources && (
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            {section.resources.map((resource, idx) => (
              <ResourceCard key={idx} resource={resource} />
            ))}
          </div>
        )}
      </div>
    )}
  </div>
);

// ==================== MAIN APP ====================

const FrontendLearningHub = () => {
  const [activeTab, setActiveTab] = useState(TABS.HTML);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSections, setExpandedSections] = useState({});

  const currentData = LEARNING_DATA[activeTab];

  const filteredSections = useMemo(() => {
    if (!searchTerm) return currentData.sections;
    
    const searchLower = searchTerm.toLowerCase();
    
    return currentData.sections.filter(section => {
      return (
        section.title.toLowerCase().includes(searchLower) ||
        section.content?.some(item => item.toLowerCase().includes(searchLower)) ||
        section.resources?.some(res => 
          res.name.toLowerCase().includes(searchLower) || 
          res.desc.toLowerCase().includes(searchLower)
        )
      );
    });
  }, [currentData.sections, searchTerm]);

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setExpandedSections({});
  };

  const IconComponent = currentData.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Frontend Learning Hub
          </h1>
          <p className="text-slate-300 text-lg">
            Your comprehensive guide to modern web development technologies
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {Object.entries(LEARNING_DATA).map(([key, data]) => {
            const Icon = data.icon;
            return (
              <button
                key={key}
                onClick={() => handleTabChange(key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === key
                    ? `${TAB_COLORS[key]} ${TAB_TEXT_COLORS[key]} shadow-gray-950 scale-105`
                    : 'bg-slate-700 text-black hover:bg-slate-600'
                }`}
              >
                <Icon className="w-6 h-6" />
                {data.title}
              </button>
            );
          })}
        </div>

        {/* Search Bar */}
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search topics, libraries, frameworks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-700 mx-auto max-w-7xl">
          <div className={`${TAB_COLORS[activeTab]} p-6`}>
            <div className="flex items-center gap-3 mb-2">
              <IconComponent className="w-6 h-6" />
              <h2 className="text-3xl font-bold">{currentData.title}</h2>
            </div>
            <p className="text-white/90 text-lg mb-3">{currentData.description}</p>
            {currentData.detailedInfo && (
              <p className="text-white/80 text-sm leading-relaxed border-t border-white/20 pt-3 mt-3">
                {currentData.detailedInfo}
              </p>
            )}
          </div>

          <div className="p-6">
            {filteredSections.length === 0 ? (
              <div className="text-center py-12 text-slate-400">
                <Search className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-xl">No results found for "{searchTerm}"</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredSections.map((section) => (
                  <SectionCard
                    key={section.id}
                    section={section}
                    isExpanded={expandedSections[section.id]}
                    onToggle={() => toggleSection(section.id)}
                    color={TAB_COLORS[activeTab]}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-slate-400 text-sm">
          <p>Click on any section to expand and explore. Happy learning! 🚀</p>
        </div>
      </div>
    </div>
  );
};

export default FrontendLearningHub;