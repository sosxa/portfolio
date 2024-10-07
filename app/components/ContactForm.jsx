'use client';
import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';


const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target; // Corrected: destructure name and value from e.target
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        let errors = {};
        if (!formData.name) errors.name = "Name is required";
        if (!formData.email) errors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email is invalid";
        }
        if (!formData.message) errors.message = "Message is required";
        return errors; // Make sure to return the errors object
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validateErrors = validate();
        if (Object.keys(validateErrors).length > 0) {
            setErrors(validateErrors);
        } else {
            setErrors({});
            setIsSending(true);

            emailjs
                .send(
                    "service_vb6iux5",
                    "template_kk2zt3a",
                    formData,
                    "yKXw-wjVyvwsDSPwl",
                )
                .then((response) => {
                    toast.success("Message sent successfully");
                    setFormData({ name: "", email: "", message: "" });
                })
                .catch((err) => {
                    toast.error("Failed to send email");
                    console.error(err); // Log the error
                })
                .finally(() => {
                    setIsSending(false);
                });
        }
    };

    return (
        <div className="mx-auto max-w-xl p-4">
            <Toaster />
            <h2 className='my-12 text-center text-2xl font-semibold uppercase tracking-wide text-slate-100'>
                Get in touch
            </h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <input
                        type="text" // Changed type to text
                        id="name"
                        name="name" // Added name attribute
                        value={formData.name}
                        placeholder='Name'
                        onChange={handleChange}
                        className='w-full appearance-none rounded-lg border border-slate-800 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline' />
                    {errors.name && (
                        <p className='text-sm text-pink-700'>{errors.name}</p>
                    )}
                </div>
                <div className='mb-4'>
                    <input
                        type="email" // Correct type for email
                        id="email"
                        name="email" // Added name attribute
                        value={formData.email}
                        placeholder='JohnDoe@gmail.com'
                        onChange={handleChange}
                        className='w-full appearance-none rounded-lg border border-slate-800 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline' />
                    {errors.email && (
                        <p className='text-sm text-pink-700'>{errors.email}</p>
                    )}
                </div>
                <div className='mb-4'>
                    <textarea // Changed to textarea
                        id="message"
                        name="message" // Added name attribute
                        value={formData.message}
                        placeholder='Message'
                        onChange={handleChange}
                        className='w-full appearance-none rounded-lg border border-slate-800 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline'
                        rows={4}
                    />
                    {errors.message && (
                        <p className='text-sm text-pink-700'>{errors.message}</p>
                    )}
                </div>
                <button
                    className={`w-full rounded bg-gray-300 px-4 py-2 text-sm font-semibold text-slate-950 hover:text-teal-800 ${isSending ? "cursor-not-allowed opacity-50" : ""}`}
                    disabled={isSending}
                >
                    {isSending ? "Sending..." : "Send"}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
