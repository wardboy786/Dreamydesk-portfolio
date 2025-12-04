import React from 'react';

interface StatsProps {
    number: string;
    label: string;
}

export const Stats: React.FC<StatsProps> = ({ number, label }) => (
  <div className="p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all">
    <div className="text-2xl font-bold text-indigo-600">{number}</div>
    <div className="text-xs text-slate-500 uppercase tracking-wide font-medium">{label}</div>
  </div>
);
