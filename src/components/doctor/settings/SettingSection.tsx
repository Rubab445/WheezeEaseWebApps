import { ReactNode } from 'react';

interface SettingSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export function SettingSection({ title, description, children }: SettingSectionProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
      <div className="mb-6">
        <h3 className="font-bold text-[#1F2937] mb-1">{title}</h3>
        {description && (
          <p className="text-sm text-[#6B7280]">{description}</p>
        )}
      </div>
      {children}
    </div>
  );
}
