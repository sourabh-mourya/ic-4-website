import React from 'react'
import Footer from '../../components/layout/Footer/Footer'
import './Venue.css'
import Nav from '../../components/layout/Navbar/Navbar'
import PageHeader from '../../components/common/PageHeader'
import '../../components/common/PageHeader.css'
import { venueInfo } from '../../data/data'

const Venue = () => {
    return (
        <>
            <Nav />
            <PageHeader
                eyebrow="Conference Location"
                title="Venue & Directions"
                desc="IC4'27 will be held at Medicaps University, Indore — a premier institution in central India."
            />

            <div className="page-body">
                <div className="page-container">

                    {/* Main venue card */}
                    <div className="venue-main-grid">

                        {/* Address panel */}
                        <div className="venue-info-panel">
                            <div className="venue-icon-wrap">
                                <i className="fa-solid fa-map-location-dot" />
                            </div>
                            <h2 className="venue-name bodyFont2">Medicaps University</h2>
                            <p className="venue-subname">{venueInfo.name}</p>

                            <div className="venue-details">
                                <div className="venue-detail-row">
                                    <i className="fa-solid fa-location-dot venue-detail-icon venue-detail-icon--red" />
                                    <p className="venue-detail-text">{venueInfo.address}</p>
                                </div>
                                <div className="venue-detail-row">
                                    <i className="fa-solid fa-phone venue-detail-icon venue-detail-icon--navy" />
                                    <p className="venue-detail-text">{venueInfo.phones.join(' | ')}</p>
                                </div>
                                <div className="venue-detail-row">
                                    <i className="fa-solid fa-envelope venue-detail-icon venue-detail-icon--navy" />
                                    <a href={`mailto:${venueInfo.email}`} className="venue-email-link">
                                        {venueInfo.email}
                                    </a>
                                </div>
                            </div>

                            <a
                                href="https://maps.google.com/?q=Medi-Caps+University+Indore"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="page-btn page-btn--navy venue-map-btn">
                                    <i className="fa-solid fa-map-pin" /> Open in Google Maps
                                </button>
                            </a>
                        </div>

                        {/* Map */}
                        <div className="venue-map-wrap">
                            <iframe
                                className="venue-map-iframe"
                                title="Medicaps University Location Map"
                                scrolling="no"
                                marginHeight="0"
                                marginWidth="0"
                                src={venueInfo.mapSrc}
                            />
                        </div>
                    </div>

                    {/* Partner */}
                    <div className="venue-partner-card">
                        <div className="venue-partner-label">
                            <span className="page-section-eyebrow">International Partner</span>
                            <h2 className="page-section-heading bodyFont2">Co-Venue</h2>
                            <span className="page-section-bar" />
                        </div>
                        <div className="venue-partner-body">
                            <div>
                                <h3 className="venue-partner-name">Aivancity School of AI and Data for Business and Society</h3>
                                <p className="venue-partner-desc">
                                    <i className="fa-solid fa-location-dot venue-detail-icon venue-detail-icon--red" style={{marginRight: '8px'}} />
                                    151, Boulevard Maxime Gorki, Villejuif, France<br/><br/>
                                    <i className="fa-solid fa-phone venue-detail-icon venue-detail-icon--navy" style={{marginRight: '8px'}} />
                                    Phone: +33 (0) 1 88 38 03 00
                                </p>
                            </div>
                            <a
                                href="https://aivancity.ai"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="page-btn page-btn--primary venue-partner-btn">
                                    View Program Details
                                </button>
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    )
}

export default Venue