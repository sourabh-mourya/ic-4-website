import { useState, React } from 'react'
import LoadingBar from 'react-top-loading-bar'
import Nav from '../../components/Navbar/Nav'
import "./Topics.css"
import Zoom from 'react-reveal/Zoom';


import Footer from '../../components/Footer/Footer'
import StartHero from '../../components/StartHero/StartHero';
const Topics = () => {
    const [progress, setProgress] = useState(100);
    const mechanicalEngineering = [
        "Materials Engineering",
        "Thermal and Fluid Sciences",
        "Dynamics and Control Systems",
        "Design and Optimization",
        "Advanced Manufacturing Techniques",
        "Robotics and Mechatronics",
        "Aerospace Engineering",
        "Automotive Engineering",
        "Tribology",
        "Computational Mechanics and Modelling",
        "Sustainable Engineering",
        "Noise and Vibration Control",
        "Innovations in Space Exploration",
        "Satellite Technologies for Earth Monitoring",
        "Engineering Challenges in Space Missions",
        "Commercialization of Space Technologies"
    ]
    
    const civilEngineering = [
        "Sustainable Infrastructure Technologies",
        "Smart and Resilient Structures",
        "Geotechnical Engineering",
        "Intelligent Transportation Systems",
        "Water Resource Management Innovations",
        "Construction Automation and Robotics",
        "Urban Analytics for Smart Cities",
        "Environmentally Sustainable Materials",
        "Performance-Based Structural Design",
        "Digital Twin Technology in Civil Engineering",
        "Climate-Resilient Infrastructure",
        "Augmented Reality (AR) in Construction",
        "Remote Sensing and Geospatial Technologies",
        "Innovative Waste Management Solutions",
        "Disaster Resilience Strategies"
    ]
        const electricalEngineering = [
        "Smart Grid Technologies and Energy Management",
        "Advanced Power Electronics and Drives",
        "Renewable Energy Integration (Solar, Wind, etc.)",
        "Internet of Things (IoT) for Smart Cities",
        "Machine Learning for Signal Processing and Communications",
        "Electric Vehicle Technologies and Infrastructure",
        "Cyber-Physical Systems in Electrical Engineering",
        "Advanced Control Systems and Automation",
        "Smart Sensors and IoT Devices",
        "Wireless Communication (5G and Beyond)",
        "Energy Storage Innovations (Batteries, Supercapacitors)",
        "Photovoltaic Systems and Emerging Solar Technologies",
        "Artificial Intelligence in Power System Optimization",
        "Electromagnetic Compatibility and Interference Mitigation",
        "Robotics and Automation in Systems"
    ]
        const computerTechnologies = [
        "Artificial Intelligence and Machine Learning",
        "Cloud Computing and Virtualization",
        "Data Science and Big Data Technologies",
        "Cybersecurity and Cryptography",
        "Internet of Things (IoT) and Embedded Systems",
        "Human-Computer Interaction (HCI) and User Experience",
        "Blockchain and Distributed Ledger Technologies",
        "Computer Vision and Image Processing",
        "Quantum Computing",
        "Digital Transformation and Industry 4.0",
        "Cognitive Computing and Intelligent Systems",
        "Green Computing: Sustainable IT Solutions",
        "Hyperloop Technology: Revolutionizing Transportation",
        "Precision Agriculture"
    ]
        const theSpectrum = [
        "Sustainable Industry Practices",
        "Circular Economy Models",
        "Energy-Efficient Technologies",
        "Health and Safety Innovations",
        "Smart Manufacturing Practices",
        "Automation and Robotics in Manufacturing",
        "Digital Twins and Simulation in Industry",
        "Artificial Intelligence Integration",
        "Interoperability of IoT Devices",
        "Industry 5.0: Human-Centric Approaches",
        "Smart Wearables for Industry",
        "Global Supply Chain Dynamics",
        "Quality and Innovation Management Practices",
        "Technology Transfer and Commercialization Research",
        "Innovation Barriers",
        "Adapting to Hybrid Work Models",
        "Interdisciplinary Integration Issues",
        "Privacy and Security",
        "Environmental Impact of Technology",
        "Industry Case Studies"
    ]
    
    return (
        <>
            <Nav />

            {/* <StartHero/> */}
            <section className="text-gray-600 body-font mt-4">
                <div className="container px-5 py-8 mx-auto bg-[#E3F0FB]">
                    <div className="w-full mx-auto text-center">




                        <div className="flex items-center mb-16 mr-8 justify-center" >

                            <h1 className='sm:text-4xl text-xl font-extrabold text-black sm:ml-12 bodyFont2'>Topics of interest include, but are not limited to, the following
                            </h1>
                        </div>

                        {/* ACCORDION */}
                         {/* <div class="accordion mx-auto" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Accordion Item #1
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Accordion Item #2
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Accordion Item #3
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="text-4xl my-6 text-black font-bold bodyFont2">Track 1 : MECHANICAL ENGINEERING</div>
                        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                            {
                                mechanicalEngineering.map((element) => (
                                    <div className="p-2 sm:w-1/2 w-full" key={element}>
                                        <div className="bg-[#57B7E7] rounded flex p-4 h-full items-center borderTopic">
                                            <i className="fa-solid fa-lightbulb mr-4 fa-xl iconclrps"></i>
                                            <span className="font-bold text-black sm:text-[1.3] text-sm">{element}</span>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                        <div className="text-center">
                            <span className="inline-block h-1 w-24 rounded bg-[#016698] mt-8 mb-6"></span>
                        </div>

                        <div className="text-4xl my-6 text-black font-bold bodyFont2">Track 2 : CIVIL ENGINEERING</div>
                        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                            {
                                civilEngineering.map((element) => (
                                    <div className="p-2 sm:w-1/2 w-full" key={element}>
                                        <div className="bg-[#57B7E7] rounded flex p-4 h-full items-center borderTopic">
                                            <i className="fa-solid fa-lightbulb mr-4 fa-xl iconclrps"></i>
                                            <span className="font-bold text-black sm:text-[1.3] text-sm">{element}</span>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                        <div className="text-center">
                            <span className="inline-block h-1 w-24 rounded bg-[#016698] mt-8 mb-6"></span>
                        </div>
                        <div className="text-4xl my-6 text-black font-bold bodyFont2">Track 3 : ELECTRICAL ENGINEERING</div>
                        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                            {
                                electricalEngineering.map((element) => (
                                    <div className="p-2 sm:w-1/2 w-full" key={element}>
                                        <div className="bg-[#57B7E7] rounded flex p-4 h-full items-center borderTopic">
                                            <i className="fa-solid fa-lightbulb mr-4 fa-xl iconclrps"></i>
                                            <span className="font-bold text-black sm:text-[1.3] text-sm">{element}</span>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                        <div className="text-center">
                            <span className="inline-block h-1 w-24 rounded bg-[#016698] mt-8 mb-6"></span>
                        </div>
                        <div className="text-4xl my-6 text-black font-bold bodyFont2">Track 4 : COMPUTER TECHNOLOGIES AND ITS APPLICATIONS</div>
                        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                            {
                                computerTechnologies.map((element) => (
                                    <div className="p-2 sm:w-1/2 w-full" key={element}>
                                        <div className="bg-[#57B7E7] rounded flex p-4 h-full items-center borderTopic">
                                            <i className="fa-solid fa-lightbulb mr-4 fa-xl iconclrps"></i>
                                            <span className="font-bold text-black sm:text-[1.3] text-sm">{element}</span>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                        <div className="text-center">
                            <span className="inline-block h-1 w-24 rounded bg-[#016698] mt-8 mb-6"></span>
                        </div>
                        <div className="text-4xl my-6 text-black font-bold bodyFont2">Track 5 : THE SPECTRUM OF INDUSTRIAL PRACTICES AND CHALLENGES</div>
                        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                            {
                                theSpectrum.map((element) => (
                                    <div className="p-2 sm:w-1/2 w-full" key={element}>
                                        <div className="bg-[#57B7E7] rounded flex p-4 h-full items-center borderTopic">
                                            <i className="fa-solid fa-lightbulb mr-4 fa-xl iconclrps"></i>
                                            <span className="font-bold text-black sm:text-[1.3] text-sm">{element}</span>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                        <div className="text-center">
                            <span className="inline-block h-1 w-24 rounded bg-[#016698] mt-8 mb-6"></span>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </>
    )
}

export default Topics
