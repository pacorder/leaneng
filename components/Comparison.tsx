
import React from 'react';
import { COMPARISON_DATA } from '../constants';

const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Why we beat traditional firms</h2>
          <p className="text-slate-600 text-lg">We stripped away the waste to focus on what matters: ROI for your project.</p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-5 text-sm font-bold text-slate-500 uppercase tracking-wider">Strategic Pillar</th>
                <th className="px-6 py-5 text-sm font-bold text-slate-500 uppercase tracking-wider hidden sm:table-cell">Traditional Firm</th>
                <th className="px-6 py-5 text-sm font-bold text-blue-600 uppercase tracking-wider bg-blue-50/50">Our Lean Model</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {COMPARISON_DATA.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-6 font-semibold text-slate-700">{row.feature}</td>
                  <td className="px-6 py-6 text-slate-500 hidden sm:table-cell">{row.traditional}</td>
                  <td className="px-6 py-6 font-bold text-blue-700 bg-blue-50/30">
                    <div className="flex items-center space-x-2">
                      <i className="fa-solid fa-circle-check text-emerald-500"></i>
                      <span>{row.leanEngineering}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 p-8 bg-blue-600 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between shadow-2xl shadow-blue-500/20">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Ready for a more efficient partnership?</h3>
            <p className="opacity-90">Our first design review is often self-funded by the savings found.</p>
          </div>
          <a href="#contact" className="bg-white text-blue-700 hover:bg-slate-100 font-bold px-8 py-4 rounded-2xl transition-all shadow-lg text-lg">
            Schedule Design Audit
          </a>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
