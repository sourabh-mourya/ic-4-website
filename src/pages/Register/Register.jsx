import React from 'react'
import Nav from '../../components/Navbar/Nav'
import Footer from '../../components/Footer/Footer'
import './register.css';
import ImportantDates from '../../components/common/ImportantDates'
import { assets } from '../../constants/assets'
import { registrationFees } from '../../data/data'

function Register() {
    return (
        <>
            <Nav />
            {/* Important Dates Header Banner */}
            <section className="py-12 bg-gradient-to-r from-[#016698] to-[#293985] shadow-inner" id="impDates">
                <ImportantDates />
            </section>

            {/* Registration Charges */}
            <section className="py-16 px-4 md:px-8">
                <div className="container mx-auto max-w-5xl bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
                    <div className="text-center mb-10">
                        <span className="text-xs uppercase tracking-widest text-[#a21d2e] font-black mb-2 block">Pricing Table</span>
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#293985] font-heading">
                            Registration Charges
                        </h1>
                        <span className="inline-block h-1 w-20 rounded bg-[#a21d2e] mt-4 mx-auto"></span>
                    </div>

                    <div className="w-full">
                        {/* Table Responsive Wrapper */}
                        <div className="overflow-x-auto w-full rounded-2xl shadow-md border border-gray-100 mb-8">
                            <table className="registerTable">
                                <thead>
                                    <tr>
                                        <th className="w-[40%] font-heading">Particulars</th>
                                        <th className="w-[30%] text-center font-heading">Charges for Indians</th>
                                        <th className="w-[30%] text-center font-heading">Charges for International</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {registrationFees.map((fee, index) => (
                                        <tr key={index}>
                                            <td className="font-bold text-gray-800 text-sm sm:text-base">{fee.category}</td>
                                            <td className="text-center text-[#293985] font-black text-sm sm:text-base">{fee.indian}</td>
                                            <td className="text-center text-[#a21d2e] font-black text-sm sm:text-base">{fee.international}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* CTA button */}
                        <div className="flex justify-center mt-6">
                            <a href="https://portal.medicaps.ac.in/accsoft2/MiscellaneousPayment.aspx" target="_blank" rel="noopener noreferrer" className="click-scale">
                                <button className="conf-btn-primary py-3 px-10 text-sm uppercase tracking-wider font-semibold">
                                    Register & Pay Here
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Payment Details Container */}
            <section className="py-16 px-4 md:px-8 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto max-w-5xl bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
                    <div className="text-center mb-10">
                        <span className="text-xs uppercase tracking-widest text-[#a21d2e] font-black mb-2 block">Account Info</span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#293985] font-heading">
                            Account & Payment details
                        </h2>
                        <span className="inline-block h-1 w-20 rounded bg-[#a21d2e] mt-4 mx-auto"></span>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-10">
                        {/* Details card */}
                        <div className="w-full lg:w-3/5 bg-gradient-to-br from-[#016698]/5 to-[#293985]/5 border border-gray-100 rounded-2xl p-6 sm:p-8 flex flex-col justify-center">
                            <h3 className="text-xl font-bold text-[#293985] mb-4 font-heading">Online Gateway Payment</h3>
                            <p className="text-gray-600 text-sm sm:text-[0.95rem] mb-6 leading-relaxed">
                                You can perform instant registration payments securely via the official university portal. Click the gateway portal link to open the miscellaneous payment system.
                            </p>
                            
                            <div className="flex items-center gap-4 bg-white border border-gray-200/60 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="w-12 h-12 rounded-full bg-[#016698]/10 text-[#016698] flex items-center justify-center">
                                    <i className="fa-solid fa-credit-card text-xl"></i>
                                </div>
                                <div>
                                    <span className="text-[0.68rem] uppercase font-black text-gray-400 block tracking-wider">Gateway Target</span>
                                    <a href="https://portal.medicaps.ac.in/accsoft2/MiscellaneousPayment.aspx" className="text-[#016698] font-bold text-sm underline hover:text-[#293985]" target="_blank" rel="noopener noreferrer">
                                        Medi-Caps Miscellaneous Portal
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* QR Code card */}
                        <div className="w-full lg:w-2/5 flex flex-col items-center justify-center bg-gray-50 border border-gray-150 rounded-2xl p-6">
                            <div className="bg-white p-3 rounded-2xl shadow-md border border-gray-100 mb-4 max-w-[220px]">
                                <img className="w-full h-auto object-contain rounded-xl" src={assets.paymentQR} alt="Medi-Caps University UPI QR Code" />
                            </div>
                            <span className="text-xs font-bold text-gray-500 text-center tracking-wide block max-w-xs leading-relaxed">
                                Scan this UPI QR code using any UPI payment app to transfer registration fees directly.
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Register;