//components
import Button from '@mui/material/Button';

// types
import { PropsWithChildren } from 'react';

type ButtonType = 'button' | 'submit';

interface CustomButtonProps {
  type: ButtonType;
  className?: string;
  onClick?: () => void;
}

const CustomButton = ({
  type,
  onClick,
  className,
  children,
}: PropsWithChildren<CustomButtonProps>) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      className={className}
      variant="contained"
    >
      {children}
    </Button>
  );
};

export default CustomButton;
