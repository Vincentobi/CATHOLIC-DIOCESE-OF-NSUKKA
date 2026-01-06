"use client";

import React, { use } from 'react';
import { notFound } from 'next/navigation';
import { departments } from '@/data/data';
import IconMapper from '../../components/IconMapper';
import Link from 'next/link';
import { MdArrowBack } from 'react-icons/md';

export default function DepartmentDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const decodedId = decodeURIComponent(id);
    const department = departments.find((d) => d.dept === decodedId);

    if (!department) {
        return notFound();
    }

    const { title, description, indication, contact, logo, indicationLogo, contactLogo } = department;

    return (
        <main className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-900">
            {/* Hero Section */}
            <div className="relative w-full h-[400px] bg-[#111318] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
                    style={{ backgroundImage: "url('/images/interior_1.jpg')" }}
                />

                <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center animate-fade-in-up">
                    <div className="mb-6 p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl">
                        <IconMapper iconName={logo} className="w-16 h-16 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
                        {title}
                    </h1>
                    <div className="h-1 w-24 bg-primary rounded-full mb-6 mx-auto"></div>
                </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 max-w-5xl mx-auto w-full px-4 -mt-16 z-20 relative mb-20">
                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 p-8 md:p-12 overflow-hidden">
                    <Link
                        href="/departments"
                        className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-primary mb-8 font-semibold transition-colors group"
                    >
                        <MdArrowBack className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        Back to Departments
                    </Link>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary">
                                    <IconMapper iconName="info" className="w-5 h-5" />
                                </span>
                                About the Department
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                                {description}
                            </p>

                            <div className="mt-8 p-6 bg-slate-50 dark:bg-slate-700/50 rounded-xl border border-slate-100 dark:border-slate-700">
                                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Key Information</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                                            <IconMapper iconName={indicationLogo} className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Location / Head</p>
                                            <p className="text-base font-bold text-slate-800 dark:text-slate-200 mt-0.5">{indication}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                                            <IconMapper iconName={contactLogo} className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Contact</p>
                                            <p className="text-base font-bold text-slate-800 dark:text-slate-200 mt-0.5">{contact}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-50 dark:bg-slate-700/30 rounded-xl p-8 flex flex-col justify-center items-center text-center space-y-6 border border-slate-100 dark:border-slate-700/50 h-fit">
                            <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-md">
                                <IconMapper iconName="help" className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Need Assistance?</h3>
                                <p className="text-slate-600 dark:text-slate-400">
                                    Reach out to the {title} directly for inquiries or support.
                                </p>
                            </div>
                            <a
                                href={contact.includes('@') ? `mailto:${contact}` : `tel:${contact.replace(/[^0-9+]/g, '')}`}
                                className="w-full py-3 px-6 bg-primary text-white font-bold rounded-lg shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all duration-300 text-center"
                            >
                                Contact Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

