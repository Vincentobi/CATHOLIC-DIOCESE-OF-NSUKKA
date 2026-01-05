'use client';

import React, { useState } from 'react'
import IconMapper from '../components/IconMapper'

import { API_URL } from '@/lib/Backend/api'

const ContactGrid = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        department: 'General Inquiry',
        message: '',
        privacy: false
    });
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

    const handleInputChange = (field: string, value: string | boolean) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.privacy) {
            setStatus({ type: 'error', message: 'Please consent to the privacy policy.' });
            return;
        }

        setIsLoading(true);
        setStatus({ type: null, message: '' });

        try {
            const response = await fetch(`${API_URL}/api/email/send`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setStatus({ type: 'success', message: 'Message sent successfully!' });
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    department: 'General Inquiry',
                    message: '',
                    privacy: false
                });
            } else {
                throw new Error(data.message || 'Failed to send message');
            }
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Something went wrong. Please try again.';
            setStatus({ type: 'error', message });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center w-full bg-background-light dark:bg-background-dark py-12 px-4 md:px-10">
            <div className="w-full max-w-[1280px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* Left Column: Contact Info & Personnel */}
                <div className="lg:col-span-5 flex flex-col gap-8">
                    {/* Quick Contact Cards */}
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-[#111318] dark:text-white text-2xl font-bold leading-tight">Contact Information</h2>
                            <p className="text-[#636f88] dark:text-gray-400 text-sm">Reach out to the Chancery directly through any of the following channels.</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            {/* Address */}
                            <div className="flex gap-4 rounded-xl border border-[#dcdfe5] dark:border-gray-700 bg-white dark:bg-[#1a202c] p-5 shadow-sm hover:border-primary/50 transition-colors">
                                <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <IconMapper iconName='location_on' style={{ fontSize: "20px" }} />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h3 className="text-[#111318] dark:text-white text-base font-bold">Visit Us</h3>
                                    <p className="text-[#636f88] dark:text-gray-400 text-sm mt-1">Diocesan Secretariat, P.O. Box 32<br />Nsukka, Enugu State, Nigeria</p>
                                </div>
                            </div>
                            {/* Phone */}
                            <div className="flex gap-4 rounded-xl border border-[#dcdfe5] dark:border-gray-700 bg-white dark:bg-[#1a202c] p-5 shadow-sm hover:border-primary/50 transition-colors">
                                <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <IconMapper iconName='phone' style={{ fontSize: "20px" }} />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h3 className="text-[#111318] dark:text-white text-base font-bold">Call Us</h3>
                                    <p className="text-[#636f88] dark:text-gray-400 text-sm mt-1">+234 800 123 4567<br />Mon-Fri, 9am - 4pm</p>
                                </div>
                            </div>
                            {/* Email */}
                            <div className="flex gap-4 rounded-xl border border-[#dcdfe5] dark:border-gray-700 bg-white dark:bg-[#1a202c] p-5 shadow-sm hover:border-primary/50 transition-colors">
                                <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <IconMapper iconName='mail' style={{ fontSize: "20px" }} />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h3 className="text-[#111318] dark:text-white text-base font-bold">Email Us</h3>
                                    <p className="text-[#636f88] dark:text-gray-400 text-sm mt-1">secretariat@nsukkadiocese.org<br />info@nsukkadiocese.org</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Key Personnel */}
                    <div className="flex flex-col gap-4 mt-4">
                        <h3 className="text-[#111318] dark:text-white text-xl font-bold leading-tight">Key Offices</h3>
                        <div className="grid grid-cols-1 gap-3">
                            <div className="bg-white dark:bg-[#1a202c] p-4 rounded-lg border border-[#dcdfe5] dark:border-gray-700">
                                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Office of the Bishop</p>
                                <p className="text-sm text-[#111318] dark:text-white">Rev. Fr. Secretary to the Bishop</p>
                                <p className="text-sm text-[#636f88] dark:text-gray-400">bishop.office@nsukkadiocese.org</p>
                            </div>
                            <div className="bg-white dark:bg-[#1a202c] p-4 rounded-lg border border-[#dcdfe5] dark:border-gray-700">
                                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Office of the Chancellor</p>
                                <p className="text-sm text-[#111318] dark:text-white">Very Rev. Fr. Chancellor</p>
                                <p className="text-sm text-[#636f88] dark:text-gray-400">chancellor@nsukkadiocese.org</p>
                            </div>
                            <div className="bg-white dark:bg-[#1a202c] p-4 rounded-lg border border-[#dcdfe5] dark:border-gray-700">
                                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Diocesan Communications</p>
                                <p className="text-sm text-[#111318] dark:text-white">Director of Social Communications</p>
                                <p className="text-sm text-[#636f88] dark:text-gray-400">media@nsukkadiocese.org</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Column: Form & Map */}
                <div className="lg:col-span-7 flex flex-col gap-8">
                    {/* Inquiry Form */}
                    <div className="bg-white dark:bg-[#1a202c] rounded-2xl shadow-sm border border-[#dcdfe5] dark:border-gray-700 p-6 md:p-8">
                        <div className="mb-6">
                            <h2 className="text-[#111318] dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em]">Send an Inquiry</h2>
                            <p className="text-[#636f88] dark:text-gray-400 text-sm mt-2">Fill out the form below and we will get back to you as soon as possible.</p>
                        </div>
                        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                            <div className="flex flex-col md:flex-row gap-5">
                                <label className="flex flex-col flex-1">
                                    <p className="text-[#111318] dark:text-white text-sm font-medium leading-normal pb-2">Full Name</p>
                                    <input
                                        className="form-input w-full rounded-lg border border-[#dcdfe5] dark:border-gray-600 bg-transparent h-12 px-4 text-[#111318] dark:text-white placeholder:text-[#636f88] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                        placeholder="Enter your full name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => handleInputChange('name', e.target.value)}
                                    />
                                </label>
                                <label className="flex flex-col flex-1">
                                    <p className="text-[#111318] dark:text-white text-sm font-medium leading-normal pb-2">Email Address</p>
                                    <input
                                        className="form-input w-full rounded-lg border border-[#dcdfe5] dark:border-gray-600 bg-transparent h-12 px-4 text-[#111318] dark:text-white placeholder:text-[#636f88] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                        placeholder="Enter your email"
                                        required
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => handleInputChange('email', e.target.value)}
                                    />
                                </label>
                            </div>
                            <div className="flex flex-col md:flex-row gap-5">
                                <label className="flex flex-col flex-1">
                                    <p className="text-[#111318] dark:text-white text-sm font-medium leading-normal pb-2">Phone Number (Optional)</p>
                                    <input
                                        className="form-input w-full rounded-lg border border-[#dcdfe5] dark:border-gray-600 bg-transparent h-12 px-4 text-[#111318] dark:text-white placeholder:text-[#636f88] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                        placeholder="+234..."
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => handleInputChange('phone', e.target.value)}
                                    />
                                </label>
                                <label className="flex flex-col flex-1">
                                    <p className="text-[#111318] dark:text-white text-sm font-medium leading-normal pb-2">Department</p>
                                    <div className="relative">
                                        <select
                                            className="form-select w-full rounded-lg border border-[#dcdfe5] dark:border-gray-600 bg-transparent h-12 px-4 text-[#111318] dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none"
                                            value={formData.department}
                                            onChange={(e) => handleInputChange('department', e.target.value)}
                                        >
                                            <option>General Inquiry</option>
                                            <option>Bishop&apos;s Office</option>
                                            <option>Vocations</option>
                                            <option>Media &amp; Communications</option>
                                            <option>Caritas / Charity</option>
                                        </select>
                                        <IconMapper iconName='drop_down_arrow' className='absolute right-4 top-1/2 -translate-y-1/2 text-[#636f88] pointer-events-none material-symbols-outlined' />
                                    </div>
                                </label>
                            </div>
                            <label className="flex flex-col w-full">
                                <p className="text-[#111318] dark:text-white text-sm font-medium leading-normal pb-2">Message</p>
                                <textarea
                                    className="form-textarea w-full resize-y rounded-lg border border-[#dcdfe5] dark:border-gray-600 bg-transparent min-h-[140px] p-4 text-[#111318] dark:text-white placeholder:text-[#636f88] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    placeholder="How can we help you?"
                                    value={formData.message}
                                    onChange={(e) => handleInputChange('message', e.target.value)}
                                ></textarea>
                            </label>
                            <div className="flex items-start gap-3 mt-2">
                                <input
                                    className="mt-1 rounded border-gray-300 text-primary focus:ring-primary"
                                    id="privacy"
                                    type="checkbox"
                                    checked={formData.privacy}
                                    onChange={(e) => handleInputChange('privacy', e.target.checked)}
                                />
                                <label className="text-sm text-[#636f88] dark:text-gray-400" htmlFor="privacy">
                                    I consent to having this website store my submitted information so they can respond to my inquiry.
                                </label>
                            </div>
                            <button
                                className="mt-4 flex w-full md:w-auto md:self-start min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-primary/90 text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Sending...' : 'Send Message'}
                            </button>
                            {status.message && (
                                <p className={`mt-2 text-sm ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                                    {status.message}
                                </p>
                            )}
                        </form>
                    </div>
                    {/* <!-- Map Section --> */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-[#111318] dark:text-white text-xl font-bold leading-tight">Find Us on Map</h3>
                        <div className="w-full h-[300px] bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden relative border border-[#dcdfe5] dark:border-gray-700">
                            {/* <!-- Placeholder for Map --> */}
                            <div className="absolute inset-0 bg-cover bg-center" data-location="Map of Nsukka, Nigeria" >
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.3256520796563!2d7.390211673958936!3d6.851512019266808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044e8885b158c5b%3A0x7a0fa6d01601e70c!2sSt%20Theresa&#39;s%20Cathedral%2C%20Nsukka!5e0!3m2!1sen!2sng!4v1767291823856!5m2!1sen!2sng" width="600" height="450" style={{ width: "100%", height: "100%", border: "none", borderRadius: "10px" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            {/* <div className="absolute bottom-0 translate-y-20 hover:translate-y-0 transition-all flex items-center justify-center bg-black/10">
                                <button className="bg-white text-[#111318] px-6 py-3 rounded-full font-bold shadow-lg flex items-center gap-2 hover:bg-gray-50 transition-colors">
                                    <IconMapper iconName="map" className='text-primary text-[20px]' />
                                    View Larger Map
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactGrid