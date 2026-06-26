import React, { useState, useEffect, memo } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import hamburger from './hamburger.svg';
import close from './close.svg';
import { heroContent, navLinks } from '../../data/data';
import { assets } from '../../constants/assets';
import { ROUTES } from '../../constants/routes';
import { CONFIG } from '../../constants/config';
import { useRegistration } from '../../Context/context';

const Nav = memo((props) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const { setIsRegModalOpen, setIsBrochureModalOpen } = useRegistration();

  const handleRegisterClick = (e) => {
    if (!CONFIG.REGISTRATION_ENABLED) {
      e.preventDefault();
      setIsRegModalOpen(true);
      setOpen(false);
    }
  };

  const handleBrochureClick = (e) => {
    if (!CONFIG.BROCHURE_DOWNLOAD_ENABLED) {
      e.preventDefault();
      setIsBrochureModalOpen(true);
      setOpen(false);
    }
  };

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <>
      {/* ── TOP LOGO BAR ── */}
      <nav className="w-full bg-white border-b border-gray-100">
        <div className="w-full flex items-center justify-between px-4 md:px-10 lg:px-16 py-3 md:py-4">

          {/* Left: Medicaps Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to={ROUTES.HOME}>
              <img
                src={assets.medicapsLogo}
                alt="Medicaps University"
                className="w-[90px] sm:w-[120px] md:w-[150px] lg:w-[170px]"
              />
            </Link>
          </div>

          {/* Center: Conference Title */}
          <div className="flex-1 text-center px-2 md:px-8">
            <p className="text-[0.78rem] sm:text-[1rem] md:text-[1.3rem] lg:text-[1.6rem] headingMain font-extrabold tracking-tight leading-tight">
              {heroContent.heading} ({heroContent.shortName})
            </p>
            <p className="text-[0.62rem] sm:text-[0.75rem] md:text-[0.85rem] font-bold text-gray-600 tracking-wide mt-1">
              {heroContent.dates}
            </p>
          </div>

          {/* Right: 25 Years Badge */}
          <div className="flex-shrink-0">
            <img
              src={assets.medicaps25}
              alt="Medicaps 25 Years"
              className="w-[45px] sm:w-[65px] md:w-[90px] lg:w-[115px]"
            />
          </div>

        </div>
      </nav>

      {/* ── STICKY NAVBAR ── */}
      <div className="w-full sticky top-0 z-[100] bg-white border-b border-gray-200 shadow-sm">
        <div className="w-full flex items-center justify-between px-4 md:px-10 lg:px-16 py-2.5 relative">

          {/* Mobile: Short name */}
          <div className="lg:hidden flex items-center">
            <span className="font-black text-[#016698] text-sm tracking-widest">
              {heroContent.shortName}
            </span>
          </div>

          {/* Mobile: Register + Hamburger */}
          <div className="lg:hidden flex items-center gap-2 ml-auto">
            <Link to={ROUTES.REGISTER} onClick={handleRegisterClick}>
              <button className="px-3 py-1 bg-[#016698] text-white text-[0.68rem] font-bold uppercase rounded-md">
                Register
              </button>
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="focus:outline-none p-1"
              aria-label="Toggle menu"
            >
              {!open
                ? <img src={hamburger} alt="Menu" width={28} />
                : <img src={close} alt="Close" width={28} />
              }
            </button>
          </div>

          {/* ── MOBILE FULLSCREEN MENU ── */}
          {open && (
            <div className="lg:hidden fixed inset-0 w-full h-full bg-[#016698] z-[9999] flex flex-col overflow-y-auto">

              {/* Overlay Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/20 flex-shrink-0">
                <Link to={ROUTES.HOME} onClick={() => setOpen(false)}>
                  <img src={assets.medicapsLogo} alt="Medicaps" className="w-[100px] brightness-0 invert" />
                </Link>
                <button onClick={() => setOpen(false)} className="focus:outline-none">
                  <img src={close} alt="Close" width={30} />
                </button>
              </div>

              {/* Nav Links */}
              <ul className="flex flex-col px-6 py-2 flex-1">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.link}
                      onClick={() => setOpen(false)}
                      className={`flex items-center py-3.5 text-[0.9rem] font-bold uppercase tracking-wider border-b border-white/10 transition-colors duration-200
                        ${location.pathname === link.link
                          ? 'text-yellow-300'
                          : 'text-white hover:text-yellow-200'
                        }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Mobile Action Buttons */}
              <div className="flex flex-col gap-3 px-6 py-6 flex-shrink-0">
                <Link to={ROUTES.PAPER_SUBMISSION} onClick={() => setOpen(false)}>
                  <button className="w-full py-3 bg-white text-[#016698] text-sm font-bold uppercase rounded-xl hover:bg-gray-100 transition duration-150 tracking-wider">
                    Paper Submission
                  </button>
                </Link>
                <Link to={ROUTES.REGISTER} onClick={handleRegisterClick}>
                  <button className="w-full py-3 bg-white text-[#016698] text-sm font-bold uppercase rounded-xl hover:bg-gray-100 transition duration-150 tracking-wider">
                    Register
                  </button>
                </Link>
                <a
                  href={assets.brochurePDF}
                  download="conferenceBrochure"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleBrochureClick}
                >
                  <button className="w-full py-3 bg-[#cc0000] text-white text-sm font-bold uppercase rounded-xl hover:bg-[#a21d2e] transition duration-150 flex items-center justify-center gap-2 tracking-wider">
                    <i className="fa-solid fa-circle-down"></i> Download Brochure
                  </button>
                </a>
              </div>

            </div>
          )}

          {/* ── DESKTOP NAV LINKS ── */}
          <ul className="hidden lg:flex items-center justify-center flex-1 gap-20 xl:gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.link}
                  className={`conf-nav-link font-bold text-[0.72rem] xl:text-[0.8rem] uppercase tracking-wider transition-colors duration-200 pb-1 whitespace-nowrap
                    ${location.pathname === link.link
                      ? 'text-[#a21d2e] border-b-2 border-[#a21d2e]'
                      : 'text-[#293985] hover:text-[#a21d2e]'
                    }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* ── DESKTOP ACTION BUTTONS ── */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <Link to={ROUTES.PAPER_SUBMISSION}>
              <button className="px-5 py-2.5 bg-[#016698] text-white text-[0.72rem] font-bold uppercase rounded-lg hover:bg-[#014f75] shadow hover:shadow-md transition duration-150 whitespace-nowrap">
                Paper Submission
              </button>
            </Link>
            <Link to={ROUTES.REGISTER} onClick={handleRegisterClick}>
              <button className="px-5 py-2.5 bg-[#016698] text-white text-[0.72rem] font-bold uppercase rounded-lg hover:bg-[#014f75] shadow hover:shadow-md transition duration-150 whitespace-nowrap">
                Register
              </button>
            </Link>
            <a href={assets.brochurePDF} download="conferenceBrochure" target="_blank" rel="noopener noreferrer" onClick={handleBrochureClick}>
              <button className="px-5 py-2.5 bg-[#cc0000] text-white text-[0.72rem] font-bold uppercase rounded-lg hover:bg-[#a21d2e] shadow hover:shadow-md transition duration-150 flex items-center gap-2 whitespace-nowrap">
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

// import React, { useState, useEffect, memo } from 'react';
// import './Navbar.css';
// import { Link, useLocation } from 'react-router-dom';
// import hamburger from './hamburger.svg';
// import close from './close.svg';
// import { heroContent, navLinks } from '../../data/data';
// import { assets } from '../../constants/assets';
// import { ROUTES } from '../../constants/routes';

// const Nav = memo((props) => {
//   const location = useLocation();
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     setOpen(false);
//   }, [location]);

//   return (
//     <>
//       {/* ── TOP LOGO BAR ── */}
//       <nav className="w-full bg-white border-b border-gray-100">
//         <div className="w-full flex items-center justify-between px-4 md:px-10 lg:px-16 py-3">

//           {/* Left: Logo */}
//           <div className="flex-shrink-0">
//             <Link to={ROUTES.HOME}>
//               <img
//                 src={assets.medicapsLogo}
//                 alt="Medi-Caps University"
//                 className="w-[100px] md:w-[140px] lg:w-[160px]"
//               />
//             </Link>
//           </div>

//           {/* Center: Title */}
//           <div className="flex-1 text-center px-3 md:px-8">
//             <p className="text-[0.95rem] md:text-[1.2rem] lg:text-[1.5rem] headingMain font-extrabold tracking-tight leading-tight">
//               {heroContent.heading} ({heroContent.shortName})
//             </p>
//             <p className="text-[0.7rem] md:text-[0.82rem] font-bold text-gray-600 tracking-wide mt-1">
//               {heroContent.dates}
//             </p>
//           </div>

//           {/* Right: 25yr badge — visible on all screens */}
//           <div className="flex-shrink-0">
//             <img src={assets.medicaps25} alt="25 Years" className="w-[55px] md:w-[80px] lg:w-[110px]" />
//           </div>

//         </div>
//       </nav>

//       {/* ── STICKY NAVBAR ── */}
//       <div className="w-full sticky top-0 z-[100] bg-white border-b border-gray-200 shadow-sm">
//         <div className="w-full flex items-center justify-between px-4 md:px-10 lg:px-16 py-2 relative">

//           {/* Mobile: short name left */}
//           <div className="lg:hidden">
//             <span className="font-black text-[#016698] text-sm tracking-widest">{heroContent.shortName}</span>
//           </div>

//           {/* Mobile: Register + Hamburger right */}
//           <div className="lg:hidden flex items-center gap-2 ml-auto">
//             <Link to={ROUTES.REGISTER}>
//               <button className="px-3 py-1 bg-[#016698] text-white text-[0.68rem] font-bold uppercase rounded-md">
//                 Register
//               </button>
//             </Link>
//             <button onClick={() => setOpen(!open)} className="focus:outline-none p-1">
//               {!open
//                 ? <img src={hamburger} alt="Menu" width={28} />
//                 : <img src={close} alt="Close" width={28} />
//               }
//             </button>
//           </div>

//           {/* ── MOBILE FULLSCREEN MENU OVERLAY ── */}
//           {open && (
//             <div className="lg:hidden fixed inset-0 top-0 left-0 w-full h-full bg-[#016698] z-[9999] flex flex-col overflow-y-auto">

//               {/* Header inside overlay */}
//               <div className="flex items-center justify-between px-6 py-4 border-b border-white/20">
//                 <span className="font-black text-white text-lg tracking-widest">{heroContent.shortName}</span>
//                 <button onClick={() => setOpen(false)} className="focus:outline-none">
//                   <img src={close} alt="Close" width={28} />
//                 </button>
//               </div>

//               {/* Nav Links */}
//               <ul className="flex flex-col px-6 py-4 gap-1">
//                 {navLinks.map((link) => (
//                   <li key={link.name}>
//                     <Link
//                       to={link.link}
//                       onClick={() => setOpen(false)}
//                       className={`block py-3 text-[0.95rem] font-bold uppercase tracking-wider border-b border-white/10 transition-colors duration-200
//                         ${location.pathname === link.link
//                           ? 'text-yellow-300'
//                           : 'text-white hover:text-yellow-200'
//                         }`}
//                     >
//                       {link.name}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>

//               {/* Action Buttons */}
//               <div className="flex flex-col gap-3 px-6 py-4 mt-2">
//                 <Link to={ROUTES.PAPER_SUBMISSION} onClick={() => setOpen(false)}>
//                   <button className="w-full py-3 bg-white text-[#016698] text-sm font-bold uppercase rounded-lg hover:bg-gray-100 transition duration-150">
//                     Paper Submission
//                   </button>
//                 </Link>
//                 <Link to={ROUTES.REGISTER} onClick={() => setOpen(false)}>
//                   <button className="w-full py-3 bg-white text-[#016698] text-sm font-bold uppercase rounded-lg hover:bg-gray-100 transition duration-150">
//                     Register
//                   </button>
//                 </Link>
//                 <a href={assets.brochurePDF} download="conferenceBrochure" target="_blank" rel="noopener noreferrer">
//                   <button className="w-full py-3 bg-[#ff0000] text-white text-sm font-bold uppercase rounded-lg hover:bg-[#a21d2e] transition duration-150 flex items-center justify-center gap-2">
//                     <i className="fa-solid fa-circle-down"></i> Download Brochure
//                   </button>
//                 </a>
//               </div>

//             </div>
//           )}

//           {/* ── DESKTOP NAV LINKS ── */}
//           <ul className="hidden lg:flex items-center justify-center flex-1 gap-3 xl:gap-6">
//             {navLinks.map((link) => (
//               <li key={link.name}>
//                 <Link
//                   to={link.link}
//                   className={`conf-nav-link font-bold text-[0.75rem] xl:text-[0.8rem] uppercase tracking-wider transition-colors duration-200 pb-1 whitespace-nowrap
//                     ${location.pathname === link.link
//                       ? 'text-[#a21d2e] border-b-2 border-[#a21d2e]'
//                       : 'text-[#293985] hover:text-[#a21d2e]'
//                     }`}
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* ── DESKTOP ACTION BUTTONS ── */}
//           <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
//             <Link to={ROUTES.PAPER_SUBMISSION}>
//               <button className="px-5 py-2.5 bg-[#016698] text-white text-[0.72rem] font-bold uppercase rounded-lg hover:bg-[#014f75] shadow hover:shadow-md transition duration-150 whitespace-nowrap">
//                 Paper Submission
//               </button>
//             </Link>
//             <Link to={ROUTES.REGISTER}>
//               <button className="px-5 py-2.5 bg-[#016698] text-white text-[0.72rem] font-bold uppercase rounded-lg hover:bg-[#014f75] shadow hover:shadow-md transition duration-150 whitespace-nowrap">
//                 Register
//               </button>
//             </Link>
//             <a href={assets.brochurePDF} download="conferenceBrochure" target="_blank" rel="noopener noreferrer">
//               <button className="px-5 py-2.5 bg-[#cc0000] text-white text-[0.72rem] font-bold uppercase rounded-lg hover:bg-[#a21d2e] shadow hover:shadow-md transition duration-150 flex items-center gap-2 whitespace-nowrap">
//                 <i className="fa-solid fa-circle-down"></i> Brochure
//               </button>
//             </a>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// });

// Nav.displayName = 'Nav';
// export default Nav;