import React, { useState, useEffect } from 'react'
import './Navbar.css';
import { Link, useLocation } from "react-router-dom";
import hamburger from './hamburger.svg'
import close from './close.svg'
import medicapsLogo from '../../img/medicaps_logo.png'
import medicapsLogo1 from '../../img/medicapslogo1.png'
import ieeeLogo from '../../img/IEEE-Logo.png'
import ieeeLogo2 from '../../img/ieeelogo2.png'
import Zoom from 'react-reveal/Zoom';
const Nav = (props) => {
    let location = useLocation();
    useEffect(() => {
    }, [location]);

    let Links = [
        { name: "HOME", link: "/" },
        { name: "ABOUT MEDI-CAPS UNIVERSITY", link: "/aboutMedicaps" },
        { name: "PROGRAM COMMITTEE", link: "/programeComitte" },
        { name: "PAPER SUBMISSION", link: "/paperSubmission" },
        { name: "ACCEPTED PAPERS", link: "/acceptedPapers" },
        { name: "VENUE", link: "/venue" },
        { name: "CONTACT US", link: "/contactUs" },
        { name: "TOPICS", link: "/topics" },
    ];
    // let Links2 = [
    //     { name: "HOME", link: "/" },
    //     { name: "PAPER SUBMISSION", link: "/paperSubmission" },
    //     { name: "TOPICS", link: "/topics" },
    //     { name: "CONTACT US", link: "/contactUs" },
    //     { name: "ABOUT MEDI-CAPS", link: "/aboutMedicaps" }
    // ];
    let [open, setOpen] = useState(false);

    return (
        <>
            <div className='w-full top-0 left-0 navClass'>
                <div className='md:flex items-center justify-between py-2 md:px-10 px-7'>
                    <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
                        <img className='mr-4' src={medicapsLogo} alt="" width={80} />
                        <span className='text-3xl text-indigo-600 mr-1 pt-2'>
                        </span>
                        <Link to="/">
                            <p className="text-4xl text-white">ICIC</p>
                        </Link>
                    </div>

                    <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-4 cursor-pointer md:hidden items-center'>
                        {/* <ion-icon name={open ? 'close' : 'menu'}></ion-icon> */}
                        {
                            !open ? <img src={hamburger} alt="" width={35} /> : <img src={close} alt="" width={35} />

                        }

                    </div>

                    <ul className={`${props.type === 'homePage' ? 'dispNone' : null}  md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 sm:pl-9 transition-all sideNav duration-500 ease-in navClass1  ${open ? 'top-20 ' : 'top-[-560px]'}`} >
                        {
                            Links.map((link) => (
                                <li key={link.name} className='md:ml-4 text-xs md:my-0 my-7 text-center'>
                                    <Link to={link.link} className={`hover:text-white text-xs duration-500 font-bold nav-link ${link.link !== location.pathname ? 'sm:text-gray-400 ' : 'sm:text-white '}`}>{link.name}</Link>
                                </li>
                            ))
                        }
                        {/* <div className="flex justify-center">

                        <li key="facebook" className='nav-link md:ml-8 text-xl md:my-0 sm:mx-0 my-2 mr-4'><i className="fa-brands fa-facebook-square fa-xl iconclrSocial1"></i></li>
                        <li key="twitter" className='nav-link md:ml-5 text-xl md:my-0 my-2 sm:mx-0 mx-4'><i className="fa-brands fa-twitter fa-xl iconclrSocial1"></i></li>
                        <li key="youtube" className='nav-link md:ml-4 text-xl md:my-0 my-2 sm:mx-0 mx-4'><i className="fa-brands fa-youtube fa-xl iconclrSocial1"></i></li>


                    </div> */}
                        <Link to="/">
                            <li className='md:ml-8 md:my-0 hover:text-white text-base duration-500 font-bold md:w-full sm:text-gray-400 respCss mt-6 dispNone2'>
                                <img className='m-auto' src={ieeeLogo} alt="" width={80} />
                            </li>
                        </Link>

                    </ul>

                    {/*}
                <ul className={`${props.type !== 'homePage' ? 'dispNone' : null} md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 sm:pl-9 transition-all sideNav duration-500 ease-in navClass1 ${open ? 'top-20 ' : 'top-[-520px]'}`}>
                    {
                        Links2.map((link) => (
                            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7 text-center'>
                                <Link to={link.link} className={`hover:text-white text-base duration-500 font-bold nav-link ${link.link !== location.pathname ? 'sm:text-gray-400 ' : 'sm:text-white'}`}>{link.name}</Link>
                            </li>
                        ))
                    }
                    <a href="#callforpapers">
                        <li key={"CallForPapers"} className='md:ml-8 md:my-0 hover:text-white text-base duration-500 font-bold md:w-full sm:text-gray-400 respCss'>
                            <span className="nav-link"> CALL FOR PAPERS</span>
                        </li>
                    </a>
                    {/* <li key="contactUs" className='sm:ml-12 text-xl md:my-0 my-7 leftAlign'>
                        <Link to="/contactUs">
                            <div className="flex justify-center">
                                <button className="inline-flex text-[#00033D] border-0 py-2 px-6 focus:outline-none hover:text-white rounded-lg text-xl font-bold bgimg3 font-momo">Contact Us</button>
                            </div>
                        </Link>
                    </li> */}

                    {/*
                    <div className="flex justify-center">

                        <li key="facebook" className='nav-link md:ml-8 text-xl md:my-0 sm:mx-0 my-2 mr-4'><i className="fa-brands fa-facebook-square fa-xl iconclrSocial1"></i></li>
                        <li key="twitter" className='nav-link md:ml-5 text-xl md:my-0 my-2 sm:mx-0 mx-4'><i className="fa-brands fa-twitter fa-xl iconclrSocial1"></i></li>
                        <li key="youtube" className='nav-link md:ml-4 text-xl md:my-0 my-2 sm:mx-0 mx-4'><i className="fa-brands fa-youtube fa-xl iconclrSocial1"></i></li>


                    </div>
                    <Link to="/">
                        <li className='md:ml-8 md:my-0 hover:text-white text-base duration-500 font-bold md:w-full sm:text-gray-400 respCss mt-6 dispNone2'>
                            <img className='m-auto' src={ieeeelogo} alt="" width={80} />
                        </li>
                    </Link>

                </ul>
                */}
                    <Link to="/">
                        <span className='md:ml-8 md:my-0 hover:text-white text-base duration-500 font-bold md:w-full sm:text-gray-400 respCss nav-link1 dispNone1'>
                            <img src={ieeeLogo} alt="" width={80} />
                        </span>
                    </Link>
                </div>


                {/* these is start hero*/}
                <Zoom>
                    <div className="w-full mx-auto flex px-5 py-24  sm:py-24 absolute items-center justify-center text-center flex-col z-10">

                        <div className="text-center lg:w-2/3 w-full overflow-hidden">
                            <p className="mb-4 sm:text-xl sm:font-bold text-2xl text-white font-medium leading-relaxed startHeading1">WELCOME TO ICIC 2023</p>
                            <p className="sm:text-5xl sm:font-black text-3xl text-white font-medium startHeading12">International Conference on Intelligent Computing (ICIC-2023)</p>

                            <div className="lg:flex mt-8 justify-center">
                                <div className="flex items-center mb-3 sm:mr-8 justify-center">
                                    <div className="bg-[#0A0B2E] rounded-full mr-4">
                                        <i className="fa-solid fa-calendar-days fa-2x iconclrps mb-3 mt-2 mx-3 noneDisp1"></i>
                                        <i className="fa-solid fa-calendar-days iconclrps mb-3 mt-2 mx-3 noneDisp2"></i>
                                    </div>
                                    <h2 className="sm:text-1xl sm:font-semibold text-2xl text-white font-medium startHeading">26-28th October 2023</h2>
                                </div>
                                <Link to="/venue">
                                    <div className="flex items-center mb-3 sm:ml-8 justify-center">
                                        <div className="bg-[#0A0B2E] rounded-full mr-4">
                                            <i className="fa-solid fa-location-dot fa-2x iconclrps m-2 mx-3 noneDisp1"></i>
                                            <i className="fa-solid fa-location-dot iconclrps m-2 mx-3 noneDisp2"></i>
                                        </div>
                                        <h2 className="sm:text-1xl sm:font-semibold text-2xl text-white font-medium startHeading"> Medi-caps University, Indore, India</h2>
                                    </div>
                                </Link>
                            </div>

                            <div className="flex justify-center mt-8">
                                {/* <img className='mr-4 max-w-full h-auto' src={medicapsLogo1} alt="" width={250} /> */}
                                <a href="/">
                                    <button className="inline-flex text-[#00033D] bg-[#FEBD00] border-0 py-2 px-6 focus:outline-none hover:text-white hover:bg-transparent hover:border-2 rounded-lg text-xl font-bold font-momo mr-2">Register Here</button>
                                </a>
                                <a href="#impDates">
                                    <button className="ml-2 inline-flex text-[#FEBD00] bg-[#00033D] border-0 py-2 px-6 focus:outline-none hover:text-white rounded-lg text-xl font-bold hover:bg-transparent hover:border-2 font-momo" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Important Dates</button>


                                    {/*off cancas right lavbel*/}

                                </a>


                                {/* <img  className="max-w-full h-auto mr-4" src={ieeeLogo2} alt="" width={200} /> */}
                            </div>
                        </div>
                    </div>


                </Zoom>
            </div>
            <div class="offcanvas offcanvas-end fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 right-0 border-none w-96" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header flex items-center justify-between p-4">
                    <h5 class="offcanvas-title mb-0 leading-normal font-semibold" id="offcanvasRightLabel">Offcanvas right</h5>
                    <button type="button" class="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body flex-grow p-4 overflow-y-auto">
                    ...
                </div>
            </div>
        </>

    )
}

export default Nav