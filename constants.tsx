
import { SiteContent } from './types';

export const CONTENT: Record<'es' | 'en', SiteContent> = {
  es: {
    nav: {
      services: 'Servicios',
      whyUs: 'Nosotros',
      calc: 'Ahorros',
      contact: 'Contacto',
      cta: 'Cotizar'
    },
    hero: {
      badge: 'Basado en Chile • Proyectos en toda LatAm',
      title: 'Ingeniería Lean.',
      titleAccent: 'Ahorros Masivos en CAPEX.',
      desc: 'Optimización de diseño para construcción, energía e infraestructura. Reducimos costos entre un 10-25% mediante una red de ingenieros expertos senior.',
      ctaPrimary: 'Optimizar mi Proyecto',
      ctaSecondary: 'Nuestros Servicios'
    },
    services: {
      title: 'Servicios Principales',
      items: [
        {
          id: 'design-optimization',
          title: 'Revisión y Optimización de Diseño',
          description: 'Auditorías técnicas profundas para identificar ineficiencias y simplificar sistemas.',
          icon: 'fa-microchip',
          benefits: ['Reducción 10-25% CAPEX/OPEX', 'Menos desperdicio de materiales', 'Mejor rendimiento']
        },
        {
          id: 'value-engineering',
          title: 'Ingeniería de Valor',
          description: 'Análisis riguroso para asegurar funciones al menor costo de ciclo de vida.',
          icon: 'fa-chart-line',
          benefits: ['Análisis de constructibilidad', 'Materiales alternativos', 'Modelado de costos']
        },
        {
          id: 'on-demand-support',
          title: 'Soporte Senior On-Demand',
          description: 'Acceso a ingenieros senior sin los costos fijos de una gran firma.',
          icon: 'fa-user-group',
          benefits: ['Retainers flexibles', 'Tarifas por proyecto', 'Expertos especialistas']
        },
        {
          id: 'no-savings-model',
          title: 'Modelo de Riesgo Compartido',
          description: 'Cobramos en base a los ahorros reales generados para su proyecto.',
          icon: 'fa-handshake',
          benefits: ['Cero riesgo inicial', 'Incentivos por desempeño', 'ROI transparente']
        }
      ]
    },
    whyUs: {
      title: 'La Ventaja de una',
      titleAccent: 'Red Lean',
      items: [
        {
          title: 'Costos Fijos Ultra-Bajos',
          content: 'Sin oficinas costosas ni burocracia. Usted paga por ingeniería de alto nivel, nada más.',
          icon: 'fa-piggy-bank'
        },
        {
          title: 'Solo Talento Senior',
          content: 'Nuestra red consiste exclusivamente en ingenieros con más de 15 años de experiencia real.',
          icon: 'fa-medal'
        },
        {
          title: 'Expertos en LatAm',
          content: 'Basados en Chile, entendemos la normativa y logística de toda la región.',
          icon: 'fa-map-location-dot'
        }
      ]
    },
    comparison: {
      title: 'Por qué superamos a las firmas tradicionales',
      desc: 'Eliminamos el gasto innecesario para enfocarnos en el ROI de su proyecto.',
      thPillar: 'Pilar Estratégico',
      thTrad: 'Firma Tradicional',
      thLean: 'Nuestro Modelo',
      ctaTitle: '¿Listo para una asociación eficiente?',
      ctaDesc: 'Nuestra primera revisión a menudo se autofinancia con los ahorros encontrados.',
      ctaBtn: 'Agendar Auditoría',
      rows: [
        { feature: 'Costos Fijos', traditional: 'Altos (Oficina, Admin)', leanEngineering: 'Mínimos (Remoto, Ágil)' },
        { feature: 'Seniority del Staff', traditional: 'Mixto (Muchos Juniors)', leanEngineering: 'Exclusivamente Senior' },
        { feature: 'Modelo de Precios', traditional: 'Rígido / Por Hora', leanEngineering: 'Flexible / Por Éxito' },
        { feature: 'Velocidad', traditional: 'Capas Burocráticas', leanEngineering: 'Acceso Ágil y Directo' }
      ]
    },
    calc: {
      title: 'Estimador de Ahorros',
      desc: 'Vea cuánto CAPEX/OPEX podemos reducir mediante una optimización rigurosa.',
      labelBudget: 'Presupuesto del Proyecto (Miles de USD)',
      labelComplexity: 'Complejidad del Diseño',
      complexities: ['Estándar', 'Avanzado', 'Crítico'],
      note: '*Cálculos basados en ahorros históricos de 10-25%. Valores en miles de USD.',
      resultTitle: 'Ahorros Est. (Miles de USD)',
      labelFee: 'Nuestros Honorarios (Miles)',
      labelRoi: 'Retorno de Inversión',
      btn: 'Obtener estos Ahorros'
    },
    contact: {
      title: 'Hablemos de tu proyecto',
      desc: 'Envíanos tus planos o el brief del proyecto para una evaluación preliminar de ahorros.',
      labels: {
        name: 'Nombre Completo',
        email: 'Correo Electrónico',
        sector: 'Sector',
        service: 'Servicio Requerido',
        brief: 'Resumen del Proyecto',
        submit: 'Enviar Solicitud'
      },
      sectors: ['Infraestructura', 'Energía', 'Minería', 'Construcción'],
      services: ['Optimización', 'Ingeniería de Valor', 'Soporte On-demand'],
      info: {
        location: 'Santiago, Chile',
        email: 'tx2.patricio@gmail.com',
        phone: '+56 9 5250 4101'
      }
    }
  },
  en: {
    nav: {
      services: 'Services',
      whyUs: 'Why Us',
      calc: 'Savings',
      contact: 'Contact',
      cta: 'Get Quote'
    },
    hero: {
      badge: 'Based in Chile • Projects across LatAm',
      title: 'Lean Engineering.',
      titleAccent: 'Massive CAPEX Savings.',
      desc: 'Design optimization for construction, energy, and infrastructure. We cut costs by 10-25% through an elite network of senior expert engineers.',
      ctaPrimary: 'Optimize My Project',
      ctaSecondary: 'Our Services'
    },
    services: {
      title: 'Core Services',
      items: [
        {
          id: 'design-optimization',
          title: 'Design Review & Optimization',
          description: 'Deep technical audits to identify inefficiencies and streamline systems.',
          icon: 'fa-microchip',
          benefits: ['10-25% CAPEX/OPEX Reduction', 'Reduced material waste', 'Enhanced performance']
        },
        {
          id: 'value-engineering',
          title: 'Value Engineering',
          description: 'Rigorous analysis to ensure functions at the lowest lifecycle cost.',
          icon: 'fa-chart-line',
          benefits: ['Constructability analysis', 'Alternative assessment', 'Cost modeling']
        },
        {
          id: 'on-demand-support',
          title: 'On-Demand Senior Support',
          description: 'Access senior engineers without the overhead of a full-time firm.',
          icon: 'fa-user-group',
          benefits: ['Flexible retainers', 'Project-based fees', 'Specialist expertise']
        },
        {
          id: 'no-savings-model',
          title: 'Risk-Sharing Model',
          description: 'We bill based on the actual savings generated for your project.',
          icon: 'fa-handshake',
          benefits: ['Zero upfront risk', 'Performance-based', 'Transparent ROI']
        }
      ]
    },
    whyUs: {
      title: 'The Advantage of a',
      titleAccent: 'Lean Network',
      items: [
        {
          title: 'Ultra-Low Overhead',
          content: 'No expensive offices or bureaucracy. You pay for high-level engineering, nothing else.',
          icon: 'fa-piggy-bank'
        },
        {
          title: 'Senior Talent Only',
          content: 'Our network exclusively consists of engineers with 15+ years of real experience.',
          icon: 'fa-medal'
        },
        {
          title: 'LatAm Experts',
          content: 'Based in Chile, we understand the regional regulations and logistics.',
          icon: 'fa-map-location-dot'
        }
      ]
    },
    comparison: {
      title: 'Why we beat traditional firms',
      desc: 'We strip away waste to focus on what matters: project ROI.',
      thPillar: 'Strategic Pillar',
      thTrad: 'Traditional Firm',
      thLean: 'Our Model',
      ctaTitle: 'Ready for an efficient partnership?',
      ctaDesc: 'Our first review is often self-funded by the savings found.',
      ctaBtn: 'Schedule Audit',
      rows: [
        { feature: 'Fixed Costs', traditional: 'High (Office, Admin)', leanEngineering: 'Minimal (Remote, Agile)' },
        { feature: 'Staff Seniority', traditional: 'Mixed (Heavy Junior usage)', leanEngineering: 'Exclusively Senior' },
        { feature: 'Pricing Model', traditional: 'Rigid / Hourly', leanEngineering: 'Flexible / Success-Based' },
        { feature: 'Speed', traditional: 'Bureaucratic Layers', leanEngineering: 'Agile & Direct Access' }
      ]
    },
    calc: {
      title: 'Savings Estimator',
      desc: 'See how much CAPEX/OPEX we can shave off your project.',
      labelBudget: 'Project Budget (Thousands of USD)',
      labelComplexity: 'Design Complexity',
      complexities: ['Standard', 'Advanced', 'Critical'],
      note: '*Calculations based on historic 10-25% benchmarks. Values in thousands of USD.',
      resultTitle: 'Est. Savings (Thousands USD)',
      labelFee: 'Est. Fee (Thousands)',
      labelRoi: 'Project ROI',
      btn: 'Unlock These Savings'
    },
    contact: {
      title: 'Let’s talk',
      desc: 'Send us your brief or blueprints for a preliminary assessment.',
      labels: {
        name: 'Full Name',
        email: 'Email',
        sector: 'Sector',
        service: 'Service Needed',
        brief: 'Project Brief',
        submit: 'Submit Request'
      },
      sectors: ['Infrastructure', 'Energy', 'Mining', 'Construction'],
      services: ['Optimization', 'Value Engineering', 'On-demand Support'],
      info: {
        location: 'Santiago, Chile',
        email: 'tx2.patricio@gmail.com',
        phone: '+56 9 5250 4101'
      }
    }
  }
};
