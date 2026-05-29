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
import sponsor2 from '../../img/spomsor2.png'
import scopeImage from '../../img/scope2.jpg'
import conferenceAlertLogo from '../../img/conferenceAlertLogo.jpeg'
import npcst from '../../img/npcst.png'
import CSIlogo from '../../img/CSIlogo.png'
import ieeeLogo from '../../img/springer.png'
import pastConference_1 from '../../img/CONFERENCEICANI.jpeg'
import pastConference_2 from '../../img/pastConference_2.JPG'
import pastConference_3 from '../../img/pastConference_3.JPG'
import pastConference_4 from '../../img/pastConference_4.JPG'
import { useCount } from '../../Context/context.js'
import keyNoteSpeakers1 from '../../img/keyNoteSpeakers1.jpg'
import keyNoteSpeakers2 from '../../img/keyNoteSpeakers2.jpg'
import keyNoteSpeakers3 from '../../img/keyNoteSpeakers3.png'
import keyNoteSpeakers4 from '../../img/keyNoteSpeakers4.jpg'
import keyNoteSpeakers5 from '../../img/keyNoteSpeakers5.png'
import keyNoteSpeakers6 from '../../img/keyNoteSpeakers6.png'
import keyNoteSpeakers7 from '../../img/keyNoteSpeakers7.jpeg'
import chiefGuest from '../../img/chiefGuest.jpg'
import speaker1 from '../../img/speaker1.jpg'
import speaker2 from '../../img/speaker2.jpg'
import speaker3 from '../../img/speaker3.jpg'
import speaker4 from '../../img/speaker4.jpg'

