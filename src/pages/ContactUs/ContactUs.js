import React from 'react'
import Footer from '../../components/Footer/Footer'
import Nav from '../../components/Navbar/Nav'
import './Contact.css'

const ContactUs = () => {
    return (
        <>
            <Nav/>
            {/* <StartHero/> */}
            <section className="text-gray-600 body-font mt-4">
                <div className="container px-5 py-8 mx-auto bg-[#E3F0FB]">
                    <div className="w-full mx-auto text-left">

                        <div className="flex items-center mb-3 mr-8 justify-center gradientColor">

                            <h1 className='sm:text-4xl text-xl font-black text-white ml-12 bodyFont2'>CONTACT US
                            </h1>
                            <i className="fa-solid fa-address-book sm:fa-3x fa-2x ml-12" style={{color:"#ffffff"}}></i>
                        </div> 
                        <p className="leading-relaxed sm:text-[1.3rem] mt-12 md:ml-12 font-bold text-black text-sm text-center">

                            Here's where you can reach us :  <span className='text-[#016698]'> iceeta2025@medicaps.ac.in </span> <span className='text-[#016698]'>  </span>
                        </p>
                        <p className="leading-relaxed sm:text-[1.3rem] mt-4 md:ml-12 font-bold text-black text-sm text-center">

                            For Paper Submission : <span className='text-[#293985]'> Dr. Vipin Sharma</span> -  <span className='text-[#a21d2e]'> +91 9479628030</span>
                        </p>
                        <p className="leading-relaxed sm:text-[1.3rem] mt-4 md:ml-12 font-bold text-black text-sm text-center">

                            For Travel and Stay : <span className='text-[#293985]'> Dr. Sanjeev Jain</span> -  <span className='text-[#a21d2e]'> +91 9827282120</span>
                        </p>  
                        <p className="leading-relaxed sm:text-[1.3rem] mt-4 md:ml-12 font-bold text-black text-sm text-center">

                            For Conference Event Related : <span className='text-[#293985]'> Prof. Ram Bansal</span> -  <span className='text-[#a21d2e]'> +91 7000110427</span>
                        </p>
                                            <div className="text-center">
                            <span className="inline-block h-1 w-24 rounded bg-[#a21d2e] mt-8 mb-6"></span>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ContactUs