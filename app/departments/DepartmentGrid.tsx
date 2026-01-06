import React from 'react'
import DepartmentTabs from './DepartmentTabs'

import { departments } from '@/data/data'
import DepartmentCard from './DepartmentCard'
import DepartmentSearch from './DepartmentSearch'

const DepartmentGrid = () => {
    const categories = [
        { label: 'All', icon: 'grid_view' },
        { label: 'Admin', icon: 'account_balance' },
        { label: 'Education', icon: 'school' },
        { label: 'Health', icon: 'local_hospital' },
        { label: 'Social', icon: 'balance' },
        { label: 'Pastoral', icon: 'diversity_3' },
    ];

    const [selectedCategory, setSelectedCategory] = React.useState<string>('All');
    const [searchTerm, setSearchTerm] = React.useState<string>('');

    const filteredDepartments = departments.filter(d => {
        const matchesCategory = selectedCategory === 'All' || d.dept === selectedCategory;
        const matchesSearch = d.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            d.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            d.dept.toLowerCase().includes(searchTerm.toLowerCase()) ||
            d.keywords?.some(k => k.toLowerCase().includes(searchTerm.toLowerCase()));

        return matchesCategory && matchesSearch;
    });

    return (
        <div className="layout-container flex flex-col flex-1 max-w-[1200px] mx-auto w-full px-4 md:px-8 py-8 md:py-12 gap-8">
            <DepartmentSearch value={searchTerm} onChange={setSearchTerm} />
            <div className="space-y-8">
                <div className="flex flex-row gap-3 overflow-x-auto pb-4 no-scrollbar justify-start sm:justify-center">
                    {categories.map((cat) => (
                        <DepartmentTabs
                            key={cat.label}
                            buttonIcon={cat.icon}
                            buttons={cat.label}
                            isSelected={selectedCategory === cat.label}
                            onClick={() => setSelectedCategory(cat.label)}
                        />
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full mt-4">
                    {filteredDepartments.map((department) => (
                        <DepartmentCard key={department.title} department={department} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DepartmentGrid