import React from 'react';

type QuickReplyButtonProps = {
  label: string;
  onClick: () => void;
};

const QuickReplyButton: React.FC<QuickReplyButtonProps> = ({ label, onClick }) => {
  return (
    <button 
      onClick={onClick} 
      className="quick-reply-button bg-blue-500 text-white px-3 py-1 rounded-full mx-1">
      {label}
    </button>
  );
};

type QuickReplyButtonsProps = {
  options: string[];
  onOptionSelected: (option: string) => void;
};

const QuickReplyButtons: React.FC<QuickReplyButtonsProps> = ({ options, onOptionSelected }) => {
  return (
    <div className="quick-reply-buttons flex space-x-2 mt-2">
      {options.map((option, index) => (
        <QuickReplyButton 
          key={index} 
          label={option} 
          onClick={() => onOptionSelected(option)} 
        />
      ))}
    </div>
  );
};

export default QuickReplyButtons;
