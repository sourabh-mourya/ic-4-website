import React from 'react'
import Footer from '../../components/Footer/Footer'
import './venue.css'
import Nav from '../../components/Navbar/Nav'
const Venue = () => {
    return (
        <>
            <Nav />
            {/* <StartHero /> */}
            <section className="text-gray-600 body-font mt-4">
                <div className="container px-5 py-6 mx-auto bg-[#E3F0FB]">
                    <div className="w-full mx-auto text-center">

                        <div className="flex items-center mb-3 mr-8 justify-center gradientColor" >

                            <h1 className='sm:text-4xl text-xl font-black text-white ml-12 bodyFont2'>VENUE
                            </h1>
                            <i className="fa-solid fa-location-pin sm:fa-3x fa-2x ml-12" style={{ color: "#ffffff" }}></i>
                        </div>
                        <p className="leading-relaxed sm:text-[1.3rem] sm:mt-12 text-sm font-bold text-black text-center">

                            Main Auditorium,
                            Medi-Caps University
                            <br />
                            A.B. Road, Pigdamber, Rau Indore - (453331)
                            <span className='text-[#293985] mx-2'>
                                0731-3111500,

                                0731-3111501
                            </span>

                            e-mail:  <span className='text-[#293985]'>iceeta2025@medicaps.ac.in</span>
                        </p>

                        {/* <p className="leading-relaxed sm:text-[1.3rem] sm:mt-12 text-sm font-bold text-black text-center">
                        TUNKU ABDUL RAHMAN UNIVERSITY OF MANAGEMENT AND TECHNOLOGY
                            <br />
                            Jalan Genting Kelang, Setapak,53300 Kuala Lumpur.

                            <span className='text-[#016698] mx-2'>
                                (6)03-41450123
                            </span>

                            e-mail:  <span className='text-[#016698]'>info@tarc.edu.my</span>
                            </p> */}
                    </div>
                    <section className="text-gray-600 body-font relative">
                        <div className="container py-8 mx-auto ">
                            <div className="bg-gray-300 rounded-lg overflow-hidden p-4 flex items-end justify-start relative">
                                <div className="mapouter"><div className="gmap_canvas"><iframe className="gmap_iframe" width="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=2048&amp;height=600&amp;hl=en&amp;q=medi-caps university&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://formatjson.org/">format json</a></div></div>
                                <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">

                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="text-center">

                        <span className="inline-block h-1 w-24 rounded bg-[#a21d2e] mt-8 mb-6"></span>
                    </div>
                </div>

            </section>
            {/* <section className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto bg-[#E3F0FB]">
                    <div className="w-full mx-auto text-left">

                        <div className="flex items-center mb-3 mr-8 justify-center" >

                            <h1 className='sm:text-4xl text-xl font-black text-black ml-12 bodyFont2'>Accommodation Charges
                            </h1>
                            <i className="fa-solid fa-id-card sm:fa-3x fa-2x ml-12" style={{ color: "#016698" }}></i>
                        </div>
                        <div className="container mt-12">
                            <table className="registerTable sm:w-[90%] mx-auto border- border border-black">
                                <thead>
                                    <tr>
                                        <th className="highlight1 border border-black w-[10%]">S.No</th>
                                        <th className="highlight1 border border-black w-[30%]">Hotel Name</th>
                                        <th className="highlight1 border border-black w-[30%]">Rent (A.C. Room)</th>
                                        <th className="highlight1 border border-black w-[30%]">Mobile No.</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="highlight border border-black">1</td>
                                        <td className="highlight border border-black">Guru Kripa</td>
                                        <td className="highlight border border-black">Single: INR 1200/- ,
                                            Double: INR 1500/- ,
                                            Triple: INR 2000/- ,
                                            GST Extra
                                        </td>
                                        <td className="highlight border border-black">9522228844,
                                            9584512821,
                                            9522228841
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="highlight border border-black">2</td>
                                        <td className="highlight border border-black">U Turn</td>
                                        <td className="highlight border border-black">Double: INR 2000/-,
                                            INR Triple:3000/-
                                        </td>
                                        <td className="highlight border border-black">7999663106</td>
                                    </tr>
                                    <tr>
                                        <td className="highlight border border-black">3</td>
                                        <td className="highlight border border-black">Sartaj
                                            (Preferable) near VIKAS
                                        </td>
                                        <td className="highlight border border-black">Double: INR 1300/- ,
                                            Triple: INR 2000/-
                                        </td>
                                        <td className="highlight border border-black">8127512593</td>
                                    </tr>
                                    <tr>
                                        <td className="highlight border border-black">4 </td>
                                        <td className="highlight border border-black">Shree</td>
                                        <td className="highlight border border-black">Double: INR 1500/-
                                            Triple: INR 2000/-
                                        </td>
                                        <td className="highlight border border-black">9300002990</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div><p className="leading-relaxed  mt-4 sm:text-xl font-semibold text-black text-sm text-justify mx-20">Check In: 10 AM, Check Out:11 AM</p></div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* <section class="text-gray-600 body-font">
                <div class="container px-24 py-24 mx-auto bg-[#E3F0FB]">
                    <div className="w-full mx-auto text-left"> */}

                        {/* <div className="flex items-center mb-3 mr-8 justify-center" > */}
{/* 
                            <h1 className='sm:text-4xl text-xl font-black text-black ml-12 bodyFont2'>Hostel Facility for Girl
                            </h1> */}
                            {/* <i className="fa-solid fa-id-card sm:fa-3x fa-2x ml-12" style={{ color: "#016698" }}></i> */}
                        {/* </div>
                    </div> */}
{/*                     
                    <div><p className="leading-relaxed  mt-12 sm:text-xl font-semibold text-black text-sm text-justify mx-18"><span className="text-[#00629B]">Stay Arrangements</span> can be made on request @ Rs 500/- Per person/night <span className="text-[#00629B]">(for Females)</span> in Medi-Caps Non-AC
                        Hostel, including meals. Nearby hotels available through online bookings are: Gurukripa (Budget
                        AC Hotel), Sayaji & Pappaya Trea (Star Hotels).</p></div> */}
                    {/* <div class="flex flex-wrap mt-8">
                        <div class="xl:w-1/4 md:w-1/2 p-4">
                            <div class="bg-gray-100 p-2 rounded-lg">
                                <img class="h-40 rounded w-full object-cover object-center" src={girlHostel1} alt="content" />
                               
                            </div>
                        </div>
                        <div class="xl:w-1/4 md:w-1/2 p-4">
                            <div class="bg-gray-100 p-2 rounded-lg">
                                <img class="h-40 rounded w-full object-cover object-center" src={girlHostel2} alt="content" />
                               
                            </div>
                        </div>
                        <div class="xl:w-1/4 md:w-1/2 p-4">
                            <div class="bg-gray-100 p-2 rounded-lg">
                                <img class="h-40 rounded w-full object-cover object-center" src={girlHostel3} alt="content" />
                               
                            </div>
                        </div>
                        <div class="xl:w-1/4 md:w-1/2 p-4">
                            <div class="bg-gray-100 p-2 rounded-lg">
                                <img class="h-40 rounded w-full object-cover object-center" src={girlHostel4} alt="content" />
                               
                            </div>
                        </div>
                    </div> */}
                {/* </div>
            </section> */}
            <Footer />
        </>
    )
}

export default Venue