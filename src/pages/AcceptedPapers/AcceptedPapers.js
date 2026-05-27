import React from 'react'
import Footer from '../../components/Footer/Footer'
import Nav from '../../components/Navbar/Nav'
import downloadIEEEFormat from "../../img/conferencepapertemplate.docx"
import './AcceptedPapers.css'
const AcceptedPapers = () => {
    return (
        <>
            <Nav />
            {/* <StartHero /> */}
            <section className="">
                <div className="container px-5 py-8 mx-auto bg-[#E3F0FB]">
                    <div className="">

                        <div className="flex items-center mb-3 mr-8 justify-center gradientColor" >

                            <h1 className='sm:text-4xl text-xl font-black text-white sm:ml-12 bodyFont2'>ACCEPTED PAPERS
                            </h1>
                            <i className="fa-solid fa-newspaper sm:fa-4x fa-2x ml-12" style={{ color: "#ffffff" }}></i>
                        </div>
                        <p className="text-2xl ">

                       <br></br>

                                <b className='gradientHeading justify-center flex items-center text-3xl'>Paper Submission Guidelines</b>
                                
                                <br></br>
                                <ul>
                                <li>• IC-EETA’25 invites researchers, practitioners, and students worldwide to submit previously unpublished original innovative papers for consideration to be presented at the conference.</li>
                                <li>• All submissions will be peer-reviewed. Papers must include title, complete contact information of all the authors, abstract and key words on the first page.</li>
                                <li>• Template of paper submission to be strictly followed as per IEEE : https://www.ieee.org/conferences/publishing/templates.html</li>
                                <li>• The working language of the conference is English, which will be used for all printed material, presentations and discussion.</li>
                                <li>• The maximum number of pages including figures and references are allowed in PDF format is six (6).</li>
                                <li>• Total file size of the paper must not exceed 5 MB.</li>
                                <li>• Paper submission should be through given CMT link.</li>
                                <li>• Please note that all manuscripts submitted to IC-EETA’25 will go through a plagiarism check. Papers with similarity score of 15% or above are liable to be rejected without further review.</li>
                                <li>• The organizing committee of IC-EETA’25 reserves the right to reject papers for the following reasons:</li>
                                <ol>

                                <li>1. Poor language</li>
                                <li>2. Poor technical content</li>
                                <li>3. Not addressing reviewer’s remarks</li>
                                <li>4. High similarity index</li>
                                <li>5. Deviations from IEEE conference template</li>
                                </ol>
                                </ul> 
                                We hope IC-EETA’25 will be one of the remarkable and unforgettable event for you.
                                <br></br>
                                <br></br>

                        </p>
                        <div className="text-center">
                            <a href={downloadIEEEFormat} download="downloadIEEEFormat" target='_blank'><button type="button" className="inline-block px-4 py-2 bg-[#a21d2e] font-medium border-2 border-white text-white text-sm leading-tight uppercase rounded-lg hover:bg-white hover:text-[#a21d2e] hover:border-2 hover:border-[#a21d2e] hover:shadow-lg transition duration-150 ease-in-out "><i class="fa-solid fa-circle-down mr-2"></i>Download IEEE Format</button>
                            </a>
                        </div>
                        <div className="text-center">
                            <span className="inline-block h-1 w-24 rounded bg-[#a21d2e] mt-8 mb-6">
                            </span>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default AcceptedPapers