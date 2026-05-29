import { React, useState } from 'react'
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
import scopeImage from '../../img/scope2.jpg'
import npcst from '../../img/npcst.png'
import CSIlogo from '../../img/CSIlogo.png'
import ieeeLogo from '../../img/IEEE-Logo.jpeg'
import pastConference_1 from '../../img/pastConference_2.JPEG'

const HomePage = () => {
    const [progress, setProgress] = useState(100);

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
                            <p className="mb-8 leading-relaxed text-black sm:text-xl text-sm font-semibold text-justify">2nd IEEE International Conference on Computer, Communication and Control (IC4-2024) is a forum for presenting new advances and research results in the fields of <span className='text-[#00629B] font-bold'>Computer, Communication and Control</span>. Researches related to field of <span className='text-[#00629B] font-bold'>Computer Science, Information Technology, Electronics and Communications, Instrumentation,  Robotics and Automation</span>. The conference will bring together leading researchers, engineers and scientists in the domain of interest from around the world. </p>
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
                    <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-wrap w-full mb-20">
                            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                                <h1 className="sm:text-4xl text-3xl mb-4 font-black text-black bodyFont2">Previous Conference
                                </h1>
                                <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                            </div>
                        </div>

                        <div class="flex flex-wrap -m-4">
                            <Slide bottom>
                                <div class="xl:w-1/4 md:w-1/2 p-4">
                                    <div class="bg-gray-100 rounded-lg mr-2">
                                        <img class="h-[12.76rem]  rounded w-full object-cover object-center mb-6" src={pastConference_1} alt="content" />
                                        <div className="px-6 pb-1">

                                            <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">2015</h3>
                                            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">IC4</h2>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                            <Slide bottom>

                                <div class="xl:w-1/4 md:w-1/2 p-4">
                                    <div class="bg-gray-100 rounded-lg mr-2">
                                        <img class="h-[12.76rem]  rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
                                        <div className="px-6 pb-1">

                                            <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">2016</h3>
                                            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">CDAN Symposium</h2>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                            <Slide bottom>

                                <div class="xl:w-1/4 md:w-1/2 p-4">
                                    <div class="bg-gray-100 rounded-lg mr-2">
                                        <img class="h-[12.76rem]  rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
                                        <div className="px-6 pb-1">

                                            <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">2016</h3>
                                            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">CIVIL</h2>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                            <Slide bottom>

                                <div class="xl:w-1/4 md:w-1/2 p-4">
                                    <div class="bg-gray-100 rounded-lg">
                                        <img class="h-[12.76rem]  rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
                                        <div className="px-6 pb-1">

                                            <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font ">2018</h3>
                                            <h2 class="text-lg text-gray-900    font-medium title-font mb-4">ICANI</h2>
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
                            <p className="mb-4 leading-relaxed text-black font-semibold mt-12 text-sm sm:text-xl text-justify">Authors are invited to submit papers through the conference <span className='text-[#016698]'>Submission System</span> by <span className='text-[#016698] font-bold'>October 20, 2023.</span> Submissions must be original and should not have been published previously or be under consideration for publication while being evaluated for this conference. Paper should be in the format of IEEE. Original papers are invited in the following Tracks & papers may be submitted through <a href="https://cmt3.research.microsoft.com/IC42023" target='_blank'><span className='text-[#016698] underline hover:text-[#ff0000]'>CMT online submission system.</span></a> </p>
                            <span className="inline-block h-1 w-24 rounded bg-[#016698] mt-8 mb-6"></span>


                        </div>
                    </Fade>
                </div>
            </section >
            {/*Sixth Section*/}
            <section section section className="text-gray-600 body-font" id="impDates" >
                <div className="container px-5 py-12 mx-auto bg-[#016698]">

                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 justify-center noneDisp1">

                        <Slide left>
                            <div className="p-4 md:w-1/6 sm:mb-0 mb-6">
                                <div className="rounded-lg h-auto overflow-hidden iconclr ">
                                    <i className="fa-solid fa-hourglass-end fa-4x iconclr"></i>
                                </div>
                                <p className="title-font text-white mt-2 text-center">Full Paper Submission</p>
                                <h2 className="text-2xl text-white mt-2 text-center bodyFont">Oct 20, 2023</h2>


                            </div>
                            <div className="p-4 md:w-1/6 sm:mb-0 mb-6">
                                <div className="rounded-lg h-auto overflow-hidden iconclr ">
                                    <i className="fa-solid fa-bell fa-4x iconclr"></i>
                                </div>
                                <p className="title-font text-white mt-2 text-center">Acceptance Notification</p>
                                <h2 className="text-2xl text-white mt-2 text-center bodyFont">Nov 20, 2023</h2>


                            </div>
                            <div className="p-4 md:w-1/6 sm:mb-0 mb-6">
                                <div className="rounded-lg h-auto overflow-hidden iconclr ">
                                    <i className="fa-solid fa-cloud-arrow-up  fa-4x iconclr"></i>
                                </div>
                                <p className="title-font text-white mt-2 text-center">Camera Ready Paper Submission</p>
                                <h2 className="text-2xl text-white mt-2 text-center bodyFont">Dec 5, 2023</h2>

                            </div>
                        </Slide>

                        <Slide right>
                            <div className="p-4 md:w-1/6 sm:mb-0 mb-6">
                                <div className="rounded-lg h-auto overflow-hidden iconclr ">
                                    <i className="fa-solid fa-id-card fa-4x iconclr"></i>
                                </div>
                                <p className="title-font text-white mt-2 text-center">Early Bird Registration</p>
                                <h2 className="text-2xl text-white mt-2 text-center bodyFont">Dec 20, 2023</h2>

                            </div>
                            <div className="p-4 md:w-1/6 sm:mb-0 mb-6">
                                <div className="rounded-lg h-auto overflow-hidden iconclr ">
                                    <i className="fa-solid fa-id-card fa-4x iconclr"></i>
                                </div>
                                <p className="title-font text-white mt-2 text-center">Registration</p>
                                <h2 className="text-2xl text-white mt-2 text-center bodyFont">January 01, 2024</h2>

                            </div>
                            <div className="p-4 md:w-1/6 sm:mb-0 mb-6">
                                <div className="rounded-lg h-auto overflow-hidden iconclr">
                                    <i className="fa-solid fa-chalkboard-user  fa-4x iconclr"></i>
                                </div>
                                <p className="title-font text-white mt-2 text-center">Conference Date</p>
                                <h2 className="text-2xl text-white mt-2 text-center bodyFont">Feb 08-10, 2024</h2>-

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
                                    <h2 className="text-sm  text-white mt-2 text-center bodyFont">Oct 20, 2023</h2>

                                </div>
                                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                    <div className="rounded-lg sm:h-32 overflow-hidden iconclr ">
                                        <i className="fa-solid fa-bell fa-4x iconclr"></i>
                                    </div>
                                    <p className="text-sm title-font text-white mt-2 text-center">Acceptance Notification</p>
                                    <h2 className="text-sm  text-white mt-2 text-center bodyFont">Nov 20, 2023</h2>


                                </div>

                                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                    <div className="rounded-lg sm:h-32 overflow-hidden iconclr ">
                                        <i className="fa-solid fa-cloud-arrow-up fa-4x iconclr"></i>
                                    </div>
                                    <p className="text-sm title-font text-white mt-2 text-center">Camera Ready Paper Submission</p>
                                    <h2 className="text-sm  text-white mt-2 text-center bodyFont">Dec 5, 2023</h2>

                                </div>

                                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                    <div className="rounded-lg sm:h-32 overflow-hidden iconclr ">
                                        <i className="fa-solid fa-id-card fa-4x iconclr"></i>
                                    </div>
                                    <p className="text-sm title-font text-white mt-2 text-center">Early Bird Registration</p>
                                    <h2 className="text-sm  text-white mt-2 text-center bodyFont">Dec 20, 2023</h2>

                                </div>

                                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                    <div className="rounded-lg sm:h-32 overflow-hidden iconclr ">
                                        <i className="fa-solid fa-id-card fa-4x iconclr"></i>
                                    </div>
                                    <p className="text-sm title-font text-white mt-2 text-center">Registration</p>
                                    <h2 className="text-sm text-white mt-2 text-center bodyFont">January 01, 2024</h2>

                                </div>

                                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                    <div className="rounded-lg sm:h-32 overflow-hidden iconclr ">
                                        <i className="fa-solid fa-chalkboard-user fa-4x iconclr"></i>
                                    </div>
                                    <p className="text-sm title-font text-white mt-2 text-center">Conference Date</p>
                                    <h2 className="text-sm text-white mt-2 text-center bodyFont">February 08-10, 2024</h2>

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
                        <h1 className="title-font sm:text-4xl text-3xl font-black mb-4 text-black bodyFont2">KEY NOTE SPEAKERS</h1>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 lg:w-1/4 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/200x200" />
                                <div className="w-full">
                                    <h2 className="title-font font-medium text-lg text-black">Speaker 1</h2>
                                    <h3 className="text-gray-500 mb-3">Developer</h3>
                                    <p className="mb-4">Vice Chancellor, Medi-caps University, Indore, India</p>
                                    <span className="inline-flex">
                                        <a className="text-gray-500">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                            </svg>
                                        </a>
                                        <a className="ml-2 text-gray-500">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                            </svg>
                                        </a>
                                        <a className="ml-2 text-gray-500">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/4 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/201x201" />
                                <div className="w-full">
                                    <h2 className="title-font font-medium text-lg text-black">Speaker 2</h2>
                                    <h3 className="text-gray-500 mb-3">Developer</h3>
                                    <p className="mb-4">Vice Chancellor, Medi-caps University, Indore, India</p>
                                    <span className="inline-flex">
                                        <a className="text-gray-500">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                            </svg>
                                        </a>
                                        <a className="ml-2 text-gray-500">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                            </svg>
                                        </a>
                                        <a className="ml-2 text-gray-500">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/4 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/202x202" />
                                <div className="w-full">
                                    <h2 className="title-font font-medium text-lg text-black">Speaker 3</h2>
                                    <h3 className="text-gray-500 mb-3">UI Developer</h3>
                                    <p className="mb-4">Vice Chancellor, Medi-caps University, Indore, India</p>
                                    <span className="inline-flex">
                                        <a className="text-gray-500">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                            </svg>
                                        </a>
                                        <a className="ml-2 text-gray-500">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                            </svg>
                                        </a>
                                        <a className="ml-2 text-gray-500">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/4 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/203x203" />
                                <div className="w-full">
                                    <h2 className="title-font font-medium text-lg text-black">Speaker 4</h2>
                                    <h3 className="text-gray-500 mb-3">UI Developer</h3>
                                    <p className="mb-4">Vice Chancellor, Medi-caps University, Indore, India</p>
                                    <span className="inline-flex">
                                        <a className="text-gray-500">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                            </svg>
                                        </a>
                                        <a className="ml-2 text-gray-500">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                            </svg>
                                        </a>
                                        <a className="ml-2 text-gray-500">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
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
                        <h1 className="sm:text-4xl text-3xl font-black mb-4 text-black bodyFont2">TECHNICAL CO-SPONSORS</h1>
                    </div>
                    <div className="flex flex-wrap -m-4 justify-center">
                        <Zoom>
                            <div className="p-4 lg:w-1/4 md:w-1/2">
                                <div className="h-full flex flex-col items-center text-center justify-center ">
                                    <img alt="team" className="flex-shrink-0 rounded-lg w-56 h-auto  mb-4" src={ieeeLogo} />
                                </div>
                            </div>
                        </Zoom>
                        <Zoom>
                            <div className="p-4 lg:w-1/4 md:w-1/2">
                                <div className="h-full flex flex-col items-center text-center">
                                    <img alt="team" className="flex-shrink-0 rounded-lg w-56 h-56 object-center mb-4" src={CSIlogo} />
                                </div>
                            </div>
                        </Zoom>
                        <Zoom>
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
                        </Zoom>

                    </div>
                    <div className="text-center">
                        <span className="inline-block h-1 w-24 rounded bg-[#016698] mt-8 mb-6"></span>
                    </div>

                </div>
            </section>

            {/*FOOTER SECTION*/}
            <Footer />

        </>
    )
}

export default HomePage