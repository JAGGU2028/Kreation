import React from 'react';
import StaticLogo from './StaticLogo';

const SocialIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <a href="#" data-interactive className="text-neutral-400 social-icon-hover transition-colors duration-300">
        {children}
    </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="py-12" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
                <StaticLogo />
                <span className="ml-4 font-serif text-xl text-white">KREATION</span>
            </div>
            <div className="flex flex-col md:flex-row items-center">
                <a href="mailto:hello@kreation.design" data-interactive className="nav-link-hover transition-colors duration-300 mb-4 md:mb-0 md:mr-8" style={{ color: 'var(--text-secondary)' }}>
                    hello@kreation.design
                </a>
                <div className="flex space-x-6">
                    <SocialIcon>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.148-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.44c-3.116 0-3.483.011-4.691.068-2.695.122-3.997 1.423-4.12 4.12C3.12 9.088 3.11 9.455 3.11 12s.01 2.912.068 4.12c.123 2.695 1.425 3.997 4.12 4.12 1.208.057 1.575.068 4.691.068s3.483-.011 4.691-.068c2.695-.123 3.997-1.425 4.12-4.12.058-1.208.068-1.575.068-4.691s-.01-3.483-.068-4.691c-.123-2.695-1.425-3.997-4.12-4.12C15.483 3.614 15.116 3.603 12 3.603zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm0 6c-1.24 0-2.25-1.01-2.25-2.25S10.76 9.75 12 9.75s2.25 1.01 2.25 2.25S13.24 14.25 12 14.25zm5.12-6.837a.938.938 0 100-1.875.938.938 0 000 1.875z"></path></svg>
                    </SocialIcon>
                    <SocialIcon>
                         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.49-1.74.85-2.7 1.03A4.24 4.24 0 0016.1 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.72-1.88-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.76 2.81 1.91 3.58-.7-.02-1.36-.21-1.94-.53v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.35 0-.69-.02-1.03-.06A12.022 12.022 0 008.3 20c7.22 0 11.16-6 11.16-11.16 0-.17 0-.34-.01-.51.77-.56 1.43-1.25 1.96-2.04z"></path></svg>
                    </SocialIcon>
                </div>
            </div>
        </div>
        <div className="text-center mt-8 pt-8" style={{ borderTop: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}>
            <p>&copy; {new Date().getFullYear()} Kreation. All Rights Reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;