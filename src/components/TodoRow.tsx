
// C:\Users\kanka\All-Frontend\todo-list-app\src\components\TodoRow.tsx

// import React from 'react';
// import Checkbox from './Checkbox.tsx';
// import Button from './Button.tsx';
// import '../styles/todoRow.css';

// interface TodoRowProps {
//   label: string;
//   isChecked: boolean;
//   onDelete: () => void;
//   onToggle: (isChecked: boolean) => void;
// }

// const TodoRow: React.FC<TodoRowProps> = ({ label, isChecked, onDelete, onToggle }) => {
//   return (
//     <div className="todo-row">
//       <Checkbox label={label} isChecked={isChecked} onChange={onToggle} />
//       <Button variant="small" onClick={onDelete}>
//         Delete
//       </Button>
//     </div>
//   );
// };

// export default TodoRow;






// C:\Users\kanka\All-Frontend\todo-list-app\src\components\TodoRow.tsx

import React from 'react';
import Checkbox from './Checkbox.tsx';
import Button from './Button.tsx';
import '../styles/todoRow.css';

interface TodoRowProps {
  label: string;
  isChecked: boolean;
  onDelete: () => void;
  onToggle: (isChecked: boolean) => void;
}

const TodoRow: React.FC<TodoRowProps> = ({ label, isChecked, onDelete, onToggle }) => {
  return (
    <div className="todo-row">
      <Checkbox label={label} isChecked={isChecked} onChange={onToggle} />
      <Button variant="small" onClick={onDelete} className="delete">
      
      </Button>
    </div>
  );
};

export default TodoRow;
