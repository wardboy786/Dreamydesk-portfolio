import React from 'react';

interface SocialLinkProps {
    icon: React.ReactNode;
    href: string;
}

export const SocialLink: React.FC<SocialLinkProps> = ({ icon, href }) => (
  <a 
    href={href} 
    className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-indigo-600 hover:text-white transition-all duration-300"
  >
    {icon}
  </a>
);
