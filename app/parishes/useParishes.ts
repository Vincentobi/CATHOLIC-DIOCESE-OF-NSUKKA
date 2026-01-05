"use client";

import { useCallback, useEffect, useState } from "react";
import { Parish } from "@/lib/types/parish";
import { getParishes } from "@/lib/Backend/api";

export const useParishes = () => {
    const [parishes, setParishes] = useState<Parish[]>([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);

    const [search, setSearch] = useState("");
    const [deanary, setDeanary] = useState("");


    const fetchParishes = useCallback(async (reset = false, targetPage?: number) => {
        setLoading(true);

        const p = targetPage ?? (reset ? 1 : page);

        try {
            const res = await getParishes(p, search, deanary);
            setParishes(prev => (reset ? res.data : [...prev, ...res.data]));
            setHasMore(res.pagination.hasMore);
        } catch (error) {
            console.error("Failed to fetch parishes:", error);
        } finally {
            setLoading(false);
        }
    }, [search, deanary, page]);

    useEffect(() => {
        fetchParishes(page === 1, page);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search, deanary, page]);

    const handleSearch = (val: string) => {
        setSearch(val);
        setPage(1);
    };

    const handleDeanary = (val: string) => {
        setDeanary(val);
        setPage(1);
    };

    return {
        parishes,
        loading,
        hasMore,
        setSearch: handleSearch,
        setDeanary: handleDeanary,
        loadMore: () => setPage(p => p + 1),
        fetchParishes
    };
};
