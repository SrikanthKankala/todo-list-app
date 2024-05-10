
// C:\Users\kanka\All-Frontend\todo-list-app\src\components\Button.tsx

import React from 'react';
import '../styles/button.css';

interface ButtonProps {
  variant: 'big' | 'small';
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ variant, onClick, children }) => {
  return (
    <button className={`button ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
