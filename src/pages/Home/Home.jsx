import React, { useEffect } from 'react'
import "./Home.css"
import Nav from '../../components/layout/Navbar/Navbar'
import Footer from '../../components/layout/Footer/Footer'
import { Link } from 'react-router-dom'
import StartHero from '../../components/sections/StartHero/StartHero'
import ConferenceCard from '../../components/common/ConferenceCard'
import { useCount, useRegistration } from '../../context';
import { previousConferences, importantDates } from '../../data/data';
import { assets } from '../../constants/assets';
import { ROUTES } from '../../constants/routes';
import { CONFIG } from '../../constants/config';

const STATS = [
    { icon: 'fa-users', value: '500+', label: 'Attendees' },
    { icon: 'fa-file-lines', value: '150+', label: 'Papers' },
    { icon: 'fa-chalkboard-user', value: '6', label: 'Tracks' },
    { icon: 'fa-earth-americas', value: '10+', label: 'Countries' },
];

const QUICK_LINKS = [
    { to: ROUTES.COMMITTEES, icon: 'fa-users-gear', title: 'Committees', desc: 'View General Chairs, patrons and organizing members.' },
    { to: ROUTES.ACCEPTED_PAPERS, icon: 'fa-file-lines', title: 'Paper Guidelines', desc: 'IEEE templates, formatting rules and submission checklist.' },
    { to: ROUTES.TOPICS, icon: 'fa-lightbulb', title: 'Topics', desc: 'Explore the 6 research tracks and topics of interest.' },
    { to: ROUTES.VENUE, icon: 'fa-location-dot', title: 'Venue & Map', desc: 'Campus location, directions and accommodation tips.' },
];

const HomePage = () => {
    const { setCount } = useCount();
    const { setIsRegModalOpen } = useRegistration();


    useEffect(() => {
        const func = () => setCount(prev => prev + 1);
        window.addEventListener('load', func);
        return () => window.removeEventListener('load', func);
    }, [setCount]);

    return (
        <>
            <Nav />
            <StartHero />

            {/* ════ 1. IMPORTANT DATES ════ */}
            <section className="hp-dates" id="impDates">
                <div className="hp-container">
                    <div className="hp-section-label">
                        <span className="hp-eyebrow">Key Deadlines</span>
                        <h2 className="hp-heading bodyFont2">Important Dates</h2>
                    </div>
                    <div className="hp-dates-grid">
                        {importantDates.map((item) => (
                            <div className="hp-date-card" key={item.id}>
                                <div className="hp-date-icon-wrap">
                                    <i className={`fa-solid ${item.icon} hp-date-icon`} />
                                </div>
                                <span className="hp-date-label">{item.label}</span>
                                <span className="hp-date-value">{item.date}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════ 2. CONFERENCE SCOPE ════ */}
            <section className="hp-scope">
                <div className="hp-container hp-scope-inner">
                    <div className="hp-scope-text">
                        <span className="hp-eyebrow">About the Conference</span>
                        <h2 className="hp-heading bodyFont2">Conference Scope</h2>
                        <div className="hp-heading-bar" />
                        <p className="hp-scope-body">
                            IC4'27 is an international forum bringing together leading scholars, industry
                            experts, and visionary practitioners across Computer Science, Electronics,
                            Electrical Engineering, Instrumentation, IT, and Robotics. The conference
                            fosters cross-disciplinary collaboration to address global challenges and
                            accelerate sustainable technological innovation.
                        </p>
                        <div className="hp-scope-actions">
                            <Link to={ROUTES.REGISTER}>
                                <button className="hp-btn hp-btn--red">Register Now &rarr;</button>
                            </Link>
                            <Link to={ROUTES.TOPICS}>
                                <button className="hp-btn hp-btn--outline">View Topics</button>
                            </Link>
                        </div>
                    </div>
                    <div className="hp-scope-img-wrap">
                        <img className="hp-scope-img" src={assets.scopeImage} alt="IC4 Conference" />
                        <div className="hp-scope-img-badge">
                            <span className="hp-scope-badge-num bodyFont2">3rd</span>
                            <span className="hp-scope-badge-txt">Edition</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════ 3. STATS ════ */}
            <section className="hp-stats">
                <div className="hp-container hp-stats-inner">
                    {STATS.map(({ icon, value, label }) => (
                        <div className="hp-stat" key={label}>
                            <i className={`fa-solid ${icon} hp-stat-icon`} />
                            <span className="hp-stat-value bodyFont2">{value}</span>
                            <span className="hp-stat-label">{label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ════ 4. QUICK LINKS ════ */}
            <section className="hp-links">
                <div className="hp-container">
                    <span className="hp-eyebrow">Navigate</span>
                    <h2 className="hp-heading bodyFont2">Quick Access</h2>
                    <div className="hp-heading-bar" />
                    <div className="hp-links-grid">
                        {QUICK_LINKS.map(({ to, icon, title, desc }) => (
                            <Link to={to} className="hp-link-card" key={title}>
                                <div className="hp-link-icon">
                                    <i className={`fa-solid ${icon}`} />
                                </div>
                                <div className="hp-link-body">
                                    <h3 className="hp-link-title">{title}</h3>
                                    <p className="hp-link-desc">{desc}</p>
                                </div>
                                <i className="fa-solid fa-chevron-right hp-link-arrow" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════ 5. PREVIOUS CONFERENCES ════ */}
            <section className="hp-prev">
                <div className="hp-container">
                    <span className="hp-eyebrow">Legacy</span>
                    <h2 className="hp-heading bodyFont2">Previous Conferences</h2>
                    <div className="hp-heading-bar" />
                    <div className="hp-prev-grid">
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

            {/* ════ 6. PAPER SUBMISSION CTA ════ */}
            <section className="hp-cta">
                <div className="hp-container hp-cta-inner">
                    <div className="hp-cta-text">
                        <span className="hp-eyebrow">Call for Papers</span>
                        <h2 className="hp-heading bodyFont2">Submit Your Research</h2>
                        <p className="hp-cta-desc">
                            Authors are invited to submit original, unpublished work. All accepted papers
                            will be published in IEEE Xplore and indexed in major databases.
                        </p>
                        <div className="hp-cta-actions">
                            <Link to={ROUTES.PAPER_SUBMISSION}>
                                <button className="hp-btn hp-btn--red">Submit Paper &rarr;</button>
                            </Link>
                            <Link to={ROUTES.ACCEPTED_PAPERS}>
                                <button className="hp-btn hp-btn--outline">Guidelines</button>
                            </Link>
                        </div>
                    </div>
                    <div className="hp-cta-visual">
                        <div className="hp-cta-circle">
                            <i className="fa-solid fa-paper-plane hp-cta-circle-icon" />
                        </div>
                        <div className="hp-cta-ieee">
                            <i className="fa-solid fa-certificate" />
                            <span>IEEE Indexed</span>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default HomePage;