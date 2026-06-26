import React, { useEffect } from 'react'
import "./Home.css"
import Nav from '../../components/layout/Navbar/Navbar'
import Footer from '../../components/layout/Footer/Footer'
import { Link } from 'react-router-dom'
import StartHero from '../../components/sections/StartHero/StartHero'
import ImportantDates from '../../components/common/ImportantDates'
import ConferenceCard from '../../components/common/ConferenceCard'
import { useCount, useRegistration } from '../../context';
import { previousConferences } from '../../data/data';
import { assets } from '../../constants/assets';
import { ROUTES } from '../../constants/routes';
import { CONFIG } from '../../constants/config';

const HomePage = () => {
    const { setCount } = useCount();
    const { setIsRegModalOpen } = useRegistration();

    const handleRegisterClick = (e) => {
        if (!CONFIG.REGISTRATION_ENABLED) {
            e.preventDefault();
            setIsRegModalOpen(true);
        }
    };

    useEffect(() => {
        const func = () => {
            console.log("page is fully loaded");
            setCount(prev => prev + 1);
        }
        window.addEventListener("load", func);
        return () => window.removeEventListener("load", func);
    }, [setCount]);

    return (
        <>
            {/* Nav & Hero Banner */}
            <Nav />
            <StartHero />

            {/* Important Dates Section */}
            <section className="home-imp-dates" id="impDates">
                <ImportantDates />
            </section>

            {/* ── Conference Scope ── */}
            <section className="home-scope-section">
                <div className="home-scope-card">
                    <div className="home-scope-text">
                        <span className="home-section-eyebrow">Scope of Event</span>
                        <h2 className="home-section-heading font-heading">Conference Scope</h2>
                        <p className="home-scope-body">
                            The objective of this international conference is to foster a dynamic exchange of knowledge and
                            innovation across the domains of mechanical, civil, electrical, and computer engineering. By
                            bringing together leading scholars, industry experts, and visionary practitioners, the conference
                            aims to strengthen academic-industry collaboration and provide a forum for the dissemination of
                            pioneering research, advanced technologies, and future-oriented solutions. Emphasizing
                            interdisciplinary synergy, the event is aimed at addressing pressing global challenges while
                            promoting sustainable, cutting-edge practices.
                        </p>
                        <Link to={ROUTES.REGISTER} className="click-scale" onClick={handleRegisterClick}>
                            <button className="conf-btn-primary">Register Now &rarr;</button>
                        </Link>
                    </div>

                    <div className="home-scope-img-wrap">
                        <div className="home-scope-img-inner">
                            <img
                                className="home-scope-img"
                                alt="IC4 Conference Scope"
                                src={assets.scopeImage}
                            />
                            <div className="home-scope-img-overlay" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Statistics ── */}
            <section className="home-stats-section">
                <div className="home-stats-inner">
                    {[
                        { icon: 'fa-users',            value: '500+', label: 'Attendees' },
                        { icon: 'fa-file-invoice',     value: '150+', label: 'Papers Submitted' },
                        { icon: 'fa-chalkboard-user',  value: '85+',  label: 'Sessions' },
                        { icon: 'fa-earth-americas',   value: '10+',  label: 'Countries' },
                    ].map(({ icon, value, label }) => (
                        <div className="home-stat-card" key={label}>
                            <div className="home-stat-icon-wrap">
                                <i className={`fa-solid ${icon} home-stat-icon`} />
                            </div>
                            <p className="home-stat-value bodyFont2">{value}</p>
                            <p className="home-stat-label">{label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Quick Links ── */}
            <section className="home-quicklinks-section">
                <div className="home-quicklinks-inner">
                    <div className="home-quicklinks-header">
                        <span className="home-section-eyebrow home-section-eyebrow--light">Explore More</span>
                        <h2 className="home-section-heading home-section-heading--light font-heading">Quick Links</h2>
                    </div>

                    <div className="home-quicklinks-grid">
                        {[
                            {
                                to: ROUTES.COMMITTEES,
                                icon: 'fa-user-large',
                                title: 'Program Committee',
                                desc: 'Meet the General Chairs, patrons, and organizing members.',
                            },
                            {
                                to: ROUTES.ACCEPTED_PAPERS,
                                icon: 'fa-newspaper',
                                title: 'Paper Guidelines',
                                desc: 'Download IEEE templates and review submission guidelines.',
                            },
                            {
                                to: ROUTES.VENUE,
                                icon: 'fa-location-pin',
                                title: 'Venue & Map',
                                desc: 'Find directions, local accommodation, and the campus map.',
                            },
                        ].map(({ to, icon, title, desc }) => (
                            <Link to={to} className="click-scale home-ql-link" key={title}>
                                <div className="home-ql-card">
                                    <div className="home-ql-icon-wrap">
                                        <i className={`fa-solid ${icon} home-ql-icon`} />
                                    </div>
                                    <h3 className="home-ql-title font-heading">{title}</h3>
                                    <p className="home-ql-desc">{desc}</p>
                                    <span className="home-ql-cta">Explore Details &rarr;</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Collaborations ── */}
            <section className="home-collab-section">
                <div className="home-collab-card">
                    <span className="home-section-eyebrow">Updates &amp; Partners</span>
                    <h2 className="home-section-heading font-heading">Media &amp; Collaborations</h2>
                    <p className="home-collab-desc">
                        We are currently aligning partners and media agencies. Declarations and details will be displayed here soon.
                    </p>
                    <div className="home-collab-badge">
                        <i className="fa-solid fa-circle-info home-collab-badge-icon" />
                        Under Preparation
                    </div>
                </div>
            </section>

            {/* ── Previous Conferences ── */}
            <section className="home-prev-section">
                <div className="home-prev-inner">
                    <span className="home-section-eyebrow">Past Events</span>
                    <h2 className="home-section-heading font-heading">Previous Conferences</h2>
                    <span className="home-section-divider" />

                    <div className="home-prev-grid">
                        {previousConferences.map((conf) => (
                            <ConferenceCard
                                key={conf.id}
                                title={conf.title}
                                year={conf.year}
                                link={conf.link}
                                image={assets[conf.image]}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Paper Submission CTA ── */}
            <section className="home-cta-section">
                <div className="home-cta-inner gradientColor">
                    <div className="home-cta-glow" />
                    <div className="home-cta-content">
                        <i className="fa-solid fa-paper-plane home-cta-icon" />
                        <h2 className="home-cta-title font-heading">Submit Your Research Paper</h2>
                        <p className="home-cta-body">
                            Authors are invited to submit original, unpublished papers through our conference submission
                            system. Papers should not be under consideration for publication elsewhere.
                        </p>
                        <Link to={ROUTES.PAPER_SUBMISSION} className="click-scale">
                            <button className="home-cta-btn">Submit Your Paper &rarr;</button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </>
    )
}

export default HomePage