import { ButtonProps } from '.';

/** Extends the Button component adding a outline style. */
export const OutlineButton: React.FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <button
      {...props}
      className="rounded-md border border-brand-400 bg-transparent py-2 px-4 text-sm font-medium text-white hover:border-transparent hover:bg-brand-400 hover:brightness-90"
    >
      {label}
    </button>
  );
};

export default OutlineButton;
