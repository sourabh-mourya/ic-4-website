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

            {/* ── Announcement Ticker ── */}
            <div className="hero-ticker">
                <span className="hero-ticker-label">
                    <i className="fa-solid fa-bullhorn" /> &nbsp;UPDATES
                </span>
                <div className="hero-ticker-track-wrap">
                    <ul className="hero-ticker-list hero-ticker-track">
                        {importantDates.map((item) => (
                            <li key={item.id} className="hero-ticker-item">
                                <i className={`fa-solid ${item.icon} hero-ticker-icon`} />
                                {item.label}&nbsp;—&nbsp;
                                <span className="hero-ticker-date">{item.date}</span>
                            </li>
                        ))}
                        {/* Duplicate set — required for seamless infinite scroll */}
                        {importantDates.map((item) => (
                            <li key={`dup-${item.id}`} className="hero-ticker-item" aria-hidden="true">
                                <i className={`fa-solid ${item.icon} hero-ticker-icon`} />
                                {item.label}&nbsp;—&nbsp;
                                <span className="hero-ticker-date">{item.date}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* ── Hero Split Panel ── */}
            <div className="hero-split">

                {/* Left — Text Content (light) */}
                <div className="hero-left">

                    {/* Top labels */}
                    <div className="hero-left-labels">
                        <span className="hero-org-badge">
                            <i className="fa-solid fa-building-columns" />
                            Medicaps University
                        </span>
                        <span className="hero-edition-tag">
                            {conferenceInfo.edition} Edition
                        </span>
                    </div>

                    {/* Conference name */}
                    <h1 className="hero-title bodyFont2">
                        {heroContent.heading}
                    </h1>

                    {/* Short name */}
                    <p className="hero-abbr">({heroContent.shortName})</p>

                    {/* Date + Location row */}
                    <div className="hero-info-row">
                        <div className="hero-info-chip">
                            <i className="fa-regular fa-calendar" />
                            <span>{conferenceInfo.dates}</span>
                        </div>
                        <div className="hero-info-chip">
                            <i className="fa-solid fa-location-dot" />
                            <span>Indore, India</span>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="hero-left-divider" />

                    {/* Action buttons */}
                    <div className="hero-actions">
                        <Link to={ROUTES.REGISTER} onClick={handleRegisterClick}>
                            <button className="hero-btn hero-btn--primary">
                                <i className="fa-solid fa-pen-to-square" /> Register Now
                            </button>
                        </Link>
                        <Link to={ROUTES.PAPER_SUBMISSION}>
                            <button className="hero-btn hero-btn--secondary">
                                <i className="fa-solid fa-paper-plane" /> Submit Paper
                            </button>
                        </Link>
                        <a
                            href={assets.brochurePDF}
                            download="conferenceBrochure"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleBrochureClick}
                        >
                            <button className="hero-btn hero-btn--ghost">
                                <i className="fa-solid fa-circle-down" /> Brochure
                            </button>
                        </a>
                    </div>

                    {/* IEEE note */}
                    <p className="hero-ieee-note">
                        <i className="fa-solid fa-certificate" />
                        &nbsp; Papers published in IEEE Xplore &amp; indexed in Scopus
                    </p>
                </div>

                {/* Right — Photo panel */}
                <div className="hero-right">
                    <div className="hero-photo-wrap">
                        <img
                            src={home_carousel1}
                            alt="IC4 Conference"
                            className="hero-photo"
                        />
                        <div className="hero-photo-overlay" />

                        {/* Floating stat cards */}
                        <div className="hero-float-card hero-float-card--tl">
                            <span className="hero-float-num bodyFont2">500+</span>
                            <span className="hero-float-lbl">Attendees</span>
                        </div>
                        <div className="hero-float-card hero-float-card--br">
                            <span className="hero-float-num bodyFont2">10+</span>
                            <span className="hero-float-lbl">Countries</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default StartHero;
