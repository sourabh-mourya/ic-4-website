import React from 'react'
import Footer from '../../components/layout/Footer/Footer'
import Nav from '../../components/layout/Navbar/Navbar'
import './Contact.css'
import { contactInfo } from '../../data/data'

const ContactUs = () => {
    return (
        <>
            <Nav />
            <section className="py-16 px-4 md:px-8">
                <div className="container mx-auto max-w-4xl bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
                    <div className="text-center mb-12">
                        <span className="text-xs uppercase tracking-widest text-[#a21d2e] font-black mb-2 block">Reach Out</span>
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#293985] font-heading flex items-center justify-center gap-3">
                            Contact Us
                        </h1>
                        <span className="inline-block h-1 w-20 rounded bg-[#a21d2e] mt-4 mx-auto"></span>
                    </div>

                    <div className="w-full">
                        {/* Main email call-out card */}
                        <div className="bg-gradient-to-br from-[#016698]/5 to-[#293985]/5 border border-gray-150 rounded-2xl p-6 sm:p-8 text-center mb-10">
                            <div className="w-12 h-12 rounded-full bg-[#016698]/10 text-[#016698] flex items-center justify-center mx-auto mb-4">
                                <i className="fa-solid fa-envelope text-xl"></i>
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mb-1 font-heading">Official Conference Email</h3>
                            <a href={`mailto:${contactInfo.email}`} className="text-lg sm:text-2xl font-black text-[#016698] hover:text-[#293985] transition-colors duration-300 underline block break-all">
                                {contactInfo.email}
                            </a>
                            <p className="text-xs text-gray-500 mt-2 font-semibold">Please send any general inquiries and manuscript submissions here.</p>
                        </div>

                        {/* Contacts grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {contactInfo.contacts.map((c, i) => (
                                <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-full">
                                    <div>
                                        <span className="text-[0.68rem] uppercase font-black text-[#a21d2e] tracking-widest block mb-2">{c.purpose}</span>
                                        <h4 className="text-base font-bold text-gray-800 mb-1 font-heading">{c.name}</h4>
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-gray-100">
                                        <a href={`tel:${c.phone}`} className="flex items-center gap-2 text-sm text-[#293985] hover:text-[#a21d2e] transition-colors duration-300 font-extrabold">
                                            <i className="fa-solid fa-phone text-xs"></i>
                                            {c.phone}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ContactUs;