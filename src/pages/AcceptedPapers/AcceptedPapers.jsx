import React from 'react';
import Footer from '../../components/layout/Footer/Footer';
import Nav from '../../components/layout/Navbar/Navbar';
import { assets } from '../../constants/assets';
import './AcceptedPapers.css';

const AcceptedPapers = () => {
  return (
    <>
      <Nav />
      
      {/* Hero Section */}
      <section className="py-16 text-center text-white bg-gradient-to-r from-[#016698] to-[#293985] shadow-inner relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] z-0" />
        <div className="container mx-auto px-6 relative z-10">
          <span className="text-xs uppercase tracking-widest bg-white/10 px-3.5 py-1.5 rounded-full font-black text-white/90 border border-white/20 mb-4 inline-block">
            For Accepted Authors
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-wide mb-4">
            Paper Guidelines
          </h1>
          <span className="inline-block h-1 w-20 rounded bg-[#a21d2e] mb-4"></span>
          <p className="max-w-2xl mx-auto text-sm sm:text-[0.98rem] text-gray-200 leading-relaxed font-medium">
            Please follow these instructions carefully to ensure your final camera-ready paper is accepted for publication.
          </p>
        </div>
      </section>

      {/* Guidelines Content */}
      <section className="py-16 px-4 sm:px-8 bg-gray-50">
        <div className="container mx-auto max-w-4xl bg-white border border-gray-150 rounded-2xl p-8 sm:p-12 shadow-lg">
          
          {/* Key Constraints Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-center">
              <span className="text-[0.65rem] uppercase font-black text-gray-400 block tracking-wider mb-1">Page Limit</span>
              <span className="text-base sm:text-lg font-bold text-gray-800">6 Pages (Max 8)</span>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-center">
              <span className="text-[0.65rem] uppercase font-black text-gray-400 block tracking-wider mb-1">File Size</span>
              <span className="text-base sm:text-lg font-bold text-gray-800">Below 5 MB</span>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-center">
              <span className="text-[0.65rem] uppercase font-black text-gray-400 block tracking-wider mb-1">Plagiarism Limit</span>
              <span className="text-base sm:text-lg font-bold text-gray-800">Under 15%</span>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-center">
              <span className="text-[0.65rem] uppercase font-black text-gray-400 block tracking-wider mb-1">Language</span>
              <span className="text-base sm:text-lg font-bold text-gray-800">English Only</span>
            </div>
          </div>

          {/* Submission Guidelines List */}
          <div className="mb-10 text-left">
            <h3 className="text-xl font-bold text-[#293985] mb-6 font-heading border-b border-gray-100 pb-2">
              Submission Guidelines
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm sm:text-base text-gray-600">
                <div className="w-5 h-5 rounded-full bg-[#016698]/10 text-[#016698] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="fa-solid fa-check text-[10px]"></i>
                </div>
                <span>
                  <strong>Original Submissions:</strong> We invite researchers, practitioners, and students worldwide to submit previously unpublished, original, innovative papers for presentation.
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm sm:text-base text-gray-600">
                <div className="w-5 h-5 rounded-full bg-[#016698]/10 text-[#016698] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="fa-solid fa-check text-[10px]"></i>
                </div>
                <span>
                  <strong>Peer Review Process:</strong> All submissions will undergo strict double-blind peer-review. Papers must include a title, complete author contact info, abstract, and keywords on the first page.
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm sm:text-base text-gray-600">
                <div className="w-5 h-5 rounded-full bg-[#016698]/10 text-[#016698] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="fa-solid fa-check text-[10px]"></i>
                </div>
                <span>
                  <strong>IEEE Template:</strong> The paper formatting must strictly align with the standard IEEE templates. You can download the template using the button below or find more details on the{' '}
                  <a 
                    href="https://www.ieee.org/conferences/publishing/templates.html" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#016698] underline hover:text-[#293985]"
                  >
                    IEEE Publishing Templates
                  </a>{' '}
                  portal.
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm sm:text-base text-gray-600">
                <div className="w-5 h-5 rounded-full bg-[#016698]/10 text-[#016698] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="fa-solid fa-check text-[10px]"></i>
                </div>
                <span>
                  <strong>Plagiarism Check:</strong> All submitted manuscripts will go through a plagiarism check. Papers with a similarity score of <strong>15% or above</strong> are liable to be rejected immediately without further review.
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm sm:text-base text-gray-600">
                <div className="w-5 h-5 rounded-full bg-[#016698]/10 text-[#016698] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="fa-solid fa-check text-[10px]"></i>
                </div>
                <span>
                  <strong>CMT Submission:</strong> Paper submission must be done online via the CMT link provided on our submission page. Email submissions are not accepted.
                </span>
              </li>
            </ul>
          </div>

          {/* Rejection Criteria */}
          <div className="mb-10 text-left bg-red-50/30 border border-red-100 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-[#a21d2e] mb-4 font-heading flex items-center gap-2">
              <i className="fa-solid fa-circle-exclamation"></i> Common Reasons for Rejection
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              The organizing committee reserves the right to reject submitted papers for publication in cases of:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-[#a21d2e] font-bold">1.</span> Poor English language quality
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-[#a21d2e] font-bold">2.</span> Insufficient technical or scientific content
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-[#a21d2e] font-bold">3.</span> Failure to address reviewer feedback and remarks
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-[#a21d2e] font-bold">4.</span> Plagiarism / High similarity index (&ge; 15%)
              </div>
              <div className="flex items-center gap-2 text-gray-700 sm:col-span-2">
                <span className="text-[#a21d2e] font-bold">5.</span> Significant deviations from standard IEEE template formatting
              </div>
            </div>
          </div>

          {/* Download Action Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-gray-150 pt-8 mt-6">
            <div className="text-center sm:text-left">
              <h4 className="font-bold text-gray-800 text-sm sm:text-base mb-1">Standard Paper Template</h4>
              <p className="text-gray-500 text-xs sm:text-sm">Download standard double-column IEEE format for formatting reference.</p>
            </div>
            <a href={assets.paperTemplate} download="IEEE-Paper-Template.docx" className="click-scale flex-shrink-0">
              <button className="px-6 py-3 bg-[#a21d2e] text-white text-sm font-bold uppercase rounded-xl hover:bg-[#861726] shadow flex items-center gap-2 font-heading tracking-wider">
                <i className="fa-solid fa-file-arrow-down text-base"></i> Download IEEE Format
              </button>
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default AcceptedPapers;