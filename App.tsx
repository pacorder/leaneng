
import React from 'react';
import Header from './components/Header';
import SavingsCalculator from './components/SavingsCalculator';
import Comparison from './components/Comparison';
import { SERVICES, WHY_US } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-slate-900 overflow-hidden">
        {/* Background visual element */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-blue-600/20 to-transparent pointer-events-none"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6 text-blue-400 text-sm font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>Based in Chile • Serving LatAm Infrastructure</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              Lean Engineering.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Massive CAPEX Savings.
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              Specialized design optimization for construction, energy, and infrastructure. We leverage a elite network of senior freelancers to cut costs by <span className="text-white font-bold">10-25%</span>—at prices far below traditional firms.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-2xl shadow-xl shadow-blue-600/30 transition-all text-center">
                Optimize My Project
              </a>
              <a href="#services" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white text-lg font-bold rounded-2xl border border-slate-700 transition-all text-center">
                Our Services
              </a>
            </div>
            
            <div className="mt-16 flex items-center space-x-12 opacity-50 grayscale">
              <div className="flex flex-col">
                <span className="text-white text-2xl font-black">100+</span>
                <span className="text-slate-400 text-xs uppercase tracking-widest font-bold">Projects Optimized</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white text-2xl font-black">$45M+</span>
                <span className="text-slate-400 text-xs uppercase tracking-widest font-bold">Client Savings</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white text-2xl font-black">20+</span>
                <span className="text-slate-400 text-xs uppercase tracking-widest font-bold">Senior Experts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Core Competencies</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all group">
                <div className="w-14 h-14 bg-slate-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">
                  <i className={`fa-solid ${service.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-xs font-semibold text-slate-500">
                      <i className="fa-solid fa-check text-emerald-500 mr-2"></i>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us / The Network Section */}
      <section id="why-us" className="py-24 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <img 
                src="https://picsum.photos/id/1070/800/1000" 
                alt="Engineering Site" 
                className="rounded-[40px] shadow-2xl object-cover h-[600px] w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
                The Edge of a <span className="text-blue-600">Lean Network</span>
              </h2>
              <div className="space-y-10">
                {WHY_US.map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                      <i className={`fa-solid ${item.icon} text-xl`}></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-slate-600 leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Comparison />
      <SavingsCalculator />

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/3 bg-blue-700 p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">Let's streamline your project.</h2>
              <p className="text-blue-100 mb-10 text-lg">
                Send us your design blueprints or project brief for a preliminary savings assessment.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <span>Santiago, Chile (LatAm Hub)</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <span>hello@leanengineering.cl</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <span>+56 2 2345 6789</span>
                </div>
              </div>

              <div className="mt-16 flex space-x-4 opacity-70">
                <i className="fa-brands fa-linkedin text-2xl hover:opacity-100 cursor-pointer"></i>
                <i className="fa-brands fa-x-twitter text-2xl hover:opacity-100 cursor-pointer"></i>
              </div>
            </div>

            <div className="lg:w-2/3 p-12">
              <form className="grid sm:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Project Sector</label>
                  <select className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all">
                    <option>Infrastructure</option>
                    <option>Energy / Renewables</option>
                    <option>Mining</option>
                    <option>Commercial Construction</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Service Needed</label>
                  <select className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all">
                    <option>Design Optimization</option>
                    <option>Value Engineering</option>
                    <option>On-demand Support</option>
                    <option>No-Savings-No-Fee Audit</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Project Brief</label>
                  <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Tell us about your project challenges..."></textarea>
                </div>
                <div className="sm:col-span-2">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-blue-600/20 transform hover:-translate-y-1">
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
             <div className="w-6 h-6 bg-blue-700 rounded-sm flex items-center justify-center text-white">
              <i className="fa-solid fa-compass-drafting text-[10px]"></i>
            </div>
            <span className="font-bold text-slate-900">Lean Engineering Solutions</span>
          </div>
          <p>© {new Date().getFullYear()} Lean Engineering SpA. Chile. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-600">Privacy</a>
            <a href="#" className="hover:text-blue-600">Terms</a>
            <a href="#" className="hover:text-blue-600">LatAm Logistics</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
