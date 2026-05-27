    import { useState, React } from 'react'
    import Nav from '../../components/Navbar/Nav'
    import LoadingBar from 'react-top-loading-bar'
    import './StartHero.css';
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
        return (
            <div className="bgImg">
                <LoadingBar
                    color='#f11946'
                    progress={progress}
                    onLoaderFinished={() => setProgress(0)}
                    loaderSpeed={1000}
                />

                <article className='container mx-auto'>
                    <div className="wrapper " >
                        <ul className="marquee">
                            <li>Full Paper Submission - <span className='liName'>April 10, 2023</span></li>
                            <li>Acceptance Notification - <span className='liName'>April 30, 2023</span></li>
                            <li>Camera Ready Paper Submission - <span className='liName'>May 25, 2023</span></li>
                            <li>Early Bird Registration - <span className='liName'>September 05, 2023</span></li>
                            <li>Registration - <span className='liName'>October 10, 2023</span></li>
                            <li>Conference Date - <span className='liName'>October 26-28,  2023</span></li>
                        </ul>
                        <ul className="marquee2">
                            <li>Full Paper Submission - <span className='liName'>April 10, 2023</span></li>
                            <li>Acceptance Notification -<span className='liName'> April 30, 2023</span></li>
                            <li>Camera Ready Paper Submission - <span className='liName'>May 25, 2023</span></li>
                            <li>Early Bird Registration - <span className='liName'>September 05, 2023</span></li>
                            <li>Registration - <span className='liName'>October 10, 2023</span></li>
                            <li>Conference Date - <span className='liName'>October 26-28,</span> 2023</li>
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

