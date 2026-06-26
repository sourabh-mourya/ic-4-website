import React from 'react'
import Footer from '../../components/Footer/Footer'
import './venue.css'
import Nav from '../../components/Navbar/Nav'
import { venueInfo } from '../../data/data'

const Venue = () => {
    return (
        <>
            <Nav />
            <section className="py-16 px-4 md:px-8">
                <div className="container mx-auto max-w-5xl bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
                    <div className="text-center mb-12">
                        <span className="text-xs uppercase tracking-widest text-[#a21d2e] font-black mb-2 block">Conference Location</span>
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#293985] font-heading flex items-center justify-center gap-3">
                            Venue & Directions
                        </h1>
                        <span className="inline-block h-1 w-20 rounded bg-[#a21d2e] mt-4 mx-auto"></span>
                    </div>

                    <div className="flex flex-col lg:flex-row items-stretch gap-10">
                        {/* Address & Details card */}
                        <div className="w-full lg:w-2/5 bg-gradient-to-br from-[#016698]/5 to-[#293985]/5 border border-gray-150 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-[#293985] text-white flex items-center justify-center mb-6 shadow-md">
                                    <i className="fa-solid fa-map-location-dot text-xl"></i>
                                </div>
                                <h3 className="text-xl font-bold text-[#293985] mb-2 font-heading">Medicaps University</h3>
                                <p className="text-gray-600 text-sm font-semibold mb-6">
                                    {venueInfo.name}
                                </p>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start gap-3">
                                        <i className="fa-solid fa-location-dot text-[#a21d2e] mt-1"></i>
                                        <p className="text-sm font-bold text-gray-700">{venueInfo.address}</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <i className="fa-solid fa-phone text-[#016698] mt-1"></i>
                                        <p className="text-sm font-bold text-gray-700">
                                            {venueInfo.phones.join(', ')}
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <i className="fa-solid fa-envelope text-[#016698] mt-1"></i>
                                        <a href={`mailto:${venueInfo.email}`} className="text-sm font-bold text-[#016698] underline hover:text-[#293985]">
                                            {venueInfo.email}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <a href="https://maps.google.com/?q=Medi-Caps+University+Indore" target="_blank" rel="noopener noreferrer" className="click-scale block">
                                <button className="conf-btn-secondary w-full py-2.5">Open in Google Maps</button>
                            </a>
                        </div>

                        {/* Map iframe card */}
                        <div className="w-full lg:w-3/5 rounded-2xl overflow-hidden shadow-md border border-gray-200 relative min-h-[350px]">
                            <iframe
                                className="w-full h-full min-h-[350px] border-0"
                                title="Medicaps University Campus Location Map"
                                scrolling="no"
                                marginHeight="0"
                                marginWidth="0"
                                src={venueInfo.mapSrc}
                            ></iframe>
                        </div>
                    </div>

                    {/* Partner Venue Reference */}
                    <div className="mt-12 pt-10 border-t border-gray-100">
                        <div className="text-center mb-8">
                            <span className="text-xs uppercase tracking-widest text-[#a21d2e] font-black mb-2 block">International Partner</span>
                            <h2 className="text-2xl font-extrabold text-[#293985] font-heading">
                                Partner Institution
                            </h2>
                        </div>

                        <div className="bg-gradient-to-br from-[#a21d2e]/5 to-[#293985]/5 border border-gray-150 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-[#293985] mb-2 font-heading">Aivancity Paris-Cachan</h3>
                                <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
                                    Aivancity School for Technology, Business & Society Paris-Cachan is our esteemed international partner. Discover their Bachelor of Science in Applied Artificial Intelligence program, designed to prepare professionals for the future of AI.
                                </p>
                            </div>
                            <div className="flex-shrink-0 w-full md:w-auto">
                                <a
                                    href="https://aivancity.ai/en/program/bachelor-science-intelligence-artificielle-appliquee/presentation"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="click-scale block text-center"
                                >
                                    <button className="px-6 py-3 bg-[#a21d2e] text-white text-xs font-bold uppercase rounded-lg hover:bg-[#861726] transition shadow-md whitespace-nowrap">
                                        View Program Presentation
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Venue;