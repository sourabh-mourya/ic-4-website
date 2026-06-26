import React from 'react'
import Footer from '../../components/Footer/Footer'
import aboutMedicapsGallery from '../../img/aboutMedicapsGallery.jpeg'
import aboutMedi1 from '../../img/aboutMedi1-min.jpg'
import aboutMedi2 from '../../img/aboutMedi2-min.jpg'
import aboutMedi3 from '../../img/aboutMedi3-min.jpg'
import aboutMedi4 from '../../img/aboutMedi4-min.jpg'
import Nav from '../../components/Navbar/Nav'

function AboutMedicaps() {
    return (
        <>
            <Nav />
            
            {/* Hero Section */}
            <section className="py-16 text-center text-white bg-gradient-to-r from-[#016698] to-[#293985] shadow-inner relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.05] z-0" />
                <div className="container mx-auto px-6 relative z-10">
                    <span className="text-xs uppercase tracking-widest bg-white/10 px-3.5 py-1.5 rounded-full font-black text-white/90 border border-white/20 mb-4 inline-block">
                        Our University
                    </span>
                    <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-wide mb-4 uppercase">
                        About Medi-Caps University
                    </h1>
                    <span className="inline-block h-1 w-20 rounded bg-[#a21d2e] mb-4"></span>
                    <p className="max-w-2xl mx-auto text-sm sm:text-[0.98rem] text-gray-200 leading-relaxed font-medium">
                        A brand name in technical education, consistently creating an ideal ambiance for budding technocrats in Central India.
                    </p>
                </div>
            </section>

            {/* University Description and Gallery */}
            <section className="py-16 px-4 md:px-8 bg-gray-50">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col lg:flex-row gap-12 items-center bg-white rounded-2xl border border-gray-100 shadow-md p-8 md:p-12 mb-12">
                        {/* Text Intro */}
                        <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                            <span className="text-xs uppercase tracking-widest text-[#a21d2e] font-black mb-2">Introduction</span>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#293985] mb-6 font-heading">
                                Excellence in Education Since 2000
                            </h2>
                            <p className="leading-relaxed text-gray-600 text-sm sm:text-base mb-6 text-justify font-medium">
                                Medi-Caps University is one of the brand names in the arena of technical education and is contributing to making Indore an educational hub. Since its inception in July 2000, the group consistently aims at creating an ideal ambiance for budding technocrats and helping them grow into professionals.
                            </p>
                            <p className="leading-relaxed text-gray-600 text-sm sm:text-base text-justify font-medium">
                                The main strength of Medi-Caps University is its highly qualified faculty. We have an optimal blend of academic brilliance and industry exposure, supplemented by specialized visiting faculty, industry experts, and senior medical professionals from various segments of different industry/business houses. This helps in refining the work and candidature of our students from different fields.
                            </p>
                        </div>

                        {/* Visual Image Grid */}
                        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
                            <img alt="Campus Life" className="w-full object-cover h-32 sm:h-40 rounded-xl shadow-sm hover:shadow-md transition duration-300 hover:scale-102" src="https://cache.careers360.mobi/media/presets/500X333/colleges/social-media/media-gallery/1760/2019/7/8/Auditorium%20of%20Medi-Caps%20University%20Indore_Auditorium.jpg" />
                            <img alt="University Campus View" className="w-full object-cover h-32 sm:h-40 rounded-xl shadow-sm hover:shadow-md transition duration-300 hover:scale-102" src={aboutMedi3} />
                            <img alt="Medi-Caps Campus" className="w-full object-cover h-32 sm:h-40 rounded-xl shadow-sm hover:shadow-md transition duration-300 hover:scale-102" src={aboutMedicapsGallery} />
                            <img alt="Engineering Wing" className="w-full object-cover h-32 sm:h-40 rounded-xl shadow-sm hover:shadow-md transition duration-300 hover:scale-102" src={aboutMedi1} />
                        </div>
                    </div>

                    {/* Alternating Vision and Mission Block */}
                    <div className="space-y-12">
                        {/* OUR VISION */}
                        <div className="flex flex-col lg:flex-row gap-10 items-center bg-white rounded-2xl border border-gray-100 shadow-md p-8 md:p-12">
                            <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                                <span className="text-xs uppercase tracking-widest text-[#a21d2e] font-black mb-2">Our Foundation</span>
                                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#293985] mb-4 font-heading">
                                    OUR VISION
                                </h3>
                                <p className="leading-relaxed text-gray-600 text-sm sm:text-base font-medium text-justify">
                                    To build an institutional ecosystem that equips and inspires the next generation of society-ready professionals with a core belief that knowledge is power.
                                </p>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <img className="object-cover object-center w-full h-64 sm:h-72 rounded-xl shadow-md border-4 border-gray-50" alt="Medi-Caps University Vision" src="https://www.medicaps.ac.in/public/frontend/images/the-university-img1.webp" />
                            </div>
                        </div>

                        {/* OUR MISSION */}
                        <div className="flex flex-col lg:flex-row-reverse gap-10 items-center bg-white rounded-2xl border border-gray-100 shadow-md p-8 md:p-12">
                            <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                                <span className="text-xs uppercase tracking-widest text-[#a21d2e] font-black mb-2">Our Purpose</span>
                                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#293985] mb-6 font-heading">
                                    OUR MISSION
                                </h3>
                                <ul className="space-y-4 text-left">
                                    <li className="flex items-start gap-3 text-sm sm:text-base text-gray-600">
                                        <div className="w-5 h-5 rounded-full bg-[#a21d2e]/10 text-[#a21d2e] flex items-center justify-center flex-shrink-0 mt-1">
                                            <i className="fa-solid fa-arrow-right text-[10px]"></i>
                                        </div>
                                        <span>Emerge as the most sought-after higher education institution in central India with state-of-the-art resources and experienced faculty members.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm sm:text-base text-gray-600">
                                        <div className="w-5 h-5 rounded-full bg-[#a21d2e]/10 text-[#a21d2e] flex items-center justify-center flex-shrink-0 mt-1">
                                            <i className="fa-solid fa-arrow-right text-[10px]"></i>
                                        </div>
                                        <span>Nurture an academic environment at par with global standards of pedagogy that is conducive to experiential learning and research to create a positive impact in the journey of nation-building.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm sm:text-base text-gray-600">
                                        <div className="w-5 h-5 rounded-full bg-[#a21d2e]/10 text-[#a21d2e] flex items-center justify-center flex-shrink-0 mt-1">
                                            <i className="fa-solid fa-arrow-right text-[10px]"></i>
                                        </div>
                                        <span>Cultivate a vibrant ecosystem for professional and intellectual growth beyond the classrooms to empower individuals to become responsible global citizens, lifelong learners, and ethical leaders.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm sm:text-base text-gray-600">
                                        <div className="w-5 h-5 rounded-full bg-[#a21d2e]/10 text-[#a21d2e] flex items-center justify-center flex-shrink-0 mt-1">
                                            <i className="fa-solid fa-arrow-right text-[10px]"></i>
                                        </div>
                                        <span>Engage and collaborate with academic institutions, business organizations, and communities to address contemporary challenges through research and growth initiatives.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <img className="object-cover object-center w-full h-64 sm:h-72 rounded-xl shadow-md border-4 border-gray-50" alt="Medi-Caps Academic Collaboration" src="https://www.medicaps.ac.in/public/frontend/images/academic-collaboration-img.webp" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default AboutMedicaps;