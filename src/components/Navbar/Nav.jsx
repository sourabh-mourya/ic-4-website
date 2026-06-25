import React, { useState, useEffect, memo } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import hamburger from './hamburger.svg';
import close from './close.svg';
import { heroContent, navLinks } from '../../data/data';
import { assets } from '../../constants/assets';
import { ROUTES } from '../../constants/routes';

const Nav = memo((props) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  console.log("Nav component render check:", { heroContent, navLinks });

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <>
      {/* ── TOP LOGO BAR ── */}
      <nav className="container mx-auto flex items-center justify-between flex-wrap bg-white py-3 px-4 md:px-8 border-b border-gray-100">
        <div className="flex items-center flex-shrink-0 text-white">
          <div className="font-bold text-2xl cursor-pointer flex items-center">
            <Link to={ROUTES.HOME} className="flex title-font font-medium items-center text-gray-900">
              <img className="medicapsLogo lg:mt-2" src={assets.medicapsLogo} alt="Medi-Caps University" />
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex flex-grow justify-center items-center max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-center text-[1.4rem] xl:text-[1.8rem] text-[#016698] startHeading12 mt-2 headingMain font-extrabold tracking-tight leading-tight">
              {heroContent.heading} ({heroContent.shortName})
            </p>
            <p className="text-[0.9rem] font-bold text-gray-600 tracking-wide mt-1">
              {heroContent.dates} | Main Auditorium, Medi-Caps University
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <span className="hover:opacity-90 transition-opacity duration-300 nav-link1 dispNone1">
            <img src={assets.medicaps25} alt="Medi-Caps 25 Years" width={150} />
          </span>
        </div>
      </nav>

      {/* ── STICKY GLASS NAVIGATION BAR ── */}
      <div className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/50 shadow-sm navClass">
        <div className="container mx-auto flex items-center justify-between py-2.5 px-4 md:px-8">

          {/* Mobile Title Logo (shows only when mobile nav menu is closed) */}
          <div className="lg:hidden flex items-center">
            <span className="font-black text-[#016698] text-sm tracking-widest">{heroContent.shortName}</span>
          </div>

          {/* Quick Register CTA for mobile/tablet */}
          <div className="lg:hidden flex items-center gap-3 ml-auto mr-4">
            <Link to={ROUTES.REGISTER} className="click-scale">
              <button className="bg-[#a21d2e] text-white py-1 px-3 text-[0.72rem] font-bold rounded-md uppercase tracking-wider shadow-sm hover:opacity-90 transition-opacity duration-300">
                Register
              </button>
            </Link>
          </div>

          {/* Hamburger (mobile toggle) */}
          <div onClick={() => setOpen(!open)} className="text-3xl cursor-pointer lg:hidden items-center z-50">
            {!open
              ? <img src={hamburger} alt="Menu" width={30} />
              : <img src={close} alt="Close" width={30} />
            }
          </div>

          <ul className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all sideNav duration-500 ease-in navClass1 ${open ? 'top-full opacity-100 bg-[#016698]/95 backdrop-blur-lg text-white lg:bg-transparent lg:text-inherit' : 'top-[-1100px] opacity-0 lg:opacity-100'}`}>
            {navLinks.map((link) => (
              <li key={link.name} className="lg:ml-5 text-xs lg:my-0 my-6">
                <Link
                  to={link.link}
                  className={`linkText font-bold text-[0.88rem] uppercase tracking-wider transition-colors duration-300 py-1 conf-nav-link ${location.pathname === link.link
                    ? 'text-white border-l-4 border-white pl-2 lg:border-l-0 lg:border-b-2 lg:border-[#a21d2e] lg:pl-0 lg:text-[#a21d2e]'
                    : 'text-white/80 hover:text-white lg:text-[#293985] lg:hover:text-[#a21d2e]'
                    }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Collapsible Mobile Action Buttons */}
            <li className="lg:hidden mt-6 pr-9 space-y-4">
              <div className="w-full border-t border-white/20 my-4" />
              <div className="flex flex-col gap-3">
                <Link to={ROUTES.PAPER_SUBMISSION} className="w-full block click-scale">
                  <button className="w-full py-2 px-4 text-xs font-semibold rounded-lg uppercase tracking-wider bg-transparent text-white border border-white hover:bg-white hover:text-[#016698] transition-all duration-300">
                    Paper Submission
                  </button>
                </Link>

                <Link to={ROUTES.REGISTER} className="w-full block click-scale">
                  <button type="button" className="w-full py-2 px-4 text-xs font-semibold rounded-lg uppercase tracking-wider bg-[#a21d2e] text-white hover:bg-[#a21d2e]/80 transition-all duration-300">
                    Register
                  </button>
                </Link>

                <a href={assets.brochurePDF} download="conferenceBrochure" target="_blank" rel="noopener noreferrer" className="w-full block click-scale">
                  <button type="button" className="w-full py-2 px-4 text-xs font-semibold rounded-lg uppercase tracking-wider bg-white/10 text-white border border-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-1.5">
                    <i className="fa-solid fa-circle-down"></i> Brochure
                  </button>
                </a>
              </div>
            </li>
          </ul>

          <div className="hidden lg:flex justify-end items-center gap-3 ml-auto">
            {/* Paper Submission button */}
            <Link to={ROUTES.PAPER_SUBMISSION} className="click-scale">
              <button className="conf-btn-secondary py-1.5 px-4 text-xs font-semibold rounded-lg uppercase tracking-wider">
                Paper Submission
              </button>
            </Link>

            {/* Register button */}
            <Link to={ROUTES.REGISTER} className="click-scale">
              <button type="button" className="conf-btn-primary py-1.5 px-4 text-xs font-semibold rounded-lg uppercase tracking-wider">
                Register
              </button>
            </Link>

            {/* Brochure button */}
            <a href={assets.brochurePDF} download="conferenceBrochure" target="_blank" rel="noopener noreferrer" className="click-scale">
              <button type="button" className="conf-btn-accent py-1.5 px-4 text-xs font-semibold rounded-lg uppercase tracking-wider flex items-center gap-1.5">
                <i className="fa-solid fa-circle-down"></i> Brochure
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
});

Nav.displayName = 'Nav';
export default Nav;
