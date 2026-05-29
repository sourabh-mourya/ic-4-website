import React from 'react'
import StartHero from '../../components/StartHero/StartHero'
import Footer from '../../components/Footer/Footer'
import Nav from '../../components/Navbar/Nav'

const AcceptedPapers = () => {
    return (
        <>
            <Nav />
            {/* <StartHero /> */}
            <section className="text-gray-600 body-font mt-4">
                <div className="container px-5 py-8 mx-auto bg-[#E3F0FB]">
                    <div className="w-full mx-auto text-center">

                        <div className="flex items-center mb-3 mr-8 justify-center" >

                            <h1 className='sm:text-4xl text-xl font-black text-black sm:ml-12 bodyFont2'>ACCEPTED PAPERS
                            </h1>
                            <i className="fa-solid fa-newspaper sm:fa-4x fa-2x ml-12" style={{ color: "#016698" }}></i>
                        </div>
                        <p className="leading-relaxed text-3xl mt-12  font-bold text-black">

                        {/* Accepted paper will be published in IEEE Digital Xplore. */}
                        </p>
                        <div className="text-center">
                            <span className="inline-block h-1 w-24 rounded bg-[#016698] mt-8 mb-6"></span>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default AcceptedPapers