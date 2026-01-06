import React from 'react';

interface DepartmentButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    isSelected?: boolean;
}

const DepartmentButton = ({ children, isSelected, className, ...props }: DepartmentButtonProps) => {
    return (
        <button
            className={`px-4 py-2 rounded-lg transition-all ${isSelected
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-text-muted hover:bg-gray-200'
                } ${className || ''}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default DepartmentButton;