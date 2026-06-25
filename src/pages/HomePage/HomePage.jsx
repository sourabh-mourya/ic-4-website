import React, { useEffect } from 'react'
import "./HomePage.css"
import Nav from '../../components/Navbar/Nav'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import StartHero from '../../components/StartHero/StartHero'
import ImportantDates from '../../components/common/ImportantDates'
import ConferenceCard from '../../components/common/ConferenceCard'
import { useCount } from '../../Context/context'
import { previousConferences } from '../../data/data'
import { assets } from '../../constants/assets'
import { ROUTES } from '../../constants/routes'

const HomePage = () => {
    const { setCount } = useCount();
    useEffect(() => {
        const func = () => {
            console.log("page is fully loaded");
            setCount(prev => prev + 1);
        }
        window.addEventListener("load", func);
        return () => window.removeEventListener("load", func);
    }, [setCount]);

    return (
        <>
            {/* Nav & Hero Banner */}
            <Nav />
            <StartHero />

            {/* Important Dates Section */}
            <section className="py-12 bg-gradient-to-r from-[#016698] to-[#293985] shadow-inner" id="impDates">
                <ImportantDates />
            </section>

            {/* Conference Scope Section */}
            <section className="py-16 px-4 md:px-8">
                <div className="container mx-auto max-w-6xl bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2 flex flex-col items-start text-left">
                            <span className="text-xs uppercase tracking-widest text-[#a21d2e] font-black mb-2">Scope of Event</span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#293985] mb-6 font-heading">
                                Conference Scope
                            </h2>
                            <p className="mb-6 leading-relaxed text-gray-700 text-sm sm:text-[0.98rem] text-justify font-medium">
                                The objective of this international conference is to foster a dynamic exchange of knowledge and innovation across the domains of mechanical, civil, electrical, and computer engineering. By bringing together leading scholars, industry experts, and visionary practitioners, the conference aims to strengthen academic-industry collaboration and provide a forum for the dissemination of pioneering research, advanced technologies, and future-oriented solutions. Emphasizing interdisciplinary synergy, the event is aimed at addressing pressing global challenges while promoting sustainable, cutting-edge practices. Ultimately, it aspires to contribute to the technological growth and sustainable development of our nation, positioning it at the forefront of global innovation. The conference will feature keynote addresses from eminent personalities in various fields aligned with the theme, including distinguished Indian and international speakers.
                            </p>
                            <Link to={ROUTES.REGISTER} className="click-scale">
                                <button className="conf-btn-primary">Register Now</button>
                            </Link>
                        </div>

                        <div className="lg:w-1/2 w-full max-w-md lg:max-w-none">
                            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white group">
                                <img className="w-full object-cover object-center transition-transform duration-500 group-hover:scale-103" alt="IC4 Conference Scope" src={assets.scopeImage} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics Showcase */}
            <section className="py-16 bg-[#293985] text-white">
                <div className="container px-5 mx-auto max-w-6xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="p-4 flex flex-col items-center">
                            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-4 text-[#57b7e7]">
                                <i className="fa-solid fa-users text-xl animate-pulse"></i>
                            </div>
                            <h2 className="title-font font-black text-4xl sm:text-5xl font-heading text-white">500+</h2>
                            <p className="leading-relaxed mt-2 text-xs tracking-widest uppercase text-gray-300 font-bold">Attendees</p>
                        </div>
                        <div className="p-4 flex flex-col items-center">
                            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-4 text-[#57b7e7]">
                                <i className="fa-solid fa-file-invoice text-xl animate-pulse"></i>
                            </div>
                            <h2 className="title-font font-black text-4xl sm:text-5xl font-heading text-white">150+</h2>
                            <p className="leading-relaxed mt-2 text-xs tracking-widest uppercase text-gray-300 font-bold">Papers Submitted</p>
                        </div>
                        <div className="p-4 flex flex-col items-center">
                            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-4 text-[#57b7e7]">
                                <i className="fa-solid fa-chalkboard-user text-xl animate-pulse"></i>
                            </div>
                            <h2 className="title-font font-black text-4xl sm:text-5xl font-heading text-white">85+</h2>
                            <p className="leading-relaxed mt-2 text-xs tracking-widest uppercase text-gray-300 font-bold">Sessions</p>
                        </div>
                        <div className="p-4 flex flex-col items-center">
                            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-4 text-[#57b7e7]">
                                <i className="fa-solid fa-earth-americas text-xl animate-pulse"></i>
                            </div>
                            <h2 className="title-font font-black text-4xl sm:text-5xl font-heading text-white">10+</h2>
                            <p className="leading-relaxed mt-2 text-xs tracking-widest uppercase text-gray-300 font-bold">Countries</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Links Section */}
            <section className="py-16 bg-gradient-to-r from-[#016698] to-[#293985] text-white">
                <div className="container px-5 mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Link to={ROUTES.COMMITTEES} className="click-scale block h-full">
                            <div className="flex flex-col items-center p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300 shadow-lg text-center h-full group hover:-translate-y-1">
                                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/10 text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <i className="fa-solid fa-user-large text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-extrabold mb-2 font-heading text-white">Program Committee</h3>
                                <p className="text-sm text-gray-200 mt-2">View General Chairs, patrons, and members.</p>
                                <span className="text-[#57b7e7] text-xs font-bold uppercase tracking-wider mt-6 block group-hover:underline">Explore Details &rarr;</span>
                            </div>
                        </Link>
                        
                        <Link to={ROUTES.ACCEPTED_PAPERS} className="click-scale block h-full">
                            <div className="flex flex-col items-center p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300 shadow-lg text-center h-full group hover:-translate-y-1">
                                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/10 text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <i className="fa-solid fa-newspaper text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-extrabold mb-2 font-heading text-white">Paper Guidelines</h3>
                                <p className="text-sm text-gray-200 mt-2">Download IEEE templates and check guidelines.</p>
                                <span className="text-[#57b7e7] text-xs font-bold uppercase tracking-wider mt-6 block group-hover:underline">Explore Details &rarr;</span>
                            </div>
                        </Link>

                        <Link to={ROUTES.VENUE} className="click-scale block h-full">
                            <div className="flex flex-col items-center p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300 shadow-lg text-center h-full group hover:-translate-y-1">
                                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/10 text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <i className="fa-solid fa-location-pin text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-extrabold mb-2 font-heading text-white">Venue & Map</h3>
                                <p className="text-sm text-gray-200 mt-2">Find directions and look at local locations.</p>
                                <span className="text-[#57b7e7] text-xs font-bold uppercase tracking-wider mt-6 block group-hover:underline">Explore Details &rarr;</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Collaborations Placeholder */}
            <section className="py-16 px-4 md:px-8">
                <div className="container mx-auto max-w-6xl bg-white rounded-2xl shadow-md border border-gray-100 p-8 text-center">
                    <span className="text-xs uppercase tracking-widest text-[#a21d2e] font-black mb-2 block">Updates & Partners</span>
                    <h2 className="text-3xl font-extrabold text-[#293985] mb-4 font-heading">
                        Media & Collaborations
                    </h2>
                    <p className="text-gray-500 max-w-md mx-auto text-sm sm:text-base mb-6 font-semibold">
                        We are currently aligning partners and media agencies. Declarations and details will be displayed here soon.
                    </p>
                    <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-4 py-2 text-xs text-gray-600 font-bold">
                        <i className="fa-solid fa-circle-info text-[#016698]"></i> Under Preparation
                    </div>
                </div>
            </section>

            {/* Previous Conferences Section */}
            <section className="py-16 px-4 md:px-8 bg-gray-50">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col text-center w-full mb-12">
                        <span className="text-xs uppercase tracking-widest text-[#a21d2e] font-black mb-2">Past Events</span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#293985] font-heading">
                            Previous Conferences
                        </h2>
                        <span className="inline-block h-1 w-20 rounded bg-[#a21d2e] mt-4 mx-auto"></span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {previousConferences.map((conf) => {
                            return (
                                <ConferenceCard
                                    key={conf.id}
                                    title={conf.title}
                                    year={conf.year}
                                    link={conf.link}
                                    image={assets[conf.image]}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Paper Submission Block */}
            <section className="py-16 px-4 md:px-8">
                <div className="container mx-auto max-w-4xl bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12 text-center flex flex-col items-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#293985] mb-4 font-heading uppercase">
                        Paper Submission
                    </h2>
                    <p className="mb-6 leading-relaxed text-gray-700 text-sm sm:text-lg text-justify font-medium">
                        Authors are invited to submit papers through the conference submission system. Submissions must be original and should not have been published previously or be under consideration for publication while being evaluated for this conference.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to={ROUTES.PAPER_SUBMISSION} className="click-scale">
                            <button className="conf-btn-primary py-2.5 px-6">Submit Your Paper</button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </>
    )
}

export default HomePage