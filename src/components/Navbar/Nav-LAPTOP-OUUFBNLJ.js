import React, { useState, useEffect } from 'react'
import './Navbar.css';
import { Link, useLocation } from "react-router-dom";
import hamburger from './hamburger.svg'
import close from './close.svg'
import medicapsLogo from '../../img/medicaps_logo.png'
import medicaps25 from '../../img/medi25year.jpg'
import medicapsLogo1 from '../../img/medicapslogo1.png'
import ieeeLogo from '../../img/springer.png'
import ieeeLogo2 from '../../img/ieeelogo2.png'
import Zoom from 'react-reveal/Zoom';
import { Slide } from 'react-reveal';
import downloadBrochure from '../../img/iceeta25.pdf'
const Nav = (props) => {
    let location = useLocation();
    useEffect(() => {
    }, [location]);

    let Links = [
        { name: "ABOUT CONFERENCE ", link: "/" },
        { name: "ABOUT UNIVERSITY", link: "/aboutMedicaps" },
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
            {/* FIRST HEADER */}

            <nav className="container mx-auto flex items-center justify-center flex-wrap bg-white pt-4 lg:pt-2">
                <div className="flex items-center flex-shrink-0 text-white sm:mr-12 mb-4">
                    <div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
                        <a className="flex title-font font-medium items-center text-gray-900 lg:mb-4 md:mb-0">
                            <img className='medicapsLogo lg:mt-4' src={medicapsLogo} alt="" />
                            <img className='dispNone2 ' src={medicapsLogo} alt="" width={100} />
                            {/* <Link to="/">
                                <p className="text-[2.5rem] text-[#016698] bodyFont2">IC4-2024</p>
                            </Link> */}
                        </a>
                    </div>
                </div>
                <Zoom>
                    <div className="w-full block flex-grow justify-center lg:flex lg:items-center lg:w-auto">
                        <p className="dispNone1 text-center sm:w-auto sm:text-[3.25rem] sm:font-black text-[#016698] font-bold startHeading12 supHeading  mt-4">International Conference on Emerging <br></br>Engineering Technologies and Applications<br></br>(IC-EETA’25)<span className='text-[1.25rem] '><br></br>August 23-25, 2025</span>
                        </p>
                        <p className="dispNone2 text-center sm:w-auto sm:text-[3.25rem] sm:font-black text-[#016698] font-bold startHeading12 supHeading  mt-1 mx-2">International Conference on Emerging <br></br> Engineering Technologies <br></br> and Applications (IC-EETA’25)<br /><span className='text-[0.7rem] '>August 23-25, 2025</span>
                        </p>

                    </div>
                </Zoom>
                <div className="flex items-center">
                    <span className='w-4/5  md:ml-16 md:my-0 hover:text-white text-base duration-500 font-bold md:w-full sm:text-gray-400 respCss nav-link1 dispNone1'>
                        <img src={medicaps25} alt="" width={170} />
                    </span>
                </div>

            </nav>

            <div className='w-full top-0 left-0 navClass '>
                <div className='md:flex items-center justify-center py-2 md:px-10 px-7 '>


                    <div onClick={() => setOpen(!open)} className='text-3xl absolute right-2 top-20 cursor-pointer md:hidden items-center z-50'>
                        {/* <ion-icon name={open ? 'close' : 'menu'}></ion-icon> */}
                        {
                            !open ? <img src={hamburger} alt="" width={35} /> : <img src={close} alt="" width={35} />

                        }

                    </div>

                    <ul className={`${props.type === 'homePage' ? 'dispNone' : null} md:flex items-center:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 sm:pl-9 transition-all sideNav duration-500 ease-in navClass1  ${open ? 'top-[56px] ' : 'top-[-1100px]'}`} >
                        {
                            Links.map((link) => (
                                <li key={link.name} className='md:ml-6 text-xs md:my-0 my-7 text-center'>
                                    <Link to={link.link} className={`hover:text-[#016698] text-[1rem]  linkText duration-500 font-bold text-white nav-link ${link.link !== location.pathname ? 'sm:text-black ' : 'sm:text-[#016698] '}`}>{link.name}</Link>
                                </li>
                            ))
                        }
                        <div className="flex justify-center items-center">

                        <div className="flex md:ml-4 text-xl md:my-0 my-2 sm:mx-0 mx-4 justify-center dispNone1">
                        <a href={downloadBrochure} download="conferenceBrochure" target='_blank'><button type="button" className="inline-block px-4 py-2 bg-[#ff0000] font-medium border-2 border-white text-white text-sm leading-tight uppercase rounded-lg hover:bg-white hover:text-[#ff0000] hover:border-2 hover:border-[#ff0000] hover:shadow-lg transition duration-150 ease-in-out "><i class="fa-solid fa-circle-down mr-2"></i>Brochure</button>
                                </a>
                            </div>

                            <div className="flex md:ml-4 text-xl md:my-0 my-2 sm:mx-0 mx-4 justify-center dispNone1">
                                <Link to='/register'><button type="button" className="inline-block px-6 py-2 bg-[#016698] font-medium border-2 border-white text-white text-sm leading-tight uppercase rounded-lg hover:bg-white hover:text-[#016698] hover:border-2 hover:border-[#016698] hover:shadow-lg transition duration-150 ease-in-out ">Register</button>
                                </Link>
                            </div>

                        </div>



                    </ul>


                </div>

            </div>

        </>

    )
}

export default Nav

