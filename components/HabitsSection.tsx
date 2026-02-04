import React from 'react';
import { Card } from './ui/Card';
import { Moon, Utensils, Armchair, Smile, Monitor, BatteryCharging } from 'lucide-react';

export const HabitsSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
        
        {/* Daily Habits & Ergonomics */}
        <Card title="Ergonomía & Postura" icon={<Monitor className="text-blue-500"/>} className="md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                        <Armchair size={16} /> Entorno de Trabajo
                    </h4>
                    <ul className="text-sm text-slate-600 space-y-2 list-disc list-inside">
                        <li><strong>Codo derecho:</strong> Usar reposabrazos blandos, no apoyar directamente sobre superficies duras.</li>
                        <li><strong>Pantalla:</strong> A la altura de la vista para evitar flexión cervical.</li>
                        <li><strong>Teclado/Mouse:</strong> Ergonómicos.</li>
                        <li><strong>Pausas Activas:</strong> Cada 30-60 min. Regla 20-20-20 para la vista.</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Hogar & Seguridad</h4>
                     <ul className="text-sm text-slate-600 space-y-2 list-disc list-inside">
                        <li><strong>Rodillas:</strong> Usar superficies acolchadas al arrodillarse (proteger peroné).</li>
                        <li><strong>Sentado:</strong> No cruzar las piernas (evita compresión nervio peroneal).</li>
                        <li><strong>Cargas:</strong> No sostener objetos pesados con el codo en hiperflexión.</li>
                    </ul>
                </div>
            </div>
        </Card>

        {/* Sleep */}
        <Card title="Higiene del Sueño" icon={<Moon className="text-indigo-500"/>}>
            <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex gap-2">
                    <span className="text-indigo-400 font-bold">•</span>
                    <span>Meta: 7 a 9 horas por noche. Horarios regulares.</span>
                </li>
                <li className="flex gap-2">
                    <span className="text-indigo-400 font-bold">•</span>
                    <span>Entorno: Oscuro, fresco. Colchón y almohada que alineen la columna.</span>
                </li>
                <li className="flex gap-2">
                    <span className="text-indigo-400 font-bold">•</span>
                    <span>Rutina: Evitar pantallas 1-2h antes de dormir.</span>
                </li>
            </ul>
        </Card>

        {/* Nutrition */}
        <Card title="Nutrición & Hidratación" icon={<Utensils className="text-emerald-500"/>}>
             <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex gap-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span><strong>Antiinflamatorio:</strong> Frutas, verduras, Omega-3 (pescado, nueces).</span>
                </li>
                 <li className="flex gap-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span><strong>Soporte Nervioso:</strong> Vitaminas B (B1, B6, B12) en cereales integrales, huevos, lácteos.</span>
                </li>
                <li className="flex gap-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span><strong>Hidratación:</strong> ≈2 Litros/día. Crucial por el uso de diuréticos (Espironolactona). Vigilar sodio/potasio.</span>
                </li>
            </ul>
        </Card>

        {/* Stress */}
        <Card title="Manejo del Estrés" icon={<Smile className="text-pink-500"/>}>
             <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex gap-2">
                    <span className="text-pink-400 font-bold">•</span>
                    <span><strong>Respiración:</strong> Inhalar 4s, Retener 4s, Exhalar 6-8s.</span>
                </li>
                <li className="flex gap-2">
                    <span className="text-pink-400 font-bold">•</span>
                    <span><strong>Mindfulness:</strong> 5-10 min diarios de meditación guiada.</span>
                </li>
                <li className="flex gap-2">
                    <span className="text-pink-400 font-bold">•</span>
                    <span><strong>Efecto:</strong> Reducir estrés mejora percepción del dolor neuropático.</span>
                </li>
            </ul>
        </Card>

        <Card title="Recuperación Activa" icon={<BatteryCharging className="text-amber-500"/>}>
             <p className="text-sm text-slate-600 mb-2">
                Realizar pequeños movimientos frecuentes (rotaciones muñecas, tobillos) para evitar rigidez.
             </p>
             <div className="bg-amber-50 text-amber-800 text-xs p-2 rounded border border-amber-100">
                <strong>Nota:</strong> Cambiar de posición regularmente al estar de pie o sentado.
             </div>
        </Card>

    </div>
  );
};