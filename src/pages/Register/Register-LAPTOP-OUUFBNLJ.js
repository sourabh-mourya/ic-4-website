import React from 'react'
import Nav from '../../components/Navbar/Nav'
import Footer from '../../components/Footer/Footer'
import './register.css';
import Slide from 'react-reveal/Slide';
import qrcode from '../../img/newQrCodeForBank.jpg'
function Register() {
    return (
        <>
            <Nav />
            <section className="text-gray-600 body-font" id="impDates" >
                <div className="container px-5 py-12 mx-auto bg-[#016698]">

                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 justify-center noneDisp1">

                        <Slide left>
                            <div className="p-4 md:w-1/6 sm:mb-0 mb-6">
                                <div className="rounded-lg h-auto overflow-hidden iconclr ">
                                    <i className="fa-solid fa-hourglass-end fa-4x iconclr"></i>
                                </div>
                                <p className="title-font text-white mt-2 text-center">Full Paper Submission</p>
                                <h2 className="text-2xl text-white mt-2 text-center bodyFont"><del style={{ textDecoration: "line-through", color: "red" }}><span className="text-white"></span></del>
                                    <div><del style={{ textDecoration: "line-through", color: "red" }}><span className="text-white"></span></del></div>
                                    <div><div className='text-[#ff0000]'></div></div>January 15, 2025</h2>


                            </div>
                            <div className="p-4 md:w-1/6 sm:mb-0 mb-6">
                                <div className="rounded-lg h-auto overflow-hidden iconclr ">
                                    <i className="fa-solid fa-bell fa-4x iconclr"></i>
                                </div>
                                <p className="title-font text-white mt-2 text-center">Acceptance Notification</p>
                                <h2 className="text-2xl text-white mt-2 text-center bodyFont"><del style={{ textDecoration: "line-through", color: "red" }}><span className="text-white"></span></del><div className='text-[#ff0000]'>
                                    {/* <span className='text-sm block'> (For the paper recieved before 05 Dec)</span> */}
                                </div> February 10, 2025</h2>


                            </div>
                            <div className="p-4 md:w-1/6 sm:mb-0 mb-6">
                                <div className="rounded-lg h-auto overflow-hidden iconclr ">
                                    <i className="fa-solid fa-cloud-arrow-up  fa-4x iconclr"></i>
                                </div>
                                <p className="title-font text-white mt-2 text-center">Camera Ready Paper Submission</p>
                                <h2 className="text-2xl text-white mt-2 text-center bodyFont"><del style={{ textDecoration: "line-through", color: "red" }}><span className="text-white"></span></del><div className='text-[#ff0000]'></div> March 1, 2025</h2>

                            </div>
                        </Slide>

                        <Slide right>

                            <div className="p-4 md:w-1/6 sm:mb-0 mb-6">
                                <div className="rounded-lg h-auto overflow-hidden iconclr ">
                                    <i className="fa-solid fa-id-card fa-4x iconclr"></i>
                                </div>
                                <p className="title-font text-white mt-2 text-center">Early Bird Registration</p>
                                <h2 className="text-2xl text-white mt-2 text-center bodyFont">February 28, 2025</h2>

                            </div>
                            <div className="p-4 md:w-1/6 sm:mb-0 mb-6">
                                <div className="rounded-lg h-auto overflow-hidden iconclr">
                                    <i className="fa-solid fa-chalkboard-user  fa-4x iconclr"></i>
                                </div>
                                <p className="title-font text-white mt-2 text-center">Conference Date</p>
                                <h2 className="text-2xl text-white mt-2 text-center bodyFont">August 23-25, 2025</h2>-

                            </div>
                        </Slide>

                    </div>
                    <section id="impDates">
                        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 justify-center noneDisp2">
                            <Slide left>
                                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                    <div className="rounded-lg sm:h-32 overflow-hidden iconclr ">
                                        <i className="fa-solid fa-hourglass-end fa-4x iconclr"></i>
                                    </div>
                                    <p className="text-sm title-font text-white mt-2 text-center">Full Paper Submission</p>
                                    <h2 className="text-sm  text-white mt-2 text-center bodyFont"><del style={{ textDecoration: "line-through", color: "red" }}><span className="text-white"></span></del> <del style={{ textDecoration: "line-through", color: "red" }}><span className="text-white"></span></del>
                                        <div><div className='text-[#ff0000]'>.</div></div>January 15, 2025</h2>

                                </div>
                                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                    <div className="rounded-lg sm:h-32 overflow-hidden iconclr ">
                                        <i className="fa-solid fa-bell fa-4x iconclr"></i>
                                    </div>
                                    <p className="text-sm title-font text-white mt-2 text-center">Acceptance Notification</p>
                                    <h2 className="text-sm  text-white mt-2 text-center bodyFont"><del style={{ textDecoration: "line-through", color: "red" }}><span className="text-white"></span></del><div className='text-[#ff0000]'>Coming Soon...
                                        {/* <span className='text-sm'> (For the paper recieved before 05 Dec)</span> */}
                                    </div> February 10, 2025</h2>


                                </div>

                                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                    <div className="rounded-lg sm:h-32 overflow-hidden iconclr ">
                                        <i className="fa-solid fa-cloud-arrow-up fa-4x iconclr"></i>
                                    </div>
                                    <p className="text-sm title-font text-white mt-2 text-center">Camera Ready Paper Submission</p>
                                    <h2 className="text-sm  text-white mt-2 text-center bodyFont"><del style={{ textDecoration: "line-through", color: "red" }}><span className="text-white"></span></del><div className='text-[
                                            #ff0000]'></div> March 1, 2025</h2>

                                </div>


                                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                    <div className="rounded-lg sm:h-32 overflow-hidden iconclr ">
                                        <i className="fa-solid fa-id-card fa-4x iconclr"></i>
                                    </div>
                                    <p className="text-sm title-font text-white mt-2 text-center">Early Bird Registration</p>
                                    <h2 className="text-sm text-white mt-2 text-center bodyFont">February 28, 2025</h2>

                                </div>

                                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                    <div className="rounded-lg sm:h-32 overflow-hidden iconclr ">
                                        <i className="fa-solid fa-chalkboard-user fa-4x iconclr"></i>
                                    </div>
                                    <p className="text-sm title-font text-white mt-2 text-center">Conference Date</p>
                                    <h2 className="text-sm text-white mt-2 text-center bodyFont">August 23-25, 2025</h2>

                                </div>
                            </Slide>
                        </div>
                    </section>
                </div>
            </section >


            <section className="text-gray-600 body-font pt-4">
                <div className="container px-5 py-8 mx-auto bg-[#E3F0FB]">
                    <div className="w-full mx-auto text-left">

                        <div className="flex items-center mb-3 mr-8 justify-center" >

                            <h1 className='sm:text-4xl text-xl font-black text-black ml-12 bodyFont2'>Registration Charges
                            </h1>
                            
                            <i className="fa-solid fa-id-card sm:fa-3x fa-2x ml-12" style={{ color: "#016698" }}></i>
                            
                        </div>
                        <div className="container mt-12">
                        <div className="flex items-center mb-3 mr-8 justify-center" >
                        <h2 className='sm:text-4xl text-xl font-black text-black ml-12 bodyFont2'>Charges before February 28, 2025</h2>
                        </div>
                        <br></br>


                            <table className="registerTable sm:w-[90%] mx-auto border- border border-black">
                                
                                <thead>
                                   
                                    <tr>
                                        <th className="highlight1 border border-black w-[30%]">Particulars</th>
                                        <th className="highlight1 border border-black w-[35%]">Charges</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th className="highlight1 border border-black ">Indian Academician</th>
                                        <td className="highlight border border-black">INR 6000/- </td>
                                    </tr>
                                    <tr>
                                        <th className="highlight1 border border-black">Student Members</th>
                                        <td className="highlight border border-black">INR 4500/-</td>
                                    </tr>
                                    <tr>
                                        <th className="highlight1 border border-black">Student/Research Scholsr</th>
                                        <td className="highlight border border-black">INR 4500/-</td>
                                    </tr>
                                    <tr>
                                        <th className="highlight1 border border-black">Foreign Academician</th>
                                        <td className="highlight border border-black">USD 200/-</td>
                                    </tr>
                                    <tr>
                                        <th className="highlight1 border border-black">Foreign Members</th>
                                        <td className="highlight border border-black">USD 150/-</td>
                                    </tr>
                                    <tr>
                                        <th className="highlight1 border border-black">Attendees</th>
                                        <td className="highlight border border-black">INR 1000/-</td>
                                    </tr>
                                </tbody>
                            </table>

<br></br>



<br></br>




                            <div className="flex items-center mb-3 mr-8 justify-center" >
                        <h2 className='sm:text-4xl text-xl font-black text-black ml-12 bodyFont2'>Charges after February 28, 2025</h2>
                        </div>
                        <br></br>

                            <table className="registerTable sm:w-[90%] mx-auto border- border border-black">
                                
                                <thead>
                                   
                                    <tr>
                                        <th className="highlight1 border border-black w-[30%]">Particulars</th>
                                        <th className="highlight1 border border-black w-[35%]">Charges</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th className="highlight1 border border-black ">Indian Academician</th>
                                        <td className="highlight border border-black">INR 8500/- </td>
                                    </tr>
                                    <tr>
                                        <th className="highlight1 border border-black">Student Members</th>
                                        <td className="highlight border border-black">INR 5000/-</td>
                                    </tr>
                                    <tr>
                                        <th className="highlight1 border border-black">Student/Research Scholsr</th>
                                        <td className="highlight border border-black">INR 6500/-</td>
                                    </tr>
                                    <tr>
                                        <th className="highlight1 border border-black">Foreign Academician</th>
                                        <td className="highlight border border-black">USD 250/-</td>
                                    </tr>
                                    <tr>
                                        <th className="highlight1 border border-black">Foreign Members</th>
                                        <td className="highlight border border-black">USD 250/-</td>
                                    </tr>
                                    <tr>
                                        <th className="highlight1 border border-black">Attendees</th>
                                        <td className="highlight border border-black">INR 1000/-</td>
                                    </tr>
                                </tbody>
                            </table>





                            <div className="flex justify-center mt-8">
                                <a href="https://forms.gle/KJQ4vxHmUD7qwhNy8" target='_blank'>
                                    <button className="inline-flex uppercase text-white py-2 px-6  border-2 focus:outline-none rounded-lg text-md  font-medium bg-[#016698] hover:bg-white hover:text-[#016698] hover:border-2 hover:border-[#016698] hover:shadow-lg transition duration-150 ease-in-out ">Register Here</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="text-gray-600 body-font ">
                <div className="container px-12 py-8 mx-auto bg-[#E3F0FB]">
                    <div className="w-full mx-auto text-left">
                        <div className="flex items-center mb-8 mr-8 mt-12 justify-center" >

                            <h1 className='sm:text-4xl text-xl font-black text-black ml-12 bodyFont2'>Account Details
                            </h1>
                        </div>
                        <div className="flex">

                            <table className="registerTable sm:w-[90%] mx-auto border- border border-black">

                                <tbody>
                                    <tr>
                                        <th className="highlight1 border border-black w-[30%]">Name of A/c</th>
                                        <th className="highlight1 border border-black w-[35%]">MEDI-CAPS UNIVERSITY - CEP</th>
                                    </tr>
                                    <tr>
                                        <th className="highlight1 border border-black w-[30%]">A/c No.</th>
                                        <th className="highlight1 border border-black w-[35%]">0001104000600323</th>
                                    </tr>
                                    <tr>
                                        <th className="highlight1 border border-black w-[30%]">IFSC Code</th>
                                        <th className="highlight1 border border-black w-[35%]">IBKL0000001</th>
                                    </tr>
                                    <tr>
                                        <th className="highlight1 border border-black w-[30%]">Bank</th>
                                        <th className="highlight1 border border-black w-[35%]">IDBI Bank</th>
                                    </tr>
                                    <tr>
                                        <th className="highlight1 border border-black w-[30%]">Branch</th>
                                        <th className="highlight1 border border-black w-[35%]">Indore</th>
                                    </tr>
                                </tbody>
                            </table>

                            <div>
                                <img className='px-6' src={qrcode} alt="" width={400} />
                            </div>
                        </div>

                    </div>
                    <div><p className="leading-relaxed  mt-2 sm:text-xl font-semibold text-black text-sm text-justify ">**For paying through UPI, Scan the QR Code on the rigth side</p></div>
                </div>


            </section>

            <Footer />

        </>
    )
}

export default Register