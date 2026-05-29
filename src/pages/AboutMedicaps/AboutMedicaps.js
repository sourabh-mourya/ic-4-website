    import React from 'react'
    import StartHero from '../../components/StartHero/StartHero'
    import Footer from '../../components/Footer/Footer'
    import medicapsLogo from '../../img/MedicapsNewLogo.png'
    import aboutMedicapsGallery from '../../img/aboutMedicapsGallery.jpeg'
    import aboutMedi1 from '../../img/aboutMedi1-min.jpg'
    import aboutMedi2 from '../../img/aboutMedi2-min.jpg'
    import aboutMedi3 from '../../img/aboutMedi3-min.jpg'
    import aboutMedi4 from '../../img/aboutMedi4-min.jpg'
    import Nav from '../../components/Navbar/Nav'
    import NewMedicapsLogo from '../../img/LinearBlackNewLogo.png'


    function AboutMedicaps() {
        return (
            <>
                <Nav />
                {/* <StartHero /> */}
                <section className="text-gray-600 body-font ">
                    <div className="container px-5 pt-8 pb-4 mx-auto bg-[#E3F0FB] mt-4">
                        <div className="w-full mx-auto text-left">

                            <div className="flex items-center mb-3 mr-8 justify-center gradientColor" >

                                <h1 className='sm:text-4xl text-xl font-black text-white sm:ml-12 bodyFont2'>ABOUT MEDICAPS UNIVERSITY
                                </h1>
                                {/* <img className='ml-4' src={NewMedicapsLogo} alt="" width={100} /> */}
                            </div>

                            {/* IMAGE SECTION */}

                            <section className="text-gray-600 body-font">
                                <div className="container px-5 py-8 mx-auto flex flex-wrap">
                                    <div className="flex flex-wrap md:-m-2 -m-1">
                                        <div className="flex flex-wrap w-1/2">
                                            
                                            <div className="md:p-2 p-1 w-1/2">
                                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://cache.careers360.mobi/media/presets/500X333/colleges/social-media/media-gallery/1760/2019/7/8/Auditorium%20of%20Medi-Caps%20University%20Indore_Auditorium.jpg" />
                                            </div>
                                            <div className="md:p-2 p-1 w-1/2">
                                                <img alt="gallery" className="w-full object-cover h-full object-center block" src={aboutMedi3} />
                                            </div>
                                            <div className="md:p-2 p-1 w-1/2">
                                                <img alt="gallery" className="w-full h-full object-cover object-center block" src={aboutMedicapsGallery} />
                                            </div>
                                            <div className="md:p-2 p-1 w-1/2">
                                                <img alt="gallery" className="w-full object-cover h-full object-center block" src={aboutMedi1} />
                                            </div>
                                            {/* <div className="md:p-2 p-1 w-full">
                                                
                                            </div> */}
                                        </div>
                                        <div className="flex flex-wrap w-1/2">
                                        <div className="md:p-2 p-1 w-1/2">
                                                <img alt="gallery" className="w-full object-cover h-full object-center block" src={aboutMedi4} />
                                            </div>
                                            <div className="md:p-2 p-1 w-1/2">
                                                <img alt="gallery" className="w-full object-cover h-full object-center block" src={aboutMedi2} />
                                            </div>
                                            <div className="md:p-2 p-1 w-1/2">
                                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://images.shiksha.com/mediadata/images/1646118831php5BYvIx.jpeg" />
                                            </div>
                                            
                                            <div className="md:p-2 p-1 w-1/2">
                                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcN6SeANT_aCemZbHeeXvlwdkXCm_Ua5xiR6ZM1KTCA3cs608pwv0yJqMQ6Eh2-HQ_JGo&usqp=CAU" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <p className="leading-relaxed  mt-12 sm:text-xl text-sm font-semibold text-black">Medicaps University is one of the brand name in the arena of technical education and contributing in making Indore an educational hub. Since its inception in July 2000, the group consistently aims at creating an ideal ambiance for budding technocrats and helping them grow like professionals. The main strength of Medicaps University is its highly qualified faculty. We have optimal blend of academic brilliance and industry exposure, which is supplemented by highly specialized visiting faculty and industry experts, Medical senior professionals from various segments of different industry/ business houses. This helps in refining the works, candidature of our students from different fields.</p>
                        </div>
                        <div className="text-center">
                            <span className="inline-block h-1 w-24 mt-8rounded bg-[#a21d2e] mt-8 mb-6"></span>
                        </div>
                        <section className="text-gray-600 body-font ">
                            <div className="container mx-auto flex px-5 py-6 md:flex-row flex-col items-center">
                                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                    <h1 className="sm:text-4xl text-3xl mb-8 font-black bodyFont2 gradientHeading">VISION
                                    </h1>
                                    <p className="mb-8 leading-relaxed text-black sm:text-xl font-semibold text-sm text-justify">To build an institutional ecosystem that equips and inspires the next generation of society-ready professionals with a core belief that knowledge is power.</p>

                                </div>


                                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                                    <img className="object-cover object-center rounded " alt="hero" src="https://www.medicaps.ac.in/public/frontend/images/the-university-img1.webp" />
                                </div>
                            </div>
                            <div className="text-center mt-0">
                                <span className="inline-block h-1 w-24 rounded bg-[#a21d2e] mb-6"></span>
                            </div>
                        </section>
                        <section className="text-gray-600 body-font ">
                            <div className="container mx-auto flex px-5 py-6 md:flex-row flex-col items-center">
                                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                    <h1 className="sm:text-4xl text-3xl mb-8 font-black text-black bodyFont2 gradientHeading">MISSION
                                    </h1>
                                    {/* <p className="mb-8 leading-relaxed text-black sm:text-xl font-semibold text-sm"> */}
                                            <ul className='list-disc marker:text-[#a21d2e] list-outside text-left'>
                                                <li>Emerge as the most sought-after higher education institution in central India with state-of-the-art resources and experienced faculty members.</li>
                                                <li>Nurture an academic environment at par with global standards of pedagogy that is conducive to experiential learning, and research to create a positive impact in the journey of nation-building.</li>
                                                <li>Cultivate a vibrant ecosystem for professional and intellectual growth beyond the classrooms to empower individuals to become responsible global citizens, lifelong learners, and ethical leaders.</li>
                                                <li>Engage and collaborate with academic institutions, business organizations, and communities to address contemporary challenges through research and growth initiatives.</li>
                                            </ul>
                                    {/* </p> */}

                                </div>


                                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                                    <img className="object-cover object-center rounded " alt="hero" src="https://www.medicaps.ac.in/public/frontend/images/academic-collaboration-img.webp" />
                                </div>
                            </div>
                            <div className="text-center mt-0">
                                <span className="inline-block h-1 w-24 rounded bg-[#a21d2e] mb-6"></span>
                            </div>
                        </section>
                    </div>
                </section>

                <Footer />
            </>
        )
    }

    export default AboutMedicaps