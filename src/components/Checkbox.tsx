

// C:\Users\kanka\All-Frontend\todo-list-app\src\components\Checkbox.tsx
import React from 'react';
import '../styles/checkbox.css';

interface CheckboxProps {
  label: string;
  isChecked: boolean;
  onChange: (isChecked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, isChecked, onChange }) => {
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <label className="checkbox">
      <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
      {label}
    </label>
  );
};

export default Checkbox;
