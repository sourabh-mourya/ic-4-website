import React from 'react'
import Footer from '../../components/Footer/Footer'
import Nav from '../../components/Navbar/Nav'
import StartHero from '../../components/StartHero/StartHero'
import downloadTemplate from '../../img/conference-template-a4.docx'
import IEEEcopyrightform from '../../img/IEEEcopyrightform.pdf'

import './PaperSubmission.css'
const PaperSubmission = () => {
    return (
        <>
            <Nav />
            {/* <StartHero /> */}
            <section className="text-gray-600 body-font mt-4">
                <div className="container px-5 py-8 mx-auto bg-[#E3F0FB]">
                    <div className="w-full mx-auto text-center">
                        <h1 className='sm:text-4xl text-xl mb-4 font-black text-black bodyFont2'>PAPER SUBMISSION
                        </h1>
                        <p className="leading-relaxed  mt-12 sm:text-xl font-semibold text-black text-sm text-center">Authors are invited to submit papers through the conference<span className='text-[#016698]'> Submission System </span> by <span className='text-[#016698] font-extrabold'><del style={{textDecoration: "line-through", color: "red"}}><span className="text-[#016698]"></span></del> <del style={{textDecoration: "line-through", color: "red"}}><span className="text-[#016698]"></span></del><span className='text-[#ff0000]'>January 15, 2025</span></span>. Submissions must be original and should not have been published previously or be under consideration for publication while being evaluated for this conference.</p>
                        <div className="flex justify-center mt-8">
                            <a href="https://cmt3.research.microsoft.com/IC42023" target="_blank">
                            <button className="inline-flex uppercase text-white py-2 px-6  border-2 focus:outline-none rounded-lg text-md  font-medium bg-[#016698] hover:bg-white hover:text-[#016698] hover:border-2 hover:border-[#016698] hover:shadow-lg transition duration-150 ease-in-out " >Submit your Paper Here</button>
                            </a>
                        </div>
                        
                        <span className="inline-block h-1 w-24 rounded bg-[#016698] mt-8"></span>

                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto bg-[#E3F0FB]">
                    <div className="w-full mx-auto text-center">
                        <h1 className='sm:text-4xl text-xl mb-4 font-black text-black bodyFont2'>GUIDELINES
                        </h1>
                        <h2>Guidelines updated soon on website</h2>
                        {/* <p className="leading-relaxed  mt-12 sm:text-xl font-semibold text-black text-sm text-justify">Manuscripts for IC4-2024 will ONLY be accepted in electronic format through <a href="https://cmt3.research.microsoft.com/IC42023" target='_blank'><span className='text-[#016698] underline hover:text-[#ff0000]'>CMT online submission system.</span></a> Do not send hard-copy of your paper. Please submit the paper in IEEE format only. If you are unable to submit your contribution through CMT. If you have any query you may contact to <span className='text-[#016698]'>ic4@medicaps.ac.in</span>
                            <br />
                            <br />
                            <br />
                            Submit your manuscript in Microsoft Word Format.
                            <ul className='list-none ml-8 mt-4 liColor'>
                                <li >1. Authors should only submit originally written, unpublished work.
                                </li>
                                <li>2. Submissions should strictly follow the recommended IEEE conference template</li>
                                <li>3. All references must follow the IEEE format of referencing</li>
                                <li>4. Please limit your paper within 6 pages, and the size of your Word file less than 10MB, files larger than 10MB will not be accepted for upload.</li>
                            </ul>
                            
                            <br />
                            
                            <a href={downloadTemplate} className='text-[#016698] underline hover:text-[#ff0000]' download="conference Brochure" target='_blank'>
                            Dowload the IEEE Paper Submission template.
                            </a>
                            <br />

                            <a href={IEEEcopyrightform} className='text-[#016698] underline hover:text-[#ff0000]' download="IEEE copyright form" target='_blank'>
                            Dowload the IEEE Paper Submission template Copyright form.
                            </a>
                            <br />
                            <br />
                            Authors wishing to submit an over-length manuscript may do so. There will be an over-length page fee of INR 1500 per page and limited to an additional 2 pages (maximum page submission is eight (8) pages). This payment will be required after conformation along with Final Submission.
                        </p> */}
                        <span className="inline-block h-1 w-24 rounded bg-[#016698] mt-8"></span>

                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default PaperSubmission