import { Button, type ButtonProps } from '.';

/** Extends the Button component adding a outline style. */
export const OutlineButton: React.FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <Button
      {...props}
      label={label}
      className="border border-brand-400 bg-transparent hover:border-transparent hover:bg-brand-400"
    />
  );
};

export default OutlineButton;
