
import React, { useState } from 'react';

const SavingsCalculator: React.FC = () => {
  const [capex, setCapex] = useState<number>(1000000);
  const [complexity, setComplexity] = useState<number>(1); // 1 = Simple, 2 = Mid, 3 = Complex

  const estimatedSavingsMin = capex * 0.10;
  const estimatedSavingsMax = capex * 0.25;
  const typicalOurFee = complexity * 15000;
  const netSavings = (estimatedSavingsMin + estimatedSavingsMax) / 2 - typicalOurFee;

  return (
    <section id="calculator" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Savings Estimator</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            See how much CAPEX/OPEX we can shave off your project through rigorous optimization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 backdrop-blur-sm">
            <div className="mb-8">
              <label className="block text-sm font-medium text-slate-300 mb-3">Estimated Project Budget (USD)</label>
              <input 
                type="range" 
                min="100000" 
                max="50000000" 
                step="100000"
                value={capex}
                onChange={(e) => setCapex(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between mt-2 text-sm text-slate-400">
                <span>$100k</span>
                <span className="text-blue-400 font-bold text-lg technical-font">${capex.toLocaleString()}</span>
                <span>$50M</span>
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-slate-300 mb-3">Design Complexity</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { val: 1, label: 'Standard' },
                  { val: 2, label: 'Advanced' },
                  { val: 3, label: 'Critical' }
                ].map((item) => (
                  <button
                    key={item.val}
                    onClick={() => setComplexity(item.val)}
                    className={`py-3 rounded-xl text-sm font-bold transition-all border ${complexity === item.val ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-900/40' : 'bg-slate-700/50 border-slate-600 text-slate-300 hover:border-slate-500'}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            
            <p className="text-xs text-slate-500 italic">
              *Calculations based on historic benchmarks of 10-25% design optimization efficacy. Actual results vary by project stage.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-br from-blue-600/20 to-emerald-600/20 rounded-3xl border border-white/10 shadow-inner">
              <h3 className="text-slate-300 text-sm font-semibold uppercase tracking-wider mb-2">Est. Direct Savings</h3>
              <div className="flex items-baseline space-x-2">
                <span className="text-4xl md:text-5xl font-black text-emerald-400 technical-font">
                  ${estimatedSavingsMin.toLocaleString()}
                </span>
                <span className="text-slate-400">to</span>
                <span className="text-4xl md:text-5xl font-black text-emerald-400 technical-font">
                  ${estimatedSavingsMax.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 bg-slate-800/80 rounded-2xl border border-slate-700">
                <span className="text-slate-400 text-xs block mb-1 uppercase font-bold">Est. Our Fee</span>
                <span className="text-xl font-bold technical-font text-blue-300">~${typicalOurFee.toLocaleString()}</span>
              </div>
              <div className="p-5 bg-slate-800/80 rounded-2xl border border-slate-700">
                <span className="text-slate-400 text-xs block mb-1 uppercase font-bold">Project ROI</span>
                <span className="text-xl font-bold technical-font text-blue-300">{(netSavings / typicalOurFee).toFixed(1)}x</span>
              </div>
            </div>

            <div className="pt-4">
              <button className="w-full bg-white text-slate-900 hover:bg-slate-100 font-bold py-4 rounded-2xl transition-all shadow-xl hover:scale-[1.02] flex items-center justify-center space-x-2">
                <span>Unlock These Savings</span>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsCalculator;
