// import React from 'react';
// import './StartHero.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import home_carousel1 from '../../img/newImage1.jpg';
// import { Link } from 'react-router-dom';
// import { ROUTES } from '../../constants/routes';
// import { assets } from '../../constants/assets';
// import { heroContent, importantDates, conferenceInfo } from '../../data/data';

// const StartHero = (props) => {
//     return (
//         <div className="relative overflow-hidden bg-slate-950 text-white z-[1]">
//             {/* Ticker / Announcement Marquee */}
//             <article className="bg-[#E3F0FB]/5 backdrop-blur-sm py-2">
//                 <div className="wrapper">
//                     <ul className="marquee text-white/95">
//                         {importantDates.map((item) => (
//                             <li key={item.id}>
//                                 {item.label} - <span className="text-[#ef4444] font-bold">{item.date}</span>
//                             </li>
//                         ))}
//                     </ul>
//                     <ul className="marquee2 text-white/95">
//                         {importantDates.map((item) => (
//                             <li key={item.id}>
//                                 {item.label} - <span className="text-[#ef4444] font-bold">{item.date}</span>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </article>

//             {/* Hero Main Panel */}
//             <div
//                 className="relative min-h-[500px] md:min-h-[560px] flex items-center justify-center bg-cover bg-center"
//                 style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.78), rgba(15, 23, 42, 0.88)), url(${home_carousel1})` }}
//             >
//                 <div className="container mx-auto px-6 py-16 text-center z-10 flex flex-col items-center">
//                     <span className="bg-[#a21d2e] text-white text-xs font-bold uppercase px-3 py-1.5 rounded-full tracking-widest mb-6 animate-pulse shadow-lg">
//                         Initiated By MediCaps University
//                     </span>
//                     <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight max-w-4xl text-center leading-tight font-heading">
//                         {heroContent.heading}
//                     </h1>
//                     <p className="text-lg sm:text-xl font-bold text-[#57b7e7] mt-3 tracking-widest uppercase">
//                         ({heroContent.shortName})
//                     </p>
//                     <p className="text-sm sm:text-lg text-gray-300 max-w-2xl mt-4 font-medium">
//                         {conferenceInfo.dates} | {conferenceInfo.venue}, Indore
//                     </p>

//                     {/* Action Buttons */}
//                     <div className="flex flex-wrap justify-center gap-4 mt-8">
//                         <Link to={ROUTES.REGISTER} className="click-scale">
//                             <button className="py-2.5 px-6 text-xs sm:text-sm tracking-wider uppercase font-semibold bg-[#a21d2e] text-white rounded-lg hover:bg-[#861726] transition duration-150 shadow">
//                                 Register Now
//                             </button>
//                         </Link>
//                         <Link to={ROUTES.PAPER_SUBMISSION} className="click-scale">
//                             <button className="py-2.5 px-6 text-xs sm:text-sm tracking-wider uppercase font-semibold bg-transparent text-white border-2 border-white rounded-lg hover:bg-white hover:text-[#016698] transition duration-150">
//                                 Submit Paper
//                             </button>
//                         </Link>
//                         <a href={assets.brochurePDF} download="conferenceBrochure" target="_blank" rel="noopener noreferrer" className="click-scale">
//                             <button className="py-2.5 px-6 text-xs sm:text-sm tracking-wider uppercase font-semibold bg-[#016698] text-white rounded-lg hover:bg-[#014f75] transition duration-150 shadow flex items-center gap-2">
//                                 <i className="fa-solid fa-circle-down"></i> Brochure
//                             </button>
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default StartHero;

import React from 'react';
import './StartHero.css';
import 'bootstrap/dist/css/bootstrap.css';
import home_carousel1 from '../../img/newImage1.jpg';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { assets } from '../../constants/assets';
import { heroContent, importantDates, conferenceInfo } from '../../data/data';
import { CONFIG } from '../../constants/config';
import { useRegistration } from '../../Context/context';

const StartHero = (props) => {
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
        <div className="relative overflow-hidden bg-slate-950 text-white z-[1]">
            {/* Ticker / Announcement Marquee */}
            <article className="bg-[#E3F0FB]/5 backdrop-blur-sm py-2">
                <div className="wrapper">
                    <ul className="marquee text-white/95">
                        {importantDates.map((item) => (
                            <li key={item.id}>
                                {item.label} - <span className="text-[#ef4444] font-bold">{item.date}</span>
                            </li>
                        ))}
                    </ul>
                    <ul className="marquee2 text-white/95">
                        {importantDates.map((item) => (
                            <li key={item.id}>
                                {item.label} - <span className="text-[#ef4444] font-bold">{item.date}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </article>

            {/* Hero Main Panel */}
            <div
                className="relative min-h-[500px] md:min-h-[560px] flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.78), rgba(15, 23, 42, 0.88)), url(${home_carousel1})` }}
            >
                <div className="container mx-auto px-6 py-16 text-center z-10 flex flex-col items-center">
                    <span className="bg-[#a21d2e] text-white text-xs font-bold uppercase px-3 py-1.5 rounded-full tracking-widest mb-6 animate-pulse shadow-lg">
                        Initiated By Medicaps University
                    </span>
                    <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight max-w-4xl text-center leading-tight font-heading" style={{ color: 'white', WebkitTextFillColor: 'white' }}>
                        {heroContent.heading}
                    </h1>
                    <p className="text-lg sm:text-xl font-bold text-[#57b7e7] mt-3 tracking-widest uppercase">
                        ({heroContent.shortName})
                    </p>
                    <p className="text-sm sm:text-lg text-gray-300 max-w-2xl mt-4 font-medium">
                        {conferenceInfo.dates}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        <Link to={ROUTES.REGISTER} className="click-scale" onClick={handleRegisterClick}>
                            <button className="py-2.5 px-6 text-xs sm:text-sm tracking-wider uppercase font-semibold bg-[#a21d2e] text-white rounded-lg hover:bg-[#861726] transition duration-150 shadow">
                                Register Now
                            </button>
                        </Link>
                        <Link to={ROUTES.PAPER_SUBMISSION} className="click-scale">
                            <button className="py-2.5 px-6 text-xs sm:text-sm tracking-wider uppercase font-semibold bg-transparent text-white border-2 border-white rounded-lg hover:bg-white hover:text-[#016698] transition duration-150">
                                Submit Paper
                            </button>
                        </Link>
                        <a href={assets.brochurePDF} download="conferenceBrochure" target="_blank" rel="noopener noreferrer" className="click-scale" onClick={handleBrochureClick}>
                            <button className="py-2.5 px-6 text-xs sm:text-sm tracking-wider uppercase font-semibold bg-[#016698] text-white rounded-lg hover:bg-[#014f75] transition duration-150 shadow flex items-center gap-2">
                                <i className="fa-solid fa-circle-down"></i> Brochure
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StartHero;