const HomePage = () => {
    const [progress, setProgress] = useState(100);
    const first = useRef(0);
    const { count, setCount } = useCount();
    console.log(useCount());
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




                <div className="container py-12 mx-auto bg-[#016698] ">
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
                                    <h2 className="text-2xl font-extrabold text-white mt-2 text-center bodyFont">Accepted Papers</h2>

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
                                    <h2 className="text-sm font-semibold text-white mt-2 text-center bodyFont">Accepted Papers</h2>

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
            </section>


            {/*Third component*/}
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center bg-[#E3F0FB] pl-8">
                    <Fade left>
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 className="sm:text-4xl text-3xl mb-8 font-black text-black bodyFont2">Conference Scope
                            </h1>
                            <p className="mb-8 leading-relaxed text-black sm:text-xl text-sm font-semibold text-justify">The objective of this international conference is to foster a dynamic exchange of knowledge and innovation across the domains of mechanical, civil, electrical and computer engineering. By bringing together leading scholars, industry experts, and visionary practitioners, the conference aims to strengthen academic-industry collaboration and provide a forum for the dissemination of pioneering research, advanced technologies, and future- oriented solutions. Emphasizing interdisciplinary synergy, the event is aimed at addressing pressing global challenges while promoting sustainable, cutting-edge practices. Ultimately, it aspires to contribute to the technological growth and sustainable development of our nation, positioning it at the forefront of global innovation. The conference will feature keynote addresses from eminent personalities in various fields aligned with the theme, including distinguished Indian and international speakers.<span className='text-[#00629B] font-bold'></span><span className='text-[#00629B] font-bold'></span></p>
                            <div className="flex justify-center">
                                <Link to='/register'>
                                    <button className="inline-flex uppercase text-white py-2 px-6  border-2 focus:outline-none rounded-lg text-md  font-medium bg-[#016698] hover:bg-white hover:text-[#016698] hover:border-2 hover:border-[#016698] hover:shadow-lg transition duration-150 ease-in-out ">Register</button>
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
            {/*fourth component*/}
            {/* previous conference*/}
            <section className="text-gray-600 body-font">
                <div className="container py-12 mx-auto bg-[#E3F0FB] px-4">
                    <div class="container px-5 py-24">
                        <div class="flex flex-wrap w-full mb-20">
                            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                                <h1 className="sm:text-4xl text-3xl mb-4 font-black text-black bodyFont2">Previous Conferences
                                </h1>
                                <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                            </div>
                        </div>

                        <div class="flex flex-wrap w-full mx-auto">
                            <Slide bottom>

                                <div class="xl:w-1/4 md:w-1/2 ml-2">
                                    <div class="bg-[#016698] rounded-lg mr-3">
                                        <a href="https://conferencealerts.com/show-event?id=144073">
                                            <img class="h-[14.1rem]  rounded w-full object-cover object-center mb-6" src={pastConference_4} alt="content" />
                                            <div className="px-6 pb-1">

                                                <h2 class="text-lg text-white font-bold title-font mb-4 text-center">1st IEEE Conference IC4 - <span className='text-[#ff0000]'>2015</span></h2>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </Slide>
                            <Slide bottom>

                                <div class="xl:w-1/4 md:w-1/2 p-4">
                                    <div class="bg-[#016698] rounded-lg mr-3">
                                        <a href="https://conferencealerts.com/show-event?id=164577">
                                            <img class="h-[14.1rem]  rounded w-full object-cover object-center mb-6" src={pastConference_3} alt="content" />
                                            <div className="px-6 pb-1">
                                                <h2 class="text-lg text-white font-bold title-font mb-4 text-center">IEEE CDAN Symposium - <span className='text-[#ff0000]'>2016</span></h2>

                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </Slide>

                            <Slide bottom>

                                <div class="xl:w-1/4 md:w-1/2 p-4">
                                    <div class="bg-[#016698] rounded-lg mr-3">
                                        <a href="https://link.springer.com/book/10.1007/978-981-13-2673-8">
                                            <img class="h-[14.1rem]  rounded w-full object-cover object-center mb-6" src={pastConference_1} alt="content" />
                                            <div className="px-6 pb-1">

                                                <h2 class="text-lg text-white font-bold title-font mb-4 text-center">Springer Conference ICANI - <span className='text-[#ff0000]'>2019</span></h2>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </Slide>

                            <Slide bottom>
                                <div class="xl:w-1/4 md:w-1/2 p-4">
                                    <div class="bg-[#016698] rounded-lg">
                                        {/* <a href="https://link.springer.com/book/10.1007/978-981-13-2673-8"> */}
                                        <img class="h-[14.1rem]  rounded w-full object-cover object-center mb-6" src={pastConference_2} alt="content" />
                                        <div className="px-6 pb-1">

                                            <h2 class="text-lg text-white font-bold title-font mb-4 text-center mx-0">International Conference organized by<br /> CIVIL  - <span className='text-[#ff0000]'>2019</span></h2>
                                        </div>
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
                            <h1 className="title-font sm:text-4xl text-3xl font-black mb-4 text-black bodyFont2">PAPER SUBMISSION</h1>
                            <p className="mb-4 leading-relaxed text-black font-semibold mt-12 text-sm sm:text-xl text-justify">Authors are invited to submit papers through the conference <span className='text-[#016698]'>Submission System</span> by <span className='text-[#016698] font-bold'><del style={{ textDecoration: "line-through", color: "red" }}><span className="text-[#016698]"></span></del><del style={{ textDecoration: "line-through", color: "red" }}><span className="text-[#016698]"> </span></del><span className="text-[#ff0000]">January 15, 2025</span>.</span> Submissions must be original and should not have been published previously or be under consideration for publication while being evaluated for this conference. Original papers are invited in the following Tracks & papers may be submitted through <a href="https://cmt3.research.microsoft.com/IC42023" target='_blank'><span className='text-[#016698] underline hover:text-[#ff0000]'>CMT online submission system.</span></a> </p>
                            <span className="inline-block h-1 w-24 rounded bg-[#016698] mt-8 mb-6"></span>


                        </div>
                    </Fade>
                </div>
            </section >
            {/*Sixth Section*/}
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
                                        <div><div className='text-[#ff0000]'></div></div>January 15, 2025</h2>

                                </div>
                                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                    <div className="rounded-lg sm:h-32 overflow-hidden iconclr ">
                                        <i className="fa-solid fa-bell fa-4x iconclr"></i>
                                    </div>
                                    <p className="text-sm title-font text-white mt-2 text-center">Acceptance Notification</p>
                                    <h2 className="text-sm  text-white mt-2 text-center bodyFont"><del style={{ textDecoration: "line-through", color: "red" }}><span className="text-white"></span></del><div className='text-[#ff0000]'>
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

            {/* 

                                        <section className="text-gray-600 body-font">
                                            <div className="container mx-auto flex px-5 py-12 pb-12 items-center justify-center flex-col bg-[#E3F0FB]">
                                                <div className="text-center lg:w-2/3 w-full">
                                                    <h1 className="title-font sm:text-4xl text-3xl font-black mb-4 text-black bodyFont2">PROCEDINGS</h1>
                                                    <p className="mb-4 leading-relaxed text-black font-semibold mt-12 sm:text-xl text-sm">Hard copy of the proceedings will be distributed during the Conference. The softcopy will be available on <span className='text-[#016698]'>on IEEE Explore</span></p>
                                                    <span className="inline-block h-1 w-24 rounded bg-[#016698] mt-8 mb-6"></span>
                                                </div>
                                            </div>
                                        </section> */}

            {/*SPEAKER SECTION*/}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-12 mx-auto bg-[#E3F0FB]">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="title-font sm:text-4xl text-3xl font-black mb-4 text-black bodyFont2">CHIEF GUEST, INAUGURATION </h1>
                        <h2><b>Yet to Declare</b></h2>
                    </div>
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
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-12 mx-auto bg-[#E3F0FB]">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="title-font sm:text-4xl text-3xl font-black mb-4 text-black bodyFont2">KEY NOTE SPEAKERS</h1>
                        {/* <h2><b>Yet to Declare</b></h2> */}
                    </div>
                    <div className="flex flex-wrap -m-4 w-full mx-auto">
                       
                        {/* FIRST */}
                        <div className="p-4 lg:w-1/4 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-72 object-cover object-center mb-4" src={speaker1} />
                                <div className="w-full">
                                    <h2 className="title-font font-medium text-lg text-black">Dr. Frank Stomp</h2>
                                    <div><p>Associate Professor of Computer Science
                                            Navajo Technical University, Mexico, USA
                                    </p></div>
                                </div>
                            </div>
                        </div>
                        {/* SECOND  */}

                        <div className="p-4 lg:w-1/4 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-72 object-cover object-center mb-4" src={speaker2} />
                                <div className="w-full">
                                    <h2 className="title-font font-medium text-lg text-black">Dr. Navab Singh</h2>
                                    <div><p>Director, Institute of Microelectronics, A*STAR, Singapore
                                    </p></div>
                                </div>
                            </div>
                        </div>

                        {/* THIRD  */}
                        <div className="p-4 lg:w-1/4 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-72 object-cover object-center mb-4" src={speaker3} />
                                <div className="w-full">
                                    <h2 className="title-font font-medium text-lg text-black">Dr. Kishor Kumar Sadasivuni</h2>
                                    <div><p>Research Assistant Professor, Center for Advanced Materials, Qatar University
                                    </p></div>
                                </div>
                            </div>
                        </div>

                        {/* FOURTH  */}
                        <div className="p-4 lg:w-1/4 md:w-1/2">
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
                        </div>
                        {/* FIFTH  */}
                        {/* <div className="p-4 lg:w-1/4 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-72 object-cover object-center mb-4" src={keyNoteSpeakers3} />
                                <div className="w-full">
                                    <h2 className="title-font font-medium text-lg text-black">Dr. Sudeep Tanwar</h2>
                                    <div><p>Professor
                                        Nirma University, Gujarat
                                    </p></div>
                                </div>
                            </div>
                        </div> */}
                        
                        {/* SIXTH  */}
                        {/* <div className="p-4 lg:w-1/4 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-72 object-cover object-center mb-4" src={keyNoteSpeakers2} />
                                <div className="w-full">
                                    <h2 className="title-font font-medium text-lg text-black">Dr. Deshinta Arrova Dewi</h2>
                                    <div><p>Associate Professor
                                        INTI International University, Nilai, Malaysia

                                    </p></div>
                                </div>
                            </div>
                        </div> */}
                        


                        {/* SEVENTH */}
                        {/* <div className="p-4 lg:w-1/4 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-72 object-cover object-center mb-4" src={keyNoteSpeakers7} />
                                <div className="w-full">
                                    <h2 className="title-font font-medium text-lg text-black">Dr. Tri Basuki Kurniawan</h2>
                                    <div><p>Associate Professor,
                                        University of Bina Darma (UBD), Palembang, Indonesia
                                        Universiti Kebangsaan Malaysia (UKM), Bangi, Malaysia

                                    </p></div>
                                </div> */}
                            {/* </div>
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
                    <div className="text-center">

                        <span className="inline-block h-1 w-24 rounded bg-[#016698] mt-8 mb-6 mx-auto"></span>
                    </div>

                </div>
            </section>


            {/* <section className="text-gray-600 body-font">
                                            <div className="container mx-auto flex px-5 py-12 items-center justify-center flex-col bg-[#E3F0FB]">

                                                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 justify-center">
                                                    <Slide left>
                                                        <div className="sm:p-4 md:w-1/3 sm:mb-0 mb-6">
                                                            <ul className="bg-[#016698] rounded border-gray-200 sm:w-96 w-80 text-white text-center">
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
                                                            <ul className="bg-[#016698] rounded border-gray-200 sm:w-96 w-80 text-white text-center">
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
                                                            <ul className="bg-[#016698] rounded border-gray-200 sm:w-96 w-80 text-white text-center">
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

                                                    <span className="inline-block h-1 w-24 rounded bg-[#016698] mb-6"></span>
                                                </div>

                                            </div>
                                        </section> */}
            {/*eight section*/}
            <section className="text-gray-600 body-font ">
                <div className="container px-5 py-12 mx-auto bg-[#E3F0FB]">
                    <div className="flex flex-col text-center w-full mb-10">
                        <h1 className="sm:text-4xl text-3xl font-black mb-4 text-black bodyFont2">COLLABORATIONS</h1>
                        {/* <h2>Yet to declare</h2> */}
                    </div>

                    <div className="flex flex-wrap -m-4 justify-center">
                        <Zoom>
                            <div className="p-4 lg:w-1/4 md:w-1/2">
                                <div className="h-full flex flex-col items-center text-center justify-center ">
                                    <img alt="team" className="flex-shrink-0 rounded-lg w-56 h-auto  mb-4" src={MIILogo} />
                                </div>
                            </div>
                        </Zoom>
                        <Zoom>
                            <div className="p-4 lg:w-1/4 md:w-1/2">
                                <div className="h-full flex flex-col items-center text-center">
                                    <img alt="team" className="flex-shrink-0 rounded-lg w-56 h-56 object-center mb-4" src={TECLogo} />
                                </div>
                            </div>
                        </Zoom>
                       
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
                        <span className="inline-block h-1 w-24 rounded bg-[#016698] mt-8 mb-6"></span>
                    </div>

                </div>
            </section>
            <section className="text-gray-600 body-font ">
                <div className="container px-5 py-12 mx-auto bg-[#E3F0FB]">
                    <div className="flex flex-col text-center w-full mb-10">
                        <h1 className="sm:text-4xl text-3xl font-black mb-4 text-black bodyFont2">COLLABORATING UNIVERSITIES</h1>
                    <h2>Yet to declare</h2>

                    </div>
                    <div className="flex flex-wrap -m-4 justify-center">

                        <Zoom>
                            <div className="p-4 lg:w-1/3 md:w-1/2">
                                <a href="https://allconferencealert.net/" target="_blank">
                                    <div className="h-full flex flex-col items-center text-center justify-center">
                                        <img alt="team" className="flex-shrink-0 rounded-lg w-72 h-32 object-center" src={SMULogo} />
                                    </div>
                                </a>
                            </div>
                            <div className="p-4 lg:w-1/3 md:w-1/2">
                                <a href="https://allconferencealert.net/" target="_blank">
                                    <div className="h-full flex flex-col items-center text-center justify-center">
                                        <img alt="team" className="flex-shrink-0 rounded-lg w-72 h-32 object-center" src={INTILogo} />
                                    </div>
                                </a>
                            </div>
                        </Zoom>
                    </div>
                    <div className="text-center">
                        <span className="inline-block h-1 w-24 rounded bg-[#016698] mt-12 mb-6"></span>
                    </div>
                </div>
            </section>
            {/*FOOTER SECT.ION*/}
            <Footer />

        </>
    )
}

export default HomePage