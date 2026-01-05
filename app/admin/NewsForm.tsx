'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { MdClose, MdCloudUpload, MdImage } from 'react-icons/md'

interface NewsFormProps {
    onSuccess: () => void
    onCancel: () => void
}

import { API_URL } from '@/lib/Backend/api'

const NewsForm: React.FC<NewsFormProps> = ({ onSuccess, onCancel }) => {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        date: new Date().toISOString().split('T')[0],
        isFeatured: false
    })
    const [images, setImages] = useState<File[]>([])
    const [imagePreviews, setImagePreviews] = useState<string[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target as HTMLInputElement;
        const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
        setFormData(prev => ({ ...prev, [name]: val }))
    }

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || [])
        setImages(files)

        // Create previews
        const previews = files.map(file => URL.createObjectURL(file))
        setImagePreviews(previews)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError('')
        setSuccess('')

        try {
            const formDataToSend = new FormData()
            formDataToSend.append('title', formData.title)
            formDataToSend.append('content', formData.content)
            formDataToSend.append('date', formData.date)
            formDataToSend.append('isFeatured', String(formData.isFeatured))

            images.forEach(image => {
                formDataToSend.append('image', image)
            })

            const response = await fetch(`${API_URL}/api/news/add`, {
                method: 'POST',
                body: formDataToSend,
                headers: {
                    'token': localStorage.getItem('adminToken') || ''
                }
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || 'Failed to add news')
            }

            setSuccess('News added successfully!')
            setTimeout(() => {
                onSuccess()
            }, 1500)

        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to add news')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Add New News Article</h2>
                <button
                    onClick={onCancel}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                    <MdClose className="text-2xl text-gray-600 dark:text-gray-400" />
                </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title */}
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Title *
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Enter news title"
                    />
                </div>

                {/* Date and Featured */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Date *
                        </label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        />
                    </div>
                    <div className="flex items-center pt-8">
                        <input
                            type="checkbox"
                            id="isFeatured"
                            name="isFeatured"
                            checked={formData.isFeatured}
                            onChange={handleInputChange}
                            className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary transition-all"
                        />
                        <label htmlFor="isFeatured" className="ml-3 text-sm font-semibold text-gray-700 dark:text-gray-300 cursor-pointer">
                            Mark as Featured Story
                        </label>
                    </div>
                </div>

                {/* Content */}
                <div>
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Content *
                    </label>
                    <textarea
                        id="content"
                        name="content"
                        value={formData.content}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                        placeholder="Enter news content"
                    />
                </div>

                {/* Images */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Images *
                    </label>
                    <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center hover:border-primary transition-colors">
                        <input
                            type="file"
                            id="images"
                            accept="image/*"
                            multiple
                            onChange={handleImageChange}
                            className="hidden"
                        />
                        <label htmlFor="images" className="cursor-pointer">
                            <MdCloudUpload className="mx-auto text-5xl text-gray-400 mb-2" />
                            <p className="text-gray-600 dark:text-gray-400">
                                Click to upload images or drag and drop
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                                PNG, JPG, GIF up to 10MB
                            </p>
                        </label>
                    </div>

                    {/* Image Previews */}
                    {imagePreviews.length > 0 && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                            {imagePreviews.map((preview, index) => (
                                <div key={index} className="relative group">
                                    <Image
                                        src={preview}
                                        alt={`Preview ${index + 1}`}
                                        width={400}
                                        height={300}
                                        className="w-full h-32 object-cover rounded-lg border border-gray-300 dark:border-gray-600"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                                        <MdImage className="text-white text-3xl" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Error/Success Messages */}
                {error && (
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                        <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
                    </div>
                )}
                {success && (
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                        <p className="text-green-600 dark:text-green-400 text-sm">{success}</p>
                    </div>
                )}

                {/* Buttons */}
                <div className="flex gap-4 pt-4">
                    <button
                        type="submit"
                        disabled={loading}
                        className="flex-1 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Adding...' : 'Add News'}
                    </button>
                    <button
                        type="button"
                        onClick={onCancel}
                        className="px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg font-medium transition-colors"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}

export default NewsForm
