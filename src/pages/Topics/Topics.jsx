import React from 'react'
import Nav from '../../components/layout/Navbar/Navbar'
import "./Topics.css"
import Footer from '../../components/layout/Footer/Footer'
import { conferenceTracks } from '../../data/data'

const Topics = () => {
    return (
        <>
            <Nav />

            {/* Full-width page background */}
            <div className="topics-page-bg">
                <section className="topics-section">

                    {/* Page Header */}
                    <div className="topics-header gradientColor">
                        <h1 className="topics-header-title bodyFont2">
                            Topics of Interest
                        </h1>
                        <i className="fa-solid fa-lightbulb topics-header-icon" />
                    </div>

                    <p className="topics-subtitle">
                        Topics include, but are not limited to, the following tracks
                    </p>

                    {/* Tracks */}
                    <div className="topics-tracks-wrapper">
                        {conferenceTracks.map((track, trackIdx) => (
                            <React.Fragment key={track.id}>
                                {/* Track Header */}
                                <div className="track-header">
                                    <div className="track-number gradientColor">
                                        T{track.id}
                                    </div>
                                    <div className="track-title-wrap">
                                        <i className={`fa-solid ${track.icon} track-icon`} />
                                        <h2 className="track-title bodyFont2">
                                            Track {track.id} &mdash; {track.title}
                                        </h2>
                                    </div>
                                </div>

                                {/* Topic Pills Grid */}
                                <div className="topics-grid">
                                    {track.topics.map((element) => (
                                        <div className="topic-pill" key={element}>
                                            <i className="fa-solid fa-circle-dot topic-pill-dot" />
                                            <span className="topic-pill-text">{element}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Divider between tracks */}
                                {trackIdx < conferenceTracks.length - 1 && (
                                    <div className="track-divider">
                                        <span className="track-divider-line" />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                </section>
            </div>

            <Footer />
        </>
    )
}

export default Topics;
