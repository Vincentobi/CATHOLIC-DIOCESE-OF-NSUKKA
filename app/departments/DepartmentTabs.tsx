import IconMapper from '../components/IconMapper';

export default function DepartmentTabs({ children, buttonIcon, buttons, isSelected, onClick }: { children?: React.ReactNode, buttonIcon: string, buttons: string, isSelected?: boolean, onClick?: () => void }) {
    return (
        <div className="flex flex-col items-center w-full">
            <div
                onClick={onClick}
                className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 transition-all cursor-pointer ${isSelected
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-gray-100 text-text-muted hover:bg-gray-200'
                    }`}
            >
                <IconMapper iconName={buttonIcon} className="text-[20px]" />
                <p className="text-sm font-medium whitespace-nowrap">{buttons}</p>
            </div>
            {children}
        </div>
    )
}