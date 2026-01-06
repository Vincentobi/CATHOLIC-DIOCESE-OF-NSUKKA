import React from 'react'
import IconMapper from '../components/IconMapper'

interface DepartmentSearchProps {
    value: string;
    onChange: (value: string) => void;
}

const DepartmentSearch = ({ value, onChange }: DepartmentSearchProps) => {
    return (
        <div className='w-full max-w-[720px] mx-auto'>
            <label className="flex flex-col h-14 w-full shadow-sm">
                <div className="flex w-full flex-1 items-stretch rounded-xl h-full bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
                    <div className="text-text-muted dark:text-gray-400 flex items-center justify-center pl-4">
                        <IconMapper iconName="search" className="text-[20px]" />
                    </div>
                    <input
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-text-main dark:text-white focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-text-muted px-4 pl-3 text-base font-normal"
                        placeholder="Search for a department, ministry, or commission..."
                    />
                </div>
            </label>
        </div>
    )
}

export default DepartmentSearch