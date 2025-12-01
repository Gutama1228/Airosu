// src/components/ui/Button.tsx
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  href?: string;
  className?: string;
  onClick?: () => void;
};

export const Button = ({ children, variant = 'outline', href, className = '', onClick }: ButtonProps) => {
  const base = 'px-4 py-2 rounded font-medium transition';
  const styles = {
    primary: 'bg-roblox text-white hover:bg-blue-600',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
  };

  const btn = (
    <button
      onClick={onClick}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {btn}
      </a>
    );
  }

  return btn;
};
