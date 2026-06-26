import React from 'react';
import './StartHero.css';
import home_carousel1 from '../../../assets/images/branding/newImage1.jpg';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import { assets } from '../../../constants/assets';
import { heroContent, importantDates, conferenceInfo } from '../../../data/data';
import { CONFIG } from '../../../constants/config';
import { useRegistration } from '../../../context';

const StartHero = () => {
    const { setIsRegModalOpen, setIsBrochureModalOpen } = useRegistration();

    const handleRegisterClick = (e) => {
        if (!CONFIG.REGISTRATION_ENABLED) {
            e.preventDefault();
            setIsRegModalOpen(true);
        }
    };

    const handleBrochureClick = (e) => {
        if (!CONFIG.BROCHURE_DOWNLOAD_ENABLED) {
            e.preventDefault();
            setIsBrochureModalOpen(true);
        }
    };

    return (
        <div className="hero-root">

            {/* ── Scrolling Announcement Ticker ── */}
            <div className="hero-ticker">
                <span className="hero-ticker-label">
                    <i className="fa-solid fa-bullhorn" /> &nbsp;UPDATES
                </span>
                <div className="hero-ticker-track-wrap">
                    <ul className="marquee hero-ticker-list">
                        {importantDates.map((item) => (
                            <li key={item.id} className="hero-ticker-item">
                                <i className={`fa-solid ${item.icon} hero-ticker-icon`} />
                                {item.label}&nbsp;—&nbsp;
                                <span className="hero-ticker-date">{item.date}</span>
                            </li>
                        ))}
                    </ul>
                    <ul className="marquee2 hero-ticker-list">
                        {importantDates.map((item) => (
                            <li key={item.id} className="hero-ticker-item">
                                <i className={`fa-solid ${item.icon} hero-ticker-icon`} />
                                {item.label}&nbsp;—&nbsp;
                                <span className="hero-ticker-date">{item.date}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* ── Hero Main Panel ── */}
            <div
                className="hero-panel"
                style={{ backgroundImage: `url(${home_carousel1})` }}
            >
                {/* Dark overlay */}
                <div className="hero-overlay" />

                {/* Decorative blobs */}
                <div className="hero-blob hero-blob--blue" />
                <div className="hero-blob hero-blob--red" />

                {/* Content */}
                <div className="hero-content">

                    {/* Badge */}
                    <span className="hero-badge">
                        <i className="fa-solid fa-university" />
                        &nbsp; Initiated by Medicaps University
                    </span>

                    {/* Conference edition pill */}
                    <div className="hero-edition-pill">
                        {conferenceInfo.edition} Edition
                    </div>

                    {/* Main heading */}
                    <h1 className="hero-heading bodyFont2">
                        {heroContent.heading}
                    </h1>

                    {/* Short name */}
                    <p className="hero-shortname">
                        {heroContent.shortName}
                    </p>

                    {/* Date & Venue */}
                    <div className="hero-meta">
                        <span className="hero-meta-item">
                            <i className="fa-regular fa-calendar hero-meta-icon" />
                            {conferenceInfo.dates}
                        </span>

                    </div>

                    {/* Action Buttons */}
                    <div className="hero-actions">
                        <Link to={ROUTES.REGISTER} className="click-scale" onClick={handleRegisterClick}>
                            <button className="hero-btn hero-btn--primary">
                                <i className="fa-solid fa-pen-to-square" /> Register Now
                            </button>
                        </Link>
                        <Link to={ROUTES.PAPER_SUBMISSION} className="click-scale">
                            <button className="hero-btn hero-btn--outline">
                                <i className="fa-solid fa-paper-plane" /> Submit Paper
                            </button>
                        </Link>
                        <a
                            href={assets.brochurePDF}
                            download="conferenceBrochure"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="click-scale"
                            onClick={handleBrochureClick}
                        >
                            <button className="hero-btn hero-btn--ghost">
                                <i className="fa-solid fa-circle-down" /> Brochure
                            </button>
                        </a>
                    </div>

                    {/* Scroll hint */}
                    <div className="hero-scroll-hint">
                        <i className="fa-solid fa-chevron-down hero-scroll-icon" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartHero;