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
            <section className="py-16 px-4 md:px-8">
                <div className="container mx-auto max-w-5xl bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
                    <div className="w-full mx-auto text-left">
                        <div className="flex items-center mb-10 justify-center bg-gradient-to-r from-[#016698] to-[#293985] rounded-2xl py-6 px-4 shadow-md">
                            <h1 className='text-xl sm:text-3xl font-extrabold text-white text-center bodyFont2 tracking-wider font-heading uppercase'>
                                ABOUT MEDI-CAPS UNIVERSITY
                            </h1>
                        </div>

                        {/* GALLERY IMAGE SECTION */}
                        <section className="text-gray-600 body-font">
                            <div className="container py-4 mx-auto flex flex-wrap">
                                <div className="flex flex-wrap md:-m-2 -m-1">
                                    <div className="flex flex-wrap w-full md:w-1/2">
                                        <div className="md:p-2 p-1 w-1/2">
                                            <img alt="Campus Auditorium" className="w-full object-cover h-40 sm:h-48 object-center block rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]" src="https://cache.careers360.mobi/media/presets/500X333/colleges/social-media/media-gallery/1760/2019/7/8/Auditorium%20of%20Medi-Caps%20University%20Indore_Auditorium.jpg" />
                                        </div>
                                        <div className="md:p-2 p-1 w-1/2">
                                            <img alt="University Campus View" className="w-full object-cover h-40 sm:h-48 object-center block rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]" src={aboutMedi3} />
                                        </div>
                                        <div className="md:p-2 p-1 w-1/2">
                                            <img alt="Medi-Caps Campus" className="w-full object-cover h-40 sm:h-48 object-center block rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]" src={aboutMedicapsGallery} />
                                        </div>
                                        <div className="md:p-2 p-1 w-1/2">
                                            <img alt="Engineering Wing" className="w-full object-cover h-40 sm:h-48 object-center block rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]" src={aboutMedi1} />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap w-full md:w-1/2">
                                        <div className="md:p-2 p-1 w-1/2">
                                            <img alt="Main Library" className="w-full object-cover h-40 sm:h-48 object-center block rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]" src={aboutMedi4} />
                                        </div>
                                        <div className="md:p-2 p-1 w-1/2">
                                            <img alt="Academic Block" className="w-full object-cover h-40 sm:h-48 object-center block rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]" src={aboutMedi2} />
                                        </div>
                                        <div className="md:p-2 p-1 w-1/2">
                                            <img alt="Campus Life" className="w-full object-cover h-40 sm:h-48 object-center block rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]" src="https://images.shiksha.com/mediadata/images/1646118831php5BYvIx.jpeg" />
                                        </div>
                                        <div className="md:p-2 p-1 w-1/2">
                                            <img alt="Academic Seminar" className="w-full object-cover h-40 sm:h-48 object-center block rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcN6SeANT_aCemZbHeeXvlwdkXCm_Ua5xiR6ZM1KTCA3cs608pwv0yJqMQ6Eh2-HQ_JGo&usqp=CAU" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <p className="leading-relaxed mt-10 text-sm sm:text-base font-semibold text-gray-700 text-justify">
                            Medi-Caps University is one of the brand names in the arena of technical education and is contributing to making Indore an educational hub. Since its inception in July 2000, the group consistently aims at creating an ideal ambiance for budding technocrats and helping them grow into professionals. The main strength of Medi-Caps University is its highly qualified faculty. We have an optimal blend of academic brilliance and industry exposure, which is supplemented by highly specialized visiting faculty and industry experts, and senior medical professionals from various segments of different industry/business houses. This helps in refining the work and candidature of our students from different fields.
                        </p>
                    </div>

                    <div className="text-center my-10">
                        <span className="inline-block h-1 w-24 rounded bg-[#a21d2e]"></span>
                    </div>

                    {/* VISION */}
                    <section className="text-gray-600 body-font">
                        <div className="container mx-auto flex md:flex-row flex-col items-center gap-10">
                            <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
                                <h2 className="text-2xl sm:text-3xl mb-4 font-extrabold text-[#293985] font-heading">
                                    OUR VISION
                                </h2>
                                <p className="leading-relaxed text-gray-700 text-sm sm:text-base font-semibold text-justify">
                                    To build an institutional ecosystem that equips and inspires the next generation of society-ready professionals with a core belief that knowledge is power.
                                </p>
                            </div>
                            <div className="md:w-1/2 w-5/6 max-w-md md:max-w-none">
                                <img className="object-cover object-center rounded-2xl shadow-lg border-4 border-white" alt="Medi-Caps University Vision" src="https://www.medicaps.ac.in/public/frontend/images/the-university-img1.webp" />
                            </div>
                        </div>
                    </section>

                    <div className="text-center my-10">
                        <span className="inline-block h-1 w-24 rounded bg-[#a21d2e]"></span>
                    </div>

                    {/* MISSION */}
                    <section className="text-gray-600 body-font">
                        <div className="container mx-auto flex md:flex-row flex-col items-center gap-10">
                            <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
                                <h2 className="text-2xl sm:text-3xl mb-4 font-extrabold text-[#293985] font-heading">
                                    OUR MISSION
                                </h2>
                                <ul className="list-disc marker:text-[#a21d2e] list-outside text-left text-gray-700 text-sm sm:text-base font-semibold space-y-3 pl-4">
                                    <li>Emerge as the most sought-after higher education institution in central India with state-of-the-art resources and experienced faculty members.</li>
                                    <li>Nurture an academic environment at par with global standards of pedagogy that is conducive to experiential learning and research to create a positive impact in the journey of nation-building.</li>
                                    <li>Cultivate a vibrant ecosystem for professional and intellectual growth beyond the classrooms to empower individuals to become responsible global citizens, lifelong learners, and ethical leaders.</li>
                                    <li>Engage and collaborate with academic institutions, business organizations, and communities to address contemporary challenges through research and growth initiatives.</li>
                                </ul>
                            </div>
                            <div className="md:w-1/2 w-5/6 max-w-md md:max-w-none">
                                <img className="object-cover object-center rounded-2xl shadow-lg border-4 border-white" alt="Medi-Caps Academic Collaboration" src="https://www.medicaps.ac.in/public/frontend/images/academic-collaboration-img.webp" />
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default AboutMedicaps;