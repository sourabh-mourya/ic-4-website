import React from 'react'
import Nav from '../../components/Navbar/Nav'
import "./Topics.css"
import Footer from '../../components/Footer/Footer'
import { conferenceTracks } from '../../data/data'

const Topics = () => {
    return (
        <>
            <Nav />

            <section className="text-gray-600 body-font mt-4">
                <div className="container px-5 py-8 mx-auto bg-[#E3F0FB] ">
                    <div className="w-full mx-auto text-center ">
                        <div className="flex items-center mb-16 mr-8 justify-center gradientColor" >
                            <h1 className='sm:text-4xl text-xl font-extrabold text-white sm:ml-12 bodyFont2 '>
                                Topics of interest include, but are not limited to, the following
                            </h1>
                        </div>

                        {conferenceTracks.map((track, trackIdx) => (
                            <React.Fragment key={track.id}>
                                <div className="text-4xl my-6 text-[#293985] font-bold bodyFont2">
                                    Track {track.id} : {track.title.toUpperCase()}
                                </div>
                                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                                    {track.topics.map((element) => (
                                        <div className="p-2 sm:w-1/2 w-full" key={element}>
                                            <div className="bg-[#57B7E7] rounded flex p-4 h-full items-center borderTopic gradientColor">
                                                <i className="fa-solid fa-lightbulb mr-4 fa-xl iconclrps"></i>
                                                <span className="font-bold text-white sm:text-[1.3] text-sm">{element}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {trackIdx < conferenceTracks.length - 1 && (
                                    <div className="text-center">
                                        <span className="inline-block h-1 w-24 rounded bg-[#a21d2e] mt-8 mb-6"></span>
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Topics;
