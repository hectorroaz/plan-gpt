import React, { useState } from 'react';
import { Activity, ClipboardList, Coffee, Menu, X } from 'lucide-react';
import { SummarySection } from './components/SummarySection';
import { ProgramSection } from './components/ProgramSection';
import { HabitsSection } from './components/HabitsSection';
import { TabView } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabView>(TabView.SUMMARY);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case TabView.SUMMARY:
        return <SummarySection />;
      case TabView.PROGRAM:
        return <ProgramSection />;
      case TabView.HABITS:
        return <HabitsSection />;
      default:
        return <SummarySection />;
    }
  };

  const navItems = [
    { id: TabView.SUMMARY, label: 'Situación Actual', icon: <Activity size={18} /> },
    { id: TabView.PROGRAM, label: 'Plan de Ejercicio', icon: <ClipboardList size={18} /> },
    { id: TabView.HABITS, label: 'Hábitos & Ergonomía', icon: <Coffee size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-100">
      
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <Activity className="text-white h-5 w-5" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-slate-900 leading-tight">Informe de Salud</h1>
                <p className="text-xs text-slate-500 hidden sm:block">Plan Personalizado Integral</p>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-emerald-50 text-emerald-700 shadow-sm ring-1 ring-emerald-200'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-md"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white px-2 pt-2 pb-3 space-y-1 shadow-lg">
             {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 w-full px-3 py-3 rounded-md text-base font-medium ${
                    activeTab === item.id
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900">
                {activeTab === TabView.SUMMARY && "Resumen Clínico"}
                {activeTab === TabView.PROGRAM && "Programa de Acondicionamiento"}
                {activeTab === TabView.HABITS && "Calidad de Vida"}
            </h2>
            <p className="text-slate-500 mt-1">
                {activeTab === TabView.SUMMARY && "Análisis de composición corporal, estado neurológico y medicación."}
                {activeTab === TabView.PROGRAM && "Fases de entrenamiento funcional adaptado a neuropatía."}
                {activeTab === TabView.HABITS && "Recomendaciones de sueño, nutrición y ergonomía laboral."}
            </p>
        </div>

        {renderContent()}
      </main>

      <footer className="bg-white border-t border-slate-200 mt-12 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-sm text-slate-400">
                Este informe es confidencial y para uso exclusivo del paciente y profesionales tratantes.
                <br />Generado el {new Date().toLocaleDateString()}
            </p>
        </div>
      </footer>
    </div>
  );
}