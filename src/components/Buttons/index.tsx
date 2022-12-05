import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <button
      {...props}
      className={`rounded-md bg-brand-400 py-2 px-4 text-sm font-medium text-white hover:brightness-90 ${
        props.className ?? ''
      }`}
    >
      {label}
    </button>
  );
};

export type { ButtonProps };
export default Button;
