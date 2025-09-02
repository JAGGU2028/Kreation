
import React from 'react';
import { useInView } from '../hooks/useInView';
import { type Project } from '../types';

const projects: Project[] = [
  { id: 1, title: 'Zenith E-commerce', category: 'Web Development', imageUrl: 'https://picsum.photos/seed/project1/800/600', projectUrl: '#' },
  { id: 3, title: 'Quantum Analytics UI', category: 'Web Designing', imageUrl: 'https://picsum.photos/seed/project3/800/600', projectUrl: '#' },
  { id: 4, title: 'Nova Finance App', category: 'Web Designing', imageUrl: 'https://picsum.photos/seed/project4/800/600', projectUrl: '#' },
  { id: 6, title: 'Helios Marketing Site', category: 'Web Development', imageUrl: 'https://picsum.photos/seed/project6/800/600', projectUrl: '#' },
];

const PortfolioCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
    // FIX: Explicitly type the useInView hook for the anchor element to fix the type error.
    const { ref, isInView } = useInView<HTMLAnchorElement>({ threshold: 0.1 });
    return (
        <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            ref={ref}
            data-interactive
            className={`group aspect-[4/3] relative block overflow-hidden rounded-lg transition-[opacity,transform] duration-700 ease-out will-change-[opacity,transform] ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover transition-[transform,filter] duration-500 ease-in-out will-change-[transform,filter] group-hover:scale-110 group-hover:brightness-125" 
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transform transition-transform duration-500 ease-in-out group-hover:-translate-y-4">
                <p className="text-sm uppercase tracking-widest" style={{color: 'var(--accent)'}}>{project.category}</p>
                <h3 className="text-2xl font-serif mt-1">{project.title}</h3>
            </div>

            <div className="absolute top-6 right-6 text-white transform -translate-y-16 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
            </div>
        </a>
    );
};


const Portfolio: React.FC = () => {
  // FIX: Explicitly type the useInView hook for the section element.
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.2 });
  return (
    <section id="portfolio" ref={ref} className="py-20 lg:py-32 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <svg width="800" height="800" viewBox="0 0 800 800" className="opacity-5 animate-shape-rotate">
            <rect x="100" y="100" width="600" height="600" fill="none" stroke="var(--accent)" strokeWidth="2" />
        </svg>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="font-serif text-4xl md:text-5xl text-white">Selected <span className="text-accent">Works</span></h2>
          <p className="mt-4 text-lg" style={{ color: 'var(--text-secondary)' }}>Where creativity meets functionality.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <PortfolioCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;