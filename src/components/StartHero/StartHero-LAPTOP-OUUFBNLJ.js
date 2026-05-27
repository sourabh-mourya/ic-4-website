
import { useState, React, useEffect } from 'react'
import Nav from '../../components/Navbar/Nav'
import LoadingBar from 'react-top-loading-bar'
import './StartHero.css';
import countapi from "countapi-js";

import home_carousel1 from '../../img/home_corousel1.JPG'
import home_carousel2 from '../../img/home_corousel2.JPG'
import home_carousel3 from '../../img/home_corousel3.JPG'
import home_carousel4 from '../../img/home_corousel4.JPG'
import home_carousel5 from '../../img/home_corousel5.JPG'
import home_carousel9 from '../../img/home_corousel9.JPG'
import home_carousel6 from '../../img/medicaps.jpg'
import home_carousel7 from '../../img/medicaps_cse1.jpg'
import home_carousel8 from '../../img/mdicaps_university1.jpg'
//d
import { Link } from 'react-router-dom';
const StartHero = (props) => {
    const [progress, setProgress] = useState(100);
    const [viewCount, setViewCount] = useState(0);

    useEffect(() => {
        countapi.visits().then((result) => {
            console.log(result.value);
        });
    }, []);
    return (
        <div className="bgImg">
            <LoadingBar
                color='#f11946'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
                loaderSpeed={1000}
            />
            {/* <div id="sfc5zh2zf9dc5hxu165btr7fayzur3nd1pm"></div><script type="text/javascript" src="https://counter6.optistats.ovh/private/counter.js?c=5zh2zf9dc5hxu165btr7fayzur3nd1pm&down=async" async></script><noscript><a href="https://www.freecounterstat.com" title="free hit counter"><img src="https://counter6.optistats.ovh/private/freecounterstat.php?c=5zh2zf9dc5hxu165btr7fayzur3nd1pm" border="0" title="free hit counter" alt="free hit counter" /></a></noscript>
                <a href="https://www.freecounterstat.com" title="free hit counter"><img src="https://counter6.optistats.ovh/private/freecounterstat.php?c=5zh2zf9dc5hxu165btr7fayzur3nd1pm" border="0" title="free hit counter" alt="free hit counter" /></a> */}

            <article className='container mx-auto'>
                <div className="wrapper " >
                    <ul className="marquee">
                        <li>Full Paper Submission - <span className='liName'><del style={{ textDecoration: "line-through", color: "red" }}><span className="text-black"></span></del> <del style={{ textDecoration: "line-through", color: "red" }}><span className="text-black"></span></del><span className="text-[#ff0000]"></span>January 15, 2025</span></li>

                        <li>Acceptance Notification - <span className='liName'><del style={{ textDecoration: "line-through", color: "red" }}><span className="text-black"></span></del> <span className="text-[#ff0000]"></span> February 10, 2025</span></li>

                        <li>Camera Ready Paper Submission - <span className='liName'><del style={{ textDecoration: "line-through", color: "red" }}><span className="text-black"></span></del><span className="text-[#ff0000]"></span> March 1, 2025</span></li>
                        <li>Early Bird Registration - <span className='liName'>February 28, 2025</span></li>
                        <li>Conference Date - <span className='liName'>August 23-25, 2025</span></li>
                    </ul>
                    <ul className="marquee2">
                        <li>Full Paper Submission - <span className='liName'><del style={{ textDecoration: "line-through", color: "red" }}><span className="text-black"></span></del> <del style={{ textDecoration: "line-through", color: "red" }}><span className="text-black"></span></del><span className="text-[#ff0000]"></span>January 15, 2025</span></li>

                        <li>Acceptance Notification - <span className='liName'><del style={{ textDecoration: "line-through", color: "red" }}><span className="text-black"></span></del> <span className="text-[#ff0000]"></span> February 10, 2025.</span></li>

                        <li>Camera Ready Paper Submission - <span className='liName'><del style={{ textDecoration: "line-through", color: "red" }}><span className="text-black"></span></del><span className="text-[#ff0000]"></span> March 1, 2025</span></li>
                        <li>Early Bird Registration - <span className='liName'>February 28, 2025</span></li>
                        <li>Conference Date - <span className='liName'>August 23-25, 2025</span></li>
                    </ul>
                </div>
            </article>
            <div id="carouselExampleCaptions" className="container mx-auto carousel slide relative" data-bs-ride="carousel">

                <div className="carousel-inner relative w-full overflow-hidden">
                    <div className="carousel-item active relative float-left w-full">
                        <img
                            src={home_carousel1}
                            className="block w-full carouselImage"
                            alt="..."

                        />
                        {/* <div className="carousel-caption hidden md:block absolute top-0"> */}
                        {/* <div class="elfsight-app-4b214d3a-61a9-408d-aaaa-876db82c8b51" color='text-white'></div> */}
                        {/* </div> */}
                        <div className="carousel-caption hidden md:block absolute text-center">

                            <h5 className="text-2xl">Initiated By Department of CSE, Medi-Caps University </h5>
                            <p></p>
                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src={home_carousel2}
                            className="block w-full carouselImage"
                            alt="..." style={{
                                objectPosition: "top"
                            }}
                        />
                        <div className="carousel-caption hidden md:block absolute text-center">
                            <h5 className="text-xl"></h5>
                            <p></p>
                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src={home_carousel3}
                            className="block w-full carouselImage"
                            alt="..." style={{
                                objectPosition: "top"
                            }}
                        />
                        <div className="carousel-caption hidden md:block absolute text-center">
                            <h5 className="text-xl"></h5>
                            <p></p>
                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src={home_carousel4}
                            className="block w-full carouselImage" style={{
                                objectPosition: "top"
                            }}
                            alt="..."
                        />
                        <div className="carousel-caption hidden md:block absolute text-center">
                            <h5 className="text-xl"></h5>
                            <p></p>
                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src={home_carousel9}
                            className="block w-full carouselImage" style={{
                                objectPosition: "top"
                            }}
                            alt="..."
                        />
                        <div className="carousel-caption hidden md:block absolute text-center">
                            <h5 className="text-xl"></h5>
                            <p></p>
                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src={home_carousel5}
                            className="block w-full carouselImage" carouselimage="true"
                            alt="..."
                        />
                        <div className="carousel-caption hidden md:block absolute text-center">
                            <h5 className="text-xl"></h5>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0">
                    <div class="elfsight-app-4b214d3a-61a9-408d-aaaa-876db82c8b51"></div>
                </div>
                <div className="absolute top-0 right-0 bg-[#016698] text-white p-[0.4rem] px-4 border-1 border-solid border-black z-10 text-xl"><a href="https://docs.google.com/forms/d/e/1FAIpQLSekopcN5Ej2VTdDpqVVk3d-qDeHEhYhPwAZszcT1QVkmYuiMg/viewform" target='_blank'>Register here to attend the conference
                </a>
                <button type="button" class="text-white bg-[#ff0000] focus:outline-none font-medium rounded-full text-sm px-2 py-1 text-center ml-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900  blink-text">New</button>
                </div>
                <div className="absolute top-0 left-0 bg-[#016698] text-white p-1 pr-1 pl-1 border-1  border-solid border-black z-10"><a href="https://conferences.ieee.org/conferences_events/conferences/conferencedetails/574346" target='_blank'>
                    Conference Record #57434
                </a>
                </div>
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >

                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>



            {/* 

                            <section className="text-gray-600 body-font z-auto">

                                <div id="carouselExampleSlidesOnly" className="carousel slide relative " data-bs-ride="carousel">
                                    <div className="carousel-inner relative w-full overflow-hidden">
                                        <Nav />

                                        <div className="carousel-item active relative float-left w-full" style={{
                                            background: "rgb(8,70,130)",
                                            background: "linear-gradient(180deg, rgba(8,70,130,1) 5%, rgba(8,70,130,0) 20%), url(" + home_carousel1 + ")",
                                            height: '700px',
                                            marginTop: '-70px',
                                            fontSize: '50px',
                                            backgroundSize: 'cover',
                                            backgroundRepeat: "no-repeat"
                                        }}>
                                        </div>
                                        <div className="carousel-item relative float-left w-full" style={{
                                            background: "rgb(8,70,130)",
                                            background: "linear-gradient(180deg, rgba(8,70,130,1) 5%, rgba(8,70,130,0) 20%), url(" + home_carousel2 + ")",
                                            height: '700px',
                                            marginTop: '-70px',
                                            fontSize: '50px',
                                            backgroundSize: 'cover',
                                            backgroundRepeat: "no-repeat"
                                        }}>
                                        </div>
                                        <div className="carousel-item relative float-left w-full" style={{
                                            background: "rgb(8,70,130)",
                                            background: "linear-gradient(180deg, rgba(8,70,130,1) 5%, rgba(8,70,130,0) 20%), url(" + home_carousel6 + ")",
                                            height: '700px',
                                            marginTop: '-70px',
                                            fontSize: '50px',
                                            backgroundSize: 'cover',
                                            backgroundRepeat: "no-repeat"
                                        }}>
                                        </div>
                                        <div className="carousel-item relative float-left w-full" style={{
                                            background: "rgb(8,70,130)",
                                            background: "linear-gradient(180deg, rgba(8,70,130,1) 5%, rgba(8,70,130,0) 20%), url(" + home_carousel5 + ")",
                                            height: '700px',
                                            marginTop: '-70px',
                                            fontSize: '50px',
                                            backgroundSize: 'cover',
                                            backgroundRepeat: "no-repeat"
                                        }}>
                                        </div>
                                        <div className="carousel-item relative float-left w-full" style={{
                                            background: "rgb(8,70,130)",
                                            background: "linear-gradient(180deg, rgba(8,70,130,1) 5%, rgba(8,70,130,0) 20%), url(" + home_carousel8 + ")",
                                            height: '700px',
                                            marginTop: '-70px',
                                            fontSize: '50px',
                                            backgroundSize: 'cover',
                                            backgroundRepeat: "no-repeat"
                                        }}>
                                        </div>
                                        <div className="carousel-item relative float-left w-full" style={{
                                            background: "rgb(8,70,130)",
                                            background: "linear-gradient(180deg, rgba(8,70,130,1) 5%, rgba(8,70,130,0) 20%), url(" + home_carousel3 + ")",
                                            height: '700px',
                                            marginTop: '-70px',
                                            fontSize: '50px',
                                            backgroundSize: 'cover',
                                            backgroundRepeat: "no-repeat"
                                        }}>
                                        </div>
                                        <div className="carousel-item relative float-left w-full" style={{
                                            background: "rgb(8,70,130)",
                                            background: "linear-gradient(180deg, rgba(8,70,130,1) 5%, rgba(8,70,130,0) 20%), url(" + home_carousel4 + ")",
                                            height: '700px',
                                            marginTop: '-70px',
                                            fontSize: '50px',
                                            backgroundSize: 'cover',
                                            backgroundRepeat: "no-repeat"
                                        }}>
                                        </div>
                                        <div className="carousel-item relative float-left w-full" style={{
                                            background: "rgb(8,70,130)",
                                            background: "linear-gradient(180deg, rgba(8,70,130,1) 5%, rgba(8,70,130,0) 20%), url(" + home_carousel7 + ")",
                                            height: '700px',
                                            marginTop: '-70px',
                                            fontSize: '50px',
                                            backgroundSize: 'cover',
                                            backgroundRepeat: "no-repeat"
                                        }}>
                                        </div>
                                    </div>

                                </div>
                            </section > */}

        </div >
    )
}

export default StartHero

