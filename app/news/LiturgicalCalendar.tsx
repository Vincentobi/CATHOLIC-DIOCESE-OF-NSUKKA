'use client'
import React, { useEffect, useState } from 'react'
import IconMapper from '../components/IconMapper'
import { motion } from 'framer-motion'

interface NewLiturgicalItem {
    date: string;
    name: string;
    color: string[];
    liturgical_season: string;
    liturgical_season_lcl: string;
    day: number;
    month: number;
    year: number;
}

const LiturgicalCalendar = () => {
    const [liturgicalData, setLiturgicalData] = useState<NewLiturgicalItem | null>(null);
    const [loading, setLoading] = useState(true);
    const [today] = useState(new Date());
    const [viewDate, setViewDate] = useState(new Date());

    useEffect(() => {
        const fetchLiturgicalDay = async () => {
            try {
                const response = await fetch('https://litcal.johnromanodorazio.com/calendar');
                if (!response.ok) throw new Error('API request failed');
                const data = await response.json();

                const todayStr = today.getFullYear() + '-' +
                    String(today.getMonth() + 1).padStart(2, '0') + '-' +
                    String(today.getDate()).padStart(2, '0');

                const todayItem = data.litcal.find((item: NewLiturgicalItem) => item.date.startsWith(todayStr));

                if (todayItem) {
                    setLiturgicalData(todayItem);
                }
            } catch (error) {
                console.error('Failed to fetch liturgical calendar:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchLiturgicalDay();
    }, [today]);

    const getMonthName = (date: Date) => {
        return date.toLocaleString('en-US', { month: 'long', year: 'numeric' });
    };

    const handlePrevMonth = () => {
        setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
    };

    const getDaysInMonth = (year: number, month: number) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (year: number, month: number) => {
        return new Date(year, month, 1).getDay();
    };

    const generateCalendarDays = () => {
        const year = viewDate.getFullYear();
        const month = viewDate.getMonth();
        const daysInMonth = getDaysInMonth(year, month);
        const firstDay = getFirstDayOfMonth(year, month);
        const days = [];

        for (let i = 0; i < firstDay; i++) {
            days.push(null);
        }

        for (let d = 1; d <= daysInMonth; d++) {
            days.push(d);
        }

        return days;
    };

    const getColorClass = (color: string) => {
        switch (color?.toLowerCase()) {
            case 'white': return 'bg-white border-gray-200 text-gray-800';
            case 'red': return 'bg-red-50 dark:bg-red-900/20 border-red-100 dark:border-red-800 text-red-700 dark:text-red-400';
            case 'green': return 'bg-green-50 dark:bg-green-900/20 border-green-100 dark:border-red-800 text-green-700 dark:text-green-400';
            case 'purple':
            case 'violet': return 'bg-purple-50 dark:bg-purple-900/20 border-purple-100 dark:border-purple-800 text-purple-700 dark:text-purple-400';
            case 'rose': return 'bg-pink-50 dark:bg-pink-900/20 border-pink-100 dark:border-pink-800 text-pink-700 dark:text-pink-400';
            default: return 'bg-gray-50 dark:bg-gray-900/20 border-gray-100 dark:border-gray-800 text-gray-700 dark:text-gray-400';
        }
    };

    const isToday = (day: number) => {
        return day === today.getDate() &&
            viewDate.getMonth() === today.getMonth() &&
            viewDate.getFullYear() === today.getFullYear();
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className='bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden'
        >
            <div className="bg-primary/5 p-4 border-b border-primary/10">
                <h3 className="text-primary font-bold flex items-center gap-2 text-sm">
                    <IconMapper iconName="calendar_month" />
                    Liturgical Calendar
                </h3>
            </div>

            <div className="px-5 pt-5 pb-2">
                {loading ? (
                    <div className="flex items-center justify-center py-8">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                    </div>
                ) : (
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className={`text-center p-4 rounded-lg border shadow-sm transition-all ${getColorClass(liturgicalData?.color[0] || '')}`}
                    >
                        <p className="text-[10px] font-black uppercase tracking-widest mb-1">
                            Today&apos;s Liturgy
                        </p>
                        <p className="font-bold text-sm leading-tight line-clamp-2">
                            {liturgicalData?.name || 'Ordinary Time'}
                        </p>
                        <p className="mt-2 text-[10px] font-semibold opacity-70">
                            {today.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                        </p>
                        <div className="mt-3 flex items-center justify-center gap-2">
                            <div
                                className="w-2.5 h-2.5 rounded-full border border-black/10"
                                style={{ backgroundColor: liturgicalData?.color[0] === 'purple' ? '#7e22ce' : (liturgicalData?.color[0] || '#ccc') }}
                            ></div>
                            <span className="text-[9px] font-bold uppercase opacity-60">Season: {liturgicalData?.liturgical_season_lcl || 'N/A'}</span>
                        </div>
                    </motion.div>
                )}
            </div>

            <div className="p-4">
                <div className="flex flex-col gap-0.5">
                    <div className="flex items-center p-1 justify-between mb-2">
                        <button onClick={handlePrevMonth} className="hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-2 transition-colors">
                            <IconMapper iconName="chevron_left" className="size-4" />
                        </button>
                        <p className="text-[#111318] dark:text-white text-xs font-bold leading-tight flex-1 text-center font-serif uppercase tracking-widest">
                            {getMonthName(viewDate)}
                        </p>
                        <button onClick={handleNextMonth} className="hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-2 transition-colors">
                            <IconMapper iconName="chevron_right" className="size-4" />
                        </button>
                    </div>
                    <div className="grid grid-cols-7 text-center mb-1">
                        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                            <p key={`${day}-${index}`} className="text-[10px] font-bold text-gray-400 h-6 flex items-center justify-center">{day}</p>
                        ))}
                    </div>
                    <div className="grid grid-cols-7 text-center">
                        {generateCalendarDays().map((day, index) => (
                            day ? (
                                <div key={index} className="h-8 w-full flex items-center justify-center">
                                    <span className={`h-7 w-7 flex items-center justify-center text-[10px] rounded-full transition-all ${isToday(day)
                                        ? 'font-bold text-white bg-primary shadow-md scale-110'
                                        : 'text-[#111318] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                                        }`}>
                                        {day}
                                    </span>
                                </div>
                            ) : (
                                <span key={index} className="h-8 w-full"></span>
                            )
                        ))}
                    </div>
                </div>
            </div>

            <div className="p-4 border-t border-gray-100 dark:border-gray-700">
                <a
                    className="block w-full py-2.5 text-center text-primary text-[10px] font-black uppercase tracking-widest bg-primary/5 hover:bg-primary/10 rounded-lg transition-all"
                    href="https://litcal.johnromanodorazio.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Detailed Calendar
                </a>
            </div>
        </motion.div>
    )
}

export default LiturgicalCalendar