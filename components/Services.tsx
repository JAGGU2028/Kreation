
import React from 'react';
import { useInView } from '../hooks/useInView';
import { type Service } from '../types';

const WebDesignIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c.251.023.501.05.75.082m.75.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.597-.237-1.17-.659-1.591L16.5 9.75M4.5 20.25v-2.625c0-.597.237-1.17.659-1.591L9.75 9.75" />
  </svg>
);

const WebDevIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
);

const services: Service[] = [
  {
    icon: <WebDesignIcon />,
    title: 'Web Designing',
    description: 'We create visually stunning, intuitive, and conversion-focused websites that reflect your brand and engage your audience.',
  },
  {
    icon: <WebDevIcon />,
    title: 'Web Development',
    description: 'From custom themes to full-stack applications, we build fast, scalable, and secure web solutions that power business growth.',
  },
];

const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
  // FIX: Explicitly type the useInView hook for the div element.
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.5 });
  return (
    <div
      ref={ref}
      data-interactive
      className={`group p-8 rounded-lg transition-[opacity,transform] duration-700 ease-out will-change-[opacity,transform] z-10 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ 
        transitionDelay: `${index * 150}ms`,
        backgroundColor: 'var(--bg-primary)',
        border: '1px solid var(--border-color)'
      }}
    >
      <div className="icon-accent-hover text-neutral-300 mb-4 transition-colors duration-300">{service.icon}</div>
      <h3 className="text-2xl font-serif text-white mb-3">{service.title}</h3>
      <p style={{ color: 'var(--text-secondary)' }} className="leading-relaxed">{service.description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  // FIX: Explicitly type the useInView hook for the section element.
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.3 });
  return (
    <section id="services" ref={ref} className="py-20 lg:py-32 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="absolute inset-0 z-0 flex items-center justify-center">
          <svg width="1000" height="1000" className="opacity-5 animate-shape-rotate" style={{animationDuration: '120s'}}>
              <defs>
                  <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                      <path d="M 80 0 L 0 0 0 80" fill="none" stroke="var(--accent)" strokeWidth="1"/>
                  </pattern>
              </defs>
              <rect width="1000" height="1000" fill="url(#grid)" />
          </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="font-serif text-4xl md:text-5xl text-white">Our <span className="text-accent">Expertise</span></h2>
          <p className="mt-4 text-lg" style={{ color: 'var(--text-secondary)' }}>Crafting digital experiences that inspire.</p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;