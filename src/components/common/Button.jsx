import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  icon: Icon,
  ariaLabel
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-heading font-semibold rounded-lg transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white disabled:opacity-50 disabled:pointer-events-none';
  
  const variants = {
    primary: 'bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 text-white shadow-lg shadow-sky-400/20 hover:shadow-sky-400/35 focus:ring-sky-400',
    secondary: 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200/80 hover:border-slate-300 focus:ring-slate-500',
    accent: 'bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 text-white shadow-lg shadow-sky-400/20 hover:shadow-sky-400/35 focus:ring-sky-400',
    ghost: 'text-slate-600 hover:text-slate-900 hover:bg-slate-150 focus:ring-slate-500'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {Icon && <Icon className="mr-2 h-5 w-5 animate-pulse" />}
      {children}
    </button>
  );
};

export default Button;
