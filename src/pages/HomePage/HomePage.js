import { React, useEffect, useRef, useState } from 'react'
import "./HomePage.css"
import Nav from '../../components/Navbar/Nav'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import Zoom from 'react-reveal/Zoom';   //d
import Fade from 'react-reveal/Fade';//d
import Slide from 'react-reveal/Slide';
import StartHero from '../../components/StartHero/StartHero'
import ACMlogo from '../../img/ACMlogo.png'
import MIILogo from '../../img/MIIFoundationLogo.png'
import TECLogo from '../../img/TECLogo.png'
import SMULogo from '../../img/SMU.png'
import INTILogo from '../../img/INTIUniversity.png'
import DPULOGO from '../../img/DPU_logo.png'
import scopeImage from '../../img/scope2.jpg'
import pastConference_1 from '../../img/CONFERENCEICANI.jpeg'
import pastConference_2 from '../../img/pastConference_2.JPG'
import pastConference_3 from '../../img/pastConference_3.JPG'
import pastConference_4 from '../../img/pastConference_4.JPG'
import { useCount } from '../../Context/context.js'
import keyNoteSpeakers9 from "../../img/keyNoteSpeakers9.jpg"
import INTERNATIONAL_CONFERENCE_ALERTS from "../../img/INTERNATIONAL-CONFERENCE-ALERTS.png"
import All_Conference_Alert from "../../img/All-conference-alert.png"
import chritopher from "../../img/Speaker100.png"
import chritopher2 from "../../img/Speaker101.png"
import tarmutLogo from '../../img/tarumt-logo.png'
const HomePage = () => {
    const [progress, setProgress] = useState(100);
    const first = useRef(0);
    const { count, setCount } = useCount();
    useEffect(() => {
        // window.onload = (event) => {
        //     console.log("page is fully loaded");
        //     setCount(prev=>prev++);
        //     console.log(count);
        // };
        const func = () => {
            console.log("page is fully loaded");
            setCount(prev => prev++);
            console.log(count);
        }
        window.addEventListener("load", func);

    }, [])


    return (
        <>
            {/*First component*/}


            <Nav />

            <StartHero />


            <section className="text-gray-600 body-font mt-4">

            <h1 className="text-2xl text-black mt-2 text-center bodyFont gradientHeading">IEEE Application Number : </h1>
            <br></br>
            {/*Sixth Section*/}
            <section className="text-gray-600 body-font" id="impDates" >
                <div className="container px-5 py-12 mx-auto gradientColor">

                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 justify-center noneDisp1">

                        <Slide left>
                            <div className="p-4 md:w-1/6 sm:mb-0 mb-6">
                                <div className="rounded-lg h-auto overflow-hidden iconclr ">
                                    <i className="fa-solid fa-hourglass-end fa-4x iconclr"></i>
                                </div>
                                <p className="title-font text-white mt-2 text-center">Full Paper Submission</p>
                                <h2 className="text-2xl text-white mt-2 text-center bodyFont"><del style={{ textDecoration: "line-through", color: "red" }}><span className="text-white"></span></del>
                                    <div><del style={{ textDecoration: "line-through", color: "red" }}><span className="text-white"></span></del></div>
                                    <div><div className='text-[#ff0000]'></div></div>June 30, 2026</h2>


                            </div>
                            <div className="p-4 md:w-1/6 sm:mb-0 mb-6">
                                <div className="rounded-lg h-auto overflow-hidden iconclr ">
                                    <i className="fa-solid fa-bell fa-4x iconclr"></i>
                                </div>
                                <p className="title-font text-white mt-2 text-center">Acceptance Notification</p>
                                <h2 className="text-2xl text-white mt-2 text-center bodyFont"><del style={{ textDecoration: "line-through", color: "red" }}><span className="text-white"></span></del><div className='text-[#ff0000]'>
                                    {/* <span className='text-sm block'> (For the paper recieved before 05 Dec)</span> */}
                                </div> July 31, 2026</h2>


                            </div>
                            <div className="p-4 md:w-1/6 sm:mb-0 mb-6">
                                <div className="rounded-lg h-auto overflow-hidden iconclr ">
                                    <i className="fa-solid fa-cloud-arrow-up  fa-4x iconclr"></i>
                                </div>
                                <p className="title-font text-white mt-2 text-center">Camera Ready Paper Submission</p>
                                <h2 className="text-2xl text-white mt-2 text-center bodyFont"><del style={{ textDecoration: "line-through", color: "red" }}><span className="text-white"></span></del><div className='text-[#ff0000]'></div> September 10, 2026</h2>

                            </div>
                        </Slide>

                        <Slide right>

                            <div className="p-4 md:w-1/6 sm:mb-0 mb-6">
                                <div className="rounded-lg h-auto overflow-hidden iconclr ">
                                    <i className="fa-solid fa-id-card fa-4x iconclr"></i>
                                </div>
                                <p className="title-font text-white mt-2 text-center">Registration Deadline</p>
                                <h2 className="text-2xl text-white mt-2 text-center bodyFont">September 10, 2026</h2>

                            </div>
                            <div className="p-4 md:w-1/6 sm:mb-0 mb-6">
                                <div className="rounded-lg h-auto overflow-hidden iconclr">
                                    <i className="fa-solid fa-chalkboard-user  fa-4x iconclr"></i>
                                </div>
                                <p className="title-font text-white mt-2 text-center">Conference Date</p>
                                <h2 className="text-2xl text-white mt-2 text-center bodyFont">January 07-09, 2027</h2>-

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
                                    <h2 className="text-sm  text-white mt-2 text-center bodyFont"><del style={{ textDecoration: "line-through", color: "red" }}><span className="text-white"></span></del> <del style={{ textDecoration: "line-through", color: "red" }}><span className="text-white">May 30,2025</span></del>
                                        <div><div className='text-[#ff0000]'></div></div>June 30, 2026</h2>

                                </div>
                                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                    <div className="rounded-lg sm:h-32 overflow-hidden iconclr ">
                                        <i className="fa-solid fa-bell fa-4x iconclr"></i>
                                    </div>
                                    <p className="text-sm title-font text-white mt-2 text-center">Acceptance Notification</p>
                                    <h2 className="text-sm  text-white mt-2 text-center bodyFont"><del style={{ textDecoration: "line-through", color: "red" }}><span className="text-white"></span></del><div className='text-[#ff0000]'>
                                        {/* <span className='text-sm'> (For the paper recieved before 05 Dec)</span> */}
                                    </div>July 31, 2026</h2>


                                </div>

                                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                    <div className="rounded-lg sm:h-32 overflow-hidden iconclr ">
                                        <i className="fa-solid fa-cloud-arrow-up fa-4x iconclr"></i>
                                    </div>
                                    <p className="text-sm title-font text-white mt-2 text-center">Camera Ready Paper Submission</p>
                                    <h2 className="text-sm  text-white mt-2 text-center bodyFont"><del style={{ textDecoration: "line-through", color: "red" }}><span className="text-white"></span></del><div className='text-[     
                                  #ff0000]'></div>  September 10, 2026</h2>

                                </div>


                                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                    <div className="rounded-lg sm:h-32 overflow-hidden iconclr ">
                                        <i className="fa-solid fa-id-card fa-4x iconclr"></i>
                                    </div>
                                    <p className="text-sm title-font text-white mt-2 text-center">Registration Deadline</p>
                                    <h2 className="text-sm text-white mt-2 text-center bodyFont">September 10, 2026</h2>

                                </div>

                                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                    <div className="rounded-lg sm:h-32 overflow-hidden iconclr ">
                                        <i className="fa-solid fa-chalkboard-user fa-4x iconclr"></i>
                                    </div>
                                    <p className="text-sm title-font text-white mt-2 text-center">Conference Date</p>
                                    <h2 className="text-sm text-white mt-2 text-center bodyFont">18-20 March 2027</h2>

                                </div>
                            </Slide>
                        </div>
                    </section>
                </div>
            </section >
            <br></br>

            </section>


            {/*Third component*/}
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center bg-[#E3F0FB] pl-8">
                    <Fade left>
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 className="sm:text-4xl text-3xl mb-8 font-black text-black bodyFont2 gradientHeading">Conference Scope
                            </h1>
                            <p className="mb-8 leading-relaxed text-black sm:text-xl text-sm font-semibold text-justify">The objective of this international conference is to foster a dynamic exchange of knowledge and innovation across the domains of mechanical, civil, electrical and computer engineering. By bringing together leading scholars, industry experts, and visionary practitioners, the conference aims to strengthen academic-industry collaboration and provide a forum for the dissemination of pioneering research, advanced technologies, and future- oriented solutions. Emphasizing interdisciplinary synergy, the event is aimed at addressing pressing global challenges while promoting sustainable, cutting-edge practices. Ultimately, it aspires to contribute to the technological growth and sustainable development of our nation, positioning it at the forefront of global innovation. The conference will feature keynote addresses from eminent personalities in various fields aligned with the theme, including distinguished Indian and international speakers.<span className='text-[#00629B] font-bold'></span><span className='text-[#00629B] font-bold'></span></p>
                            <div className="flex justify-center">
                                <Link to='/register'>
                                    <button className="inline-flex uppercase text-white py-2 px-6  border-2 focus:outline-none rounded-lg text-md  font-medium bg-[#293985] hover:bg-white hover:text-[#293985] hover:border-2 hover:border-[#293985] hover:shadow-lg transition duration-150 ease-in-out ">Register</button>
                                </Link>
                            </div>

                        </div>
                    </Fade>

                    <Fade left>

                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        
                            <img className="object-cover object-center rounded" alt="hero" src={scopeImage} />
                        </div>
                    </Fade>
                </div>
            </section>

            <div className="container py-12 mx-auto gradientColor">
                
                {/* <div className="text-center mb-12">
                                                    <h1 className="sm:text-6xl sm:font-black text-3xl text-[#00033D] font-medium bodyFont2">Details Of Conference</h1>


                                                </div> */}
                                                
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 justify-center noneDisp1 ">
                    <Slide left>
                        <div className="p-4 md:w-1/3 sm:mb-0">
                            <Link to="/programeComitte">
                                <div className="rounded-lg h-36 overflow-hidden iconclr ">
                                    <i className="fa-solid fa-user-large fa-8x iconclr"></i>
                                </div>
                                
                                <h2 className="text-2xl text-white mt-2 text-center bodyFont">Program Committe</h2>

                                <p className="title-font text-white mt-2 text-center">More Details ➜</p>

                            </Link>
                        </div>
                    </Slide>
                    <Zoom>
                        <div className="p-4 md:w-1/3 sm:mb-0">
                            <Link to="/acceptedPapers">
                                <div className="rounded-lg h-36 overflow-hidden iconclr ">
                                    <i className="fa-solid fa-newspaper fa-8x iconclr"></i>
                                </div>
                                <h2 className="text-2xl font-extrabold text-white mt-2 text-center bodyFont">Paper Guidelines</h2>

                                <p className="title-font text-white mt-2 text-center">More Details ➜</p>
                            </Link>
                        </div>
                    </Zoom>
                    <Slide right>
                        <div className="p-4 md:w-1/3 sm:mb-0">
                            <Link to="/venue">
                                <div className="rounded-lg h-36 overflow-hidden iconclr ">
                                    <i className="fa-solid fa-location-pin fa-8x iconclr"></i>
                                </div>
                                <h2 className="text-2xl font-extrabold text-white mt-2 text-center bodyFont mx-32">Venue</h2>
                                <p className="title-font text-white mt-2 text-center">More Details ➜</p>
                            </Link>
                        </div>
                    </Slide>
                </div>

                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 justify-center noneDisp2">
                    <Slide left>

                        <div className="p-4 md:w-1/3 sm:mb-0">
                            <Link to="/programeComitte">
                                <div className="rounded-lg sm:h-36 overflow-hidden iconclr ">
                                    <i className="fa-solid fa-user-large sm:fa-8x fa-4x iconclr"></i>
                                </div>
                                <h2 className="text-sm font-medium text-white mt-2 text-center bodyFont">Program Committe</h2>

                                <p className="text-sm title-font text-white mt-2 text-center">More Details ➜</p>

                            </Link>
                        </div>
                    </Slide>
                    <Zoom>

                        <div className="p-4 md:w-1/3 sm:mb-0">
                            <Link to="/acceptedPapers">
                                <div className="rounded-lg sm:h-36 overflow-hidden iconclr ">
                                    <i className="fa-solid fa-newspaper sm:fa-8x fa-4x iconclr"></i>
                                </div>
                                <h2 className="text-sm font-semibold text-white mt-2 text-center bodyFont">Paper Guidelines</h2>

                                <p className="text-sm title-font text-white mt-2 text-center">More Details ➜</p>
                            </Link>
                        </div>
                    </Zoom>
                    <Slide left>

                        <div className="p-4 md:w-1/3 sm:mb-0">
                            <Link to="/venue">
                                <div className="rounded-lg sm:h-36 overflow-hidden iconclr ">
                                    <i className="fa-solid fa-location-pin sm:fa-8x fa-4x iconclr"></i>
                                </div>
                                <h2 className="text-sm font-semibold text-white mt-2 text-center bodyFont mx-32">Venue</h2>
                                <p className="text-sm title-font text-white mt-2 text-center">More Details ➜</p>
                            </Link>
                        </div>
                    </Slide>
                </div>

            </div>

            <section className="text-gray-600 body-font ">
                <div className="container px-5 py-12 mx-auto bg-[#E3F0FB]">
                    <div className="flex flex-col text-center w-full mb-10">
                        <h1 className="sm:text-4xl text-3xl font-black mb-4 text-black bodyFont2 gradientHeading">MEDIA COLLABORATIONS</h1>
                        <h2>Yet to declare</h2>
                    </div>

                    <div className="flex flex-wrap -m-4 justify-center">
                        {/* <Zoom>
                        
                            <div className="p-4 lg:w-1/4 md:w-1/2">
                            <a href="https://internationalconferencealerts.com/" target="_blank">
                                <div className="h-full flex flex-col items-center text-center justify-center ">
                                    <img alt="International Conference Alerts" className="flex-shrink-0 rounded-lg w-56 h-auto  mb-4" src={INTERNATIONAL_CONFERENCE_ALERTS} />
                                </div>
                                </a>
                            </div>
                         
                        </Zoom> */}

                        {/* <Zoom>
                        
                            <div className="p-4 lg:w-1/4 md:w-1/2">
                            <a href="https://allconferencealert.net/" target="_blank">
                                <div className="h-full flex flex-col items-center text-center justify-center ">
                                    <img alt="All Conference Alerts" className="flex-shrink-0 rounded-lg w-56 h-auto  mb-4" src={All_Conference_Alert} />
                                </div>
                                </a>
                            </div>
                         
                        </Zoom> */}
                       
                        {/* <Zoom>
                            <div className="p-4 lg:w-1/4 md:w-1/2">
                                <div className="h-full flex flex-col items-center text-center">
                                    <img alt="team" className="flex-shrink-0 rounded-lg w-56 h-56 object-center mb-4" src={ACMlogo} />
                                </div>
                            </div>
                        </Zoom>
                        <Zoom>
                            <div className="p-4 lg:w-1/4 md:w-1/2">
                                <div className="h-full flex flex-col items-center text-center">
                                    <img alt="team" className="flex-shrink-0 rounded-lg w-56 h-56 object-center mb-4" src={npcst} />
                                </div>
                            </div>
                        </Zoom> */}

                    </div>
                    <div className="text-center">
                        <span className="inline-block h-1 w-24 rounded bg-[#a21d2e] mt-8 mb-6"></span>
                    </div>

                </div>
            </section>

            <section className="text-gray-600 body-font ">
                <div className="container px-5 py-12 mx-auto bg-[#E3F0FB]">
                    <div className="flex flex-col text-center w-full mb-10">
                        <h1 className="sm:text-4xl text-3xl font-black mb-4 text-black bodyFont2 gradientHeading">COLLABORATIONS</h1>
                        <h2>Yet to declare</h2>
                    </div>

                    <div className="flex flex-wrap -m-4 justify-center">
                        {/* <Zoom>
                        
                            <div className="p-4 lg:w-1/4 md:w-1/2">
                            <a href="https://miifoundation.com/" target="_blank">
                                <div className="h-full flex flex-col items-center text-center justify-center ">
                                    <img alt="team" className="flex-shrink-0 rounded-lg w-56 h-auto  mb-4" src={MIILogo} />
                                </div>
                                </a>
                            </div>
                         
                        </Zoom> */}
                        {/* <Zoom>
                            <div className="p-4 lg:w-1/4 md:w-1/2">
                            <a href="https://tec.medicaps.ac.in/" target="_blank">
                                <div className="h-full flex flex-col items-center text-center">
                                    <img alt="team" className="flex-shrink-0 rounded-lg w-56 h-56 object-center mb-4" src={TECLogo} />
                                </div>
                            </a>
                            </div>
                        </Zoom> */}
                       
                        {/* <Zoom>
                            <div className="p-4 lg:w-1/4 md:w-1/2">
                                <div className="h-full flex flex-col items-center text-center">
                                    <img alt="team" className="flex-shrink-0 rounded-lg w-56 h-56 object-center mb-4" src={ACMlogo} />
                                </div>
                            </div>
                        </Zoom>
                        <Zoom>
                            <div className="p-4 lg:w-1/4 md:w-1/2">
                                <div className="h-full flex flex-col items-center text-center">
                                    <img alt="team" className="flex-shrink-0 rounded-lg w-56 h-56 object-center mb-4" src={npcst} />
                                </div>
                            </div>
                        </Zoom> */}

                    </div>
                    <div className="text-center">
                        <span className="inline-block h-1 w-24 rounded bg-[#a21d2e] mt-8 mb-6"></span>
                    </div>

                </div>
            </section>
            <section className="text-gray-600 body-font ">
                <div className="container px-5 py-12 mx-auto bg-[#E3F0FB]">
                    <div className="flex flex-col text-center w-full mb-10">
                        <h1 className="sm:text-4xl text-3xl font-black mb-4 text-black bodyFont2 gradientHeading">COLLABORATING UNIVERSITIES</h1>
                    <h2>Yet to declare</h2>

                    </div>
                    <div className="flex flex-wrap -m-4 justify-center">

                        {/* <Zoom>
                            <div className="p-4 lg:w-1/3 md:w-1/2">
                                <a href="https://tarc.edu.my/" target="_blank">
                                    <div className="h-full flex flex-col items-center text-center justify-center">
                                        <img alt="team" className="flex-shrink-0 rounded-lg w-72 h-32 object-center" src={tarmutLogo} />
                                    </div>
                                </a>
                            </div>
                            <div className="p-4 lg:w-1/3 md:w-1/2">
                                <a href="https://www.smu.edu/" target="_blank">
                                    <div className="h-full flex flex-col items-center text-center justify-center">
                                        <img alt="team" className="flex-shrink-0 rounded-lg w-72 h-32 object-center" src={SMULogo} />
                                    </div>
                                </a>
                            </div>
                            <div className="p-4 lg:w-1/3 md:w-1/2">
                                <a href="https://newinti.edu.my/" target="_blank">
                                    <div className="h-full flex flex-col items-center text-center justify-center">
                                        <img alt="team" className="flex-shrink-0 rounded-lg w-72 h-32 object-center" src={INTILogo} />
                                    </div>
                                </a>
                            </div>
                            <div className="p-4 lg:w-1/3 md:w-1/2">
                                <a href="https://iao.dpu.ac.th/" target="_blank">
                                    <div className="h-full flex flex-col items-center text-center justify-center">
                                        <img alt="team" className="flex-shrink-0 rounded-lg w-72 h-32 object-center" src={DPULOGO} />
                                    </div>
                                </a>
                            </div>
                        </Zoom> */}
                    </div>
                    <div className="text-center">
                        <span className="inline-block h-1 w-24 rounded bg-[#a21d2e] mt-12 mb-6"></span>
                    </div>
                </div>
            </section>
            







            {/* <section className="text-gray-600 body-font">
                <div className="container px-5 py-12 mx-auto bg-[#E3F0FB]">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="title-font sm:text-4xl text-3xl font-black mb-4 text-black bodyFont2">CHIEF GUEST, INAUGURATION </h1>
                        <h2><b>Yet to Declare</b></h2>
                    </div> */}
                    {/* <div className="flex flex-wrap -m-4 w-full">
                        <div className="p-4 lg:w-1/3 md:w-1/2 mx-auto">
                            <div className="h-full flex flex-col items-center text-center">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-72 object-cover object-center mb-4" src={chiefGuest} />
                                <div className="w-full">
                                    <h2 className="title-font font-medium text-lg text-black">Shri. Asheesh Singh, IAS</h2>
                                    <div><p>District Collector, Indore</p></div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                {/* </div>
            </section> */}
            











            <section className="text-gray-600 body-font">
                <div className="container px-5 py-12 mx-auto bg-[#E3F0FB]">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="title-font sm:text-4xl text-3xl font-black mb-4 text-black bodyFont2 gradientHeading">KEY NOTE SPEAKERS</h1>
                        <h2>Yet to Declare</h2>
                    </div>
                    <Zoom>
                    <div className="flex flex-wrap -m-4 w-full mx-auto justify-center">

                        {/* SIXTH  */}
                        {/* <div className="p-4 lg:w-1/4 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-72 object-cover object-center mb-4" src={keyNoteSpeakers9} />
                                <div className="w-full">
                                    <h2 className="title-font font-medium text-lg text-black">Prof. Ts. Dr Yip Mum Wai</h2>
                                    <div><p>Chair of Centre for Systematic Innovation Research 

                                    </p></div>
                                </div>
                            </div>
                        </div> */}
                        
                        {/* EIGHTH */}
                        {/* <div className="p-4 lg:w-1/4 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-72 object-cover object-center mb-4" src={chritopher2} />
                                <div className="w-full">
                                    <h2 className="title-font font-medium text-lg text-black">Ir. Ricky Liew Chee Leong</h2>
                                    <div><p>Professor of Construction Management
                                    </p></div>
                                </div>
                            </div>
                        </div> */}

                        {/* FIFTH  */}
                        {/* <div className="p-4 lg:w-1/4 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-72 object-cover object-center mb-4" src={chritopher}/>
                                <div className="w-full">
                                    <h2 className="title-font font-medium text-lg text-black">Prof Dr Christopher Nigel Preece</h2>
                                    <div><p>Head of Engineering
                                    </p></div>
                                </div>
                            </div>
                        </div> */}
                        


                        {/* FIRST */}
                        {/* <div className="p-4 lg:w-1/4 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-72 object-cover object-center mb-4" src={speaker1} />
                                <div className="w-full">
                                    <h2 className="title-font font-medium text-lg text-black">Dr. Frank Stomp</h2>
                                    <div><p>Associate Professor of Computer Science
                                            Navajo Technical University, Mexico, USA
                                    </p></div>
                                </div>
                            </div>
                        </div> */}
                        {/* SECOND  */}
{/* 
                        <div className="p-4 lg:w-1/4 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-72 object-cover object-center mb-4" src={speaker2} />
                                <div className="w-full">
                                    <h2 className="title-font font-medium text-lg text-black">Dr. Navab Singh</h2>
                                    <div><p>Director, Institute of Microelectronics, A*STAR, Singapore
                                    </p></div>
                                </div>
                            </div>
                        </div> */}

                        {/* THIRD  */}
                        {/* <div className="p-4 lg:w-1/4 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-72 object-cover object-center mb-4" src={speaker3} />
                                <div className="w-full">
                                    <h2 className="title-font font-medium text-lg text-black">Dr. Kishor Kumar Sadasivuni</h2>
                                    <div><p>Research Assistant Professor, Center for Advanced Materials, Qatar University
                                    </p></div>
                                </div>
                            </div>
                        </div> */}

                        {/* FOURTH  */}
                        {/* <div className="p-4 lg:w-1/4 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-72 object-cover object-center mb-4" src={speaker4} />
                                <div className="w-full">
                                    <h2 className="title-font font-medium text-lg text-black">Prof Rizalman Mamat</h2>
                                    <div><p>Director
                                            Centre for Automotive Engineering 
                                            Universiti Malaysia Pahang
                                            26600 Pekan, Pahang
                                    </p></div>
                                </div>
                            </div>
                        </div> */}




                        {/* SEVENTH */}
                        {/* <div className="p-4 lg:w-1/4 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-72 object-cover object-center mb-4" src={keyNoteSpeakers10} />
                                <div className="w-full">
                                    <h2 className="title-font font-medium text-lg text-black">Ts. Dr Tan Tee How </h2>
                                    <div><p>
                                    </p></div>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="p-4 lg:w-1/4 md:w-1/2">
                                                <div className="h-full flex flex-col items-center text-center">
                                                    <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/200x200/cccccc/000000.png&text=++UPDATED+SOON" />
                                                    <div className="w-full">
                                                        <h2 className="title-font font-medium text-lg text-black">Speaker 3</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-4 lg:w-1/4 md:w-1/2">
                                                <div className="h-full flex flex-col items-center text-center">
                                                    <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/200x200/cccccc/000000.png&text=++UPDATED+SOON" />
                                                    <div className="w-full">
                                                        <h2 className="title-font font-medium text-lg text-black">Speaker 4</h2>
                                                    </div>
                                                </div>
                                            </div> */}
                    </div>
                    </Zoom>
                    <div className="text-center">

                        <span className="inline-block h-1 w-24 rounded bg-[#a21d2e] mt-8 mb-6 mx-auto"></span>
                    </div>

                </div>
            </section>
























            {/*fourth component*/}
            {/* previous conference*/}
            <section className="text-gray-600 body-font">
                <div className="container py-12 mx-auto bg-[#E3F0FB] px-4">
                    <div class="container px-5 py-24">
                        <div class="flex flex-wrap w-full mb-20">
                            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                                <h1 className="sm:text-4xl text-3xl mb-4 font-black text-black bodyFont2 gradientHeading">Previous Conferences
                                </h1>
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-4 place-content-center">
                                  <Slide bottom>

                                <div class="xl:w-1/4 md:w-1/2 p-4">
                                    <div class="bg-[#293985] rounded-lg mr-3">
                                        {/* <a href="https://ieeexplore.ieee.org/xpl/conhome/7562831/proceeding"> */}
                                            <img class="h-[14.1rem]  rounded w-full object-cover object-center mb-6" src={pastConference_3} alt="content" />
                                            <div className="px-6 pb-1">
                                                <h2 class="text-lg text-white font-bold title-font mb-4 text-center">International Conference IC-EETA’25 - <span className='text-[#ff0000]'>2025</span></h2>

                                            </div>
                                        {/* </a> */}
                                    </div>
                                </div>
                            </Slide>
                        <Slide bottom>

                            <div class="xl:w-1/4 md:w-1/2 ml-2">
                                <div class="bg-[#293985] rounded-lg mr-3">
                                    <a href="https://ieeexplore.ieee.org/xpl/conhome/10486055/proceeding">
                                        <img class="h-[14.1rem]  rounded w-full object-cover object-center mb-6" src={pastConference_4} alt="content" />
                                        <div className="px-6 pb-1">

                                            <h2 class="text-lg text-white font-bold title-font mb-4 text-center">2nd Conference IC4 - <span className='text-[#ff0000]'>2024</span></h2>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            </Slide>
                          
                            <Slide bottom>
                                <div class="xl:w-1/4 md:w-1/2 ml-2">
                                    <div class="bg-[#293985] rounded-lg mr-3">
                                        <a href="https://www.springer.com/in/book/9789811551949">
                                        <img class="h-[14.1rem]  rounded w-full object-cover object-center mb-6" src={pastConference_2} alt="content" />
                                        <div className="px-6 pb-1">

                                            <h2 class="text-lg text-white font-bold title-font mb-4 text-center mx-0"> ICRTICE- <span className='text-[#ff0000]'>2019</span></h2>
                                        </div>
                                        </a>
                                    </div>
                                </div>
                            </Slide>

                            <Slide bottom>

                                <div class="xl:w-1/4 md:w-1/2 p-4">
                                    <div class="bg-[#293985] rounded-lg mr-3">
                                        <a href="https://link.springer.com/book/10.1007/978-981-13-2673-8">
                                            <img class="h-[14.1rem]  rounded w-full object-cover object-center mb-6" src={pastConference_1} alt="content" />
                                            <div className="px-6 pb-1">

                                                <h2 class="text-lg text-white font-bold title-font mb-4 text-center">Springer Conference ICANI - <span className='text-[#ff0000]'>2018</span></h2>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </Slide>
                          
                            <Slide bottom>

                                <div class="xl:w-1/4 md:w-1/2 p-4">
                                    <div class="bg-[#293985] rounded-lg mr-3">
                                        <a href="https://ieeexplore.ieee.org/xpl/conhome/7562831/proceeding">
                                            <img class="h-[14.1rem]  rounded w-full object-cover object-center mb-6" src={pastConference_3} alt="content" />
                                            <div className="px-6 pb-1">
                                                <h2 class="text-lg text-white font-bold title-font mb-4 text-center">CDAN Symposium - <span className='text-[#ff0000]'>2016</span></h2>

                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </Slide>

                            <Slide bottom>

                                <div class="xl:w-1/4 md:w-1/2 ml-2">
                                    <div class="bg-[#293985] rounded-lg mr-3">
                                        <a href="https://ieeexplore.ieee.org/xpl/conhome/7368254/proceeding">
                                            <img class="h-[14.1rem]  rounded w-full object-cover object-center mb-6" src={pastConference_4} alt="content" />
                                            <div className="px-6 pb-1">

                                                <h2 class="text-lg text-white font-bold title-font mb-4 text-center">1st Conference IC4 - <span className='text-[#ff0000]'>2015</span></h2>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </Slide>
                          
                    </div>
                  
                </div>
               
                </div>
                
            </section >
            
            {/*fifth section*/}

            <section section className="text-gray-600 body-font " >

                <div className="container mx-auto flex px-5 py-12 items-center justify-center flex-col bg-[#E3F0FB]">
                    <Fade bottom>


                        <div className="text-center lg:w-2/3 w-full">
                            <h1 className="title-font sm:text-4xl text-3xl font-black mb-4 text-black bodyFont2 gradientHeading">PAPER SUBMISSION</h1>
                            <p className="mb-4 leading-relaxed text-black font-semibold mt-12 text-sm sm:text-xl text-justify">Authors are invited to submit papers through the conference <span className='text-[#016698]'>Submission System</span> by <span className='text-[#016698] font-bold'><del style={{ textDecoration: "line-through", color: "red" }}><span className="text-[#016698]"></span></del><del style={{ textDecoration: "line-through", color: "red" }}><span className="text-[#016698]"></span></del><span className="text-[#ff0000]">June 30, 2026</span></span> (Due to the overwhelming response and the request for extending the submission date). Submissions must be original and should not have been published previously or be under consideration for publication while being evaluated for this conference.</p>
                            <span className="inline-block h-1 w-24 rounded bg-[#a21d2e] mt-8 mb-6"></span>
                            {/* <h1 className="title-font sm:text-4xl text-3xl font-black mb-4 text-black bodyFont2">PAPER SUBMISSION</h1>
                            <p className="mb-4 leading-relaxed text-black font-semibold mt-12 text-sm sm:text-xl text-justify">Authors are invited to submit papers through the conference <span className='text-[#016698]'>Submission System</span> by <span className='text-[#016698] font-bold'><del style={{ textDecoration: "line-through", color: "red" }}><span className="text-[#016698]"></span></del><del style={{ textDecoration: "line-through", color: "red" }}><span className="text-[#016698]">May 30,2025 </span></del><br></br><span className="text-[#ff0000]"> June 30, 2026</span></span> (Due to the overwhelming response and the request for extending the submission date). Submissions must be original and should not have been published previously or be under consideration for publication while being evaluated for this conference.</p>
                            <span className="inline-block h-1 w-24 rounded bg-[#016698] mt-8 mb-6"></span> */}


                        </div>
                    </Fade>
                </div>
            </section >


            {/* 

                                        <section className="text-gray-600 body-font">
                                            <div className="container mx-auto flex px-5 py-12 pb-12 items-center justify-center flex-col bg-[#E3F0FB]">
                                                <div className="text-center lg:w-2/3 w-full">
                                                    <h1 className="title-font sm:text-4xl text-3xl font-black mb-4 text-black bodyFont2">PROCEDINGS</h1>
                                                    <p className="mb-4 leading-relaxed text-black font-semibold mt-12 sm:text-xl text-sm">Hard copy of the proceedings will be distributed during the Conference. The softcopy will be available on <span className='text-[#293985]'>on IEEE Explore</span></p>
                                                    <span className="inline-block h-1 w-24 rounded bg-[#293985] mt-8 mb-6"></span>
                                                </div>
                                            </div>
                                        </section> */}

            {/*SPEAKER SECTION*/}


            {/* <section className="text-gray-600 body-font">
                                            <div className="container mx-auto flex px-5 py-12 items-center justify-center flex-col bg-[#E3F0FB]">

                                                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 justify-center">
                                                    <Slide left>
                                                        <div className="sm:p-4 md:w-1/3 sm:mb-0 mb-6">
                                                            <ul className="bg-[#293985] rounded border-gray-200 sm:w-96 w-80 text-white text-center">
                                                                <li className="px-6 py-2 border-gray-200 w-full borderTopic1 bg-[#57b7e7] text-white text-2xl font-extrabold bodyFont2">
                                                                    Other Conferences
                                                                </li>
                                                                <a href='/'><li className="text-sm px-6 py-2 border-gray-200 w-full bodyFont ">DMDBS 2022</li></a>
                                                                <a href='/'><li className="text-sm px-6 py-2 border-gray-200 w-full bodyFont ">Fuzzy 2022</li></a>
                                                                <a href='/'><li className="text-sm px-6 py-2 border-gray-200 w-full bodyFont ">ITCON 2022</li></a>
                                                                <a href='/'><li className="text-sm px-6 py-2 border-gray-200 w-full bodyFont ">NATL 2022</li></a>
                                                                <a href='/'><li className="text-sm px-6 py-2 border-gray-200 w-full bodyFont ">CSEA 2022</li></a>
                                                                <a href='/'><li className="text-sm px-6 py-2 border-gray-200 w-full bodyFont ">NETWORKS 2022</li></a>
                                                                <a href='/'><li className="text-sm px-6 py-2 w-full rounded-b-md font-bold">SEAPP 2022</li></a>
                                                            </ul>
                                                        </div>
                                                    </Slide>
                                                    <Zoom>
                                                        <div className="sm:p-4 md:w-1/3 sm:mb-0 mb-6">
                                                            <ul className="bg-[#293985] rounded border-gray-200 sm:w-96 w-80 text-white text-center">
                                                                <li className="px-6 py-2 border-gray-200 w-full borderTopic1 bg-[#57b7e7] text-white text-2xl font-extrabold bodyFont2">
                                                                    Past Events
                                                                </li>
                                                                <a href='/'><li className="text-sm px-6 py-2 border-gray-200 w-full bodyFont ">SIGEM 2021</li></a>
                                                                <a href='/'><li className="text-sm px-6 py-2 border-gray-200 w-full bodyFont ">SIGEM 2020</li></a>
                                                                <a href='/'><li className="text-sm px-6 py-2 border-gray-200 w-full bodyFont ">SIGEM 2019</li></a>
                                                                <a href='/'><li className="text-sm px-6 py-2 border-gray-200 w-full bodyFont ">SIGEM 2018</li></a>
                                                                <a href='/'><li className="text-sm px-6 py-2 border-gray-200 w-full bodyFont ">SIGEM 2017</li></a>
                                                                <a href='/'><li className="text-sm px-6 py-2 border-gray-200 w-full bodyFont ">SIGEM 2016</li></a>
                                                                <a href='/'><li className="text-sm px-6 py-2 w-full rounded-b-md font-bold">SIGEM 2015</li></a>
                                                            </ul>
                                                        </div>
                                                    </Zoom>
                                                    <Slide right>
                                                        <div className="sm:p-4 md:w-1/3 sm:mb-0 mb-6">
                                                            <ul className="bg-[#293985] rounded border-gray-200 sm:w-96 w-80 text-white text-center">
                                                                <li className="px-6 py-2 border-gray-200 w-full borderTopic1 bg-[#57b7e7] text-white text-2xl font-extrabold bodyFont2">
                                                                    Past Events
                                                                </li>
                                                                <a href='/'><li className="text-sm px-6 py-2 border-gray-200 w-full bodyFont ">DMDBS 2022</li></a>
                                                                <a href='/'><li className="text-sm px-6 py-2 border-gray-200 w-full bodyFont ">Fuzzy 2022</li></a>
                                                                <a href='/'><li className="text-sm px-6 py-2 border-gray-200 w-full bodyFont ">ITCON 2022</li></a>
                                                                <a href='/'><li className="text-sm px-6 py-2 border-gray-200 w-full bodyFont ">NATL 2022</li></a>
                                                                <a href='/'><li className="text-sm px-6 py-2 border-gray-200 w-full bodyFont ">CSEA 2022</li></a>
                                                                <a href='/'><li className="text-sm px-6 py-2 border-gray-200 w-full bodyFont ">NETWORKS 2022</li></a>
                                                                <a href='/'><li className="text-sm px-6 py-2 w-full rounded-b-md font-bold">SEAPP 2022</li></a>
                                                            </ul>
                                                        </div>
                                                    </Slide>

                                                </div>
                                                <div className="justify-center mt-16">

                                                    <span className="inline-block h-1 w-24 rounded bg-[#293985] mb-6"></span>
                                                </div>

                                            </div>
                                        </section> */}
            {/*eight section*/}
            {/*FOOTER SECT.ION*/}
            <Footer />

        </>
    )
}

export default HomePage
