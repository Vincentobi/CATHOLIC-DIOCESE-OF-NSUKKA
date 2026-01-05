"use client";

import ParishCard from "./ParishCard";
import ParishFilters from "./ParishFilters";
import { useParishes } from "./useParishes";
import { MdExpandMore } from "react-icons/md";



export default function ParishesPage() {
    const {
        parishes,
        loading,
        hasMore,
        setSearch,
        setDeanary,
        loadMore
    } = useParishes();




    return (
        <section className="flex-1 flex flex-col items-center w-full px-4 md:px-10 py-8 md:py-12">
            <div className="w-full max-w-6xl flex flex-col gap-8">
                <div className="flex flex-col gap-3 md:text-center md:items-center">
                    <p className="text-3xl md:text-5xl font-black leading-tight tracking-[-0.033em] text-[#111318] dark:text-white">Directory of Parishes</p>
                    <p className="text-[#636f88] dark:text-[#9ca3af] text-base md:text-lg font-normal leading-normal max-w-2xl text-center mx-auto">
                        Find mass times, contact details, and locations for all our parishes across the Nsukka Diocese.
                    </p>
                </div>


                <ParishFilters
                    onSearch={setSearch}
                    onDeanaryChange={setDeanary}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {parishes.map(p => (
                        <ParishCard key={p._id} parish={p} />
                    ))}
                </div>

                {hasMore && (
                    <div className="flex justify-center mt-6">
                        <button
                            onClick={loadMore}
                            disabled={loading}
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-white border rounded-lg text-sm font-bold hover:bg-gray-50"
                        >
                            {loading ? "Loading..." : "Load More Parishes"}
                            <MdExpandMore className="text-sm" />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
