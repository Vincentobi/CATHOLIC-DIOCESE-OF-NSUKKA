'use client';
import { Parish } from "@/lib/types/parish";
import Image from "next/image";
import { motion } from "framer-motion";

import { MdChurch, MdLocationOn } from "react-icons/md";

export default function ParishCard({ parish }: { parish: Parish }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.4 }}
            className="group flex flex-col bg-white dark:bg-[#1e2532] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-[#e5e7eb] dark:border-[#2a313d]"
        >
            <div className="relative h-48 w-full bg-gray-200 overflow-hidden">
                {parish.image ? (
                    <Image
                        src={parish.image}
                        alt={parish.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full bg-linear-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                        <MdChurch className="text-4xl text-blue-300" />
                    </div>
                )}

                {parish.isCathedral && (
                    <div className="absolute top-3 left-3 bg-white/90 px-2 py-1 rounded text-xs font-semibold uppercase text-primary">
                        Cathedral
                    </div>
                )}
            </div>

            <div className="flex flex-col flex-1 p-5 gap-3">
                <div>
                    <h3 className="text-xl font-bold mb-1 text-[#111318] dark:text-white">{parish.name}</h3>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                        <MdLocationOn className="text-[18px]" />
                        <span>{parish.location || parish.town}</span>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                        {parish.deanary.name}
                    </span>
                </div>

                <div className="pt-3 border-t mt-2 flex gap-3">
                    <button className="flex-1 rounded-lg bg-primary text-white text-sm font-bold h-9 hover:bg-primary/90 transition-colors">
                        View Details
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
