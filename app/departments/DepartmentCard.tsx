import IconMapper from '../components/IconMapper';
import { useRouter } from 'next/navigation';
interface Department {
    logo: string;
    dept: string;
    title: string;
    description: string;
    indicationLogo: string;
    indication: string;
    contactLogo: string;
    contact: string;
}

const DepartmentCard = ({ department }: { department: Department }) => {
    const { logo, dept: id, title, description, indicationLogo, indication, contactLogo, contact } = department;

    const router = useRouter();

    return (
        <div className="flex flex-col rounded-xl border border-gray-200 dark:border-gray-700 bg-surface-light dark:bg-surface-dark p-6 transition-all hover:shadow-lg h-full">
            <div className="mb-4 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <IconMapper iconName={logo} className="text-[24px]" />
                </div>
                <span className="rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-xs font-semibold text-text-muted dark:text-gray-300">{id}</span>
            </div>
            <h3 className="text-xl font-bold text-text-main dark:text-white mb-2">{title}</h3>
            <p className="text-sm text-text-muted dark:text-gray-400 mb-4 line-clamp-3">
                {description}
            </p>
            <div className="mt-auto space-y-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3 text-sm text-text-muted dark:text-gray-400">
                    <IconMapper iconName={indicationLogo} className="text-[18px]" />
                    <span>{indication}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-text-muted dark:text-gray-400">
                    <IconMapper iconName={contactLogo} className="text-[18px]" />
                    <span>{contact}</span>
                </div>
            </div>
            <button onClick={() => router.push(`/departments/${id}`)} className="mt-6 w-full rounded-lg bg-primary/10 hover:bg-primary hover:text-white py-2.5 text-sm font-bold text-primary transition-all cursor-pointer">
                View Details
            </button>
        </div>
    )
}

export default DepartmentCard