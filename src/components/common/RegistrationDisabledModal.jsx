import React from 'react';
import { useRegistration } from '../../Context/context';

const RegistrationDisabledModal = () => {
  const { isRegModalOpen, setIsRegModalOpen } = useRegistration();

  if (!isRegModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={() => setIsRegModalOpen(false)}
      />

      {/* Modal Box */}
      <div className="relative bg-white rounded-2xl max-w-md w-full shadow-2xl border border-gray-100 overflow-hidden transform transition-all duration-300 scale-100 animate-[fadeIn_0.2s_ease-out] z-10">
        
        {/* Top Header Background Pattern */}
        <div className="bg-gradient-to-r from-[#016698] to-[#293985] p-6 text-white text-center relative">
          {/* Close Icon in corner */}
          <button 
            onClick={() => setIsRegModalOpen(false)}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <i className="fa-solid fa-xmark text-xl"></i>
          </button>
          
          {/* Lock Icon */}
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 text-white border border-white/20 animate-pulse">
            <i className="fa-solid fa-lock text-2xl"></i>
          </div>
          
          <h3 className="text-xl font-extrabold font-heading tracking-wide">
            Registration Closed
          </h3>
        </div>

        {/* Modal Body */}
        <div className="p-8 text-center flex flex-col items-center">
          <h4 className="text-lg font-bold text-gray-800 mb-3">
            Registrations are currently closed
          </h4>
          
          <p className="text-gray-600 text-sm sm:text-[0.95rem] leading-relaxed mb-6">
            Thank you for your interest. Registration is temporarily unavailable and will reopen soon. Please check back later for updates.
          </p>

          {/* Action Button */}
          <button
            onClick={() => setIsRegModalOpen(false)}
            className="w-full py-3 bg-[#a21d2e] text-white text-sm font-bold uppercase rounded-xl hover:bg-[#861726] transition duration-150 shadow-md hover:shadow-lg hover:-translate-y-[1px] transform font-heading tracking-wider"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationDisabledModal;
