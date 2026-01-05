"use client";

import { useEffect, useState } from "react";
import { getDeanaries } from "@/lib/Backend/api";
import { Deanary } from "@/lib/types/parish";
import { MdSearch, MdArrowDropDown, MdSortByAlpha, MdLocationOn } from "react-icons/md";

export default function ParishFilters({
    onSearch,
    onDeanaryChange
}: {
    onSearch: (v: string) => void;
    onDeanaryChange: (v: string) => void;
}) {
    const [deanaries, setDeanaries] = useState<Deanary[]>([]);

    useEffect(() => {
        getDeanaries().then(setDeanaries);
    }, []);

    return (
        // <div className="flex flex-col md:flex-row gap-4 mb-6">
        //     <input
        //         className="w-full bg-transparent border-none text-[#111318] dark:text-white placeholder:text-[#636f88] dark:placeholder:text-[#9ca3af] focus:ring-0 px-3 text-base h-full"
        //         placeholder="Search parish by name or town"
        //         onChange={(e) => onSearch(e.target.value)}
        //     />


        //     <select
        //         className="w-full h-12 appearance-none rounded-lg border border-[#dcdfe5] dark:border-[#3f4756] bg-white dark:bg-[#1e2532] text-[#111318] dark:text-white px-4 pr-10 focus:border-primary focus:ring-primary text-base"
        //         onChange={(e) => onDeanaryChange(e.target.value)}
        //     >
        //         <option value="">All Deanaries</option>
        //         {deanaries.map((d) => (
        //             <option key={d._id} value={d.slug}>
        //                 {d.name}
        //             </option>
        //         ))}
        //     </select>

        // </div>


        // ... inside component ...
        <div className="w-full bg-white dark:bg-[#1e2532] rounded-xl shadow-sm border border-[#e5e7eb] dark:border-[#2a313d] p-4 flex flex-col lg:flex-row gap-4 items-center">
            <div className="w-full lg:flex-1">
                <label className="flex w-full items-center h-12 rounded-lg bg-[#f0f2f4] dark:bg-[#2a313d] focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-1 ">
                    <div className="flex items-center justify-center pl-4 text-[#636f88] dark:text-[#9ca3af]">
                        <MdSearch className="text-[24px]" />
                    </div>
                    <input className="w-full bg-transparent border-none text-[#111318] dark:text-white placeholder:text-[#636f88] dark:placeholder:text-[#9ca3af] focus:ring-0 px-3 text-base h-full" placeholder="Search parish by name or town" onChange={(e) => onSearch(e.target.value)} />
                </label>
            </div>
            {/* Filter Dropdown */}
            <div className="w-full lg:w-64">
                <div className="relative">
                    <select className="w-full h-12 appearance-none rounded-lg border border-[#dcdfe5] dark:border-[#3f4756] bg-white dark:bg-[#1e2532] text-[#111318] dark:text-white px-4 pr-10 focus:border-primary focus:ring-primary text-base" onChange={(e) => onDeanaryChange(e.target.value)}>
                        <option value="">All Deanery</option>
                        {deanaries.map(d => (
                            <option key={d._id} value={d._id}>{d.name}</option>
                        ))}
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#636f88]">
                        <MdArrowDropDown className="text-[24px]" />
                    </div>
                </div>
            </div>
            {/* <!-- Sort Options --> */}
            <div className="flex gap-2 w-full lg:w-auto overflow-x-auto pb-1 lg:pb-0 scrollbar-hide">
                <button className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#f0f2f4] dark:bg-[#2a313d] px-4 hover:bg-[#e2e4e8] dark:hover:bg-[#363d4a] transition-colors whitespace-nowrap">
                    <MdSortByAlpha className="text-sm" />
                    <span className="text-sm font-medium">Name (A-Z)</span>
                </button>
                <button className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg border border-[#e5e7eb] dark:border-[#3f4756] bg-transparent px-4 hover:bg-[#f9fafb] dark:hover:bg-[#2a313d] transition-colors whitespace-nowrap">
                    <MdLocationOn className="text-sm" />
                    <span className="text-sm font-medium">Location</span>
                </button>
            </div>
        </div>

    );
}
