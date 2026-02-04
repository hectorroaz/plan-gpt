import React from 'react';
import { Activity, Heart, Scale, AlertTriangle, Pill, Brain } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Card } from './ui/Card';

const dataComposition = [
  { name: 'Masa Grasa', value: 30.9, color: '#f59e0b' }, // 46.6% of 66.4
  { name: 'Masa Muscular', value: 18.0, color: '#10b981' },
  { name: 'Masa Ósea', value: 2.08, color: '#6366f1' },
  { name: 'Otros (Agua/Órganos)', value: 15.42, color: '#cbd5e1' },
];

export const SummarySection: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Key Metrics Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
          <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">Peso Total</span>
          <span className="text-3xl font-bold text-slate-800 my-1">66.4 <span className="text-lg font-normal text-slate-500">kg</span></span>
          <span className="text-emerald-600 text-sm font-medium">IMC: 24.9 (Normal)</span>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
          <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">Grasa Corporal</span>
          <span className="text-3xl font-bold text-amber-500 my-1">46.6 <span className="text-lg font-normal">%</span></span>
          <span className="text-amber-600 text-xs font-medium bg-amber-50 px-2 py-0.5 rounded-full">Atención Requerida</span>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
          <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">Masa Muscular</span>
          <span className="text-3xl font-bold text-emerald-600 my-1">18.0 <span className="text-lg font-normal text-slate-500">kg</span></span>
          <span className="text-emerald-600 text-xs font-medium bg-emerald-50 px-2 py-0.5 rounded-full">Adecuada</span>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
          <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">Salud Cardíaca</span>
          <div className="flex gap-4 mt-2">
            <div className="flex flex-col">
               <span className="text-xl font-bold text-slate-700">62 <span className="text-xs font-normal">ppm</span></span>
               <span className="text-[10px] text-slate-400">Reposo</span>
            </div>
            <div className="flex flex-col">
               <span className="text-xl font-bold text-slate-700">44 <span className="text-xs font-normal">ms</span></span>
               <span className="text-[10px] text-slate-400">VFC</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Composition Chart */}
        <Card title="Composición Corporal Estimada (kg)" icon={<Scale size={20} />} className="lg:col-span-1 h-fit">
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={dataComposition}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {dataComposition.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => `${value.toFixed(1)} kg`} />
                <Legend verticalAlign="bottom" height={36}/>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 text-sm text-slate-600">
            <p className="mb-2"><strong>Análisis:</strong> Peso y musculatura adecuados, pero porcentaje de grasa elevado. El balance calórico actual tiende a la ganancia de grasa.</p>
            <p><strong>Tasa Metabólica Basal:</strong> ≈1,135 kcal/día (Baja).</p>
          </div>
        </Card>

        {/* Right Column: Detailed Text */}
        <div className="lg:col-span-2 space-y-6">
          
          <Card title="Hallazgos Neurológicos & Exámenes" icon={<Brain size={20} />} className="border-l-4 border-l-amber-400">
             <div className="flex gap-4 items-start">
                <AlertTriangle className="text-amber-500 shrink-0 mt-1" size={24} />
                <div className="space-y-2">
                    <p className="font-semibold text-slate-800">Neuropatía Axonal Motora (EMG 15-nov-2025)</p>
                    <p className="text-slate-600 text-sm">
                        Afectación del <strong>nervio cubital</strong> y <strong>nervio peroneal</strong> derechos.
                        Compromiso de función motora en codo derecho y peroné derecho.
                    </p>
                    <div className="bg-amber-50 p-3 rounded-lg text-sm text-amber-800 mt-2">
                        <strong>Prioridad:</strong> Evitar sobrecarga en codo derecho y flexión forzada o impacto en rodilla/peroné derecho.
                    </div>
                </div>
             </div>
          </Card>

          <Card title="Medicación e Impacto" icon={<Pill size={20} />}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <h4 className="font-semibold text-indigo-700">Pregabalina</h4>
                    <p className="text-xs text-slate-500 uppercase">Analgésico Neuropático</p>
                    <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                        <li>Alivia dolor neuropático.</li>
                        <li><strong>Riesgo:</strong> Mareos, somnolencia, ataxia, aumento de peso.</li>
                        <li><em>Impacto:</em> Puede afectar estabilidad y coordinación.</li>
                    </ul>
                </div>
                <div className="space-y-2">
                    <h4 className="font-semibold text-teal-700">Espironolactona</h4>
                    <p className="text-xs text-slate-500 uppercase">Diurético Ahorrador de K+</p>
                    <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                        <li><strong>Riesgo:</strong> Deshidratación, hiperkalemia (potasio alto).</li>
                        <li><em>Impacto:</em> Vigilar calambres y debilidad. Hidratación vital.</li>
                    </ul>
                </div>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100">
                <h4 className="font-semibold text-pink-700 text-sm">Suplementos</h4>
                <p className="text-sm text-slate-600">Colágeno hidrolizado + Ácido Hialurónico: Soporte articular positivo sin efectos adversos neuromusculares.</p>
            </div>
          </Card>

           <Card title="Estrategia de Vigilancia" icon={<Activity size={20} />}>
                <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></span>
                        <span><strong>Neurológico:</strong> Monitorizar fuerza y sensibilidad en extremidades derechas.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></span>
                        <span><strong>Renal & Electrolitos:</strong> Control periódico de función renal, sodio y potasio debido a la Espironolactona.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></span>
                        <span><strong>Seguridad Física:</strong> Uso de calzado antideslizante y prevención de caídas por posible sedación/ataxia.</span>
                    </li>
                </ul>
           </Card>

        </div>
      </div>
    </div>
  );
};