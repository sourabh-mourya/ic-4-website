import React from 'react';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Navbar/Nav';
import FAQAccordion from '../../components/common/FAQAccordion';
import { assets } from '../../constants/assets';
import { 
  paperSubmissionInfo, 
  submissionGuidelines, 
  submissionSteps, 
  conferenceTracks, 
  submissionFAQs 
} from '../../data/data';
import './PaperSubmission.css';
import { CONFIG } from '../../constants/config';
import { useRegistration } from '../../Context/context';

const PaperSubmission = () => {
  const { setIsCmtModalOpen } = useRegistration();

  const handleCmtClick = (e) => {
    if (!CONFIG.CMT_PORTAL_ENABLED) {
      e.preventDefault();
      setIsCmtModalOpen(true);
    }
  };
  return (
    <>
      <Nav />

      {/* Hero Section */}
      <section className="py-16 text-center text-white bg-gradient-to-r from-[#016698] to-[#293985] shadow-inner relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] z-0" />
        <div className="container mx-auto px-6 relative z-10">
          <span className="text-xs uppercase tracking-widest bg-white/10 px-3.5 py-1.5 rounded-full font-black text-white/90 border border-white/20 mb-4 inline-block">
            Authors & Presenters
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-wide mb-4">
            Paper Submission
          </h1>
          <span className="inline-block h-1 w-20 rounded bg-[#a21d2e] mb-4"></span>
          <p className="max-w-2xl mx-auto text-sm sm:text-[0.98rem] text-gray-200 leading-relaxed font-medium">
            Submit your original research work to be part of the 3rd International Conference on Computer, Communication and Control (IC4'27).
          </p>
        </div>
      </section>

      {/* Important Dates Section */}
      <section className="py-16 px-4 sm:px-8 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-[#a21d2e] font-black mb-2 block">Key Dates</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#293985] font-heading">
              Submission Milestones
            </h2>
            <span className="inline-block h-1 w-16 rounded bg-[#a21d2e] mt-3"></span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {paperSubmissionInfo.deadlines.map((dl, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center group">
                <div className="w-12 h-12 rounded-full bg-[#016698]/10 text-[#016698] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className={`fa-solid ${dl.icon} text-lg`}></i>
                </div>
                <span className="text-xs uppercase font-black text-gray-400 block tracking-wider mb-2">{dl.label}</span>
                <span className="text-sm sm:text-base font-bold text-gray-800">{dl.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submission Guidelines */}
      <section className="py-16 px-4 sm:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-[#a21d2e] font-black mb-2 block">Guidelines</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#293985] font-heading">
              Submission Guidelines
            </h2>
            <span className="inline-block h-1 w-16 rounded bg-[#a21d2e] mt-3"></span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {submissionGuidelines.map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300 flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#016698]/10 text-[#016698] flex items-center justify-center flex-shrink-0 mt-1">
                  <i className={`fa-solid ${item.icon.split(' ')[0]} text-sm`}></i>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-sm sm:text-base mb-2 font-heading">{item.title}</h3>
                  <p className="text-gray-500 text-xs sm:text-[0.88rem] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submission Process */}
      <section className="py-16 px-4 sm:px-8 bg-gray-50 border-t border-b border-gray-100">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-[#a21d2e] font-black mb-2 block">Workflow</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#293985] font-heading">
              Submission Process
            </h2>
            <span className="inline-block h-1 w-16 rounded bg-[#a21d2e] mt-3"></span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {submissionSteps.map((step, idx) => (
              <div key={idx} className="relative bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition duration-300">
                <div className="absolute top-4 right-4 text-3xl font-black text-[#016698]/10 font-heading">
                  {step.step}
                </div>
                <h3 className="font-extrabold text-[#293985] text-sm sm:text-base mb-3 mt-4 font-heading">{step.title}</h3>
                <p className="text-gray-500 text-xs sm:text-[0.88rem] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracks Grid */}
      <section className="py-16 px-4 sm:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-[#a21d2e] font-black mb-2 block">Tracks</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#293985] font-heading">
              Conference Tracks & Topics
            </h2>
            <span className="inline-block h-1 w-16 rounded bg-[#a21d2e] mt-3"></span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conferenceTracks.map((track) => (
              <div key={track.id} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col h-full hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#a21d2e]/10 text-[#a21d2e] flex items-center justify-center flex-shrink-0">
                    <i className={`fa-solid ${track.icon} text-sm`}></i>
                  </div>
                  <h3 className="font-extrabold text-gray-800 text-sm sm:text-base leading-snug font-heading">
                    Track {track.id}: {track.title}
                  </h3>
                </div>
                <ul className="space-y-2 mt-2 flex-grow">
                  {track.topics.slice(0, 5).map((topic, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                      <span className="text-[#a21d2e] mt-1">•</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                  {track.topics.length > 5 && (
                    <li className="text-xs font-bold text-[#016698] mt-2 italic">
                      And {track.topics.length - 5} more topics...
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Author Resources & Instructions */}
      <section className="py-16 px-4 sm:px-8 bg-gray-50 border-t border-b border-gray-100">
        <div className="container mx-auto max-w-5xl bg-white border border-gray-150 rounded-2xl p-8 sm:p-12 shadow-sm">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest text-[#a21d2e] font-black mb-2 block">Downloads</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#293985] font-heading">
              Author Resources & Instructions
            </h2>
            <span className="inline-block h-1 w-16 rounded bg-[#a21d2e] mt-3"></span>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch gap-10">
            {/* Word Template */}
            <div className="flex-1 bg-gradient-to-br from-[#016698]/5 to-[#293985]/5 border border-gray-100 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#293985] mb-3 font-heading flex items-center gap-2">
                  <i className="fa-solid fa-file-word text-[#016698]"></i> Microsoft Word Template
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Please format your paper submission strictly as per the IEEE double-column template. Ensure margins, headers, and reference styles match.
                </p>
              </div>
              <a href={assets.paperTemplate} download="conference-template-a4.docx" className="click-scale inline-block self-start">
                <button className="px-5 py-2.5 bg-[#016698] text-white text-xs font-bold uppercase rounded-lg hover:bg-[#014f75] shadow transition">
                  <i className="fa-solid fa-download mr-2"></i> Download Template
                </button>
              </a>
            </div>

            {/* Copyright Form */}
            <div className="flex-1 bg-gradient-to-br from-[#a21d2e]/5 to-[#293985]/5 border border-gray-100 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#a21d2e] mb-3 font-heading flex items-center gap-2">
                  <i className="fa-solid fa-file-shield text-[#a21d2e]"></i> IEEE Copyright Form
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  All accepted papers require a signed IEEE copyright form during camera-ready upload. Download the standard copyright template below.
                </p>
              </div>
              <a href={assets.copyrightForm} download="IEEEcopyrightform.pdf" className="click-scale inline-block self-start">
                <button className="px-5 py-2.5 bg-[#a21d2e] text-white text-xs font-bold uppercase rounded-lg hover:bg-[#861726] shadow transition">
                  <i className="fa-solid fa-download mr-2"></i> Download Copyright Form
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-[#a21d2e] font-black mb-2 block">Help</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#293985] font-heading">
              Frequently Asked Questions
            </h2>
            <span className="inline-block h-1 w-16 rounded bg-[#a21d2e] mt-3"></span>
          </div>

          <FAQAccordion faqs={submissionFAQs} />
        </div>
      </section>

      {/* Submission CTA Section */}
      <section className="py-16 px-4 sm:px-8 bg-[#293985] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.03] z-0" />
        <div className="container mx-auto max-w-3xl relative z-10 flex flex-col items-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading mb-4">
            Ready to Submit Your Paper?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mb-8 leading-relaxed">
            Click below to access the CMT online submission portal. For any assistance, reach out to us at{' '}
            <a href={`mailto:${paperSubmissionInfo.contactEmail}`} className="text-[#57b7e7] underline">
              {paperSubmissionInfo.contactEmail}
            </a>.
          </p>

          {paperSubmissionInfo.isOpen ? (
            <a 
              href={paperSubmissionInfo.portalUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="click-scale"
              onClick={handleCmtClick}
            >
              <button className="px-8 py-3.5 bg-[#a21d2e] text-white text-sm font-bold uppercase rounded-xl hover:bg-[#861726] transition shadow-lg tracking-wider font-heading">
                Access CMT Submission Portal
              </button>
            </a>
          ) : (
            <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-full px-6 py-3 text-sm font-bold text-gray-200">
              <i className="fa-solid fa-circle-info text-[#57b7e7]"></i> Paper Submission Portal Will Open Soon
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PaperSubmission;