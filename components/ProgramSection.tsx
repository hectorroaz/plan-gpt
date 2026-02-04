import React from 'react';
import { Card } from './ui/Card';
import { Calendar, CheckCircle2, TrendingUp, ShieldCheck, PlayCircle } from 'lucide-react';

const PhaseCard = ({ title, duration, focus, exercises, icon, colorClass }: any) => (
  <div className={`relative p-6 rounded-xl border ${colorClass} bg-white shadow-sm flex flex-col h-full`}>
    <div className="flex justify-between items-start mb-4">
        <div>
            <h3 className="text-lg font-bold text-slate-800">{title}</h3>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">{duration}</span>
        </div>
        <div className="p-2 rounded-lg bg-slate-50 text-slate-600">
            {icon}
        </div>
    </div>
    
    <div className="mb-4">
        <p className="text-sm font-medium text-slate-700 mb-2">Enfoque:</p>
        <p className="text-sm text-slate-600">{focus}</p>
    </div>

    <div className="mt-auto">
        <p className="text-sm font-medium text-slate-700 mb-2">Ejercicios Clave:</p>
        <ul className="text-sm text-slate-600 space-y-1">
            {exercises.map((ex: string, i: number) => (
                <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="mt-1 text-emerald-500 shrink-0" />
                    <span>{ex}</span>
                </li>
            ))}
        </ul>
    </div>
  </div>
);

export const ProgramSection: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
        
        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6">
            <h2 className="text-xl font-bold text-emerald-800 mb-2">Objetivo del Programa</h2>
            <p className="text-emerald-900/80">
                Plan funcional y progresivo de bajo impacto. Diseñado para mejorar estabilidad, resistencia y fuerza sin comprimir el nervio cubital ni peroneal.
                <br /><strong>Prioridad:</strong> Seguridad neurológica y prevención de caídas.
            </p>
        </div>

        {/* Phases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PhaseCard 
                title="Fase 1: Adaptación"
                duration="Semanas 0-4"
                focus="Reentrenamiento suave, estabilidad y movilidad neural. Sin fatiga excesiva."
                exercises={[
                    "Sentadillas parciales (silla)",
                    "Puentes de glúteos",
                    "Remo con banda",
                    "Neurodinamia suave",
                    "Cardio ligero (20-30 min)"
                ]}
                icon={<PlayCircle />}
                colorClass="border-blue-200 hover:border-blue-400 transition-colors"
            />
             <PhaseCard 
                title="Fase 2: Desarrollo"
                duration="Semanas 4-8"
                focus="Aumento de carga moderada, variedad y resistencia cardiovascular."
                exercises={[
                    "Sentadillas libres",
                    "Estocadas suaves",
                    "Planchas suaves",
                    "Cardio moderado (30-40 min)",
                    "Equilibrio monopodal"
                ]}
                icon={<TrendingUp />}
                colorClass="border-indigo-200 hover:border-indigo-400 transition-colors"
            />
             <PhaseCard 
                title="Fase 3: Consolidación"
                duration="+8 Semanas"
                focus="Desafío completo, fuerza multiarticular y core intenso."
                exercises={[
                    "Sentadillas completas",
                    "Peso muerto (poco peso)",
                    "Plancha lateral",
                    "Cardio (40-45 min)",
                    "Lunges inversos"
                ]}
                icon={<ShieldCheck />}
                colorClass="border-purple-200 hover:border-purple-400 transition-colors"
            />
        </div>

        {/* Weekly Routine */}
        <Card title="Ejemplo de Rutina Semanal (Fase de Adaptación)" icon={<Calendar size={20} />}>
            <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] text-left border-collapse">
                    <thead>
                        <tr className="border-b border-slate-200">
                            <th className="py-3 px-4 font-semibold text-slate-700 w-1/4">Día</th>
                            <th className="py-3 px-4 font-semibold text-slate-700">Enfoque</th>
                            <th className="py-3 px-4 font-semibold text-slate-700">Actividades Clave</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        <tr className="border-b border-slate-100 bg-slate-50/50">
                            <td className="py-3 px-4 font-medium text-slate-800">Lunes</td>
                            <td className="py-3 px-4 text-blue-600 font-medium">Fuerza / Estabilidad</td>
                            <td className="py-3 px-4 text-slate-600">Sentadillas silla, Remo banda, Puente glúteos.</td>
                        </tr>
                        <tr className="border-b border-slate-100">
                            <td className="py-3 px-4 font-medium text-slate-800">Martes</td>
                            <td className="py-3 px-4 text-emerald-600 font-medium">Cardio Leve</td>
                            <td className="py-3 px-4 text-slate-600">25 min bici estática + Neurodinamia.</td>
                        </tr>
                        <tr className="border-b border-slate-100 bg-slate-50/50">
                            <td className="py-3 px-4 font-medium text-slate-800">Miércoles</td>
                            <td className="py-3 px-4 text-slate-500 font-medium">Descanso Activo</td>
                            <td className="py-3 px-4 text-slate-600">Paseo suave 30 min + Movilidad.</td>
                        </tr>
                        <tr className="border-b border-slate-100">
                            <td className="py-3 px-4 font-medium text-slate-800">Jueves</td>
                            <td className="py-3 px-4 text-blue-600 font-medium">Fuerza / Estabilidad</td>
                            <td className="py-3 px-4 text-slate-600">Estocadas asistidas, Flexión pared, Plancha rodillas.</td>
                        </tr>
                        <tr className="border-b border-slate-100 bg-slate-50/50">
                            <td className="py-3 px-4 font-medium text-slate-800">Viernes</td>
                            <td className="py-3 px-4 text-emerald-600 font-medium">Cardio Moderado</td>
                            <td className="py-3 px-4 text-slate-600">30 min elíptica/bici + Equilibrio monopodal.</td>
                        </tr>
                        <tr className="border-b border-slate-100">
                            <td className="py-3 px-4 font-medium text-slate-800">Sábado</td>
                            <td className="py-3 px-4 text-purple-600 font-medium">Flexibilidad</td>
                            <td className="py-3 px-4 text-slate-600">Yoga suave / Estiramientos + Neurodinamia.</td>
                        </tr>
                         <tr className="border-b border-slate-100 bg-slate-50/50">
                            <td className="py-3 px-4 font-medium text-slate-800">Domingo</td>
                            <td className="py-3 px-4 text-slate-400 font-medium">Descanso</td>
                            <td className="py-3 px-4 text-slate-600">Recuperación completa.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="mt-4 text-xs text-slate-500 bg-slate-50 p-3 rounded border border-slate-100">
                * Suspender cualquier actividad que cause dolor neuropático agudo o parestesias.
            </div>
        </Card>
    </div>
  );
};